"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { SignUpFormValues } from "../src/types/signUp.types";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            Create your account
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Start managing your tasks efficiently
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* NAME FIELDS */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  {...register("firstName", {
                    required: true,
                  })}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    Please enter a valid name format.
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  {...register("lastName", {
                    required: true,
                  })}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">
                    Please enter a valid name format.
                  </p>
                )}
              </div>
            </div>

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

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium">Confirm Password</label>

              <div className="relative">
                <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full border rounded-lg px-3 py-2 mt-1 pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* SIGNUP BUTTON */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              Sign Up
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm mt-3">
              Already have an account?
              <Link href="/signIn" className="text-primary font-medium ml-2">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
