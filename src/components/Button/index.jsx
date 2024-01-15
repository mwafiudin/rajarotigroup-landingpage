import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[27px]" };
const variants = {
  outline: {
    lime_900: "border border-lime-900 border-solid",
    gray_600: "border border-gray-600 border-solid text-gray-600",
    orange_300: "border border-orange-300 border-solid text-orange-400",
    gray_700: "border border-gray-700 border-solid text-gray-900",
  },
  fill: { orange_400: "bg-orange-400 text-white-A700" },
};
const sizes = { xs: "p-2.5", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "lime_900",
    "gray_600",
    "orange_300",
    "gray_700",
    "orange_400",
  ]),
};

export { Button };
