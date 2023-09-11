"use client";
import { useReducer, useRef } from "react";

const initialValue = {
   data: {
      name: "",
      email: "",
      roll: "",
   },
   error: {
      name: "",
      email: "",
      roll: "",
   },
};

const reducer = (state, action) => {
   switch (action.type) {
      case "success":
         return {
            ...state,
            data: { ...state.data, [action.name]: action.value },
            error: { ...state.error, [action.name]: "" },
         };
      case "load":
         return {
            ...state,
            data: action.data,
         };
      case "failed":
         return {
            ...state,
            data: { ...state.data, [action.name]: "" },
            error: { ...state.error, [action.name]: action.error },
         };
      default:
         return state;
   }
};

const UpdateDetails = ({ params }) => {
   const id = params.id;

   const [formData, dispatch] = useReducer(reducer, initialValue);
   const formRef = useRef(null);

   const LoadUser = async () => {
      console.log("a");
      const res = await fetch(`http://localhost:3000/api/users/${id}`);
      const data = await res.json();
      console.log(data);
      dispatch({ type: "load", data });
   };

   const handleName = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value.length <= 0) {
         dispatch({ type: "failed", name, error: "name isn't empty" });
      } else {
         dispatch({ type: "success", name, value });
      }
   };
   const handleEmail = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value.length <= 0) {
         dispatch({ type: "failed", name, error: "email isn't empty" });
      } else {
         dispatch({ type: "success", name, value });
      }
   };

   const handleAge = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value.length <= 0) {
         dispatch({ type: "failed", name, error: "age should not be empty " });
      } else {
         dispatch({ type: "success", name, value });
      }
   };

   const handleForm = (e) => {
      e.preventDefault();
      const { name, email, age } = formData.data;
      if (!name && !email && !age) {
         return;
      }
      fetch(`http://localhost:3000/api/users/${id}`, {
         method: "PUT",
         body: JSON.stringify(formData.data),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.success) {
               formRef.current.reset();
            }
         })
         .catch((err) => console.log(err));
   };

   console.log(formData);
   return (
      <div>
         <p>user id: {id}</p>
         <h1>Update user now</h1>
         <button
            onClick={() => LoadUser()}
            className="px-5 py-2 rounded-lg bg-blue-500 text-base text-white font-semibold"
         >
            Load
         </button>
         <div>
            <h1 className="text-2xl text-center font-bold capitalize text-red-500">
               Form Data
            </h1>
            <form
               onSubmit={handleForm}
               ref={formRef}
               className="flex gap-3 flex-col w-[400px] items-center justify-center mx-auto"
            >
               <input
                  className="border-2 px-5  border-black placeholder:text-base text-xl rounded-md placeholder:capitalize"
                  type="text"
                  name="name"
                  defaultValue={formData.data.name}
                  id="name"
                  placeholder="Enter your name"
                  onChange={handleName}
               />
               <p className="text-red-500">{formData.error.name}</p>
               <input
                  className="border-2 px-5  border-black placeholder:text-base text-xl rounded-md placeholder:capitalize"
                  onChange={handleEmail}
                  type="email"
                  defaultValue={formData.data.email}
                  name="email"
                  placeholder="Enter your email"
               />
               <p className="text-red-500">{formData.error.email}</p>
               <input
                  className="border-2  px-5 border-black placeholder:text-base text-xl rounded-md placeholder:capitalize"
                  onChange={handleAge}
                  type="number"
                  defaultValue={formData.data.roll}
                  name="roll"
                  placeholder="Enter your age"
               />
               <p className="text-red-500">{formData.error.roll}</p>
               <button className="px-5 py-2 rounded-lg bg-blue-500 text-base text-white font-semibold">
                  Submit Data
               </button>
            </form>
         </div>
      </div>
   );
};

export default UpdateDetails;
