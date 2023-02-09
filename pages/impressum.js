import React from "react";
import Link from "next/link";

function impressum() {
  return (
    <div>
      <div className="mx-4 mt-4 bg-orange-200 p-4 rounded-md shadow-lg ">
        <p className="text-lg font-bold underline underline-offset-4">
          Impressum
        </p>
        <br />
        <p className="text-gray-600 font-bold">
          Herausgeber und Betreiber des Internetangebots:
        </p>
        <address className="mt-2 mx-2">
          <p>Johannes Langosch</p>
          <p>Im Klosterfeld 25</p>
          <p>41468 Neuss</p>

          <p className="mt-2">Deutschland</p>
        </address>
        <br />
        <p className="text-gray-600 font-bold">
          Kontaktdaten:
        </p>
        <address className="m-2">
          Email:{"  "}
          <a href="mailto:impressum.langosch@arcor.de">
            impressum.langosch@arcor.de
          </a>
          <br />
          Telefon: + 49 (0) 2131 / 5391884
        </address>
        <br />
        <p className="text-gray-600 font-bold">
          Haftung für Inhalte:
        </p>

        <p className="m-2">
          Im Sinne von § 7 Absatz 1 TMG bin ich für die
          eigenen Inhalte auf dieser Webseite
          verantwortlich. Durch §§ 8 bis einschließlich 10
          TMG bin ich aber nicht verpflichtet, gespeicherte
          oder übermittelte fremde Inhalte zu überwachen
          oder diese auf Rechtswidrigkeit zu prüfen. Das
          befreit mich jedoch nicht von der Pflicht, der
          Sperrung und Entfernung von Informationen nach
          geltenden Gesetzen nachzukommen.
        </p>
      </div>
      <div className="flex justify-center items-center mt-12">
        <Link href="/">
          <ul className="p-4 bg-orange-200 rounded-full shadow-2xl hover:bg-orange-300">
            zurück
          </ul>
        </Link>
      </div>
    </div>
  );
}

export default impressum;
