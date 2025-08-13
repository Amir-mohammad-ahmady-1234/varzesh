import { BiSearch } from "react-icons/bi";

export default function SearchFormHeader() {
  return (
    <form className="flex items-center gap-2 border border-neutral-700 rounded-md px-2 py-1">
      <input
        type="search"
        name="search"
        placeholder="جستجو..."
        className="bg-bg-primary text-neutral-50 outline-none placeholder:text-neutral-400"
      />
      <div className="bg-primary-200 p-2 rounded-sm border border-transparent hover:text-primary-200 hover:bg-bg-primary hover:border-primary-200 transition-all duration-300">
        <BiSearch className="text-neutral-400" size={20} />
      </div>
    </form>
  );
}
