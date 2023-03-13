// Organism/Card

// ### Variables
// name              | type        | default        | options
// ------------------------------------------------------------------
// button              object        {}
// image               string        ""
// isStandard          boolean       false
// text                string        ""
// title               string        ""

import Button from "../atoms/button";

const Card = ({
  button,
  image,
  isStandard = false,
  text,
  title,
}) => {
  return (
    <div
      className={`flex flex-col gap-y-[16px] p-[16px] w-[295px] bg-background-white-base rounded-lg shadow-large ${
        isStandard ? "h-[396px]" : "max-h-[396px]"
      }`}
    >
      {image && (
        <img
          src={image}
          className="w-[263px] max-h-[160px] rounded-lg shadow-inner"
        ></img>
      )}

      <div className="mb-[16px]">
        <h6 className="h6 h6-400 pb-[4px]">{title}</h6>
        <p className="paragraph-2 text-type-black-secondary">{text}</p>
      </div>

      <div className="w-full h-[1px] mb-[16px] bg-background-white-line"></div>
      <div className="flex flex-row justify-end">
        <Button
          arrow={button.arrow}
          disabled={button.disabled}
          icon={button.icon}
          iconDir={button.iconDir}
          iconNum={button.iconNum}
          id={button.id}
          isSmall={button.isSmall}
          text={button.text}
          variant={button.variant}
        ></Button>
      </div>
    </div>
  );
};

export default Card;
