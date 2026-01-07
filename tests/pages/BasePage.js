/**
 * Base Page class containing common methods for all pages
 */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   */
  async goto(path = '/') {
    await this.page.goto(path);
  }

  /**
   * Get the page title
   */
  async getTitle() {
    return await this.page.title();
  }

  /**
   * Get the page URL
   */
  getUrl() {
    return this.page.url();
  }

  /**
   * Wait for a selector to be visible
   */
  async waitForSelector(selector, timeout) {
    await this.page.waitForSelector(selector, { timeout });
  }

  /**
   * Click an element
   */
  async click(selector) {
    await this.page.click(selector);
  }

  /**
   * Fill an input field
   */
  async fill(selector, value) {
    await this.page.fill(selector, value);
  }

  /**
   * Get text content
   */
  async getText(selector) {
    return await this.page.textContent(selector);
  }

  /**
   * Take a screenshot
   */
  async screenshot(name) {
    await this.page.screenshot({ path: `./screenshots/${name}.png` });
  }
}

module.exports = BasePage;
