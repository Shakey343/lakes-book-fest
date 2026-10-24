import cn from "../utils/cn";
import { useState } from 'react'

const Button = ({
  className,
  href,
  initialWord,
  hoverWord,
  target,
  onClick,
  ariaLabel
}: {
  className: string;
  href?: string;
  initialWord?: string;
  hoverWord?: string;
  target?: string;
  onClick?: () => void;
  // Stable accessible name; the visible text changes on hover/focus.
  ariaLabel?: string;
}) => {
  const [content, setContent] = useState(initialWord)

  const showHoverWord = () => setContent(hoverWord ?? initialWord)
  const showInitialWord = () => setContent(initialWord)

  const sharedProps = {
    className: cn(
      "cursor-pointer py-3 px-8 rounded-full shadow-md font-medium min-w-[150px] text-center",
      "hover:bg-gradient-to-r hover:text-jonquil hover:ring ring-jonquil transition-all",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jonquil",
      className
    ),
    "aria-label": ariaLabel ?? initialWord,
    onMouseEnter: showHoverWord,
    onMouseLeave: showInitialWord,
    onFocus: showHoverWord,
    onBlur: showInitialWord,
    onClick,
  }

  // Links navigate (<a>); actions that only run code are real <button>s so
  // they get focus, Enter/Space activation and the button role for free.
  if (href) {
    return (
      <a
        {...sharedProps}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...sharedProps}>
      {content}
    </button>
  );
};

export default Button;
