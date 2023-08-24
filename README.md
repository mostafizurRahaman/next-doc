## What is next js?

-  Next Js is an react framework for building fullstack web application.
-  Next Js helps you to build interactive, dynamic and fast React application.

## Main Features in Next JS

| First Header | Second Header                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Routing      | Next js have file based routing that support layout, nested routing , error handling and more                                                    |
| Rendering    | Next Js support client side and serverside rendering                                                                                             |
| Data fetch   | By using next we can load data with `async/await`and extends `fetch` api request for `memorization`, `caching`, `revalidation`                   |
| Styling      | Next js support moduler `css.` Next Js also have default `tailwind installation `option.                                                         |
| TypeScript   | Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker. |
| Optimization | `Image`, `script` , `Font` optimazation helps to increase user experience.                                                                       |

## Next JS Installation

-  Run the command : -

```cmd
   npx create-next-app@latest
```

-  On installation, you'll see the following prompts:

```cmd
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias? No / Yes
What import alias would you like configured? @/*

```

## What is server side components?

-  Server side component is a component that rendered on server.
-  With Server components, initail page load is faster & the client side
   javascript bundled sized reduced.
-  In `App Router` by default all components are server components.

## What is Client side components ?

-  Client side components are rendered on client browser.
-  Client side components allows you to client interactivity on your
   application.
-  By using `use client` directives on the top of the components without import
   anything, you can use any components as client side component.
-  Once `"use client" ` is defined in a file, all other modules imported into
   it, including child components, are considered part of the client bundle.
-  The `"use client"` directive must be defined at the top of a file before any
   imports.

## When Use server components and client components?

| What need to do ?                                                            | Server component   | Client Componen    |
| ---------------------------------------------------------------------------- | ------------------ | ------------------ |
| Fetch data                                                                   | :white_check_mark: | ✗                  |
| Access backend resources (directly)                                          | :white_check_mark: | ✗                  |
| Keep sensitive information on the server (access tokens, API keys, etc)      | :white_check_mark: | ✗                  |
| Keep large dependencies on the server / Reduce client-side JavaScript        | :white_check_mark: | ✗                  |
| Add interactivity and event listeners (onClick(), onChange(), etc)           | ✗                  | :white_check_mark: |
| Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc) | ✗                  | :white_check_mark: |
| Use browser-only APIs                                                        | ✗                  | :white_check_mark: |
| Use custom hooks that depend on state, effects, or browser-only APIs         | ✗                  | :white_check_mark: |
| Use React Class components                                                   | ✗                  | :white_check_mark: |

## What is App Router ?

-  The App Router is a new paradigm for building applications using React's
   latest features. If you're already familiar with Next.js, you'll find that
   the App Router is a natural evolution of the existing file-system based
   router in the Pages Router.

## What is `"use client"` directive ?

-  `"use client"` directive helps you to mark a component as client components.
-  `"use client"` client must written on top before import anything.
-  `"use client"` helps you to make client interaction. `"use client"` enable
   react hooks like `useState`, `useEffect` , `useContext` on your application.
-  `"use client"` helps you to add any event like `onClick()` , `onChange()`,
   `onScroll()`, `onSubmit()` etc on your application.

## Files and Folders :

-  ### Top Level Folders:

| Folder name | Details                            |
| ----------- | ---------------------------------- |
| `src`       | Optional Application source folder |
| app         | App Router                         |
| pages       | Pages Route                        |
| public      | Static assets to be served         |

-  ### Top Level Files:

| Folder name         | Details                             |
| ------------------- | ----------------------------------- |
| `package.json`      | Project dependencies and scripts    |
| `next.config.js`    | Configuration file for Next.js      |
| `.gitignore`        | Git files and folders to ignore     |
| `jsconfig.js`       | Configuration file for Js           |
| `tsconfig.json`     | Configuration file for Typescript   |
| `.eslintrc.json`    | Configuration file for ESLint       |
| `postcss.config.js` | Configuration file for Tailwind CSS |
| `.env`              | Contain Env Variables               |
| `env.local`         | local Envrionment variable contains |
| `middleware.ts`     | Next Js middleware request          |

-  ### Routing Convention:

| Folder name        | Details                      |
| ------------------ | ---------------------------- |
| `layout.js`        | for layout                   |
| `page.js`          | for pages                    |
| `loading.js`       | Loading UI                   |
| `not-found`        | Not found page               |
| `error.js`         | Error UI                     |
| `global-error.js ` | Global Error UI              |
| `route.js`         | Api end point                |
| `.template.js`     | re-rendered layout           |
| `default.js`       | parallal route fallback page |

## Rouiting in Next JS :-

-  ### Basic Routing / (file based routing) :
   -  Next Js uses file system based routing. example below:
   -  first create a folder into app folder
   -  make page.js and write codes
   -  try load the page with link `http://localhost:3000/folder_name`
