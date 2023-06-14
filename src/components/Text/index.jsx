import React from "react";

const sizeClasses = {
  txtInterMedium29: "font-inter font-medium",
  txtInterBold29: "font-bold font-inter",
  txtInterMedium16Gray50001: "font-inter font-medium",
  txtInterMedium23: "font-inter font-medium",
  txtInterMedium24: "font-inter font-medium",
  txtInterBold30Teal900: "font-bold font-inter",
  txtInterMedium21: "font-inter font-medium",
  txtInterMedium22: "font-inter font-medium",
  txtInterSemiBold16Black90002: "font-inter font-semibold",
  txtInterSemiBold29: "font-inter font-semibold",
  txtInterMedium28: "font-inter font-medium",
  txtInterMedium16RedA70001: "font-inter font-medium",
  txtInterMedium15Black90002: "font-inter font-medium",
  txtInterBold17Black900: "font-bold font-inter",
  txtInterBold30Black90002: "font-bold font-inter",
  txtInterSemiBold76: "font-inter font-semibold",
  txtInterSemiBold16Gray200: "font-inter font-semibold",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtInterSemiBold58Teal900: "font-inter font-semibold",
  txtInterMedium22Gray50001: "font-inter font-medium",
  txtInterSemiBold20Teal900: "font-inter font-semibold",
  txtInterRegular24: "font-inter font-normal",
  txtInterSemiBold20Green800: "font-inter font-semibold",
  txtInterMedium19: "font-inter font-medium",
  txtInterRegular19Gray50001: "font-inter font-normal",
  txtInterMedium19Black90002: "font-inter font-medium",
  txtInterSemiBold58Black90002: "font-inter font-semibold",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium13: "font-inter font-medium",
  txtInterRegular19Black90002: "font-inter font-normal",
  txtInterMedium16Green800: "font-inter font-medium",
  txtInterBold17: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium17: "font-inter font-medium",
  txtInterSemiBold58WhiteA700: "font-inter font-semibold",
  txtInterSemiBold20RedA70001: "font-inter font-semibold",
  txtInterMedium15Gray50002: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtInterMedium15Gray50001: "font-inter font-medium",
  txtInterRegular19: "font-inter font-normal",
  txtInterMedium16Black90002: "font-inter font-medium",
  txtInterMedium13Teal200: "font-inter font-medium",
  txtInterSemiBold20Gray50001: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium15Deeppurple300: "font-inter font-medium",
  txtInterMedium13Black90002: "font-inter font-medium",
  txtInterMedium13WhiteA700: "font-inter font-medium",
  txtInterBold30WhiteA700: "font-bold font-inter",
  txtInterSemiBold20Green300: "font-inter font-semibold",
  txtInterMedium39Black90002: "font-inter font-medium",
  txtInterMedium15Bluegray400: "font-inter font-medium",
  txtInterMedium20Black90002: "font-inter font-medium",
  txtInterMedium15Indigo400: "font-inter font-medium",
  txtInterBold29Black900: "font-bold font-inter",
  txtInterMedium15Teal20001: "font-inter font-medium",
  txtInterSemiBold16Teal900: "font-inter font-semibold",
  txtInterSemiBold16Black900: "font-inter font-semibold",
  txtInterMedium16Green300: "font-inter font-medium",
  txtInterSemiBold58: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium39: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterBold30: "font-bold font-inter",
  txtInterMedium41: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterSemiBold20Black90001: "font-inter font-semibold",
  txtInterSemiBold20Black90002: "font-inter font-semibold",
  txtInterSemiBold58Green300: "font-inter font-semibold",
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
