import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import prisma from "lib/prisma";
import { getDays, getDaysinDays } from "lib/data";
import { format, formatISO, parseISO } from "date-fns";
import { useState } from "react";
import Link from "next/link";
import { de } from "date-fns/locale";

export default function Home({ days, daysinDays }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [value, onChange] = useState("12:00");

  function formatDate(date, utcOffsetHrs) {
    const baseTzOffset = utcOffsetHrs * 60;
    const tzOffset = date.getTimezoneOffset();
    const d = date + (baseTzOffset + tzOffset) * 60 * 1000;
    return d;
  }

  function convertUTCDateToLocalDate(date) {
    var newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000
    );
  }

  if (status === "loading") {
    return null;
  }

  if (session) {
    router.push("/home");
  }

  // DarkMode:
  // 1) UseState darkMode and setDarkMode
  // 2) Button onClick with toogle useState
  // 3) tailwind config.css:   darkMode: "class",
  // 4) each class add dark: and normal settings

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-screen bg-green-500 dark:bg-blue-700 text-red-700">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-transparent border-1 rounded-full">
          Press me for dark mode
        </button>
        <div>
          <Link href="/form">
            <p>Eingabeformular</p>
          </Link>
        </div>
        {/* {days.map((day, index) => (
          <div key={index}>
            <p
              className="dark:text-blue-500 bg-slate-300"
              key={index}>
              <p></p>
              {format(
                new Date(day.singleday),
                "dd.MM.yyyy"
              )}
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
        ))} */}

        {daysinDays.map((day, index) => (
          <div>
            <button
              className="bg-blue-300 p-3 my-2 rounded-full"
              onClick={async () => {
                await fetch("/api/delete", {
                  body: JSON.stringify({
                    id: day.id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "DELETE",
                });
                router.reload(window.location.pathname);
              }}>
              {format(
                new Date(day.info),
                "dd.MM.yyyy HH:mm:ss",
                { locale: de }
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const datefrom = "2022-11-29";
  // const dateto = "2022-12-01";
  // let days = await getDays(datefrom, dateto, prisma);
  // days = JSON.parse(JSON.stringify(days));

  let daysinDays = await getDaysinDays(prisma);
  daysinDays = JSON.parse(JSON.stringify(daysinDays));

  return {
    props: {
      // days,
      daysinDays,
    },
  };
}
