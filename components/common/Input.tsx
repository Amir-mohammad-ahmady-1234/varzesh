interface PropsType {
  name: string;
  type: string;
  placeholder: string;
  title: string;
  err?: string;
}

function Input({ name, type, placeholder, title, err }: PropsType) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0 w-full max-w-[589px]">
        <label className="md:w-52 text-right" htmlFor={name}>
          {title}*
        </label>
        <input
          className={`input input-md input-primary ${
            err && "!border-error-500"
          }`}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
      {err && <p className="text-error-500 text-sm">{err}</p>}
    </>
  );
}

export default Input;
