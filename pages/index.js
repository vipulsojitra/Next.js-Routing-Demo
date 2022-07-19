import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const blog = [
    {
      id: "1",
      value: "Vipul_blog",
    },
    {
      id: "2",
      value: "John_blog",
    },
  ];

  const handleRoute = () => {
    router.push({
      pathname: "test/[id]/[BlogId]",
      query: { id: "1", BlogId: "2" },
    });
  };

  return (
    <>
      <div className="header-2 pt-4">
        <nav className="bg-indigo-100 py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-indigo-600">
                Navigate To Dynamic Routes
              </span>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
              <span className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
                <Link href="/home">Home</Link>
              </span>
              <span className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
                <Link href="/home/Vipul_home">Vipul's Home</Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-2 pt-4">
        <nav className="bg-indigo-100 py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-indigo-600">
                Navigate To Dynamic Routes {">"} Blog Route
              </span>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
              <span className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
                <Link href="/blog">Blog</Link>
              </span>
              {blog.map((blog) => (
                <span
                  key={blog.id}
                  className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                >
                  <Link href={`/blog/${blog.value}`}>{blog.value}</Link>
                </span>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className="header-2 pt-4">
        <nav className="bg-indigo-100 py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-indigo-600">
                Navigate To Dynamic Routes {">"} Blog Route {">"} Using Pathname
                and Query Properties
              </span>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
              <span
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                <Link href="/blog">Blog</Link>
              </span>
              {blog.map((blog) => (
                <span
                  key={blog.id}
                  className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                >
                  <Link
                    href={{ pathname: "/blog/[id]", query: { id: blog.value } }}
                  >
                    {blog.value}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className="header-2 pt-4">
        <nav className="bg-indigo-100 py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-indigo-600">
                Navigating Programmatically [ using router.push and
                router.replace ]
              </span>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
              <button
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                onClick={handleRoute}
              >
                Click Me!!
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
