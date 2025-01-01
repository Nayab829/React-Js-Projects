const TextInput = ({ placeholder }) => (
    <input
      type="text"
      className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
      placeholder={placeholder}
    />
  );
export default TextInput  