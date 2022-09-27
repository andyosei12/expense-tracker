export type buttonProps = {
  name: string;
  type?: string;
};

const PrimaryButton = ({ name }: buttonProps) => {
  return (
    <button className="rounded-md bg-[#006D77] px-5 py-1 text-lg font-bold text-white transition-all duration-300 hover:bg-[#006D77]/70 hover:shadow-lg">
      {name}
    </button>
  );
};

export default PrimaryButton;
