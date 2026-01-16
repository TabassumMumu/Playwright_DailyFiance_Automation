import { test, expect, Page } from "@playwright/test";
import { ResetPasswordPage } from "../pages/resetPassword";
import { readLastJsonData, saveJsonData } from "../utils/utils";
import { readLatestEmail } from "../services/gmail.service";

let page:Page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage();
})  

test.afterAll(async()=>{
    await page.close();
})

test.describe.serial(async ()=>{ 
    test("Verify user can reset password with valid email", async()=>{
        await page.goto("https://dailyfinance.roadtocareer.net/login");
        const resetPasswordPage = new ResetPasswordPage(page);
        const userData = readLastJsonData("./resources/user.json");
        await resetPasswordPage.resetPassword(userData.email);
        await expect(page.getByText("Password reset link sent to your email")).toBeVisible();

        await page.waitForTimeout(9000);
        
        let latestEmailSnippet = await readLatestEmail();
        expect(latestEmailSnippet).toContain("Click on the following link to reset your password");
        console.log("Latest Email Snippet: ", latestEmailSnippet);
    });

    test("Verify user can set new password successfully", async()=>{
        let latestEmailSnippet = await readLatestEmail();
        const resetLink = latestEmailSnippet.match(/https?:\/\/[^\s]+/);
        expect(resetLink).not.toBeNull();
        await page.goto(resetLink[0]);

        const resetPasswordPage = new ResetPasswordPage(page);
        await resetPasswordPage.passwordPage("pass1234", "pass1234");
        await expect(page.getByText("Password reset successfully")).toBeVisible();

        const userData = readLastJsonData("./resources/user.json");
        userData.password = "pass1234";
        saveJsonData(userData,'resources/user.json');
        
    });
})