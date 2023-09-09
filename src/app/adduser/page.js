"use client";
import { useReducer, useRef } from "react";

const initialValue = {
   data: {
      name: "",
      email: "",
      age: "",
   },
   error: {
      name: "",
      email: "",
      age: "",
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

const Page = () => {
   const [formData, dispatch] = useReducer(reducer, initialValue);
   const formRef = useRef(null);

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
      fetch(`http://localhost:3000/api/users`, {
         method: "POST",
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
   console.log(formData.data, formData.error);

   return (
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
               id="name"
               placeholder="Enter your name"
               onChange={handleName}
            />
            <p className="text-red-500">{formData.error.name}</p>
            <input
               className="border-2 px-5  border-black placeholder:text-base text-xl rounded-md placeholder:capitalize"
               onChange={handleEmail}
               type="email"
               name="email"
               placeholder="Enter your email"
            />
            <p className="text-red-500">{formData.error.email}</p>
            <input
               className="border-2  px-5 border-black placeholder:text-base text-xl rounded-md placeholder:capitalize"
               onChange={handleAge}
               type="number"
               name="age"
               placeholder="Enter your age"
            />
            <p className="text-red-500">{formData.error.age}</p>
            <button className="px-5 py-2 rounded-lg bg-blue-500 text-base text-white font-semibold">
               Submit Data
            </button>
         </form>
      </div>
   );
};

export default Page;
