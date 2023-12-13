import { UserButton, currentUser } from "@clerk/nextjs";

const Header = async () => {

  const user = await currentUser();

  return (
    <header className="fixed w-full bg-gray-100 p-2">
      <nav>
        <ul className="flex justify-between">
          <li><a href="/" className="no-underline text-black hover:bg-gray-300 px-4 py-2">Home</a></li>
          <li><a href="/about" className="no-underline text-black hover:bg-gray-300 px-4 py-2">About</a></li>
          <li><a href="/settings" className="no-underline text-black hover:bg-gray-300 px-4 py-2">Settings</a></li>
          <li className="ml-auto "><UserButton afterSignOutUrl="/"/></li>
        </ul>
      </nav>
    </header>
  );

}

export default Header;