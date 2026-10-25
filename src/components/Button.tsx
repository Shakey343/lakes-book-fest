import cn from "../utils/cn";

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
  // Stable accessible name; the visible text swaps on hover/focus.
  ariaLabel?: string;
}) => {
  const sharedProps = {
    className: cn(
      "group cursor-pointer py-3 px-8 rounded-full shadow-md font-medium min-w-[150px] text-center",
      "hover:bg-gradient-to-r hover:text-jonquil hover:ring ring-jonquil transition-all",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jonquil",
      className
    ),
    "aria-label": ariaLabel ?? initialWord,
    onClick,
  }

  // Both labels share one grid cell so the button is always as wide as the
  // longer one; swapping them on hover can't resize it and cause flicker.
  const content = (
    <span className="grid">
      <span
        className={cn(
          "col-start-1 row-start-1",
          hoverWord && "group-hover:invisible group-focus-visible:invisible"
        )}
      >
        {initialWord}
      </span>
      {hoverWord && (
        <span
          aria-hidden="true"
          className="col-start-1 row-start-1 invisible group-hover:visible group-focus-visible:visible"
        >
          {hoverWord}
        </span>
      )}
    </span>
  );

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
