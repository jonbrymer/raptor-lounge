# Contributing to Ultimate Tic-Tac-Toe

Thank you for your interest in contributing to **Ultimate Tic-Tac-Toe**! We welcome contributions from the community, including bug reports, feature requests, code improvements, and documentation enhancements. This guide outlines how to get involved and help improve this open-source game.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing](#testing)
- [Community](#community)

## Code of Conduct

All contributors are expected to adhere to the [Code of Conduct](CODE_OF_CONDUCT.md). This ensures a respectful and inclusive environment for everyone involved in the project.

## How to Contribute

### Reporting Bugs

If you encounter a bug in Ultimate Tic-Tac-Toe:

1. **Check Existing Issues**: Search the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues) to see if the bug has already been reported.
2. **Create a New Issue**: If the bug is new, open a new issue and provide:
   - A clear title and description of the bug.
   - Steps to reproduce the issue (e.g., specific moves, settings).
   - Expected and actual behavior.
   - Screenshots, videos, or browser console logs, if applicable.
   - Your environment (e.g., browser, operating system, device).
3. **Use the Bug Report Template**: Follow the template provided in the issue creation form for consistency.

**Example Bug Report**:
- Title: "Undo Button Allows Multiple Undos After Game Ends"
- Description: The undo button remains active after a win, allowing invalid state changes.
- Steps: Win a game, click "Undo" multiple times, observe game state.
- Expected: Undo is disabled after the game ends.
- Environment: Chrome 120, Windows 11.

### Suggesting Features

We welcome ideas to enhance Ultimate Tic-Tac-Toe! To suggest a feature:

1. **Check Existing Requests**: Review the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues) to avoid duplicates.
2. **Submit a Feature Request**: Open a new issue and include:
   - A clear title and detailed description of the feature.
   - The problem it solves or the benefit it provides (e.g., improves AI, adds ultimate mode).
   - Any relevant examples, mockups, or references to similar features in other games.
3. **Use the Feature Request Template**: Follow the provided template to structure your suggestion.

**Example Feature Request**:
- Title: "Implement Ultimate Tic-Tac-Toe Rules"
- Description: Add a 9x9 grid with 3x3 sub-boards, where moves in one board determine the next board to play in.
- Benefit: Increases game complexity and strategic depth.

### Submitting Pull Requests

To contribute code or documentation:

1. **Fork the Repository**:
   - Fork the [Ultimate Tic-Tac-Toe repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).
   - Clone your fork to your local machine:
     ```bash
     git clone https://github.com/YOUR_USERNAME/Ultimate-Tic-Tac-Toe.git
     ```

2. **Create a Branch**:
   - Create a new branch for your changes:
     ```bash
     git checkout -b feature/your-feature-name
     ```
   - Use descriptive branch names (e.g., `fix/undo-bug`, `feature/add-minimax-ai`).

3. **Make Changes**:
   - Implement your changes in the codebase or documentation.
   - Follow the [Code Style Guidelines](#code-style-guidelines) below.
   - Test your changes locally across multiple browsers.

4. **Commit Changes**:
   - Write clear, concise commit messages:
     ```bash
     git commit -m "Add feature: implement minimax AI for opponent"
     ```
   - Reference related issues (e.g., `Fixes #123`).

5. **Push and Create a Pull Request**:
   - Push your branch to your fork:
     ```bash
     git push origin feature/your-feature-name
     ```
   - Open a pull request (PR) against the `main` branch of the original repository.
   - Use the PR template and provide:
     - A description of the changes.
     - The issue number(s) addressed (if any).
     - Screenshots or videos for UI changes.
     - Testing performed (e.g., browsers tested, edge cases).

6. **Code Review**:
   - Respond to feedback from maintainers.
   - Make requested changes and update your PR as needed.
   - Your PR will be merged once approved.

## Development Setup

To set up a development environment for Ultimate Tic-Tac-Toe:

1. **Prerequisites**:
   - A modern web browser (e.g., Chrome, Firefox, Edge).
   - A code editor (e.g., VS Code, Sublime Text).
   - Git installed for version control.
   - (Optional) A local server (e.g., Python’s `http.server` or Node.js `http-server`) for testing.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe.git
   cd Ultimate-Tic-Tac-Toe
   ```

3. **Install Dependencies**:
   - No additional installations are required, as all dependencies (e.g., Google Fonts) are loaded via CDNs or included in the `assets` folder.
   - Ensure the `assets`, `css`, and `js` folders are present.

4. **Run the Application**:
   - Open `index.html` in a browser, or serve the directory with a local server:
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`.

5. **Test Changes**:
   - Verify functionality in multiple browsers (e.g., Chrome, Firefox).
   - Test gameplay (e.g., place symbols, trigger AI, check win conditions).
   - Check responsiveness on desktop and mobile devices.

## Code Style Guidelines

To maintain consistency in the codebase:

- **HTML**:
  - Use semantic HTML5 elements (e.g., `<div>`, `<button>`).
  - Keep indentation at 2 spaces.
  - Use lowercase for tags and attributes.
  - Add `data-i18n` attributes for translatable elements.
- **CSS**:
  - Use kebab-case for class names (e.g., `game-board`).
  - Organize styles in `css/styles.css` with clear comments for sections.
  - Use CSS custom properties for theming (e.g., `[data-color-scheme="dark"]`).
  - Keep indentation at 2 spaces.
- **JavaScript**:
  - Use camelCase for variables and functions (e.g., `handleCellClick`).
  - Follow ES6+ conventions (e.g., `const`, `let`, arrow functions where appropriate).
  - Add comments for complex logic or functions.
  - Keep indentation at 2 spaces.
  - Organize code in `js/script.js` with clear sections for game logic, UI, and localization.
- **File Structure**:
  - Place images and icons in `assets/` (e.g., `assets/logo/`, `assets/ico/`).
  - Keep styles in `css/styles.css`.
  - Maintain scripts in `js/script.js`.
- **Accessibility**:
  - Ensure sufficient color contrast for readability.
  - Make interactive elements keyboard-accessible (e.g., `tabindex`).
  - Test with screen readers (e.g., NVDA, VoiceOver).
- **Localization**:
  - Add new translations to the `translations` object in `js/script.js`.
  - Use `data-i18n` attributes for translatable elements.

## Testing

Before submitting a pull request:

- **Manual Testing**:
  - Test gameplay with various scenarios (e.g., win, draw, undo).
  - Verify UI elements (e.g., settings modal, language selector, timer).
  - Check responsiveness across screen sizes (desktop, tablet, mobile).
  - Test settings (e.g., color scheme changes, font switches).
- **Browser Testing**:
  - Verify functionality in Chrome, Firefox, Edge, and Safari.
  - Check for console errors in the browser developer tools.
- **Edge Cases**:
  - Test rapid clicking on cells to ensure no duplicate moves.
  - Verify undo functionality after multiple moves or game end.
  - Ensure AI moves are valid and don’t break the game.
  - Test timer behavior (start, stop, reset) during gameplay.
- **Localization**:
  - Switch languages and ensure all text updates correctly.
  - Verify right-to-left (RTL) languages if added (e.g., Arabic).
- **Accessibility**:
  - Test keyboard navigation (e.g., tab through buttons).
  - Verify screen reader compatibility.

## Community

Join the Ultimate Tic-Tac-Toe community:

- **GitHub Discussions**: Share ideas or ask questions in the [Discussions](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/discussions) section.
- **Issues**: Report bugs or suggest features on the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues).
- **GitHub Stars**: Show your support by starring the [repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).

Thank you for contributing to Ultimate Tic-Tac-Toe! Your efforts help make this game better for players worldwide.