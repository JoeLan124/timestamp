import React from "react";
import { useState } from "react";

let today = new Date();

function form() {
  const [native, setNative] = useState(
    new Date().toString()
  );

  const getCurrentDateInput = () => {
    const dateObj = new Date();

    const month = ("0" + (dateObj.getMonth() + 1)).slice(
      -2
    );
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const shortDate = `${year}-${month}-${day}T${
      hours + ":" + minutes + ":" + seconds
    }`;

    return shortDate;
  };

  const onNativeChange = (e) => {
    console.log("onNativeChange: ", e.target.value);
    setNative(e.target.value);
  };

  return (
    <form
      className="bg-blue-300 text-black w-1/4 m-2 pt-1"
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch("/api/savedate", {
          body: JSON.stringify({
            info: native,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
      }}>
      <fieldset className="border border-solid border-gray-500 border-shadow-lg rounded-md  px-2 pt-0 mt-2 mx-4  ">
        <legend className="">
          <p>&nbsp; Erfassung der Zeiten: &nbsp;</p>
        </legend>

        <div className="flex">
          <div className="flex-1 px-1 pt-2 mt-2 mr-1 ml-1">
            <div className="flex-1 mb-5">
              <fieldset className="border border-solid border-gray-500 border-shadow-lg rounded-md p-3 mx-4  ">
                <legend>
                  <p>&nbsp; Datum und Zeit: &nbsp; </p>
                </legend>
                <div className="DateAndTime">
                  <input
                    type="datetime-local"
                    step="1"
                    onChange={onNativeChange}
                    defaultValue={getCurrentDateInput()}
                    className="mb-2 bg-blue-300"
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </fieldset>
      {/* <p>
        {new Date(native || today).toLocaleDateString(
          "de-DE",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }
        )}
      </p> */}

      {() => <p>{getCurrentTimeInput()}</p>}
      <div className="flex">
        <div className="flex-1 mb-5">
          <button>Save the Date</button>
        </div>
      </div>
    </form>
  );
}

export default form;
