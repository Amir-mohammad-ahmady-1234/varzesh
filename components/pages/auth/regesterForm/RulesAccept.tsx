import InputDesign from "../../../common/ui/Input";

function RulesAccept({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center space-x-2 self-auto max-w-[589px]">
      <label className="w-full" htmlFor="rules">شرایط و قوانین استفاده از سایت را میپذیرم</label>
      <InputDesign
        type="checkbox"
        id="rules"
        className="cursor-pointer appearance-none size-7 border-2 border-primary-100 !rounded-md transition duration-400 checked:bg-primary-200 checked:border-neutral-800"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}

export default RulesAccept;
