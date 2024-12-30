const { test, expect } = require('@playwright/test');
// Data-Driven Test Data
const testData = [
  { username: 'qaadmin@nomail.com', password: 'Welcome1@', expectedResult: 'success' },
  { username: 'invalidUser', password: 'validPass1', expectedResult: 'failure' },
  { username: 'validUser1', password: 'invalidPass', expectedResult: 'failure' },
  { username: '', password: '', expectedResult: 'failure' }, // Empty credentials
];

test.describe('Login Tests with DDT', () => {
  testData.forEach(({ username, password, expectedResult }) => {
    test(`Login test with username: "${username}" and password: "${password}"`, async ({ page }) => {
      // Navigate to the login page
      await page.goto('https://practicetestautomation.com/practice-test-login/'); // Replace with your login page URL

      // Fill in the login form
      await page.fill('//input[@id="username"]', username); // Replace '#username' with the actual username field selector
      await page.fill('//input[@id="password"]', password); // Replace '#password' with the actual password field selector

      // Click the login button
      await page.click('//button[contains(text(),"Sign in")]'); // Replace '#loginButton' with the actual login button selector

      const currentURL = page.url();
      if (expectedResult === 'success') {
        // Check if the URL matches the dashboard or success page
        expect(currentURL).toBe('https://qa.expertusoneqa.com/admin/'); // Replace with your expected success URL
      } else {
        // Check if the URL remains on the login page or goes to an error page
        expect(currentURL).toBe('https://qa.expertusoneqa.com/learner/qa/'); // Replace with your expected failure URL
      }
    });
  });
});

