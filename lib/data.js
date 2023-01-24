// export const getDays = async (datefrom, dateto, prisma) => {
//   const days = await prisma.day.findMany({
//     where: {
//       singleday: {
//         gte: new Date(datefrom),
//         lt: new Date(dateto),
//       },
//     },

//     orderBy: [
//       {
//         id: "asc",
//       },
//     ],
//     include: {
//       timestamps: true,
//     },
//   });

//   return days;
// };

export const getDaysinDays = async (prisma) => {
  const days = await prisma.days.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return days;
};

export const getDatesInRange = async (
  startDate,
  endDate
) => {
  const start = new Date(new Date(startDate));
  const end = new Date(new Date(endDate));
  // const start = new Date(new Date(startDate).setUTCHours(0, 0, 0, 0));
  // const end = new Date(new Date(endDate).setUTCHours(0, 0, 0, 0));

  const date = new Date(start.getTime());

  const dates = [];

  while (date <= end) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
};
