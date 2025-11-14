"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { SignUpFormValues } from "../src/types/signUp.types";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form Submitted:", data);
  };
  return (
    <div className="flex min-h-screen">
      {/* LEFT IMAGE SECTION */}
      <div className="w-1/2 flex justify-between items-center">
        <Image
          src="/auth.svg"
          alt="signUp"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center mb-2">
            Log in to your account
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Start managing your tasks efficiently
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                {...register("email", {
                  required: true,
                })}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">Enter a valid email.</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>

              <div className="relative">
                <input
                  {...register("password", { required: true, minLength: 4 })}
                  type={showPassword ? "text" : "password"}
                  className="w-full border rounded-lg px-3 py-2 mt-1 pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs">4 characters minimum.</p>
              )}
            </div>
            {/* REMEMBER ME + FORGOT PASSWORD */}
            <div className="flex items-center justify-between text-sm mt-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">Remember me</span>
              </label>

              <button type="button" className="text-primary font-medium">
                Forgot your password?
              </button>
            </div>

            {/* SIGNUP BUTTON */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              Log In
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm mt-3 ">
              Don’t have an account?
              <Link href="/signUp" className="text-primary font-medium ml-2">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
