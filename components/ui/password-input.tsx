import * as React from "react";

import { cn } from "@/lib/utils";

import { Input } from "./input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <Input
        type={showPassword ? "text" : "password"}
        suffix={
          showPassword ? (
            <EyeOpenIcon
              className="select-none cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeClosedIcon
              className="select-none cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )
        }
        className={className}
        {...props}
        ref={ref}
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
