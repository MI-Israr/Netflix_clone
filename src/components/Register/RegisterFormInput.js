const RegisterFormInput = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const hasError = error && touched;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-gray-300 mb-1">{label}</label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`py-3 px-4 rounded bg-transparent text-white outline-none w-full transition ${
          hasError
            ? "border border-red-600"
            : "border border-gray-400"
        }`}
      />

      {hasError && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default RegisterFormInput;
