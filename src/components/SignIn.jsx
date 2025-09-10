import React from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const userSchema = z.object({
    email:z.string().email({message:"invalid email"}),
    pin:z.coerce.number().positive()
});


const SignIn = () => {
    const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: "onSubmit",
  })

  const onSubmit = (data) =>{
    toast.success('Data submitted', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    console.log(data);
  }
    

  const onError = (errors) => {
  Object.values(errors).forEach((error) => {
    toast.error(error.message);
  });
};
  return (
    <>
    <style>
        {`
            .f-row {
      display: flex;
      align-items: center;
      margin: 30px 20px 30px 20px;
    }

    .f-row > label {
      width: 30%;
      text-align: left;
      margin-right: 10px;
      margin-left: 20px;
      font-weight: bold;
      font-size:30px;
    }

    .f-row > input {
  width: 100%;
  padding: 12px;
  background-color: #f3f4f6; /* Tailwind gray-100 */
  color: #111827;            /* Tailwind gray-900 */
  border: 1px solid #d1d5db; /* Tailwind gray-300 */
  border-radius: 6px;
  font-size: 16px;

  
}
  .f-row > input:focus {
  outline: none;
  border-color: #2563eb;     /* Tailwind blue-600 */
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
}

      
        `}
    </style>

    <div className="w-full h-screen bg-gradient-to-tr from-cyan-400 to-indigo-700 flex items-center justify-center ">
        <div className=' w-1/3 h-3/4 bg-white justify-between rounded-3xl'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          
          />
                <div className='flex justify-center items-center pt-4'>
                    <img src="/image.png" alt="hi" className='scale p-5' />
                </div>
                <form onSubmit={handleSubmit(onSubmit, onError)} className='mt-16 flex flex-col'>
                <div className='f-row '>
                    <label htmlFor="email" className=''>Email</label>
                    <input  {...register("email")} placeholder='Enter your email'  className=''/>
                </div>
                
                <div className='f-row'>
                    <label htmlFor="pin">Pin</label>
                    <input {...register("pin")} type='text' placeholder='Enter your pin'/>
                </div>

                <div className="text-sm text-center mt-8  flex justify-between mx-12 ">
                <Link to="/reset-password" className="text-blue-600 hover:underline mr-4 text-xl">
                  Forgot Password?
                </Link>
                <a href="/signup" className="text-blue-600 hover:underline text-xl">
                  Sign Up
                </a>
              </div>
                

                <button
                  type="submit"
                  className="mx-auto mt-10 px-10 py-3 bg-blue-600 text-white font-bold text-2xl rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                >
  Submit
</button>
                </form>
        </div>
    </div>
    </>
  )
}

export default SignIn
