/** @format */

import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    fetch("https://pure-falls-70781.herokuapp.com/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };
  return (
    <div className='add-service  xs={12} md={8}'>
      <h2>Add Your Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          placeholder='Image Link'
          {...register("img", { required: true })}
          className='w-100 p-2 m-2'
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("name", { required: true })}
          placeholder='Title'
          className='w-100 p-2 m-2'
        />
        <input
          {...register("description", { required: true })}
          placeholder='Description'
          className='w-100 p-2 m-2'
        />
        <input
          {...register("price", { required: true })}
          placeholder='Price'
          type='number'
          className='w-100 p-2 m-2'
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' className='m-2 mb-5' />
      </form>
    </div>
  );
};

export default AddService;
