// ServerNavbar.jsx
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Navbar from "./Navbar";

const ServerNavbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return <Navbar isAdmin={isAdmin} user={user} />;
};

export default ServerNavbar;
