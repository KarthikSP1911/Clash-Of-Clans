Sure, let's learn **Emotion**, a powerful **CSS-in-JS** library used in React projects.

---

## 🔹 What is Emotion?

**Emotion** lets you write CSS styles directly inside your JavaScript (or TypeScript) files. It's similar to `styled-components`, but with slightly different APIs and more flexibility.

You can:

* Style components using the `styled` API (like styled-components)
* Use the `css` prop to apply styles inline
* Use Tailwind via `twin.macro` if desired

---

## 🔹 Installation

If you're using **React**, install Emotion like this:

```bash
npm install @emotion/react @emotion/styled
```

Or with yarn:

```bash
yarn add @emotion/react @emotion/styled
```

---

## 🔹 1. Styled Components (with `@emotion/styled`)

```jsx
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #1d4ed8;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: #2563eb;
  }
`;

export default function App() {
  return <Button>Click Me</Button>;
}
```

---

## 🔹 2. `css` Prop (with `@emotion/react`)

You can use the `css` prop like this:

```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function App() {
  return (
    <div
      css={css`
        color: #1f2937;
        font-size: 24px;
        padding: 20px;
      `}
    >
      Hello Emotion
    </div>
  );
}
```

> You **must add** `/** @jsxImportSource @emotion/react */` at the top if you use the `css` prop.

---

## 🔹 3. Conditional Styling

You can write conditional styles based on props:

```jsx
const Button = styled.button`
  background-color: ${props => (props.primary ? '#2563eb' : '#6b7280')};
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
`;

<Button primary>Primary</Button>
<Button>Secondary</Button>
```

---

## 🔹 4. Using Theme with Emotion

You can create a theme with Emotion and use it globally.

```jsx
// theme.js
export const theme = {
  colors: {
    primary: '#1d4ed8',
    danger: '#dc2626',
  },
};
```

```jsx
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

Then inside styled component:

```js
const Box = styled.div`
  background-color: ${props => props.theme.colors.primary};
`;
```

---

## 🔹 When Should You Use Emotion?

* When you need **dynamic styles** based on props
* When you want **scoped CSS**
* When you prefer writing CSS next to your components
* If you use Tailwind and want component-based styles with `twin.macro`

---

Would you like a full setup example with `Vite` or `Next.js`? Or want to see how to combine Emotion with Tailwind via `twin.macro`?




import { css } from '@emotion/react';

const buttonStyle = css`

';

<button css={buttonStyle}>Click Me</button>
