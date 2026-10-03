# Security Policy

## Supported Versions

The following versions of **Ultimate Tic-Tac-Toe** are currently supported with security updates:

| Version | Supported          |
|---------|--------------------|
| 1.0.0   | ✅                 |
| Future  | ✅ (Latest release) |

We recommend using the latest version from the [repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe) to ensure you have the most recent security fixes and improvements.

## Reporting a Vulnerability

If you discover a security vulnerability in Ultimate Tic-Tac-Toe, we appreciate your help in disclosing it responsibly. Please follow these steps:

1. **Do Not Disclose Publicly**: Avoid sharing details of the vulnerability in public forums, such as GitHub issues, social media, or other platforms, until it has been addressed.
2. **Contact the Maintainer Privately**:
   - Create a private issue or discussion on the [GitHub repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).
   - Include a detailed description of the vulnerability, steps to reproduce, and potential impact.
3. **Response Time**:
   - You can expect an initial response within 48 hours.
   - We will work with you to validate and address the issue promptly.
4. **Disclosure**:
   - Once the vulnerability is fixed, we will coordinate with you on public disclosure, if appropriate.
   - Credit will be given for your discovery in release notes, unless you prefer anonymity.

## Security Best Practices

To keep your use of Ultimate Tic-Tac-Toe secure:

- **Use Trusted Sources**: Download or clone the application only from the official [GitHub repository](https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe).
- **Update Assets**: Ensure CDN-loaded assets (e.g., Google Fonts) are from reputable sources. Consider hosting them locally for added security.
- **Input Validation**: The game operates client-side with no server-side input, but avoid running it in untrusted environments to prevent XSS risks.
- **Local Storage**: Settings are stored in the browser’s local storage, which could be accessed by malicious scripts in an untrusted context. Clear local storage if needed.
- **HTTPS**: If hosting online, serve the application over HTTPS to protect data in transit.
- **Browser Security**: Use a modern browser with up-to-date security patches.

## Known Dependencies

Ultimate Tic-Tac-Toe relies on the following third-party assets, which may have their own security policies:

- **Google Fonts (Poppins, Roboto, Open Sans)**: Loaded via CDN for typography.

Check the respective project pages for their security advisories and ensure you’re using the versions specified in `index.html`.

Thank you for helping keep Ultimate Tic-Tac-Toe secure!