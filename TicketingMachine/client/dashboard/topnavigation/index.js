import { useToggle } from '../provider/context';
import Link from "next/link";

export default function TopNavigation({currentUser}) {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });
  const { toggle } = useToggle();

  return (

    <header className="bg-white h-16 items-center relative shadow w-full z-10 md:h-20 lg:rounded-2xl">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
          <div className="flex h-full left-0 relative w-3/4">
            <div className="group flex items-center h-full relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                className="text-4xl text-gray-500 focus:outline-none"
                onClick={toggle}
              >
                &#8801;
              </button>
    
            </div>

            <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center">{links}</ul>
  
          </div>


          </div>

        </div>
      </div>

    </header>
  );
}
