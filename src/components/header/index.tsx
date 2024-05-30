import Link from "next/link";

const Header = () => {
  return (
    <header className="px-10 h-14 text-gray-600	flex justify-between">
      <ul className="flex py-4">
        <li className="pr-4">
          <Link href="/games">Games</Link>
        </li>
        <li className="pr-4">
          <Link href="/about">About</Link>
        </li>
        <li className="pr-4">
          <Link href="/blog/hello-world">Blog</Link>
        </li>
      </ul>
      <div className="flex w-6/12">
        <form className="py-2 w-6/12">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div className="auth-block flex justify-end w-6/12">
          <Link className="mr-2" href="http://localhost:3999/api/auth/signin">
            Next Auth
          </Link>
          <Link className="mr-2" href="/login">
            Login
          </Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
