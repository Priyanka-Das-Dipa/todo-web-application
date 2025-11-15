import TaskCard from "../src/TaskCard";

export default function Dashboard() {
  return (
    <>
      <TaskCard
        title="Mobile App Redesign"
        level="Moderate"
        description="Redesigning the mobile app interface for better user experience"
        dueDate="Mar 25, 2025"
      />
    </>
  );
}
