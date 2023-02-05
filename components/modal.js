import React from "react";

const modal = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className=" opacity-80 bg-gray-100 backdrop-blur-sm   fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-orange-200 py-12 px-24 border-4 border-white rounded-xl">
          <div className="flex text-lg mb-10">
            Are you sure?
          </div>
          <div className="flex">
            <button
              className="rounded px-4 py-2 text-white bg-orange-300"
              onClick={handleOKClick}>
              Yes
            </button>
            <button
              className="rounded px-4 py-2 ml-4 text-white bg-orange-500"
              onClick={handleCancelClick}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
