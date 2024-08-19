import React from "react";
import "./styles.css";

interface modalProps {
  children: React.ReactNode;
  classname?: string;
}

export const Modal = React.memo(
  React.forwardRef<HTMLDivElement, modalProps>(
    ({ children, classname }, ref) => {
      return (
        <main
          ref={ref}
          className={`${classname} absolute top-[50%] left-[50%] border-white border-opacity-[.4] border min-w-[600px]`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          {children}
        </main>
      );
    }
  )
);
