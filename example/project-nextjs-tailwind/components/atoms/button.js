// Atom/Button

// ### Variables
// name              | type        | default        | options
// -----------------------------------------------------------------
// arrow               string        "both"           "none", "left", "right", "both"
// disabled            boolean       false
// icon                boolean       false
// iconDir             string        "right"          "left", "right"
// iconNum             string        ""
// id                  string        ""
// isSmall             boolean       false
// text                string        ""
// variant             string        "fill"           "fill", "outline", "ghost"

import {
  ArrowLeft,
  ArrowRight,
} from "feather-icons-react/build/IconComponents";

const Button = ({
  arrow = "both",
  disabled = false,
  icon = false,
  iconDir = "right",
  iconNum,
  id,
  isSmall = false,
  onClick,
  text,
  variant = "fill",
}) => {
  const classes = {
    fill: "text-type-white-primary bg-button-active  hover:bg-button-hover disabled:text-type-white-primary disabled:bg-button-deactivated",
    outline:
      "text-button-active border-button-active border hover:text-button-hover hover:border-button-hover disabled:text-button-deactivated disabled:border-button-deactivated",
    ghost:
      "text-button-active hover:text-button-hover disabled:text-button-deactivated",
  };
  const height = isSmall ? "py-[8px]" : "py-[16px]";
  const shape = icon ? "w-[48px] h-[48px]" : "px-[24px]";

  return (
    <button
      className={`flex justify-center items-center rounded-full ${height} ${shape} ${classes[variant]}`}
      disabled={disabled}
      id={id}
      onClick={onClick}
    >
      {icon && (
        <div className="flex items-center justify-center">
          {iconNum && iconNum}
          {!iconNum && (iconDir === "right" ? <ArrowRight /> : <ArrowLeft />)}
        </div>
      )}
      {!icon && (
        <div className="flex items-center justify-center">
          {(arrow === "left" || arrow === "both") && (
            <ArrowLeft size="16" className="mr-[8px]" />
          )}
          <p className="caption">{text}</p>
          {(arrow === "right" || arrow === "both") && (
            <ArrowRight size="16" className="ml-[8px]" />
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
