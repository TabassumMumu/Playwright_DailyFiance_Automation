import { Page,expect } from "@playwright/test";
import path from "path/win32";

export class ProfileEditPage {

    constructor (private page:Page){}

    async profileEdit(){
        const filePath = path.join(process.cwd(), 'resources', 'images.jpg')

        await this.page.getByTestId("AccountCircleIcon").click();
        await this.page.getByRole("menuitem", { name: 'Profile' }).click();
        await this.page.getByRole("button", { name: 'EDIT' }).click();

        const fileInput = await this.page.getByRole("button", { name: 'Choose File' });
        await fileInput.setInputFiles(filePath);
        await expect(fileInput).toHaveValue(/images\.jpg$/);

        await this.page.getByRole("button", { name: 'UPLOAD IMAGE'}).click();
        await this.page.getByRole("button", { name: 'UPDATE' }).click();
    }
}       