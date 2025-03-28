# Contributing to Dev Utils

Thank you for considering contributing to Dev Utils! This document provides guidelines and instructions to help you contribute effectively.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:
- Check the issue tracker to see if the bug has already been reported
- Make sure you're using the latest version
- Gather as much information as possible (steps to reproduce, error messages, etc.)

When submitting a bug report:
- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Explain what you expected to happen and what actually happened
- Include screenshots if applicable
- Provide system information (OS, browser version, etc.)

### Suggesting Features

Feature suggestions are always welcome! When submitting a feature request:
- Use a clear and descriptive title
- Provide a detailed description of the proposed feature
- Explain why this feature would be useful to most users
- Consider including mockups or examples

### Pull Requests

1. **Fork the Repository**
   - Create a fork of the repository on GitHub

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/dev-utils.git
   cd dev-utils
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/issue-you-are-fixing
   ```

4. **Make Your Changes**
   - Follow the code style of the project
   - Write clean, maintainable code
   - Include comments where necessary
   - Update documentation if needed

5. **Test Your Changes**
   - Make sure your changes don't break existing functionality
   - Add tests if applicable

6. **Commit Your Changes**
   - Use clear and meaningful commit messages
   - Reference issues or feature requests in your commits

7. **Push to Your Fork**
   ```bash
   git push origin your-branch-name
   ```

8. **Submit a Pull Request**
   - Fill out the pull request template
   - Provide a clear description of the changes
   - Link to any relevant issues

## Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Linting & Formatting**
   ```bash
   npm run lint
   npm run format
   ```

## Style Guides

### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line

### JavaScript/TypeScript Style Guide
- Use TypeScript for all new code
- Follow the ESLint and Prettier configurations
- Document new code with JSDoc comments

### CSS/SCSS Style Guide
- Use Tailwind CSS utilities when possible
- Follow BEM methodology for custom CSS
- Use CSS variables for theming

## Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute!
