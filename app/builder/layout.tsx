"use client";

import { Tab } from "@headlessui/react";

const Buildertabs = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab className=" text-lg font-semibold tab transition text-white rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black text-semibold ">
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
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Buildertabs;
