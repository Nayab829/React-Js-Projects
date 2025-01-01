
const RadioInput = ({ id, label, name }) => (
    <div className="flex items-center mr-11">
      <input id={id} type="radio" name={name} className=" " />
      <label
        htmlFor={id}
        className="flex items-center cursor-pointer text-gray-500 text-base ml-3"
      >
       
        {label}
      </label>
    </div>
  );
export default RadioInput  