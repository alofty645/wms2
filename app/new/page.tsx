"use client";

import { Tab } from "@headlessui/react";
import Basic from "@/components/forms/newcontact";

const Buildertabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="bg-sky-950 rounded-full m-4">
        <Tab className="text-lg font-semibold tab transition text-white rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black text-semibold ">
          + Sale
        </Tab>
        <Tab className=" text-lg font-semibold tab transition text-white rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black text-semibold ">
          + Product
        </Tab>
        <Tab className=" text-lg font-semibold tab transition text-white rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black text-semibold ">
          + Purchase Order
        </Tab>
        <Tab className=" text-lg font-semibold tab transition text-white rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black text-semibold ">
          + Contact
        </Tab>
      </Tab.List>
      <Tab.Panels className="m-2">
        <Tab.Panel>
          <Basic></Basic>
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        <Tab.Panel>
          <Basic></Basic>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Buildertabs;
