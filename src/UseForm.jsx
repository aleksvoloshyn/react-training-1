import React from 'react'
import { useForm } from 'react-hook-form'

export default function UseFormTest() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        type="text"
        placeholder="input name"
        // defaultValue="test"
        {...register('name')}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        type="email"
        placeholder="input email"
        {...register('email', { required: true })}
      />
      <input
        type="checkbox"
        checked={true}
        {...register('agree', { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}
