import prisma from "lib/prisma";

export default async function handler(req, res) {
  const getDateArray = function (start, end) {
    const arr = new Array();
    const dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  };

  if (req.method !== "POST") return res.end();
  let count = 0;
  let allDates = [];

  allDates = getDateArray(
    new Date(2023, 0, 1),
    new Date(2023, 1, 31)
  );

  while (count < allDates.length) {
    await prisma.days.create({
      data: {
        singleday: allDates[count],
      },
    });
    count++;
  }
  res.end();
}
