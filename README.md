## Api Route in Next Js :

-  Create an :file_folder:`api` folder.
-  Create an new :file_folder: for new paths.
-  then open the folder :open_file_folder: and create an `route.js` file and
   write your code .

## GET Api in Next JS:

-  Create a :file_folder: in api route.
-  Create a :page_with_curl:`route.js` file.
-  write your codes.
-  ### Create an api
-  `import {NextResponse} from 'next/server'`
-  create and export and function.
-  Function Name will be `GET`
-  then `return ` `NextResponse` with status code.
-  Example:

```js
import { comments } from "@/utils/comments";
import { NextResponse } from "next/server";

export const GET = async () => {
   const data = comments;
   return NextResponse.json(data, { status: 200 });
};
```

## GET API for Daynamic Data in next js :

-  Create a `dynamic` :file_folder:`folder`
-  Create :page_with_curl: `route.js` file
-  Every api function have some parameters `(req, content)`;
-  `content` conatains an object of params like `{params: {slug: value}}`
-  At first receive the `dynamic id` and convert it from `string` to `number`.
-  then `find` the data for dynamic `id`
-  then `return` the data;
-  Example:

   ```js
   import { comments } from "@/utils/comments";
   import { NextResponse } from "next/server";

   export const GET = async (req, { params }) => {
      const id = parseInt(params.id);
      const data = comments.find((i) => id === i.id);
      if (!data?.id) {
         return NextResponse.json(
            { message: "Data Not Found" },
            { status: 403 }
         );
      }
      return NextResponse.json(data, { status: 200 });
   };
   ```

## POST API in Next JS :

-  create :file_folder:`folder` and :page_with_curl: `route.js` file
-  then create an `async function ` with name `POST`.
-  The function have some parameters: `(req, content)`
-  `Parse` the `req` with to `json` with `req.json()`
-  `req.json()` `returns` a `Promise`.
-  To parse the `promise` use `await` and you find the body object that you send
   from UI with `fetch` method.

-  Example:

   ```js
   export const POST = async (req) => {
      const payload = await req.json();
      if (!payload.title || !payload.body) {
         return NextResponse.json(
            {
               reslut: "User data not found",
               acknowledged: false,
               success: false,
            },
            { status: 401 }
         );
      }

      const newData = {
         id: Date.now(),
         ...payload,
      };

      return NextResponse.json(
         { reslut: newData, acknowledged: true, success: true },
         { status: 200 }
      );
   };
   ```

## Parse `request.body` in Next Js :

-  The Api `function` have some `parameters`: like `(req, content)`
-  `Parse` the `req` with to `json` with `req.json()`
-  `req.json()` `returns` a `Promise`.
-  To parse the `promise` use `await` and you find the body object that you send
   from UI with `fetch` method.
-  Example:

```js
export const POST = async (req) => {
   const payload = await req.json();
   if (!payload.title || !payload.body) {
      return NextResponse.json(
         { reslut: "User data not found", acknowledged: false, success: false },
         { status: 401 }
      );
   }

   const newData = {
      id: Date.now(),
      ...payload,
   };

   return NextResponse.json(
      { reslut: newData, acknowledged: true, success: true },
      { status: 200 }
   );
};
```
