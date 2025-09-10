import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // enables real-time validation
  })

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: "First name is required" })}
        placeholder="First Name"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input
        {...register("age", {
          required: "Age is required",
          min: { value: 18, message: "Minimum age is 18" },
        })}
        placeholder="Age"
        type="number"
      />
      {errors.age && <p>{errors.age.message}</p>}

      <button
        type="submit"
        disabled={!isValid}
        className={`${!isValid ? "bg-gray-300" : "bg-blue-500"} px-4 py-2 text-white`}
      >
        Submit
      </button>
    </form>
  )
}


{errors.email && (
  <span className="text-red-500 ml-8">{errors.email.message}</span>
)}
{errors.pin && (
  <span className="text-red-500 ml-8">{errors.pin.message}</span>
)}