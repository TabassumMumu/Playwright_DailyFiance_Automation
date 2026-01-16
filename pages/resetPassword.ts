import { Page } from "@playwright/test";

export class ResetPasswordPage {

    constructor (private page:Page){}  
    
    async resetPassword(email: string){
        await this.page.getByRole("link", { name: 'Reset it here' }).click();
        await this.page.getByRole("textbox", { name: 'Email' }).fill(email);
        await this.page.getByRole("button", { name: 'SEND RESET LINK' }).click();
    }

    async passwordPage(newPassword:string, confirmPassword:string){
        await this.page.getByRole("textbox", { name: 'New Password' }).fill(newPassword);
        await this.page.getByRole("textbox", { name: 'Confirm Password' }).fill(confirmPassword);
        await this.page.getByRole("button", { name: 'RESET PASSWORD' }).click();
    }
}