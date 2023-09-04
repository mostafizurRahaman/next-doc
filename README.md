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

-  ### Nested Route :

   -  It is basically a route within another route. Nested routes help in the
      categorization of web pages.
   -  first create a folder and open the folder
   -  then create a sub folder and create file with name page.js
   -  write code
   -  try to load the file with the link
      `http//localhost:3000/folder_name/folder_name`

-  ### Dynamic Rotue :
-  When you don't know the exact segment names ahead of time and want to create
   routes from dynamic data, you can use Dynamic Segments that are filled in at
   request time or prerendered at build time.
-  A Dynamic Segment can be created by wrapping a folder's name in square
   brackets: `[foldername]` . for Example : `[id]` or `[slug]`
-  Then create a `page.js` file and write page component function with a
   `{params}` props.
-  `params` props return an object of `slug` or `id`.
-  `params` props can catch the dynamic `slug` or `id`.
-  Example Code Below:

```js
const Page = ({ params }) => {
   const id = params.id; // access the id property form params props.
   const teacherList = [
      {
         id: 0,
         name: "Mostafizur Rahaman",
      },
      {
         id: 1,
         name: "Ratul Hossain",
      },
      {
         id: 2,
         name: "Nayem Hossain",
      },
      {
         id: 3,
         name: "Ratul Hossain",
      },
   ];

   const teacher = teacherList.find((i) => i.id === parseInt(id));

   return (
      <div>
         <h1>student details</h1>
         <h2>
            Name: {teacher.name} - id: {teacher.id}
         </h2>
      </div>
   );
};
export default Page;
```

### Catch-all Segments :

-  Dynamic Segments can be extended to catch-all subsequent segments by adding
   an ellipsis inside the brackets `[...folderName]`.
-  For example, `app/shop/[...slug]/page.js` will match `/shop/clothes`, but
   also `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`, and so on.

-  | Route                        | Example URL  | params                 |
   | ---------------------------- | ------------ | ---------------------- |
   | `app/shop/[...slug]/page.js` | `shop/a `    | `slug:["a"]`           |
   | `app/shop/[...slug]/page.js` | `shop/a/b `  | `slug:["a", "b"]`      |
   | `app/shop/[...slug]/page.js` | `shop/a/b/c` | `slug:["a", "b", "c"]` |
-  Create a catch all route segment:
-  first create a folder with `..foldername` and wrapping with `[]`
-  then create a page.js
-  write a component with `params` props.
-  `params` contains a `array of slug` or `paths`.
-  Example below:

   ```js
   "use client";
   const Page = ({ params }) => {
      const slug = params.slug;
      console.log(slug);
      return (
         <div>
            <h1>{slug.join(" >> ")}</h1>
         </div>
      );
   };

   export default Page;
   ```

## Create Custom 404 or Not-Found page in Next Js:-

-  first create a file `not-found.js` in `app` folder
-  write your code for 404 page
-  try to load an unexiting route
-  it's a global 404 route for your application.

## Create a 404 or not found page for Specific route:

-  go the specific folder: example : `/app/login`
-  create a folder with elipses`...` + folderName and wrapping the folder with
   `[ ]`. example : `[...not-found]`
-  then create a page.js
-  and write your code for specific 404 page

## Link in Next JS :

-  Link works like anchor tag .
-  It helps us to navigate one route to another route.
-  Link tag have a `props` name `href`.

   ### how to use link tag

   -  `import` Link from `next/link`;
   -  Example:

   ```js
   import Link from "next/link";
   import styles from "./Nav.module.css";

   const Nav = () => {
      return (
         <nav className={styles.navigation}>
            <Link href="/">Home</Link> <Link href="/login">Login Page</Link>
            <Link href="/about">About</Link>{" "}
         </nav>
      );
   };

   export default Nav;
   ```

## `useRouter` hook in Next Js :-

-  `import` useRouter hook from `'next/navigation'`
-  store the variable on a variable. Example below:

   ```js
   import { useRouter } from "next/navigation";

   const Page = () => {
      const router = useRouter();
   };
   ```

