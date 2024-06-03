import React from "react";
import { AddTableTopForm } from "../_components/AddTableTopForm";

const page = () => {
  return (
    <div className="space-y-8 lg:w-[900px] mx-auto ">
      <h1 className="font-medium">Add product</h1>
      <AddTableTopForm />;
    </div>
  );
};

export default page;
