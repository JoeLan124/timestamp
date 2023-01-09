import React from "react";
import { useState } from "react";

let today = new Date();

function form() {
  const [native, setNative] = useState("");
  let newdate = new Date();

  const getCurrentDateInput = () => {
    const dateObj = new Date();

    const month = ("0" + (dateObj.getMonth() + 1)).slice(
      -2
    );
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();

    const shortDate = `${year}-${month}-${day}`;

    return shortDate;
  };

  const onNativeChange = (e) => {
    console.log("onNativeChange: ", e.target.value);
    setNative(e.target.value);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch("/api/savedate", {
          body: JSON.stringify({
            info: native.toString(),
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
      }}>
      <div className="flex">
        <div className="flex-1 px-1 pt-2 mt-2 mr-1 ml-1">
          <div className="flex-1 mb-5">
            <div className="flex-1 mb-5">Add the date</div>
            <p>
              {new Date(
                native || today
              ).toLocaleDateString()}
            </p>
            <input
              type="date"
              onChange={onNativeChange}
              defaultValue={getCurrentDateInput()}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 mb-5">
          <button>Save the Date</button>
        </div>
      </div>
    </form>
  );
}

export default form;
