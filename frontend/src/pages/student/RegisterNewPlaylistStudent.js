import React from "react";
// import { Note } from "@geist-ui/core";
import StudentNavbar from "../../components/Common/StudentNavbar/StudentNavbar";
// import useUserStore from "../../store/UserStore";
// import { useState, useEffect } from "react";

export default function RegisterNewPlaylistStudent() {
  //   let user = useUserStore((state) => state.user);
  return (
    <div className="flex-col justify-center">
      <StudentNavbar />
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-7 gap-4 my-10">Make Playlist</div>
      </div>
    </div>
  );
}
