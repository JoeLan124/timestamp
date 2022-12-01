import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import prisma from "lib/prisma";
import { getDays } from "lib/data";

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
      {/* {session ? (
        <p className="text-green-500">You are logged in!</p>
      ) : (
        <p>
          You are not logged in 😞
          <a href="/api/auth/signin">Please sign in</a>
        </p>
      )} */}

      {days.map((day, index) => (
        <div key={index}>
          <p className="text-blue-500" key={index}>
            {day.singleday}
          </p>
          {day.timestamps.map((timestamp, index) => (
            <p
              className="ml-4 text-xs text-blue-800 bg-slate-400"
              key={index}>
              {timestamp.stamp}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const datefrom = "2022-11-28";
  const dateto = "2022-12-01";
  let days = await getDays(datefrom, dateto, prisma);
  days = JSON.parse(JSON.stringify(days));

  return {
    props: {
      days,
    },
  };
}
