import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mb-3 bg-white focus-within:ring-2 focus-within:ring-blue-500">
      <input
        type={isShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent outline-none"
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer "
      >
        {isShowPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
      </button>
    </div>
  );
};

export default PasswordInput;
