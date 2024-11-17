Website for Sansone Contracting and Design.

Built with [Eleventy](https://www.11ty.dev/) and [Tailwind](https://tailwindcss.com/).

## Installation & Development

Requires node v20+.

```bash
npm install
```

To start the local development server:

```bash
npm start
```

To build for production:

```bash
npm run build
```

## Structure

Custom CSS can be added in `./src/css`.

Images can be added in `./src/img` and referenced like: `<img src="/img/foo.jpg>`

The main template that all pages use can be found in `./src/inc/main.html`. Pages can be found at `./src/*.html` (such as `./src/index.html` for the home page).
