// Atom/Input

// ### Variables
// name              | type        | default        | options
// ------------------------------------------------------------------
// arrow               boolean       true
// disabled            boolean       false
// errorMessage        string        ""
// hintText            string        ""
// icon                string        "search"         "", "search", "credit-card", "mail", "phone", "user"
// label               string        ""
// name                string        ""
// placeholder         string        ""
// required            boolean       false
// rows                string        "4"
// successMessage      string        ""
// type                string        "text"
// value               string        ""
// variant             string        "input"          "input", "textarea"

import { useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Input = ({
  arrow = true,
  disabled = false,
  errorMessage,
  hintText,
  icon = "search",
  label,
  name,
  placeholder,
  required = false,
  rows = "4",
  successMessage,
  type = "text",
  value,
  variant = "input",
}) => {
  const borderColor = errorMessage
    ? "border-error-dark"
    : "border-background-black-line";
  const fontColor = errorMessage
    ? "text-error-dark"
    : "text-type-black-primary";

  const VariantTag = variant;
  const isInput = variant === "input";
  const isTextArea = variant === "textArea";
  const iconPresent = icon && isInput;
  type = isInput ? value : "";
  value = isInput || isTextArea ? value : "";

  const [inputVal, setInputVal] = useState(value);
  const onChangeHandler = (event) => {
    setInputVal(event.target.value);
    console.log(inputVal);
  };

  return (
    <div className="flex flex-col align-start gap-[8px]">
      <div className="flex flex-row items-center justify-between"> 
        {/* Label */}
        <label
          htmlFor={name}
          className={`flex flex-row items-center p-0 text-base font-normal ${
            disabled ? "text-type-black-deactivated" : fontColor
          }`}
        >
          {label}
          <span aria-label="required">{required && "*"}</span>
        </label>

        {/* Hint Text */}
        {hintText && (
          <p
            className={`paragraph-2 ${
              disabled
                ? "text-type-black-deactivated"
                : "text-type-black-secondary"
            }`}
          >
            {hintText}
          </p>
        )}
      </div>

      <div
        className={`flex flex-row relative border focus-within:border-button-active focus-within:w-full ${borderColor} ${
          errorMessage ? "border-error-dark" : ""
        }
       ${
         disabled
           ? "bg-button-deactivatedBackground border-type-black-deactivated"
           : "text-type-black-primary"
       } `}
      >
        {/* Input / Text Area */}
        <VariantTag
          className={`peer focus:outline-none text-sm py-[14px] px-[16px] w-full ${
            iconPresent && "pl-[48px]"
          } ${isTextArea ? "resize-none" : ""}`}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          required={required}
          rows={rows}
          type={type}
          defaultValue={inputVal}
          onChange={onChangeHandler}
        ></VariantTag>

        {/* Icon */}
        {iconPresent && (
          <FeatherIcon
            icon={icon}
            size="20"
            className={`absolute pointer-events-none left-[16px] top-[14px] peer-disabled:text-type-black-deactivated text-type-black-primary`}
          />
        )}

        {/* Arrow */}
        {arrow && isInput && (
          <FeatherIcon
            icon="arrow-right"
            className={
              "pointer-events-none mr-[16px] mt-[14px] peer-disabled:text-type-black-deactivated text-type-black-primary"
            }
          />
        )}
      </div>

      {/* Error Message */}
      {errorMessage && (
        <span className="flex items-center paragraph-2 text-error-dark">
          <FeatherIcon icon="alert-triangle" size="16" className="pr-[4px]" />
          {errorMessage}
        </span>
      )}

      {/* Success Message */}
      {successMessage && (
        <span className="flex items-center paragraph-2 text-success-dark">
          <FeatherIcon icon="check-circle" size="16" className="pr-[4px]" />
          {successMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
