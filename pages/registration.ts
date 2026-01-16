import {Page} from '@playwright/test';
import { UserModel } from '../models/user.model';

export class RegistrationPage{

    constructor (private page:Page){}

    async doUserRegistration(userModel:UserModel){

        await this.page.getByRole("link", {name: 'Register'}).click();
        await this.page.getByRole("textbox",{name : 'First Name'}).fill(userModel.firstName);
        await this.page.getByRole("textbox", {name:'Last Name'}).fill(userModel.lastName);
        await this.page.getByRole("textbox", {name:'Email'}).fill(userModel.email);
        await this.page.getByRole("textbox", {name:'Password'}).fill(userModel.password);
        await this.page.getByRole("textbox", {name:'Phone Number'}).fill(userModel.phoneNumber);
        await this.page.getByRole("textbox", {name:'Address'}).fill(userModel.address);
        await this.page.getByRole("radio", {exact:true}).first().click();
        await this.page.getByRole("checkbox", {exact:true}).click();
        await this.page.getByRole("button", {name: "REGISTER"}).click();
    }
}