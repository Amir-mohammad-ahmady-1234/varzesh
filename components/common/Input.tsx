import InputDesign from "../../styles/ui/Input";

interface PropsType {
  name: string;
  type: string;
  placeholder: string;
  title: string;
  err?: string;
  value?: string;
  changeFn?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  name,
  type,
  placeholder,
  title,
  err,
  value,
  changeFn,
}: PropsType) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0 w-full max-w-[589px]">
        <label className="md:w-52 text-right" htmlFor={name}>
          {title}*
        </label>
        <InputDesign
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={changeFn}
        />
      </div>
      {err && <p className="text-error-500 text-sm">{err}</p>}
    </>
  );
}

export default Input;
