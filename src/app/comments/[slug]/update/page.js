/* eslint-disable @next/next/no-async-client-component */
"use client";
import { getComment } from "@/utils/getComment";
import { notFound } from "next/navigation";
import { useReducer } from "react";

const initialValue = {
   data: {
      title: "",
      description: "",
   },
   error: {
      title: "",
      description: "",
      general: "",
   },
};

const reducer = (state, action) => {
   switch (action.type) {
      case "success":
         return {
            ...state,
            data: {
               ...state.data,
               [action.name]: action.value,
            },
            error: {
               ...state.error,
               [action.name]: "",
            },
         };
      case "fail":
         return {
            ...state,
            data: {
               ...state.data,
               [action.name]: "",
            },
            error: {
               ...state.error,
               [action.name]: action.error,
            },
         };
      case "load":
         return {
            ...state,
            data: action.data,
            error: {
               ...state.error,
               [action.name]: action.error,
            },
         };
      case "loaderror":
         return {
            ...state,
            data: { ...state.data },
            error: {
               ...state.error,
               general: action.general,
            },
         };
      default:
         return state;
   }
};

const UpdateComments = ({ params }) => {
   const [formData, dispatch] = useReducer(reducer, initialValue);
   const id = +params.slug;

   const loaddata = async () => {
      const comment = await getComment(id);
      if (comment?.id) {
         dispatch({ type: "load", data: comment });
      } else {
         dispatch({ type: "loaderror", general: "fetch api ocurs an error" });
      }
      console.log(formData.data);
   };

   const onChnage = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (!value.length <= 0) {
         dispatch({ type: "success", name, value });
      } else {
         dispatch({ type: "fail", name, error: `${name} is not empty ` });
      }
      console.log(formData.data);
   };

   const handleForm = async (e) => {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
         method: "PUT",
         body: JSON.stringify(formData.data),
      });
      const data = await res.json();
      console.log(data);
   };

   console.log(formData.data);
   return (
      <div>
         <div className="bg-blue-500 w-[300px] mx-auto my-5 text-black p-5 rounded-xl">
            <h1>Update details</h1>
            {/* <h1>{comment.title}</h1> */}
            {/* <p>{comment.description}</p> */}
         </div>
         <form
            onSubmit={handleForm}
            className="flex flex-col gap-3 w-[300px] mx-auto my-10"
         >
            <input
               type="text"
               className="border-2 text-black  p-2 border-black py-2 rounded-lg"
               name="title"
               defaultValue={formData?.data?.title}
               onChange={onChnage}
            />
            <input
               type="text"
               className="border-2 text-black p-2 border-black py-2 rounded-lg"
               name="description"
               defaultValue={formData?.data?.description}
               onChange={onChnage}
            />
            <button className="px-5 py-2 bg-blue-500 rounded-md text-white">
               Update
            </button>
         </form>
         <button
            onClick={loaddata}
            className="px-5 py-2 bg-blue-500 rounded-md text-white"
         >
            Update
         </button>
      </div>
   );
};

export default UpdateComments;
