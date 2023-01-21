// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "lib/prisma";

export default async function handler(req, res) {
  if (req.method === "DELETE")
    await prisma.days.delete({
      where: { id: req.body.id },
    });
  res.end();
}
