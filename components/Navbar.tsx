import { Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname.split("/")[1]);

  return (
    <nav className="fixed bottom-4 left-4 px-4">
      <Tabs
        aria-label="Options"
        color="secondary"
        variant="bordered"
        classNames={{
          base: "bg-[#170E27] rounded-2xl",
          tabList: "gap-12 px-6 w-full ",
          tab: "py-4 h-10",
        }}
        selectedKey={active}
        onSelectionChange={setActive}
      >
        <Tab
          key="main"
          title={
            <Link href={"/main"}>
              <div className="flex items-center gap-2 flex-col">
                <Image src="/main-grid.png" width={32} height={32} alt="grid" />
              </div>
            </Link>
          }
        />
        <Tab
          key="match"
          title={
            <Link href={"/match"}>
              <div className="flex items-center gap-2 flex-col">
                <Image
                  src="/logo.png"
                  width={32}
                  height={32}
                  alt="grid"
                />
              </div>
            </Link>
          }
        />
        <Tab
          key="me"
          title={
            <Link href={"/me"}>
              <div className="flex items-center gap-2 flex-col">
                <Image
                  src="/profile-grid.png"
                  width={32}
                  height={32}
                  alt="grid"
                />
              </div>
            </Link>
          }
        />
      </Tabs>
    </nav>
  );
};

export default Navbar;