-  useRouter return an object which contain many properties and functions like:
   `push()`, `replace()`, `refresh()`, `back()`, `forword()`, `fastRefresh()`,
   `reload()`

   ##### push() : used to navigate any route .

   ##### replace() : replace method use to replace any route.

   ##### refreash() : refresh method helps us to refreash any on browser.

   ##### back() : back method helps us to back privious route. back method call `windows.history.back()` method.

   ##### forword() : `forword()` method helps us to go forword any route we navigate before.

## `usePathname()` Hook in next js :

1. `usePathname()` hook return us a `string` of `pathname`.
2. by using `usePathname`, we can conditionaly shows any component depends on
   pathname.

## Middleware in Next JS :

-  Middleware allows you to run code before your code executed.
-  Then, based on the request, you can modify the request by rewriting,
   redirecting, modifying the request or response header.
-  Middleware runs before content cached or routes are matched.
-  There are two ways to define which paths Middleware will run on:

   -  1. Custom Matcher config
      ```js
      export const config = {
         // matcher: "/about/:path*", if single paths
         matcher: ["/about/:path*", "/studentList/:path*"], // if multiple paths needed.
      };
      ```
   -  2. Conditional statements :
         ```js
         export function middleware(request) {
            if (request.nextUrl.pathname.startsWith("/about")) {
               return NextResponse.redirect(new URL("/login", request.url));
            }
            if (request.nextUrl.pathname.startsWith("/studentList")) {
               return NextResponse.redirect(new URL("/login", request.url));
            }
         }
         ```

-  ### Create a middleware function :

   -  first create file in `src` folder `middleware.js` or `middleware.ts`
   -  `import` {NextResponse} from 'next/server';
   -  ```js

      ```

## What is Rendering ?

-  Rendering is the process of converting source code to html and show on UI.
-  Rendering converts the code you write into user interfaces.
-  Two type of rendering are :
   -  CSR -> Client Side Rendering
   -  Serverside Rendering (Pre-Rendering)
-  Server Side Rendering has two approch .
   -  SSG -> Static Side Generation
   -  SSR -> Server Site Rendering.

## What is Pre-Rendering ?

-  Pre-Rendering Means generate Html on server side.
-  Type Of Pre-rendering :
   -  SSG
   -  SSR

## What is SSR (Static Side Rendering) ?

-  SSR Means Server Side Rendering.
-  With SSR, You can rendering JavaScript code on Server side and return HTML
   code to Client Side.
-  With SSR , HTML Generated on each request.
-  SSR only executed on server ,But ssr doesn't excuted on client browser.
-  যখন ইউজার এর প্রতি রিকুয়েস্টে নতুন করে ডাটা জেনেরেট করতে হবে তখন আমরা SSR
   ব্যবহার করবো।
