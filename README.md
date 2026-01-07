# Playwright Test Framework

A comprehensive end-to-end testing framework built with Playwright and JavaScript.

## Features

- **Cross-browser testing**: Chromium, Firefox, WebKit
- **Device testing**: Mobile Chrome, iPhone 12
- **Parallel execution**: Run tests concurrently for faster feedback
- **JavaScript support**: No build step required
- **Multiple reporters**: HTML, List, and JSON formats
- **Screenshots & Videos**: Automatic capture on test failures
- **Trace recording**: Detailed execution traces for debugging
- **Web server integration**: Automatic app startup before tests

## Installation

```bash
npm install
```

This will install Playwright and all necessary dependencies. The browsers will be installed automatically on first run.

## Project Structure

```
.
├── tests/                    # Test files
│   ├── example.spec.js       # Example test suite
│   ├── fixtures/             # Custom fixtures and utilities
│   └── pages/                # Page Object Models
├── src/                      # Utility functions (optional)
├── playwright.config.js      # Playwright configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (recommended for development)
```bash
npm run test:ui
```

### Run tests in headed mode (browser visible)
```bash
npm run test:headed
```

### Debug tests
```bash
npm run test:debug
```

### Run tests on specific browser
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Run tests on all browsers
```bash
npm run test:all
```

### Generate tests using Codegen
```bash
npm run codegen
```

### View HTML test report
```bash
npm run report
```

## Configuration

Edit `playwright.config.ts` to customize:
- Base URL for your application
- Timeout settings
- Reporters (HTML, JSON, etc.)
- Browsers and devices
- Screenshots and video recording
- Trace options

## Writing Tests

Example test in `tests/example.spec.js`:

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Example Test Suite', () => {
  test('should navigate to homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Home/);
  });

  test('should interact with elements', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('button');
    await button.click();
    await expect(button).toHaveAttribute('data-clicked', 'true');
  });
});
```

## Page Object Models

For better maintainability, use Page Object Models:

```javascript
// tests/pages/HomePage.js
const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async navigate() {
    await this.goto('/');
  }

  async clickButton(selector) {
    await this.click(selector);
  }
}

module.exports = HomePage;
```

## Custom Fixtures

Create reusable fixtures in `tests/fixtures/`:

```javascript
const { test, expect } = require('@playwright/test');

const customTest = test.extend({
  authenticatedPage: async ({ page }, use) => {
    // Setup
    await page.goto('/login');
    await page.fill('input[type=email]', 'user@example.com');
    // ... authentication code
    
    // Use
    await use(page);
    
    // Teardown
    await page.close();
  },
});

module.exports = { test: customTest, expect };
```

## Debugging

### Using Playwright Inspector
```bash
npm run test:debug
```

### Using VS Code Debugger
Add a launch configuration in `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Playwright Tests",
      "program": "${workspaceFolder}/node_modules/@playwright/test/cli.js",
      "args": ["test"],
      "console": "integratedTerminal"
    }
  ]
}
```

## CI/CD Integration

The project is configured for CI environments (GitHub Actions, etc.):
- Retries: 2 times on CI, 0 times locally
- Workers: 1 on CI, multiple locally
- Screenshots/videos: Captured on failures
- Traces: Captured on first retry

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## License

MIT
