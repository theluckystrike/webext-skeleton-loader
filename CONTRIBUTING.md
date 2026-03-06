# Contributing to webext-skeleton-loader

Thank you for your interest in contributing. This project welcomes contributions from the community.

## Reporting Issues

Before creating an issue, please search existing issues to avoid duplicates.

When reporting a bug, include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and extension manifest version
- Any relevant error messages

When requesting a feature:
- Describe the use case
- Explain why this would be useful
- Include any mockup or examples if applicable

## Development Workflow

1. Fork the repository
2. Clone your fork: `git clone https://github.com/theluckystrike/webext-skeleton-loader.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run the build: `npm run build`
7. Commit with a clear message: `git commit -m "Add feature description"`
8. Push to your fork: `git push origin feature/your-feature-name`
9. Open a Pull Request against the main branch

## Code Style

- Use TypeScript for all new code
- Follow the existing code patterns in the repository
- Use meaningful variable and function names
- Keep functions small and focused
- Add JSDoc comments for public APIs
- Run `npm run build` before submitting to ensure compilation succeeds

## Testing

This project uses TypeScript compilation as the primary validation. Before submitting:

1. Ensure `npm run build` completes without errors
2. Verify the generated output in dist/ is correct
3. Test manually in a Chrome extension if making UI changes

## License

By contributing to webext-skeleton-loader, you agree that your contributions will be licensed under the MIT License.
