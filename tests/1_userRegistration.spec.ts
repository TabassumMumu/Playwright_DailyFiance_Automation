import { test, expect, Page } from "@playwright/test";
import { RegistrationPage } from "../pages/registration.ts";
import { UserModel } from "../models/user.model.ts";
import { faker } from '@faker-js/faker';
import { generateRandomNumber,saveJsonData } from "../utils/utils.ts";
import { readLatestEmail } from "../services/gmail.service.ts";

test("Verify user can registration with valid data successfully", async({page})=>{

    await page.goto("https://dailyfinance.roadtocareer.net/login");
    const registrationPage = new RegistrationPage(page);

    const userModel:UserModel = {
        firstName:faker.person.firstName() ,
        lastName:faker.person.lastName(), 
        email:`mumutabassum74+${generateRandomNumber(100,999)}@gmail.com`,
        password:"123456",
        phoneNumber:`012${generateRandomNumber(10000000,99999999)}`,
        address:faker.location.streetAddress()

    }
    await registrationPage.doUserRegistration(userModel);
    saveJsonData(userModel,'resources/user.json');

    await page.waitForTimeout(9000);

    let latestEmailSnippet = await readLatestEmail();
    expect(latestEmailSnippet).toContain("Welcome to our platform!");
    console.log("Latest Email Snippet: ", latestEmailSnippet);
})