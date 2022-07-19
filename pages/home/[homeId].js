import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const homeId = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        This is dynamic home page
      </h2>
      <p className="text-gray-700">{router.pathname}</p>
      <p className="text-gray-700 pb-4">{JSON.stringify(router.query)}</p>
      <span className="mt-4 p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
        <Link href="/home">Home Page</Link>
      </span>
    </div>
  );
};

export default homeId;
