import { Github, GithubIcon, Menu as MenuIcon } from "lucide-react";

import { Menu, Transition } from "@headlessui/react";

import { Link, NavLink } from "@remix-run/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  return (
    <nav className="flex justify-between items-center w-full">
      <div>
        <Link
          to="/"
          className="text-3xl font-semibold text-gray-950 tracking-wide"
        >
          fabisch k.
        </Link>
      </div>
      <div className="hidden md:flex items-center divide-x divide-gray-200">
        <div className="flex space-x-4 items-center">
          {links.map((link) => (
            <NavLink
              to={link.href}
              key={link.href}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-base text-sky-500 "
                  : "font-medium text-base text-gray-950  hover:text-sky-500  transition duration-150 delay-100"
              }
              end
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="mx-3 px-3">
          <Link
            to="https://github.com/fabischkamau"
            target="_blank"
            className="hover:text-sky-500  transition duration-150 delay-100"
          >
            <Github className="size-5 text-gray-700" />
          </Link>
        </div>
      </div>

      <div className="flex md:hidden items-center space-x-3">
        <div className="flex ">
          <Menu as="div" className="relative">
            <Menu.Button>
              <MenuIcon className="text-gray-900 size-6  mt-3" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="px-1 py-1 ">
                {" "}
                <Menu.Items className="absolute right-0 mt-5 z-20 p-4 w-56 origin-top-right bg-[#FEFEFD] rounded-lg    shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-200/5 focus:outline-none">
                  {links.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={link.href}>
                      {({ active }) => (
                        <NavLink
                          to={link.href}
                          className={`${
                            active ? "text-sky-600" : "text-gray-800 "
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </div>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
