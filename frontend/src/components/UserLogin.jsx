import React from "react";
import {Link} from 'react-router-dom';
import { loginSchema } from "../../schemas/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { clsx } from "@mantine/core";


const UserLogin = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        resolver: yupResolver(loginSchema),
      });

    const onLogin = (data) => {
        console.log(data); //come back to this for database call
    }
    
  return (
    <div className="h-screen w-full flex flex-col px-4 justify-center items-center m-auto bg-bglayer bg-no-repeat bg-cover gap-7">
      {/* Container div to give border */}
      <div className="w-full max-w-md xl:max-w-lg flex flex-col gap-9 p-5">
        <div className="flex items-center gap-2 m-auto">
          <h1 className="text-xl lg:text-2xl font-bold font-Hack">Login</h1>
        </div>

        <form onSubmit={handleSubmit(onLogin)} className="gap-2 form-control w-full">
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email..."
              className={clsx("input input-primary rounded-md input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full border-primary focus:outline-primary", errors?.email && "border-error focus:outline-error")}
              {...register("email")}
            />

          </div>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Password..."
              className={clsx("input input-primary rounded-md input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full border-primary focus:outline-primary", errors?.password && "border-error focus:outline-error")}
                
                {...register("password")}
            />

          </div>
          <div className="text-center text-white">
            <input
              type="submit"
              value="Login"
              name=""
              id=""
              className="w-full rounded-xl btn btn-primary bg-primary border-primary hover:bg-secondary hover:border-primary"
            />
          </div>
        </form>
      </div>
      <div className="px-2 sm:p-0">
        <span className="text-gray-500">
          Dont't have an account?{" "}
          <Link to="/signup" className="font-bold link link-primary text-primary hover:text-secondary">
              Signup
          </Link>
        </span>
      </div>
    </div>

  );
};

export default UserLogin;
