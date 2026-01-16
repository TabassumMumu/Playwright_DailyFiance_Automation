import fs, { writeFileSync } from 'fs';
import { Page } from "@playwright/test";

export function generateRandomNumber(min:number, max:number) {
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
}

export function saveJsonData(jsonObject:object, filePath:string) {
    let dataArray:object[] = [];
    if (fs.existsSync(filePath)) {
        const filecontent = fs.readFileSync(filePath, 'utf-8');
        dataArray = JSON.parse(filecontent);
    }
    dataArray.push(jsonObject);
    fs.writeFileSync(filePath, JSON.stringify(dataArray, null, 2), 'utf-8');
}

export function readLastJsonData(filePath:string) {
    if (fs.existsSync(filePath)) {
        const filecontent = fs.readFileSync(filePath, 'utf-8');
        const dataArray = JSON.parse(filecontent);
        return dataArray[dataArray.length - 1];
    }

}

export async function saveTableToTextFile(page: Page,fileName: string) {
    const rows = await page.locator("table tbody tr").all();
    let tableData = "";
    
    for (const row of rows) {
    const cells = await row.locator("td").allTextContents();
    tableData += cells.join(" | ") + "\n";
    }

  writeFileSync(fileName, tableData);
}