export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size?: "small" | "medium" | "large"; // optional size prop
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // optional shape prop
  children: React.ReactNode; // button text or content
  onClick?: () => void; // optional click handler
}
