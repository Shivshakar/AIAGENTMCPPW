const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.errorMessage = '#flash';
    this.pageHeading = 'h2';
  }

  async navigateToLoginPage() {
    await this.goto('/login');
  }

  async enterUsername(username) {
    await this.fill(this.usernameInput, username);
  }

  async enterPassword(password) {
    await this.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.click(this.loginButton);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async getPageTitle() {
    return await this.getText(this.pageHeading);
  }
}

console.log('LoginPage module loaded');

module.exports = LoginPage;
