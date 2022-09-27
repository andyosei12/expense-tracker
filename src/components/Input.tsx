type inputProps = {
  id: string;
  title: string;
  type: string;
  value?: string;
  testId?: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  id,
  title,
  type,
  value,
  testId,
  onChangeHandler,
}: inputProps) => {
  return (
    <p className="flex flex-col gap-3">
      <label htmlFor={id}>{title}</label>
      <input
        onChange={onChangeHandler}
        id={id}
        type={type}
        value={value}
        data-testid={testId}
        className="border border-slate-400 p-3 font-semibold focus:outline-none"
      />
    </p>
  );
};

export default Input;
