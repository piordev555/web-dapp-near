# Catch App

using

- [typescript](https://github.com/microsoft/TypeScript)
- [next.js](https://github.com/vercel/next.js)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [redux](https://github.com/reduxjs/redux)
- [firebase](https://github.com/firebase/firebase-js-sdk)
- [storybook](https://github.com/storybookjs/storybook/)
- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)

## Install

```bash
yarn install
# or shortcut
yarn
```

## Getting Started

### Setting up Environment

Make a copy of `.env` file and name it `.env.local`.  
Fill in the values for all `NEXT_PUBLIC_*` variables.  
You may contact Andrius or Eric to get the correct values.

Do not commit either of those files.

### Development

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

```bash
yarn storybook

# build
yarn build-storybook
```

## Contributing

See the [the contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project.

## Documenting Components

All Components should follow the same structure for a consistent documentation experience:

- `Overview`: MDX based documentation to give a complete overview about the component. This is the main documentation and includes some of the other stories.

- `Playground`: Is a Story that provides a control for almost any prop of the component, to make it easy to try the component.

- `Visual Guide`: Is a Story that provides a overview about the all the states of a component. This makes regression testing easier. And provides a quick overview. Visual Guide should include hover, focus, active, visited, disabled, etc. To statically use them in stories, we generate css classes for the pseudo classes using the PostCSS Pseudo Classes plugin.

- `Features`: A directory wich contains a dedicated story for each feature that the component implement. This gives a clear list of supported features with a demo.

- `Examples`: A directory with real life examples of how the component might be used.

The Overview documentation should be formatted to guide our users. We use a set of doc-components to format our overview documentation: https://intuit.github.io/doc-blocks/?path=/story/gallery--page
Any doc-block component need to installed on its own. Package names can be found in their repository: https://github.com/intuit/doc-blocks

```mdx
# <component-name>

<ShieldRow> ... </ShieldRow>

short description of the component

## Usage

short example, how to use the component

Show Import source code.
Use Preview Tag to include playground story.

<RelatedComponents components={[]} />

When to use this component?

Do's and Don't

## Accessibility Approach

document the list of aspects: https://testen.bitv-test.de/index.php?a=dl
See heading component as an example.

## SEO

## Features

## API Docs / Args Table
```
