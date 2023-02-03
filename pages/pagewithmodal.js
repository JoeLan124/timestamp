import React from "react";
import Modal from "../components/modal";

function pagewithmodal() {
  return (
    <div className="flex justify-center">
      <div className="flex cursor-pointer justify-center w-1/3 bg-blue-400 p-4 m-6 rounded-md text-white">
        bite me
      </div>
      <Modal />
    </div>
  );
}

export default pagewithmodal;
