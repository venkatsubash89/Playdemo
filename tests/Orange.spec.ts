import {test, expect }from "@playwright/test";

test("validate title",async ({page})=>{

await page.goto("https://www.orange.com/en/our-group/our-purpose")

let Title1:string = await page.title();

console.log(Title1);

await expect(page).toHaveTitle(Title1);

})

test("validate url",async ({page})=>{

await page.goto("https://www.orange.com/en/")

let url1:string = await page.url();

console.log(url1);

await expect(page).toHaveURL(url1);

})