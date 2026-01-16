import { Page } from "@playwright/test";
import { CostModel } from "../models/cost.model";

export class addCostPage{

    constructor (private page:Page){}

    async addcost( costModel: CostModel){
        await this.page.getByRole("button", {name: 'Add Cost'}).click();
        await this.page.getByRole("textbox", {name: 'Item Name'}).fill(costModel.itemName);
        await this.page.getByRole("button", {name: '+'}).click();
        await this.page.getByRole("spinbutton", {name: 'Amount'}).fill(costModel.amount);
        await this.page.getByLabel('Purchase Date').fill('');
        await this.page.getByLabel('Purchase Date').fill(costModel.purchaseDate);
        await this.page.getByRole("combobox", {name: 'Month'}).selectOption(costModel.month);
        await this.page.getByRole("textbox", {name: 'Remarks'}).fill(costModel.remarks || '');
        await this.page.getByRole("button", {name: 'Submit'}).click();
    }

}