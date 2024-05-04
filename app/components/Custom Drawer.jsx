import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Link from "next/link";
import Image from "next/image";

export default function CustomDrawer() {
  const navigationItems = ["Experience", "Skills", "Projects", "Contact"];
  const navigationLinks = ["/experience", "/skills", "/projects", "/contact"];
  return (
    <Drawer>
      <DrawerTrigger>
        <Image
          src={"/images/sami avatar.png"}
          alt="Sami Avatar"
          width={50}
          height={50}
        ></Image>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu Items</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          {navigationItems.map((navigationItem, index) => {
            return (
              <DrawerClose asChild key={index}>
                <Link href={navigationLinks[index]}>{navigationItem}</Link>
              </DrawerClose>
            );
          })}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
