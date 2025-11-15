"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface TaskFormValues {
  title: string;
  date: string;
  priority: string;
  description: string;
}

export default function AddTaskModal({ isOpen, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TaskFormValues>();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      reset();
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  const onSubmit = (data: TaskFormValues) => {
    console.log("Form Data:", data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-primary border-b-4 border-primary inline-block pb-1">
            Add New Task
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:underline"
          >
            Go Back
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          {/* Title */}
          <div>
            <label className="font-medium text-gray-700">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full mt-1 border rounded-md p-2 outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">Title is required</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="font-medium text-gray-700">Date</label>
            <input
              type="date"
              {...register("date", { required: true })}
              className="w-full mt-1 border rounded-md p-2 outline-none"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">Date is required</p>
            )}
          </div>

          {/* Priority */}
          <div>
            <p className="font-medium text-gray-700">Priority</p>
            <div className="flex items-center gap-5 mt-2 text-sm">

              {/* Extreme */}
              <label className="flex items-center gap-1">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <span>Extreme</span>
                <input
                  type="radio"
                  value="extreme"
                  {...register("priority", { required: true })}
                />
              </label>

              {/* Moderate */}
              <label className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Moderate</span>
                <input
                  type="radio"
                  value="moderate"
                  {...register("priority", { required: true })}
                />
              </label>

              {/* Low */}
              <label className="flex items-center gap-1">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Low</span>
                <input
                  type="radio"
                  value="low"
                  {...register("priority", { required: true })}
                />
              </label>
            </div>
            {errors.priority && (
              <p className="text-red-500 text-sm">Choose a priority</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-gray-700">
              Task Description
            </label>
            <textarea
              {...register("description")}
              rows={4}
              placeholder="Start writing here….."
              className="w-full mt-1 border rounded-md p-3 outline-none resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              type="submit"
              className="bg-primary px-6 py-2 rounded-md text-white"
            >
              Done
            </button>

            <button
              type="button"
              className="bg-red-600 p-3 rounded-md text-white"
              onClick={() => reset()}
            >
              <FaTrash />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
