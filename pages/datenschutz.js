import React from "react";
import Image from "next/image";
import background from "../public/backgroundbrown.jpg";
import Link from "next/link";

function datenschutz() {
  return (
    <div className="">
      <div className="absolute">
        <div>
          <div className="mx-4 mt-4 bg-orange-200 p-4 rounded-md shadow-lg ">
            <p className="text-lg font-bold underline underline-offset-4">
              Datenschutzerklärung (Informationspflichten
              gemäß Art. 13 DSGVO)
            </p>

            <br />
            <p className="text-gray-600 font-bold">
              Name und Adresse des Verantwortlichen
            </p>
            <address className="mt-2 mx-2">
              <p>Johannes Langosch</p>
              <p>Im Klosterfeld 25</p>
              <p>41468 Neuss</p>

              <p className="mt-2">Deutschland</p>
            </address>
            <br />
            <p className="text-gray-600 font-bold">
              Kontaktdaten (Datenschutzbeauftragter nicht
              notwendig)
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
              {" "}
              Allgemeine Hinweise zur Datenschutzerklärung
            </p>
            <div className="mt-2 mx-4">
              <div>
                <p>
                  Verarbeitung wegen berechtigter Interessen
                  dieses Interesse
                </p>
                <p className="mt-2 mx-4">xxx</p>
              </div>
              <div>
                <p>Empfänger der Daten</p>
                <p className="mt-2 mx-4">xxx</p>
              </div>
              <div>
                <p>Übermittlung in ein Drittland</p>
                <p className="mt-2 mx-4"></p>
              </div>

              <div>
                <p>Dauer der Datenspeicherung</p>
                <p className="mt-2 mx-4"></p>
              </div>

              <div>
                <p>Hinweis auf Auskunftsrecht</p>
                <p className="mt-2 mx-4"></p>
              </div>

              <div>
                <p>
                  Hinweis auf Recht auf Speicherung,
                  Löschung, Widerspruch und Übertragung von
                  Daten
                </p>
                <p className="mt-2 mx-4"></p>
              </div>

              <div>
                <p>
                  Hinweis auf das Beschwerderecht bei einer
                  Aufsichtsbehörde
                </p>
                <p className="mt-2 mx-4"></p>
              </div>

              <div>
                <p>Allgemeiner Hinweis zu Cookies</p>
                <p className="mt-2 mx-4"></p>
              </div>

              <div>
                <p>Eingesetzte Analysesoftware</p>
                <p className="mt-2 mx-4"></p>
              </div>

              <div>
                <p>
                  Hinweis zum Retargeting, Social Plugins &
                  Co.
                </p>
                <p className="mt-2 mx-4"></p>
              </div>
            </div>

            <p className="m-2"></p>
          </div>
          <div className="flex justify-center items-center mt-12">
            <Link href="/">
              <ul className="p-4 bg-orange-200 rounded-full shadow-2xl hover:bg-orange-300">
                zurück
              </ul>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default datenschutz;
