import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        This is a home page
      </h2>
      <span className="mt-4 p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
        <Link replace href="/">
          Main Page
        </Link>
      </span>
    </div>
  );
};

export default index;
