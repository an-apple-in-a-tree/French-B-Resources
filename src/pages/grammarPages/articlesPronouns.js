import React, { useState } from "react";

export default function ArticlesPronouns() {
  return (
    <>
      <div className="w-5/6 ml-32">
        <h1 className="text-4xl my-10 text-green-600 font-bold text-center">
          Articles and Pronouns
        </h1>
        <p className="text-l mx-24 my-10 text-green-600">
          This section delves into the usage of articles, including definite and
          indefinite articles, as well as pronouns. Learners will explore the
          different types of pronouns used in French, such as subject pronouns,
          object pronouns, possessive pronouns, and more.
        </p>

        <div className="flex flex-col">
          <h2 className="text-2xl my-6 text-green-600 font-bold ml-24">
            Definite and Indefinite Articles: 
          </h2>
          <p className="text-l mx-24 my-6 text-green-600">
            <ul>
              <li>Definite Articles: le, la, les</li>
              <li>Indefinite Articles: un, une, des</li>
            </ul>
            Examples:
            <ul>
              <li>"le livre" (the book)</li>
              <li>"une maison" (a house)</li>
              <li>"les livres" (the books)</li>
              <li>"des maisons" (some houses)</li>
            </ul>
          </p>

          <h2 className="text-2xl my-6 text-green-600 font-bold ml-24">
            Pronouns: 
          </h2>
          <p className="text-l mx-24 my-6 text-green-600">
            <ul>
              <li>Subject Pronouns: je, tu, il/elle, nous, vous, ils/elles</li>
              <li>Object Pronouns: me, te, le/la, nous, vous, les</li>
              <li>Possessive Pronouns: le mien, la mienne, les miens, etc.</li>
            </ul>
            Examples:
            <ul>
              <li>"Je lis" (I read)</li>
              <li>"Elle me parle" (She talks to me)</li>
              <li>"Nous étudions" (We study)</li>
              <li>"Les miens sont ici" (Mine are here)</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
