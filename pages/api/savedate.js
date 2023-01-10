// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.end();

  await prisma.days.create({
    data: {
      info: req.body.info,
      singleday: new Date(req.body.info),
    },
  });
  res.end();
}
