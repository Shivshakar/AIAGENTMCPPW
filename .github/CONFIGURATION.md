# Playwright Project Configuration

This file documents the key configuration and setup for the Playwright testing framework.

## Project Overview

- **Framework**: Playwright
- **Language**: JavaScript
- **Test Directory**: `./tests/`
- **Configuration**: `playwright.config.js`

## Key Features Configured

### Browsers
- Chromium
- Firefox
- WebKit

### Devices
- Desktop Chrome
- Desktop Firefox
- Desktop Safari
- Pixel 5 (Mobile Chrome)
- iPhone 12 (Mobile Safari)

### Reporters
- HTML Report
- List Report
- JSON Report

### Screenshots & Videos
- Screenshots: Captured only on failure
- Videos: Retained only on failure
- Traces: Recorded on first retry

### Test Execution
- Parallel execution enabled
- Retries: 2 on CI, 0 locally
- Workers: 1 on CI, multiple locally

## Scripts Available

```bash
npm test                 # Run all tests
npm run test:ui         # Run tests in UI mode
npm run test:debug      # Debug tests with inspector
npm run test:headed     # Run tests with visible browser
npm run test:chromium   # Run on Chromium only
npm run test:firefox    # Run on Firefox only
npm run test:webkit     # Run on WebKit only
npm run test:all        # Run on all browsers
npm run codegen         # Generate tests via Codegen
npm run report          # Show HTML report
```

## Project Structure

```
.
├── tests/
│   ├── pages/              # Page Object Models
│   │   ├── BasePage.js     # Base class for all pages
│   │   └── HomePage.js     # Home page object
│   ├── fixtures/           # Custom fixtures
│   │   └── index.js        # Custom fixtures like authenticatedPage
│   └── example.spec.js     # Example test suite
├── .vscode/
│   ├── launch.json         # Debug configurations
│   └── tasks.json          # VS Code tasks
├── playwright.config.js    # Playwright configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
├── .gitignore            # Git ignore rules
└── README.md             # Documentation
```

## Next Steps

1. **Install Dependencies**: `npm install`
2. **Run Tests**: `npm test`
3. **View Results**: Check `test-results/` directory or `npm run report`

## Customization

- Modify `playwright.config.js` to adjust browser settings, timeouts, or reporters
- Add more Page Objects in `tests/pages/`
- Create custom fixtures in `tests/fixtures/`
- Write test suites in `tests/*.spec.js`

## Best Practices

- Use Page Object Models for maintainability
- Create custom fixtures for common setup/teardown
- Keep tests focused and independent
- Use descriptive test names
- Organize tests with `test.describe()` blocks

## Resources

- [Playwright Official Documentation](https://playwright.dev)
- [Best Practices Guide](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
