// components/common/Button.tsx
import { type ButtonProps } from "@/interfaces";

export default function Button({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}: ButtonProps) {
  // Tailwind classes based on size
  let sizeClass = "";
  if (size === "small") sizeClass = "px-2 py-1 text-sm";
  else if (size === "medium") sizeClass = "px-4 py-2 text-base";
  else if (size === "large") sizeClass = "px-6 py-3 text-lg";

  return (
    <button
      onClick={onClick}
      className={`${sizeClass} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
}
