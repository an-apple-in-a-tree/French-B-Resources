import "../index.css";
import React, { useState } from "react";
import ArticlesPronouns from "./grammarPages/articlesPronouns";
import Expressions from "./grammarPages/expressions";
import Imperative from "./grammarPages/imperative";
import Indicative from "./grammarPages/indicative";
import Reflexive from "./grammarPages/reflexive";
import Syntax from "./grammarPages/syntax";

export default function Grammar() {
  const [activeContent, setActiveContent] = useState(null);

  return (
    <div className="flex mt-32">
      <nav class="fixed left-0 top-0 h-full w-1/6 overflow-hidden bg-green-300">
        <div class="flex flex-col pr-4 pb-20">
          <nav className="font-bold fixed left-0 top-0 h-full w-1/6 overflow-hidden bg-green-300">
            <div className="flex flex-col pr-4 pb-20">
              <button
                className="mt-32 libre-frank ml-5 pt-10 text-white text-xl"
                onClick={() => setActiveContent(null)} // Set active content to "overview" when clicked
              >
                Overview
              </button>
              <button
                className="libre-frank ml-5 pt-10 text-white text-xl"
                onClick={() => setActiveContent(<ArticlesPronouns />)} // Set active content to ArticlesPronouns component when clicked
              >
                Articles and Pronouns
              </button>

              <button
                className="libre-frank ml-5 pt-10 text-white text-xl"
                onClick={() => setActiveContent(<Expressions />)}
              >
                Expressions
              </button>

              <button
                className="libre-frank ml-5 pt-10 text-white text-xl"
                onClick={() => setActiveContent(<Imperative />)}
              >
                Imperative
              </button>

              <button
                className="libre-frank ml-5 pt-10 text-white text-xl"
                onClick={() => setActiveContent(<Indicative />)}
              >
                Indicative
              </button>

              <button
                className="libre-frank ml-5 pt-10 text-white text-xl"
                onClick={() => setActiveContent(<Reflexive />)}
              >
                Reflexive
              </button>
              <button
                className="libre-frank ml-5 pt-10 text-white text-xl"
                onClick={() => setActiveContent(<Syntax />)}
              >
                Syntax
              </button>
            </div>
          </nav>
        </div>
      </nav>

      <div className="flex flex-col ml-60 w-full items-center justify-center ml-10">
        <h1 className="montserrat text-center pb-10 ml-5 text-6xl font-bold text-red-400">
          Grammar in French B:
        </h1>{" "}
        <main className="w-full bg-green-50 open-sans">
          {activeContent ? (
            activeContent // Render the active content
          ) : (
            <div className="overview">
              <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
                Overview
              </h1>
              <p className="text-l mx-24 my-10 text-green-600 text-center">
                The French B grammar overview aims to provide a comprehensive
                understanding of fundamental grammatical concepts in the French
                language. It covers various topics essential for learners to
                grasp to communicate effectively in French.
              </p>
              <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
                Articles and Pronouns
              </h1>
              <p className="text-l mx-24 my-10 text-green-600 text-center">
                This section delves into the usage of articles, including
                definite and indefinite articles, as well as pronouns. Learners
                will explore the different types of pronouns used in French,
                such as subject pronouns, object pronouns, possessive pronouns,
                and more.
              </p>

              <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
                Expressions
              </h1>
              <p className="text-l mx-24 my-10 text-green-600 text-center">
                Expressions play a vital role in language proficiency, and this
                segment focuses on common French expressions and idiomatic
                phrases. By learning these expressions, learners can enhance
                their conversational skills and better understand native
                speakers.
              </p>

              <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
                Imperative
              </h1>
              <p className="text-l mx-24 my-10 text-green-600 text-center">
                The imperative mood is crucial for giving commands,
                instructions, or requests in French. This section teaches
                learners how to form and use the imperative mood effectively in
                various contexts.
              </p>

              <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
                Indicative
              </h1>
              <p className="text-l mx-24 my-10 text-green-600 text-center">
                The indicative mood is used to express facts, opinions, and
                statements of certainty in French. Learners will delve into the
                conjugation and usage of indicative verb tenses, enabling them
                to communicate with accuracy and clarity.
              </p>

              <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
                Reflexive
              </h1>
              <p className="text-l mx-24 my-10 text-green-600 text-center">
                Reflexive verbs are an essential aspect of French grammar,
                indicating actions that the subject performs on itself. This
                section covers reflexive verbs' conjugation and usage, allowing
                learners to understand and use them correctly in sentences.
              </p>

              <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
                Syntax
              </h1>
              <p className="text-l mx-24 my-10 text-green-600 text-center">
                Syntax refers to the arrangement of words and phrases to create
                meaningful sentences. This segment explores French sentence
                structure, word order, and other syntactical rules, helping
                learners construct grammatically correct sentences.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
