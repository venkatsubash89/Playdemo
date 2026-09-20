import {test, expect, Locator} from "@playwright/test";

test("Automation Testing Practice", async ({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com");

  const nameField: Locator = page.getByRole("textbox", {name: "Name"});
  await nameField.fill("Venkatesh");

  const emailField: Locator = page.getByRole("textbox", {name: "Email"});
  await emailField.type("venkatsubash90@gmail.com");

  const phoneField: Locator = page.getByRole("textbox", {name: "Phone"});
  await phoneField.type("9876543210");

  const addressField: Locator = page.getByRole("textbox", {name: "Address"});
  await addressField.fill("Chennai");

  const genderField: Locator = page.getByRole("radio", {name: "Gender"});
  await genderField.check();

  const daysField: Locator = page.getByRole("checkbox", {name: "Days"});
  await daysField.selectOption({index : 6});

  const colorsField: Locator = page.getByRole("checkbox", {name: "Colors"});
  await colorsField.selectOption(["Red", "Blue", "Green"]);

  });