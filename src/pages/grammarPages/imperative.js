import React, { useState } from "react";

export default function Imperative() {
  return (
    <>
      <div className="w-5/6 ml-32">
        <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
          Imperative
        </h1>
        <p className="text-l mx-24 my-10 text-green-600">
          The imperative mood is crucial for giving commands, instructions, or
          requests in French. This section teaches learners how to form and use
          the imperative mood effectively in various contexts.
        </p>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Forming the Imperative Mood
          </h2>
          <ul className="text-l mx-24 my-6 text-green-600">
            <li>For regular -er verbs: Use the present tense form of the verb.</li>
            <li>For regular -ir and -re verbs: Drop the final -s from the present tense form.</li>
            <li>Irregular verbs have unique imperative forms.</li>
          </ul>

          <h2 className="text-2xl my-6 text-green-600 font-bold">Examples</h2>
          <ul className="text-l mx-24 my-6 text-green-600">
            <li>"Mange ta soupe." (Eat your soup.)</li>
            <li>"Fermez la porte." (Close the door.)</li>
            <li>"Soyez attentifs." (Be attentive.)</li>
            <li>"Écris-moi un email." (Write me an email.)</li>
            <li>"Parle plus lentement." (Speak more slowly.)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
