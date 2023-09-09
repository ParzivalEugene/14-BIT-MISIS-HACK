"use client";

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex items-baseline gap-2">
        <h1 className="font-bold text-2xl uppercase">Misis</h1>
        <div className="rounded-lg bg-purple-700 px-2 py-1">
          <h1 className="font-bold text-2xl uppercase">Connect</h1>
        </div>
      </div>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        startContent={<MoonIcon />}
        endContent={<SunIcon />}
      />
    </header>
  );
};

export default Header;