-  SSR Faster Then CSR (Client side Rendering)
-  ### Load data with SSR :

   -  create a page and write a `async function` for page.
   -  At same page, Write another `async function` to fetch data.
   -  after fetching `return data`
   -  then call the data into `page function` by using `await`;
   -  Example Below:

   ```js
   import Link from "next/link";
   const getData = async () => {
      const res = await fetch(`https://dummyjson.com/products?limit=20`);
      const data = await res.json();
      return data.products;
   };

   const Page = async () => {
      const data = await getData();
      return (
         <div>
            <h1>Men Products</h1>
            <div className="container">
               {data.map((p) => (
                  <div key={p.id} className="productCard">
                     <h2>{p.title}</h2>
                     <p>{p.brand}</p>
                     <Link href={`/menproducts/${p.id}`}>Show Details</Link>
                  </div>
               ))}
            </div>
         </div>
      );
   };

   export default Page;
   ```

   -  Generally after fetching data on next js , every data will be cached.
   -  By using `{cache: 'no-store}` object as `second parameter of fetch` we can
      avoid caching.
   -  Example below:

   ```js
   import Image from "next/image";

   const Page = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random", {
         cache: "no-store",
      });
      const data = await res.json();

      return (
         <main>
            <h1>Home Page </h1>
            <Image
               src={data.message}
               width={500}
               height={300}
               alt="dog_image"
            ></Image>
         </main>
      );
   };
   ```

## What is SSG (Static Side Generation) ?

-  SSG Means Static Side Generation.
-  With SSG, You can render your JavaScript Files at build time and convert to
   HTML Code.
-  With SSG, Same Code will be reused and send to client.
-  After generated Static files on built time , We store our static files on
   Server.
-  আর ইউজার রিকুয়েস্ট করার আগে যদি কোনো একটা ফাইল তৈরী করে রাখতে চাই এবং ইউজার
   রিকুয়েস্ট করার সাথে সাথে দেখাবো সেই ক্ষেত্রে আমরা SSG ব্যবহার করবো ।
-  SSG is Faster than SSR

## What is CSR (Client Side Rendering) ?

-  Client Side Rendering or Browser Rendering is a process where the browser
   download the JavaScript, CSS, HTML Code, then render all file and display on
   browser.
-  CSR means client side rendering.
-  CSR is not SEO Friendly
-  By using `useEffect` , we can load data on csr.

   ### CSR - Data loading :

   -  use `"use client"` directive top of the components.
   -  import `useEffect` and `useState` to load and store data.
   -  then fetch data like below:

      ```js
      "use client";
      import { useEffect, useState } from "react";
      import Link from "next/link";

      const ProductList = () => {
         const [products, setProducts] = useState([]);
         console.log(products);
         useEffect(() => {
            const loadProduct = async () => {
               const res = await fetch(
                  `https://dummyjson.com/products?limit=20`
               );
               const data = await res.json();
               setProducts(data.products);
            };
            loadProduct();
         }, []);
         return (
            <div>
               <h1>Product List</h1>
               <div className="container">
                  {products.map((p) => (
                     <div key={p.id} className="productCard">
                        <h2>{p.title}</h2>
                        <p>{p.brand}</p>
                        <Link href={`/productlist/${p.id}`}>Show Details</Link>
                     </div>
                  ))}
               </div>
            </div>
         );
      };

      export default ProductList;
      ```

## CSS In Next Js 13.4 :

-  Next Js have some type of css:
   -  Global CSS
   -  CSS with styles attribute
   -  moduler css

## Image Optimization In Next Js :

-  ### Use `Image` tag of next js:
   -  import `Image` tag from `'next/image'`
   -  add `src`, `width`, `height` attribute in next js .
   -  Example:
      ```js
      <Image
         src={data.message}
         width={500}
         height={300}
         alt="dog_image"
      ></Image>
      ```
-  ### External Domain Image configuration:

   -  open `next.config.js` and an object like below:
   -  Example :
   -  ```js
      /** @type {import('next').NextConfig} */
      const nextConfig = {
         images: {
            domains: ["images.dog.ceo"],
         },
      };

      module.exports = nextConfig;
      ```

   ```

   ```

-  ### When we Import image from our folder its reutrn us an object like below:
   ```js
      {
            src: '/_next/static/media/vercel.3c8eefce.svg',
            height: 64,
            width: 283,
            blurWidth: 0,
            blurHeight: 0
      }
   ```
-  ### Image tag optimized images in nextjs and reduce sizes.

## Font In Next Js:

-  ### import font Next js google font. Example:

   ```js
   import { Roboto, Oswald } from "next/font/google";
   ```

-  ### Configure the font:
   -  call the Font as funtion and store into a variable;
   -  pass an object as parameter which have some properties like: weight,
      styles, subsets, display
      ```js
      import { Oswald } from "next/font/google";
      const oswald = Oswald({
         weight: "700",
         style: "normal",
         subsets: ["latin"],
         display: "swap",
      });
      ```
-  ### How to use the font:

   -  In `className` attribute you can pass the FontVariable.ClassName.
   -  ```js
         import { Oswald } from "next/font/google";
         const oswald = Oswald({
            weight: "700",
            style: "normal",
            subsets: ["latin"],
            display: "swap",
         });
         const page = () => {
            return (
               <div>
                  <h1 className={oswald.className}>Mostaifizur Rahaman</h1>
                  <h1>Universe It</h1>
               </div>
            );
         };
      ```

   - [Read The docs]!(https://nextjs.org/docs/app/building-your-application/optimizing/fonts)