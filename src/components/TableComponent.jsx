import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { usePasswords } from "./db";

const TableComponent = () => {
  const passwords = usePasswords();
  const [visiblePasswords, setVisiblePasswords] = useState([]);

  const togglePasswordVisibility = (id) => {
    if (visiblePasswords.includes(id)) {
      setVisiblePasswords(
        visiblePasswords.filter((visibleId) => visibleId !== id)
      );
    } else {
      setVisiblePasswords([...visiblePasswords, id]);
    }
  };

  const isPasswordVisible = (id) => visiblePasswords.includes(id);

  return (
    <table className="min-w-full divide-y divide-blue-600 mt-4 mx-auto border-2 border-sky-800 rounded-lg">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-blue-600 uppercase tracking-wider w-10">
            ID
          </th>
          <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-blue-600 uppercase tracking-wider w-10">
            Website
          </th>
          <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-blue-600 uppercase tracking-wider w-10">
            Password
          </th>
          <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-blue-600 uppercase tracking-wider w-10">
            Created On
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {passwords &&
          passwords.map((password) => (
            <tr key={password.id}>
              <td className="px-6 py-4 whitespace-nowrap">{password.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {password.website}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {isPasswordVisible(password.id) ? (
                  <>
                    {password.password}
                    <button
                      className="mx-2 text-sky-600 focus:outline-none"
                      onClick={() => togglePasswordVisibility(password.id)}
                    >
                      <AiOutlineEyeInvisible size={24} />
                    </button>
                  </>
                ) : (
                  <button
                    className="mx-2 text-sky-600 focus:outline-none"
                    onClick={() => togglePasswordVisibility(password.id)}
                  >
                    <AiOutlineEye size={24} />
                  </button>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {Intl.DateTimeFormat(navigator.language, {
                   year: 'numeric',
                   month: '2-digit',
                   day: '2-digit',
                   hour: 'numeric',
                   minute: 'numeric',
                   second: 'numeric',
                   hour12: false,
                   timeZoneName: 'short'
                }).format(new Date(password.createdOn))}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
