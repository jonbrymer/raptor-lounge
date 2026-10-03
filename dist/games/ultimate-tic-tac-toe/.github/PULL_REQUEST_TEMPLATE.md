# Pull Request

Thank you for contributing to **Ultimate Tic-Tac-Toe**! Please complete this template to help us review your changes efficiently. Ensure your pull request adheres to the [Contributing Guidelines](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/blob/main/CONTRIBUTING.md) and the [Code of Conduct](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/blob/main/CODE_OF_CONDUCT.md).

## Description

Provide a clear and concise description of the changes in this pull request. Explain:
- What problem it solves or what feature it adds.
- The approach you took to implement the changes.
- Any relevant technical details or trade-offs.

**Example**:
- Adds minimax AI to improve opponent strategy.
- Implements recursive minimax algorithm in `js/script.js`.
- Updates AI move button to use new logic with configurable difficulty.

## Related Issues

List any GitHub issues this pull request addresses. Use the format `Fixes #123` or `Closes #123` to automatically link and close issues upon merging.

- Fixes # [issue number]
- Related to # [issue number]

## Type of Change

Check the appropriate box(es) to indicate the type of change:

- [ ] Bug fix (non-breaking change that resolves an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update (changes to README, CONTRIBUTING, or other docs)
- [ ] Code style or refactoring (no functional changes)
- [ ] Other (please describe):

## How Has This Been Tested?

Describe the testing you performed to verify your changes. Include:

- Manual tests (e.g., tested specific moves, checked AI behavior, verified UI).
- Browser testing (e.g., Chrome, Firefox, Safari).
- Edge cases considered (e.g., draw, undo after win).
- Environment tested (e.g., Chrome 120 on Windows 11, Safari on iOS 17).

**Example**:
- Tested AI moves in 10 games to ensure no invalid selections.
- Verified settings modal updates color scheme and font correctly.
- Checked responsiveness on iPhone 14 and desktop Firefox.
- Tested undo functionality after game end to confirm fix.
- Confirmed no console errors in Chrome DevTools.

## Screenshots or Videos (if applicable)

If your changes affect the UI or gameplay, attach screenshots or videos to demonstrate the results. For example, show the updated board, new feature, or fixed bug.

## Checklist

Please confirm the following before submitting your pull request:

- [ ] My code follows the [Code Style Guidelines](CONTRIBUTING.md#code-style-guidelines) (e.g., 2-space indentation, camelCase for JS).
- [ ] I have tested my changes in multiple browsers (e.g., Chrome, Firefox, Safari).
- [ ] I have updated the documentation (e.g., README, comments) if my changes impact usage or setup.
- [ ] My changes do not introduce new console errors or warnings.
- [ ] My pull request targets the `main` branch.
- [ ] I have reviewed my changes to ensure they are focused and do not include unrelated modifications.
- [ ] For localization changes, I have updated the `translations` object in `js/script.js`.
- [ ] For UI changes, I have ensured accessibility (e.g., `data-i18n` attributes, keyboard support).

## Additional Context

Provide any additional information that might help reviewers understand your changes. For example:
- Why you chose a specific approach (e.g., performance considerations).
- Any limitations or known issues with your implementation.
- Future improvements you plan to address.

---

**Note**: Maintainers may request changes or clarification during the review process. Please respond promptly to feedback to ensure a smooth merge.

Thank you for your contribution to Ultimate Tic-Tac-Toe!