import React from "react";

const sizeClasses = {
  txtNunitoMedium20: "font-medium font-nunito",
  txtNunitoMedium20WhiteA70001: "font-medium font-nunito",
  txtMontserratBold55: "font-bold font-montserrat",
  txtNunitoBold18: "font-bold font-nunito",
  txtMontserratSemiBold35: "font-montserrat font-semibold",
  txtNunitoRegular18: "font-normal font-nunito",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtMontserratSemiBold50Gray20001: "font-montserrat font-semibold",
  txtMontserratSemiBold50: "font-montserrat font-semibold",
  txtMontserratSemiBold60: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold22: "font-montserrat font-semibold",
  txtNunitoRegular20: "font-normal font-nunito",
  txtNunitoRegular18Gray100: "font-normal font-nunito",
  txtNunitoSemiBold20: "font-nunito font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
