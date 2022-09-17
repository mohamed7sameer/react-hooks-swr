import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";


function NavBar() {
const router = useRouter();
  return (
    <div>
    <nav className="flex  justify-center shadow-lg mb-6 bg-gray-900">
      <Link href="/">
        <a
          className={` py-4 px-6 block hover:text-yellow-500 focus:outline-none  border-b-2 font-medium mx-2  ${
            router.pathname == "/"
              ? "text-yellow-500 border-yellow-500"
              : "text-gray-600 border-gray-600"
          } `}
        >
          Home
        </a>
      </Link>
      <Link href="/todos">
        <a
          className={` py-4 px-6 block hover:text-yellow-500 focus:outline-none  border-b-2 font-medium mx-2  ${
            router.pathname == "/todos"
              ? "text-yellow-500 border-yellow-500"
              : "text-gray-600 border-gray-600"
          } `}
        >
          Todos
        </a>
      </Link>
    </nav>
  </div>
  )
}

export default NavBar
