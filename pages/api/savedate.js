// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "lib/prisma";
import { native } from "pg";

export default async function handler(req, res) {
  function convertUTCDateToLocalDate(date) {
    var newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000
    );

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }

  if (req.method !== "POST") return res.end();

  await prisma.days.create({
    data: {
      info: req.body.info,
      singleday: new Date(req.body.info),
      //nextday: new Date(req.body.info),
      nextday: convertUTCDateToLocalDate(
        new Date("2023-01-11T18:02:00.000Z")
      ),
    },
  });
  res.end();
}
