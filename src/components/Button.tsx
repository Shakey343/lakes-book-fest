import cn from "../utils/cn";
import { useState } from 'react'

const Button = ({
  className,
  href,
  download,
  initialWord,
  hoverWord
}: {
  className: string;
  href: string;
  download: boolean;
  initialWord: string;
  hoverWord: string;
}) => {
  const [content, setContent] = useState(initialWord)

  const handleWordChange = () => {
    setContent(prevWord => prevWord === initialWord ? hoverWord : initialWord)
  }

  return (
    <a
      className={cn(
        "cursor-pointer py-3 px-8 rounded-full shadow-md font-medium min-w-[150px] text-center",
        "hover:bg-gradient-to-r hover:from-night/5 hover:to-night/5 hover:text-fire-red hover:ring ring-fire-red transition-all",
        className
      )}
      href={href}
      download={download}
      onMouseOver={handleWordChange}
      onMouseLeave={handleWordChange}
    >
      {content}
    </a>
  );
};

export default Button;
