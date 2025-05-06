import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const schema = yup.object({
    username: yup.string().required("Le champ est obligatoire"),
  });

  const defaultValues = {
    username: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  function submit(values) {
    login(values);
    toast.success("Connexion réussie");
    navigate("/");
    // reset(defaultValues);
  }
  return (
    <div className="flex-1 flex items-center justify-center ">
      <div
        className="
          w-full max-w-md p-6 
          bg-white dark:bg-gray-800 
          shadow-xl dark:shadow-black/40 
          rounded-lg
        "
      >
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]"
        >
          <div className="flex flex-col mb-2">
            <label
              htmlFor="username"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              Pseudo
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              className="w-full rounded-md px-3 py-2 
                bg-gray-50 border border-gray-300 text-gray-900 
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500

                dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 
                dark:placeholder-gray-500 dark:focus:ring-blue-400"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="password"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              Mot de passe
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="w-full rounded-md px-3 py-2 
                bg-gray-50 border border-gray-300 text-gray-900 
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 
                dark:placeholder-gray-500 dark:focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
