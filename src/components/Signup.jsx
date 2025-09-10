// src/components/Signup.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import './Signup.css';

const Signup = () => {
  const { register, handleSubmit } = useForm();

  {/* formstate: isValid and errors*/}

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container bg-amber-500 w-full h-full d2">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Name:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="name"
              {...register('name')}
              placeholder="Enter your name"
              className='bg-white'
            />
          </div>
        </div>

        {/* Password */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Password:</label>
          </div>
          <div className="col-75">
            <input
              type="password"
              id="password"
              {...register('password')}
            />
          </div>
        </div>

        {/* Gender */}
        <div className="row">
          <div className="col-25">
            <label>Gender:</label>
          </div>
          <div className="col-75">
            <div className="form-inline">
              <input type="radio" id="male" value="male" {...register('gender')} />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" value="female" {...register('gender')} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        {/* Country */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="country">Country:</label>
          </div>
          <div className="col-75">
            <select id="country" {...register('country')}>
              <option value="">Select your country</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
            </select>
          </div>
        </div>

        {/* Skills */}
        <div className="row">
          <div className="col-25">
            <label>Skills:</label>
          </div>
          <div className="col-75 form-inline">
            <input type="checkbox" id="html" value="HTML" {...register('skills')} />
            <label htmlFor="html">HTML</label>
            <input type="checkbox" id="css" value="CSS" {...register('skills')} />
            <label htmlFor="css">CSS</label>
            <input type="checkbox" id="js" value="JavaScript" {...register('skills')} />
            <label htmlFor="js">JavaScript</label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-6">
  <input
    type="submit"
    value="Submit"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded cursor-pointer"
  />
</div>

      </form>
    </div>
  );
};

export default Signup;
