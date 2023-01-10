import React from "react";

function form2() {
  return (
    <div>
      <button
        className="border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker"
        onClick={async () => {
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
        Save String
      </button>
    </div>
  );
}

export default form2;
