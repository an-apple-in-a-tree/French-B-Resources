import Card from "../components/Resources";

export default function Reading() {
  return (
    <div>
      <h1 className="montserrat mt-32 text-center pt-5 ml-5 text-6xl font-bold text-green-500">
        Listening Practice
      </h1>
      <hr class="mx-auto w-3/4 my-10 h-0.5 border-t-0 bg-red-500 dark:bg-white/10" />
      <div className="mx-auto w-3/4 grid grid-cols-3 gap-4 mb-28">
        <Card
          resource={{
            name: "Le Francais Facile avec rfi",
            description:
              "Listening exercises for level B1 which corresponds with IB SL curriculum level.",
            link: "https://francaisfacile.rfi.fr/en/exercices/b1/",
          }}
        />
        <Card
          resource={{
            name: "ActuFLE",
            description:
              "A collection of resources for French as a Foreign Language learners.",
            link: "https://actufle.univ-lille.fr/",
          }}
        />

        <Card
          resource={{
            name: "Audio-Lingua",
            description:
              "A platform providing audio recordings in various languages, including French.",
            link: "https://audio-lingua.ac-versailles.fr/spip.php?article6",
          }}
        />

        <Card
          resource={{
            name: "Bonjour de France",
            description:
              "A website offering interactive exercises and resources for French learners.",
            link: "https://www.bonjourdefrance.com",
          }}
        />

        <Card
          resource={{
            name: "Cap sur le FLE!",
            description:
              "Exercises and resources focusing on listening comprehension for French learners.",
            link: "https://capsurlefle.com/tag/comprehension-orale/",
          }}
        />

        <Card
          resource={{
            name: "Compréhensions orales pour Français FLE sur vidéos",
            description:
              "Listening comprehension exercises for French as a Foreign Language learners using videos.",
            link: "https://francais-mahel.blogspot.com/2017/05/comprehension.orale.FLE.html",
          }}
        />

      </div>
    </div>
  );
}
