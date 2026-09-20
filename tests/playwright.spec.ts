
import {test, expect }from "@playwright/test";

test("has title",async ({page})=>{

await page.goto("https://playwright.dev/")

let Title3:string = await page.title();

console.log(Title3);

await expect(page).toHaveTitle(Title3);

})

test("validate url",async ({page})=>{

await page.goto("https://playwright.dev/")

let url3:string = await page.url();

console.log(url3);

await expect(page).toHaveURL(url3);

})
