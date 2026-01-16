import {Page} from '@playwright/test';

export class UserPage{

    constructor (private page:Page){}

    async userLogin( email:string, password:string){
        await this.page.getByRole("textbox", {name:'Email'}).fill(email);
        await this.page.getByRole("textbox", {name:'Password'}).fill(password);
        await this.page.getByRole("button", {name: "LOGIN"}).click();
    }

    async userLogout(){
        await this.page.getByTestId("AccountCircleIcon").click();
        await this.page.getByRole("menuitem", {name: "Logout"}).click();
    }
}