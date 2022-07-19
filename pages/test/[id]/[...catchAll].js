import React from "react";
import { useRouter } from "next/router";

const catchAll = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        This is catchAll route Example
      </h2>
      <p className="text-gray-700">{router.pathname}</p>
      <p className="text-gray-700 pb-4">{JSON.stringify(router.query)}</p>
    </div>
  );
};

export default catchAll;
