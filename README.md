# chinto.fr

Personal website and blog built with Angular.

This project gathers my travels, hobbies, technical interests and, in the future, personal blog articles.

The goal is to build a fast, static website with a strong focus on maintainability, reusable components and good SEO practices.

## Features

- Content
  - 🌍 Travel journal
  - 🎮 Gaming
  - 💻 Tech
  - 📝 Blog
- Technical chalenges
  - 🔍 SEO & Open Graph metadata
  - 📱 Responsive design

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

or, if available:

```bash
make run
```

## Build

Generate the static website:

```bash
npm run build:prerender
```

The generated files are available in:

```text
dist/chinto-fr/browser
```

## Tech stack

- [Angular:][angular] Typescript template for SPA developments
- [Angular SSR:][angular-ssr] Rendering strategy (Server Side Rendering)
- [SCSS:][scss] Overwrite of CSS language that provides more variables tools
- [`@chinjto/generator-angular`:][@chinjto/generator-angular] Personnal schematics based components generator

## License

This project is licensed under the MIT License.

[angular]:https://angular.dev/
[angular-ssr]:https://v17.angular.io/guide/ssr
[scss]:https://sass-lang.com/guide/
[@chinjto/generator-angular]:https://github.com/chinjto/generator-angular
