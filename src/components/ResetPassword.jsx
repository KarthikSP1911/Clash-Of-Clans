import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';



const buttonStyle = css`
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;



const Button = styled.button`
   background-color: #1d4ed8;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: #2563eb;
  }
`

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Reset link sent to ${data.email}`);
    console.log(data);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-cyan-400 to-indigo-700 flex items-center justify-center">
      <div className="w-1/3 bg-white rounded-3xl px-8 py-10 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-1">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email address',
                },
              })}
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-600 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <button type="submit" css={buttonStyle}>
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center text-blue-600 text-lg">
          <Link to="/" className="hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
      <Button className='absolute bottom-4 right-4'>Help</Button>
      
    </div>
  );  
};

export default ResetPassword;
