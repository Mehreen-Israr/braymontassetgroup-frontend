# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment note (fixing "Failed to load module script ... MIME type")

That browser error typically happens when the app's built JS module URL returns the wrong response (often a 404 that serves `index.html`, or missing `Content-Type` headers).

- **If hosting under a sub-path** (example: `https://example.com/braymont/`):
  - Set `VITE_BASE_URL=/braymont/` in your deploy environment.
  - This repo wires React Router to Vite's base, so routes and assets resolve correctly.

- **If hosting at the domain root** (example: `https://example.com/`):
  - Leave `VITE_BASE_URL` unset (defaults to `/`).

Also ensure your static host serves these with correct content types:
- `*.js` / `*.mjs`: `text/javascript`
- `*.css`: `text/css`