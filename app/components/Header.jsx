import Image from "next/image";
import CustomDrawer from "./Custom Drawer";
import Link from "next/link";

export default function Header() {
  const navigationItems = ["Experience", "Skills", "Projects", "Contact"];
  const navigationLinks = ["/experience", "/skills", "/projects", "/contact"];
  return (
    <header className="bg-white flex items-center h-[10dvh] text-sm font-bold">
      <div className="flex-1 h-full flex items-center pl-4 md:pl-8">
        <div className="flex items-center space-x-2">
          <Image
            src={"/images/mail.png"}
            alt="Sammi email address"
            width={30}
            height={30}
          ></Image>
          <a
            className="font-sm md:font-medium"
            href="mailto:mail.mrsami@gmail.com"
          >
            mail.mrsami@gmail.com
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex-1 h-full flex items-center justify-end pr-8">
          <ul className="flex space-x-12">
            {navigationItems.map((navigationItem, currentIndex) => {
              return (
                <li key={currentIndex}>
                  <Link href={navigationLinks[currentIndex]}>
                    {navigationItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="md:hidden pr-4">
        <CustomDrawer />
      </div>
    </header>
  );
}
