import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthContext } from "../../context/AuthProvider";

export default function Register() {
  const { login } = useAuthContext(); // Utiliser la méthode login du contexte

  const schema = yup.object({
    username: yup.string().required("Le pseudo est requis"),

    email: yup
      .string()
      .email("L'email doit être valide")
      .required("L'email est requis")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Format email non valide"),

    password: yup
      .string()
      .required("Le mot de passe est requis")
      .min(8, "Le mot de passe doit contenir au moins 8 caractères"),

    confirmPassword: yup
      .string()
      .required("La confirmation du mot de passe est requise")
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .max(20, "Le mot de passe doit contenir au maximum 20 caractères")
      .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),

    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les conditions d'utilisation"),
  });

  // Valeurs par défaut du formulaire
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
  };

  // Utilisation de useForm pour gérer le formulaire
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

  // Validation des champs du formulaire
  function Submit(values) {
    login(values.username); // Ajouter le nom d'utilisateur dans le contexte
    console.log("Utilisateur ajouté :", values.username);
    reset(defaultValues); 
  }

  return (
    <div className='w-full max-w-md p-6 bg-white shadow-xl rounded'>
      <form
        onSubmit={handleSubmit(Submit)}
        className='flex flex-col gap-4 mb-6 mx-auto max-w-[400px]'>

        {/* username */}
        <div className='flex flex-col mb-2'>
          <label htmlFor='username' className='mb-2'>
            Pseudo
          </label>
          <input
            {...register("username")}
            type='text'
            id='username'
            className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.username && (
            <p className='text-red-500'>{errors.username.message}</p>
          )}
        </div>

        {/* email */}
        <div className='flex flex-col mb-2'>
          <label htmlFor='email' className='mb-2'>
            Email
          </label>
          <input
            {...register("email")}
            type='email'
            id='email'
            className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>

        {/* password */}
        <div className='flex flex-col mb-2'>
          <label htmlFor='password' className='mb-2'>
            Mot de passe
          </label>
          <input
            {...register("password")}
            type='password'
            id='password'
            className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>

        {/* confirmPassword */}
        <div className='flex flex-col mb-2'>
          <label htmlFor='confirmPassword' className='mb-2'>
            Confirmer le mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type='password'
            id='confirmPassword'
            className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.confirmPassword && (
            <p className='text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Case à cocher */}
        <div className='flex flex-col mb-2'>
          <label htmlFor='rgpd' className='mb-2'>
            <input
              {...register("rgpd")}
              type='checkbox'
              id='rgpd'
              className='mr-2'
            />
            En soumettant ce formulaire j'accepte ...
          </label>
          {errors.rgpd && (
            <p className='text-red-500 text-sm'>{errors.rgpd.message}</p>
          )}
        </div>

        {/* submit button */}
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer'>
          S'inscrire
        </button>
      </form>
    </div>
  );
}
