import { expect, request } from "@playwright/test";
import { When, Then } from "@cucumber/cucumber";

When(
  "I send POST api to login with credentials {string} {string}",
  async function (username, password) {
    const context = request.newContext({
      baseURL: "https://automationintesting.online/",
    });
    const response = (await context).post("auth/login", {
      data: {
        username: username,
        password: password,
      },
    });
    this.response = response;
  }
);
Then(" I login with {int} status", async function (expectedStatus) {
  expect(this.response.status()).toBe(expectedStatus);
});
