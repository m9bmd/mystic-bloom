import React from "react";

import NoItems from "../_components/NoItems";

const page = async () => {
  return (
    <div className=" space-y-8">
      <h2 className="text-xl font-medium">Inventory</h2>
      <NoItems
        name="products"
        description="You can start selling as soon as you add a product"
        buttonName="products"
      />
    </div>
  );
};

export default page;
