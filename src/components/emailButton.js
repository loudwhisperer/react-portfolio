import React from "react";

export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="bg-indigo-600 py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600"
    >
      {children}
    </button>
  );
}
