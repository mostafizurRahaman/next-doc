import UpdateDetails from "@/app/users/[id]/update/page";
import { comments } from "@/utils/comments";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
   const id = parseInt(params.id);
   const data = comments.find((i) => id === i.id);
   if (!data?.id) {
      return NextResponse.json({ message: "Data Not Found" }, { status: 403 });
   }
   return NextResponse.json(data, { status: 200 });
};

export const PUT = async (req, { params }) => {
   const id = parseInt(params.id);
   const body = await req.json();
   const comment = comments.find((i) => i.id === id);
   if (!comment?.id) {
      return NextResponse.json(
         { result: `Not Found any comment with id ${id}`, success: false },
         { status: 403 }
      );
   }

   const updatedComments = {
      title: body.title,
      description: body.description,
   };

   return NextResponse.json(
      { result: { ...comment, ...updatedComments }, success: true },
      { status: 200 }
   );
};
