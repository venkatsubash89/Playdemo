import {test, expect }from "@playwright/test";

test("validate title",async ({page})=>{

await page.goto("https://www.fita.in/")

let Title2:string = await page.title();

console.log(Title2);

await expect(page).toHaveTitle(Title2);

})

test("validate url",async ({page})=>{

await page.goto("https://www.fita.in/corporate-training/")

let url2:string = await page.url();

console.log(url2);

await expect(page).toHaveURL(url2);

})