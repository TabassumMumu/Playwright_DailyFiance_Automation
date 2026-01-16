import { test, expect, Page } from "@playwright/test";
import { UserPage } from "../pages/user";
import { readLastJsonData, saveTableToTextFile } from "../utils/utils";
import { addCostPage } from "../pages/cost";
import { CostModel } from "../models/cost.model";
import { faker, Faker } from "@faker-js/faker";

let page:Page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage();
})

test.afterAll(async()=>{
    await page.close();
})

test.describe.serial(async ()=>{

    test("Verify user can login with valid credentials", async()=>{
        await page.goto("https://dailyfinance.roadtocareer.net/login");
        const userPage = new UserPage(page);
        const userData = readLastJsonData("./resources/user.json");
        await userPage.userLogin(userData.email, userData.password);
        await expect(page).toHaveURL(/\/user$/);

    })

    test("verify user can add product one successfully", async()=>{
        const costPage = new addCostPage(page);
        const d = faker.date.recent();

        const costModel:CostModel = {
            itemName: faker.commerce.productName(),
            amount: faker.number.int({ min: 10, max: 500 }).toString(),
            purchaseDate: "2026-01-12",
            month: faker.date.month(),
            remarks: faker.lorem.words(3),
        };

        await costPage.addcost(costModel);   
    });

    test("verify user can add product two successfully", async()=>{
        const costPage = new addCostPage(page);
        const d = faker.date.recent();

        const costModel:CostModel = {
            itemName: faker.commerce.productName(),
            amount: faker.number.int({ min: 10, max: 500 }).toString(),
            purchaseDate: "2026-01-12",
            month: faker.date.month(),
            remarks: faker.lorem.words(3),
        };

        await costPage.addcost(costModel);
        await expect(page.locator('.summary')).toContainText('Total Rows: 2');

        await saveTableToTextFile(page, "resources/table-data.txt");
    });

    test("Verify user can logout successfully", async()=>{
        const userPage = new UserPage(page);
        await userPage.userLogout();
        await expect(page).toHaveURL(/\/login$/);
    });

});