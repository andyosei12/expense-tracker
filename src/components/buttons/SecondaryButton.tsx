import { buttonProps } from "./PrimaryButton";

const SecondaryButton = ({ name }: buttonProps) => {
  return (
    <button className="mb-3 rounded-md border border-gray-400 px-5 py-2 hover:border-sky-500">
      {name}
    </button>
  );
};

export default SecondaryButton;
