# React best practices

In this document, you will find our best practices for React. We want to unify our code, use modern practices, make our code more readable and developer-friendly, performant and minimize our code reviews. Feel free to add improvements / new features to this document as a merge request.

## Functions & Hooks instead of classes

Instead of using React with class syntax, we use functions & hooks to write our code. You can learn more about the usage of hooks in the [official React documentation](https://reactjs.org/docs/hooks-intro.html).

## Avoid Mutation and Side effects

The first principle of functional programming is to avoid changing things. A function should not change anything such as a global variable. This is very important because changes often lead to bugs. If a function changes a global variable, for example, it might lead to unexpected behavior in all the places where that variable is used.

The second principle is that a function must be pure, meaning it has no side effects. In functional programming, changes that are made are called mutations, and the outcomes are called side effects. A pure function does neither of the two. A pure function will always have the same output for the same input.

If a function depends on a global variable, that variable should be passed to the function as an argument. This allows us to obtain the same output for the same input.

If you want to learn more about functional programming, have a look at [this article](https://www.freecodecamp.org/news/functional-programming-in-javascript-explained-in-plain-english/).

## Import react

```jsx
import * from React as "react";
```

The reason for this is that React wants to stop the support for the default import with Version 19 or 20.

Source: <https://twitter.com/dan_abramov/status/1308739731551858689?s=20>

<br>

## Default Props

```tsx
export type ComponentProps = {
  prop1: string;
  prop2?: number;
  prop3?: number;
  prop4?: boolean;
};

function Component(props: ComponentProps) {
  // You may add line breaks for this destructuring to keep the code more readable
  const { prop1, prop2 = null, prop3 = 1, prop4 = true } = props;

  return (
    <div>
      {prop1} {prop2} {prop3}
      {prop4 && <p>foo</p>}
    </div>
  );
}
```

Note that default values are only set for optional props, since you have to assume that non-optional props are set. If this is not the case, you should reconsider making it an optional prop.

According [to this tweet](https://twitter.com/hswolff/status/1133759319571345408), defaultProps will represent an obsolete notation in the future.

You can find a discussion on this topic here:

- <https://twitter.com/hswolff/status/1133759319571345408>

The consensus of the discussion is that you should use object default values like above.
