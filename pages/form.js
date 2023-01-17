import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

let today = new Date();

function TrackingData() {
  const router = useRouter();
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
      className="border border-solid border-gray-500 bg-blue-300 shadow-lg rounded-xl text-black max-w-xs m-2"
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
        router.push("/");
        return;
      }}>
      <div className="p-4">
        <fieldset className="border border-solid border-gray-500 border-shadow-lg rounded-md p-2 w-full ">
          <legend>
            <p>&nbsp; Erfassung der Zeiten: &nbsp;</p>
          </legend>

          <div className="flex">
            <div className="flex-1">
              <div className="flex-1">
                <fieldset className="border border-solid border-gray-500 border-shadow-lg rounded-md w-full p-2">
                  <legend>
                    <p>&nbsp; Datum und Zeit: &nbsp; </p>
                  </legend>
                  <div className="DateAndTime px-2 ">
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
      </div>

      {() => <p>{getCurrentTimeInput()}</p>}
      <div className="">
        <div className="flex justify-center items-center mb-2">
          <button className="bg-blue-400 rounded-lg border border-solid border-gray-500 shadow-lg p-2 cursor-pointer">
            Save the Date
          </button>
        </div>
      </div>
      {/* <p className="flex justify-center">
        {new Date(native).toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </p> */}
    </form>
  );
}

export default TrackingData;
