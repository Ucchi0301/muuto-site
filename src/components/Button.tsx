import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self"; // リンクを新規タブで開くとき用
};

const Button: React.FC<ButtonProps> = ({ children, onClick, href, target }) => {
  const baseClass =
    "px-4 py-2 font-bold rounded-md text-white bg-primary hover:bg-primary/75 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};

export default Button;
