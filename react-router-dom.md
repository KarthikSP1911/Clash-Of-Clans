Sure, let's go step-by-step through the **React Router DOM** library (v6+), which is the standard routing solution for React Single Page Applications (SPAs).

---

## **1. Installation**

First, install the package:

```bash
npm install react-router-dom
```

---

## **2. Basic Setup**

In your `index.js` or `main.jsx`, wrap your app with `BrowserRouter`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## **3. Define Routes**

Use `Routes` and `Route` to map paths to components in `App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

* `element={<Component />}` replaces the old `component={}` from v5.
* `*` is a wildcard route for 404 pages.

---

## **4. Navigation (Link & NavLink)**

Use `Link` or `NavLink` instead of `<a>` to navigate:

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>
        About
      </NavLink>
    </>
  );
}
```

---

## **5. useNavigate (programmatic navigation)**

```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // after successful login
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## **6. useParams (get route params)**

```jsx
// Route: /user/:id

import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // access /user/123 → id = "123"
  return <div>User ID: {id}</div>;
}
```

---

## **7. Nested Routes**

```jsx
// App.jsx
<Route path="/dashboard/*" element={<Dashboard />} />

// Dashboard.jsx
<Routes>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Routes>
```

Navigate to `/dashboard/profile`, `/dashboard/settings`.

---

## **8. Redirects (Navigate)**

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <Dashboard />;
}
```

---

## Summary of Key Components:

| Component/Hook     | Purpose                       |
| ------------------ | ----------------------------- |
| `BrowserRouter`    | Router wrapper for SPA        |
| `Routes` + `Route` | Define routing paths          |
| `Link` / `NavLink` | Navigate without reload       |
| `useNavigate()`    | Programmatic navigation       |
| `useParams()`      | Get URL params                |
| `Navigate`         | Redirect user                 |
| `Outlet`           | Placeholder for nested routes |

---

Would you like a **mini project** (like login, dashboard, 404, etc.) using React Router DOM? I can walk you through it.


✅ 2. Emotion
Official Site: emotion.sh

Key Features:

Very similar API to Styled Components.

Two syntaxes: styled and css prop.

More flexible, supports object styles too.

Smaller bundle size (often).

Works with or without React.

Two APIs:

styled API (like styled-components)

css prop or css helper for inline styles

Example (styled API):

jsx
Copy
Edit
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px;
  border-radius: 6px;
`;

const App = () => <Button>Submit</Button>;
Example (css prop):

jsx
Copy
Edit
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css`
  background: red;
  padding: 10px;
  color: white;
`;

const App = () => <button css={buttonStyle}>Click</button>;