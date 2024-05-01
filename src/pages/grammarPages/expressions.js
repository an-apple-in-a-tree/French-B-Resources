import React, { useState } from "react";

export default function Expressions() {
  return (
    <>
      <div className="w-5/6 ml-32">
        <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
          Expressions
        </h1>
        <p className="text-l mx-24 my-10 text-green-600">
          Expressions play a vital role in language proficiency, and this
          segment focuses on common French expressions and idiomatic phrases. By
          learning these expressions, learners can enhance their conversational
          skills and better understand native speakers.
        </p>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Common French Expressions
          </h2>
          <p className="text-l mx-24 my-6 text-green-600">
            <ul>
              <li>"Bonjour" (Hello)</li>
              <li>"Merci" (Thank you)</li>
              <li>"S'il vous plaît" (Please)</li>
              <li>"Excusez-moi" (Excuse me)</li>
              <li>"Ça va?" (How are you?)</li>
              <li>"À bientôt" (See you soon)</li>
            </ul>
          </p>

          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Idiomatic Phrases
          </h2>
          <p className="text-l mx-24 my-6 text-green-600">
            <ul>
              <li>"Avoir le cafard" (To feel blue)</li>
              <li>"Tomber dans les pommes" (To faint)</li>
              <li>"Casser les pieds à quelqu'un" (To annoy someone)</li>
              <li>"Être dans la lune" (To be daydreaming)</li>
              <li>"Passer un coup de fil" (To make a phone call)</li>
              <li>
                "Avoir le coup de foudre" (To fall in love at first sight)
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
