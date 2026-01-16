import { test, expect, Page } from "@playwright/test";
import { ProfileEditPage } from "../pages/profileEdit";
import { readLastJsonData } from "../utils/utils";
import { UserPage } from "../pages/user";

let page:Page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage();
})

test.afterAll(async()=>{
    await page.close();
})

test.describe.serial(async ()=>{ 
    
    test("Verify user can login with updated password", async()=>{
        await page.goto("https://dailyfinance.roadtocareer.net/login");
        const userPage = new UserPage(page);
        const userData = readLastJsonData("./resources/user.json");
        await userPage.userLogin(userData.email, userData.password);
    });

    test("Verify user can update profile picture successfully", async()=>{
        const profileEditPage = new ProfileEditPage(page);
        await profileEditPage.profileEdit();
    
    });
})