import React, { useState } from "react";

export default function Indicative() {
  return (
    <>
      <div className="w-5/6 ml-32">
        <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
          Indicative
        </h1>
        <p className="text-l mx-24 my-10 text-green-600">
          The indicative mood is used to express facts, opinions, and statements
          of certainty in French. Learners will delve into the conjugation and
          usage of indicative verb tenses, enabling them to communicate with
          accuracy and clarity.
        </p>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Common Indicative Tenses
          </h2>
          <p className="text-l mx-24 my-6 text-green-600">
            - Present Tense - Past Tenses: - Passé Composé - Imparfait -
            Plus-que-parfait - Future Tense - Conditional Tenses: - Present
            Conditional - Past Conditional - Past Historic (Passé Simple)
          </p>

          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Usage and Examples
          </h2>
          <p className="text-l mx-24 my-6 text-green-600">
            - Present tense for actions happening now or habitual actions. -
            Passé Composé for completed actions in the past. - Imparfait for
            ongoing or repeated actions in the past. - Plus-que-parfait for
            actions completed before another past action. - Future tense for
            actions that will happen in the future. - Conditional tenses for
            hypothetical or future actions. - Passé Simple for narrating past
            events in literature.
          </p>
        </div>
      </div>
    </>
  );
}
