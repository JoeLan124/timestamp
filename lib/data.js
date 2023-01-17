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
