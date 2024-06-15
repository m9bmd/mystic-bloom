import React from "react";
import { AddTableTopForm } from "../_components/AddTableTopForm";

const page = () => {
  return (
    <div className="mx-auto space-y-8 lg:w-[900px]">
      <h1 className="font-medium">Add product</h1>
      <AddTableTopForm />
    </div>
  );
};

export default page;
