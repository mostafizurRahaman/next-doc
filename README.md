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
