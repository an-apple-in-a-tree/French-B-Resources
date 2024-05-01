import React, { useState } from "react";

export default function Syntax() {
  return (
    <>
      <div className="w-5/6 ml-32">
        <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
          Syntax
        </h1>
        <p className="text-l mx-24 my-10 text-green-600">
          Syntax refers to the arrangement of words and phrases to create
          meaningful sentences. This segment explores French sentence structure,
          word order, and other syntactical rules, helping learners construct
          grammatically correct sentences.
        </p>

        <div className=" mx-24 flex flex-col">
          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Sentence Structure
          </h2>
          <ul className="text-l mx-24 my-6 text-green-600">
            <li>Subject-Verb-Object (SVO) structure is common in French sentences.</li>
            <li>Adjectives usually come after the noun they describe.</li>
            <li>Adverbs typically come after the verb they modify.</li>
          </ul>

          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Word Order and Pronouns
          </h2>
          <ul className="text-l mx-24 my-6 text-green-600">
            <li>Direct and indirect object pronouns usually come before the verb.</li>
            <li>Reflexive pronouns come before the verb in simple tenses but after the auxiliary verb in compound tenses.</li>
          </ul>

          <h2 className="text-2xl my-6 text-green-600 font-bold">
            Other Syntactical Rules
          </h2>
          <ul className="text-l mx-24 my-6 text-green-600">
            <li>Inversion is used in questions and after certain adverbs.</li>
            <li>Relative clauses usually follow the main clause.</li>
            <li>Coordinating conjunctions connect two independent clauses.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
