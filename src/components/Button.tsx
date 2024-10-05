import cn from "../utils/cn";
import { ReactNode } from 'react'

const Button = ({
  className,
  children,
  href
}: {
  className: string;
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      className={cn(
        "cursor-pointer py-3 px-8 rounded-full shadow-md font-medium",
        "hover:bg-gradient-to-r hover:from-night/5 hover:to-night/5 transition-all",
        className
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default Button;
