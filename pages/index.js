import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import prisma from "lib/prisma";
import { getDays } from "lib/data";
import { format, formatISO } from "date-fns";

export default function Home({ days }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (session) {
    router.push("/home");
  }

  return (
    <div className="h-screen bg-green-500 text-red-700">
      {days.map((day, index) => (
        <div key={index}>
          <p className="text-blue-500" key={index}>
            <p></p>
            {format(new Date(day.singleday), "dd.MM.yyyy")}
            <p></p>
          </p>
          {day.timestamps.map((timestamp, index) => (
            <p
              className="ml-4 text-xs text-blue-800 bg-slate-400"
              key={index}>
              {format(
                new Date(timestamp.stamp),
                "HH:mm:ss"
              )}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const datefrom = "2022-11-29";
  const dateto = "2022-12-01";
  let days = await getDays(datefrom, dateto, prisma);
  days = JSON.parse(JSON.stringify(days));

  return {
    props: {
      days,
    },
  };
}
