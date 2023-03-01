import React from "react";

import eachDayOfInterval from "date-fns/eachDayOfInterval";
import format from "date-fns/format";

function test2() {
  let allDates = [];

  const getDateArray = function (start, end) {
    const arr = new Array();
    const dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  };

  allDates = getDateArray(
    new Date(2023, 0, 1),
    new Date(2023, 11, 31)
  );

  return (
    <div>
      {allDates.map((result, index) => (
        <ul key={index}>
          {format(result, "dd.MM.yyyy HH.mm.ss")}
        </ul>
      ))}
    </div>
  );
}

export default test2;
