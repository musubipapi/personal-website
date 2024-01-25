"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import CoffeeCanvas from "@/components/CoffeeCanvas";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FC, useEffect, useMemo, useState } from "react";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(25), 250);
    const timer2 = setTimeout(() => setProgress(50), 500);
    const timer3 = setTimeout(() => setProgress(100), 1000);
    const timer4 = setTimeout(() => setActive(false), 1250);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      {active && (
        <div className="w-full">
          <span className="font-serif">Brewing...</span>
          <Progress value={progress} className="w-full" />
        </div>
      )}
      {!active && <span className="font-serif text-lg font-bold">Enjoy!</span>}
    </>
  );
}

const Coffee: FC = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [coffee, setCoffee] = useState("");

  const TITLE = useMemo(() => {
    return <span className="font-serif text-xl">What would you like?</span>;
  }, []);

  const Loader = useMemo(() => {
    return <div>{coffee && <ProgressBar />}</div>;
  }, [coffee]);

  const CoffeeSelection = useMemo(() => {
    if (coffee) return null;
    return (
      <div className="flex space-x-4 font-serif">
        <span
          onClick={() => setCoffee("espresso")}
          className="hover:underline cursor-pointer"
        >
          Espresso
        </span>
        <span
          onClick={() => setCoffee("iced americano")}
          className="hover:underline cursor-pointer"
        >
          Iced Americano
        </span>
        <span
          onClick={() => setCoffee("latte")}
          className="hover:underline cursor-pointer"
        >
          Latte
        </span>
      </div>
    );
  }, [coffee]);

  useEffect(() => {
    const timer = setTimeout(() => setCoffee(""), 100);
    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <>
      {isDesktop && (
        <Dialog
          open={open}
          onOpenChange={() => {
            setOpen(!open);
          }}
        >
          <DialogTrigger asChild>
            <span className="text-orange-800 cursor-pointer hover:font-extrabold dark:text-orange-400">
              coffee
            </span>
          </DialogTrigger>
          .
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>{TITLE}</DialogTitle>
            </DialogHeader>
            {CoffeeSelection}
            <CoffeeViewer coffee={coffee} />
            {Loader}
          </DialogContent>
        </Dialog>
      )}

      {!isDesktop && (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <span className="text-orange-800 cursor-pointer hover:font-extrabold dark:text-orange-400">
              coffee
            </span>
          </DrawerTrigger>
          .
          <DrawerContent className="mb-8 focus:outline-none">
            <DrawerHeader className="text-left">
              <DrawerTitle>{TITLE}</DrawerTitle>
            </DrawerHeader>
            <div className="ml-4 mb-4">{CoffeeSelection}</div>
            <CoffeeViewer coffee={coffee} />
            <div className="px-4">{Loader}</div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

interface ICoffeeViewer {
  coffee?: string;
}

const CoffeeViewer: FC<ICoffeeViewer> = ({ coffee }) => {
  return (
    <div>
      <CoffeeCanvas coffee={coffee} />
    </div>
  );
};

export default Coffee;
