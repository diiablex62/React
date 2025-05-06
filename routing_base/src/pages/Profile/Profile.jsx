import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className='flex flex-col w-full'>
<ul className="flex p6">

        <li className="mr-3">
<NavLink to="/profile" className="text-blue-700 hover:text-blue-900">Profile</NavLink>



        </li>
</ul>


      <div className='mb-4 text-2xl text-blue-700 text-center'>
        Page de profil
      </div>
      <Outlet />
    </div>
  );
}
