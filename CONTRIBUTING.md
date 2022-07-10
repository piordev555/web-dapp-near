# Contributing to Catch App

In this document, you will find guidelines to contribute to the Catch App. If you have improvements for this guidelines, feel free to propose changes to this document as a pull request.

## Development

### Technologies we use

We use the following technologies for the Catch App:

- [typescript](https://github.com/microsoft/TypeScript)
- [next.js](https://github.com/vercel/next.js)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [redux](https://github.com/reduxjs/redux)
- [firebase](https://github.com/firebase/firebase-js-sdk)
- [storybook](https://github.com/storybookjs/storybook/)
- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)

You may want to familiarize yourself with these technologies.

### Setting up your project

We create a [README.md](README.md) in every project with additional information for the setup to help other developers getting started. If you find yourself setting up a new project, never forget to document everything, that is important for other colleagues to know.

### General development workflow

1. Pull / Clone the current project into your working space
2. Create a branch
3. Setup the project if you haven't already & apply your changes
4. Test your code using jest, cypress, chromatic & storybook
5. Separate your changes in [well-formed commit messages](#commit-messages) and push them
6. Create a [well-formed pull request](#pull-requests)
7. Add your colleagues as reviewers for the pull request / ask one directly
8. You may have to apply changes and redo step 3-5 until the reviewer approves your request
9. Merge your changes in the branch

### Branch setup

The branch name can be split in 2 parts. First of all you [add a tag](#tag) for the type of task your are doing, second you add the title of the ticket you are currently working on. If you have to add a new feature for a ticket named `(redux) define global state` your branch would look like this:
`feature/redux_define-global-state`.

### Commit messages

We need well written commit messages in order to understand as fast as possible, what you did in this commit.

Example: `feat: add secondary color to button component`

The commit message can be split in 2 parts.

#### tag

It is useful to provide previously defined tags, to get a faster understanding of the type of task.

Tags we use:

- **feat**: The new feature you’re adding to a particular application
- **fix**: A bug fix
- **docs**: Everything related to documentation
- **test**: Everything related to testing
- **ci**: Everything related to ci / pipeline changes
- **chore**: Regular code maintenance

#### message

The commit messages should describe in a precise and short way what was done.
We write our commit messages in the [imperative](https://www.grammarly.com/blog/imperative/).

Good: `Add secondary color to Button component`

Bad: `Added secondary..`

## Documentation

We document every component we code in Storybook with a practical implementation and a theoretical documentation.

If your implementation needs an extra setup in the project, you have to document the steps in the [README.md](README.md) file of the project.

As a rule of thumb you can remember to document everything that is important for other contributors to know.

## Style guides

Every technology has its own best practices. The following style guides may help you with providing the best results. Please take your time and familiarize yourself with them.

### Coding:

- [React style guide](/docs/contributing/style-guides/react.md)
- TBD: Javascript style guide
