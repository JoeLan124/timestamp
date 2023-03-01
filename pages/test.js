import { setDate } from "date-fns";
import React from "react";

function test() {
  const e = new Date();
  e.setHours(0, 0, 0, 0);

  const today = new Date();

  const tomorrow = new Date(today);
  tomorrow.setDate(e.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const tomorrow2 = new Date(today);
  tomorrow2.setDate(e.getDate() + 4);
  tomorrow2.setHours(0, 0, 0, 0);

  const dateSet = [e, tomorrow];

  const dayin3days = new Date(today);
  dayin3days.setDate(e.getDate() + 1);
  dayin3days.setHours(0, 0, 0, 0);

  dateSet.push(dayin3days);
  console.log(dateSet);

  const dayinxxdays = new Date(today);
  dayinxxdays.setDate(e.getDate() + 1);
  dayinxxdays.setHours(0, 0, 0, 0);

  function isInArray(array, value) {
    return !!array.find((item) => {
      return item.getTime() == value.getTime();
    });
  }

  console.log(isInArray(dateSet, tomorrow2));

  return <div>test</div>;
}

export default test;
