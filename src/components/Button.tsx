import cn from "../utils/cn";
import { ReactNode } from 'react'

const Button = ({
  className,
  children,
  href,
  download
}: {
  className: string;
  href: string;
  children: ReactNode;
  download: boolean;
}) => {
  return (
    <a
      className={cn(
        "cursor-pointer py-3 px-8 rounded-full shadow-md font-medium",
        "hover:bg-gradient-to-r hover:from-night/5 hover:to-night/5 transition-all",
        className
      )}
      href={href}
      download={download}
    >
      {children}
    </a>
  );
};

export default Button;
