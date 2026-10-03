# Support for Ultimate Tic-Tac-Toe

Thank you for using **Ultimate Tic-Tac-Toe**! We’re dedicated to ensuring you have a great experience with this web-based game. This document outlines how to seek support, report issues, request features, and find additional resources.

## Table of Contents

- [Getting Help](#getting-help)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [FAQs](#faqs)
- [Community and Contact](#community-and-contact)
- [Supporting the Project](#supporting-the-project)

## Getting Help

If you encounter issues or have questions about Ultimate Tic-Tac-Toe, follow these steps:

1. **Check the Documentation**:
   - Review the [README](README.md) for installation, usage, and feature details.
   - Ensure your browser meets the [System Requirements](README.md#system-requirements).

2. **Search Existing Issues**:
   - Visit the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues) to see if your question or issue has been addressed.

3. **Explore FAQs**:
   - Check the [FAQs](#faqs) section below for solutions to common problems.

4. **Ask the Community**:
   - Post your question in the [GitHub Discussions](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/discussions) section for community support.

5. **Contact the Maintainer**:
   - For private or urgent matters, reach out via a private issue or discussion on the [GitHub repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).

## Reporting Bugs

If you find a bug in Ultimate Tic-Tac-Toe:

1. **Verify the Issue**:
   - Ensure you’re using the latest version from the [repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).
   - Reproduce the issue in multiple browsers (e.g., Chrome, Firefox).

2. **Submit a Bug Report**:
   - Open a new issue on the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues).
   - Use the bug report template and include:
     - A clear title and description.
     - Steps to reproduce the bug (e.g., specific moves or actions).
     - Expected vs. actual behavior.
     - Screenshots, videos, or browser console logs.
     - Your environment (e.g., browser, operating system, device).

3. **Follow Up**:
   - Respond to any questions or requests for clarification from maintainers.
   - Test any proposed fixes if requested.

**Example**:
- Title: "Timer Continues After Game Ends"
- Steps: Start a game, win, observe timer.
- Expected: Timer stops on game end.
- Actual: Timer continues running.
- Environment: Firefox 115, macOS 14.

## Requesting Features

Have an idea to improve Ultimate Tic-Tac-Toe? We’d love to hear it!

1. **Check for Duplicates**:
   - Search the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues) to ensure your feature hasn’t been suggested.

2. **Submit a Feature Request**:
   - Open a new issue using the feature request template.
   - Provide:
     - A clear title and detailed description.
     - The problem the feature solves or the benefit it provides.
     - Any examples, mockups, or references to similar functionality.

3. **Engage with Feedback**:
   - Discuss your idea with maintainers and the community.
   - Be open to refining the proposal based on feedback.

**Example**:
- Title: "Add Minimax AI for Stronger Opponent"
- Description: Implement a minimax algorithm to make the AI unbeatable or configurable.
- Benefit: Enhances challenge for experienced players.

## FAQs

**Q: Why is the AI so easy to beat?**  
A: The current AI selects random empty cells. To improve it, consider contributing a smarter algorithm (e.g., minimax) as outlined in the [Contributing Guidelines](CONTRIBUTING.md).

**Q: Why does the game lag on mobile?**  
A: The bubble background animation may strain low-end devices. Disable animations in `js/script.js` (e.g., comment out `createBubbles()`) or reduce animation complexity. Report performance issues on the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues).

**Q: How do I change the language?**  
A: Use the language dropdown on the landing page or game interface to select from English, Chinese, Japanese, Korean, Russian, Spanish, French, or German. The UI updates automatically.

**Q: Can I play offline?**  
A: Yes, after loading initial assets (e.g., Google Fonts), the game works offline. Host files locally to ensure full offline functionality.

**Q: How do I reset my settings?**  
A: Clear the browser’s local storage via developer tools (e.g., `localStorage.clear()`) or implement a reset button in the settings modal (future feature).

**Q: Why does the undo button work after the game ends?**  
A: This is a bug where the undo functionality isn’t disabled post-game. Report it on the [Issues page](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues) or contribute a fix by checking `gameActive` in the `undoMove` function.

**Q: How do I add a new language?**  
A: Add a new language object to the `translations` object in `js/script.js` and update the language dropdowns in `index.html`. See the [Contributing Guidelines](CONTRIBUTING.md) for details.

## Community and Contact

Join the Ultimate Tic-Tac-Toe community to connect with other players and the maintainer:

- **GitHub Discussions**: Ask questions, share ideas, or discuss features in the [Discussions](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/discussions) section.
- **Issues Page**: Report bugs or request features at [Issues](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues).
- **Maintainer Contact**: For direct support, create a private issue or discussion on the [GitHub repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).

We aim to respond to questions and issues within 48 hours, though community responses may be faster.

## Supporting the Project

Ultimate Tic-Tac-Toe is free and open-source, but your support helps maintain and improve it! Here’s how you can contribute:

- **Contribute**: Help improve the code, documentation, or community by following the [Contributing Guidelines](CONTRIBUTING.md).
- **Star the Repository**: Show your support by starring the project on [GitHub](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).
- **Spread the Word**: Share Ultimate Tic-Tac-Toe with friends or on social media.
- **Provide Feedback**: Report bugs or suggest features to enhance the game.

Thank you for your support and for playing Ultimate Tic-Tac-Toe!