const InputField = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
};

export default InputField;
