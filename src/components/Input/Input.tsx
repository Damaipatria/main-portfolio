export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <>
      <label htmlFor={props?.id ?? ""} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        className={`${
          error
            ? "border-red-400 focus:outline-red-400"
            : "border-gray-300 focus:outline-blue-500"
        } py-1.5 px-2.5 block w-full border rounded disabled:opacity-50 disabled:pointer-events-none`}
        {...props}
      />
      {error && (
        <p className="ms-0.5 mt-1 text-red-500 text-sm font-medium">{error}</p>
      )}
    </>
  );
};
