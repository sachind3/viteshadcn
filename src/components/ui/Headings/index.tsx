import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const Heading3 = ({ children, className }: Props) => {
  return (
    <h3
      className={`${
        className
          ? `${className} text-3xl font-bold text-theme-blue-500`
          : `text-3xl font-bold text-theme-blue-500`
      } `}
    >
      {children}
    </h3>
  );
};
const Heading4 = ({ children, className }: Props) => {
  return (
    <h4
      className={`${
        className
          ? `${className} text-2xl font-bold text-theme-blue-500`
          : `text-2xl font-bold text-theme-blue-500`
      } `}
    >
      {children}
    </h4>
  );
};
const CardTitle = ({ children, className }: Props) => {
  return (
    <h4
      className={`${
        className
          ? `${className} text-xl font-bold text-theme-blue-500`
          : `text-xl font-bold text-theme-blue-500`
      } `}
    >
      {children}
    </h4>
  );
};
export { Heading3, Heading4, CardTitle };
