import InputDesign from "./ui/Input";

interface PropsType {
  name?: string;
  type?: string;
  placeholder: string;
  title?: string;
  err?: string;
  value?: string;
  changeFn?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  disabled?: boolean;
}

function Input({
  name,
  type = "text",
  placeholder,
  title,
  err,
  value,
  changeFn,
  size = "md",
  disabled = false,
  className = "",
}: PropsType) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0 w-full max-w-[589px]">
        <label className="md:w-52 text-right" htmlFor={name}>
          {title && title + "* :"}
        </label>

        <InputDesign
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={changeFn}
          size={size}
          className={className}
          disabled={disabled}
        />
      </div>
      {err && <p className="text-error-500 text-sm">{err}</p>}
    </>
  );
}

export default Input;
