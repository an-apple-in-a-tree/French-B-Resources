import React, { useState } from "react";

export default function Reflexive() {
  return (
    <>
      <div className="w-5/6 ml-32">
        <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
          Reflexive
        </h1>
        <p className="text-l mx-24 my-10 text-green-600">
          Reflexive verbs are an essential aspect of French grammar, indicating
          actions that the subject performs on itself. This section covers
          reflexive verbs' conjugation and usage, allowing learners to
          understand and use them correctly in sentences.
        </p>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Conjugation of Reflexive Verbs
          </h2>
          <ul className="text-l mx-24 my-6 text-green-600">
            <li>Reflexive pronouns: me, te, se, nous, vous, se</li>
            <li>Conjugation: Add reflexive pronoun before the verb and conjugate the verb normally.</li>
          </ul>

          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Usage and Examples
          </h2>
          <ul className="text-l mx-24 my-6 text-green-600">
            <li>Reflexive verbs indicate actions performed by the subject on itself.</li>
            <li>Common reflexive verbs: se laver (to wash oneself), se lever (to get up), s'habiller (to dress oneself).</li>
            <li>Example sentences:
              <ul>
                <li>"Je me lave les mains." (I wash my hands)</li>
                <li>"Elle se réveille tôt." (She wakes up early)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
