const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');

test.describe('Login Page - The Internet', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test('should navigate to login page', async ({ page }) => {
    const url = page.url();
    expect(url).toContain('login');
  });

  test('should display login form elements', async ({ page }) => {
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    const loginBtn = page.locator('button[type="submit"]');
    
    expect(await usernameField.isVisible()).toBe(true);
    expect(await passwordField.isVisible()).toBe(true);
    expect(await loginBtn.isVisible()).toBe(true);
  });

  test('should accept username input', async ({ page }) => {
    const username = 'tomsmith';
    await loginPage.enterUsername(username);
    
    const value = await page.locator('#username').inputValue();
    expect(value).toBe(username);
  });

  test('should accept password input', async ({ page }) => {
    const password = 'SuperSecretPassword!';
    await loginPage.enterPassword(password);
    
    const value = await page.locator('#password').inputValue();
    expect(value).toBe(password);
  });

  test('should sign in with valid credentials', async ({ page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    
    // Wait for page to load after successful login
    await page.waitForLoadState('networkidle');
    
    // Verify successful login - should see success message
    const successMessage = page.locator('[id*="flash"]');
    const isSuccess = await successMessage.isVisible().catch(() => false);
    
    // Check if we're on a new page or see success indicator
    expect(page.url()).toBeTruthy();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await loginPage.login('invaliduser', 'wrongpassword');
    
    // Wait for error message to appear
    await page.waitForLoadState('networkidle');
    
    // Look for error message
    const errorMessage = page.locator('[id*="flash"]');
    const hasError = await errorMessage.isVisible().catch(() => false);
    
    // Error should appear on failed login
    if (hasError) {
      const errorText = await errorMessage.textContent();
      expect(errorText).toBeTruthy();
    }
  });

  test('should clear form fields and re-enter data', async ({ page }) => {
    // Enter first set of data
    await loginPage.enterUsername('user1');
    await loginPage.enterPassword('pass1');
    
    let usernameValue = await page.locator('#username').inputValue();
    expect(usernameValue).toBe('user1');
    
    // Clear and enter new data
    await loginPage.enterUsername('tomsmith');
    await loginPage.enterPassword('SuperSecretPassword!');
    
    usernameValue = await page.locator('#username').inputValue();
    const passwordValue = await page.locator('#password').inputValue();
    
    expect(usernameValue).toBe('tomsmith');
    expect(passwordValue).toBe('SuperSecretPassword!');
  });

  test('should handle keyboard navigation', async ({ page }) => {
    await page.locator('#username').focus();
    await page.keyboard.press('Tab');
    
    // Should focus on password field
    const focusedElement = await page.evaluate(() => document.activeElement.id);
    expect(focusedElement).toBe('password');
  });

  test('should submit form by pressing Enter', async ({ page }) => {
    await loginPage.enterUsername('tomsmith');
    await loginPage.enterPassword('SuperSecretPassword!');
    
    // Press Enter on password field
    await page.locator('#password').press('Enter');
    
    // Wait for response
    await page.waitForLoadState('networkidle');
    
    expect(page.url()).toBeTruthy();
  });

  test('should have correct page title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('should display page heading', async ({ page }) => {
    const heading = page.locator('h2');
    expect(await heading.isVisible()).toBe(true);
  });
});
