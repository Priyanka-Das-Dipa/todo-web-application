import { FC } from "react";
import { BiGridVertical } from "react-icons/bi";
import { PiTrashSimpleBold } from "react-icons/pi";
import { RiEditLine } from "react-icons/ri";

interface TaskCardProps {
  title: string;
  level: "Low" | "Moderate" | "High";
  description: string;
  dueDate: string;
}

const levelColors = {
  Low: "bg-blue-100 text-blue-700",
  Moderate: "bg-green-100 text-green-700",
  High: "bg-red-100 text-red-700",
};

const TaskCard: FC<TaskCardProps> = ({ title, level, description, dueDate }) => {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
      {/* Title + Level Badge + Grid Icon */}
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-md text-sm font-medium ${levelColors[level]}`}
          >
            {level}
          </span>

          <BiGridVertical size={18} className="text-gray-500" />
        </div>
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm">{description}</p>

      {/* Due Date + Action Icons */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-gray-700 text-sm font-medium">Due {dueDate}</p>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
            <RiEditLine size={16} className="text-blue-600" />
          </button>

          <button className="p-2 rounded-lg bg-red-50 hover:bg-red-100 transition">
            <PiTrashSimpleBold size={16} className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
