import Card from "../components/Resources";

export default function Reading() {
  return (
    <div>
      <h1 className="montserrat mt-32 text-center pt-5 ml-5 text-6xl font-bold text-green-500">
        Reading Practice
      </h1>
      <hr class="mx-auto w-3/4 mt-10 mb-5 h-0.5 border-t-0 bg-red-500 dark:bg-white/10" />
      <div className="mx-auto w-3/4 grid grid-cols-3 gap-4 mb-5">
        <Card
          resource={{
            name: "1 Jour 1 Actu",
            description: "News site geared towards children.",
            link: "https://www.1jour1actu.com/",
          }}
        />
        <Card
          resource={{
            name: "Radio France Internationale",
            description:
              "French public radio broadcaster that offers news, analysis, and cultural programming.",
            link: "http://www.rfi.fr/fr/",
          }}
        />
        <Card
          resource={{
            name: "France 24",
            description:
              "Paris-based french news network providing global coverage.",
            link: "https://www.france24.com/en/",
          }}
        />
        <Card
          resource={{
            name: "Le Parisien",
            description:
              "French newspaper covering national and international news.",
            link: "https://www.leparisien.fr/",
          }}
        />

        <Card
          resource={{
            name: "Les Echos",
            description:
              "French business newspaper providing economic news and analysis.",
            link: "https://www.lesechos.fr/",
          }}
        />

        <Card
          resource={{
            name: "L’Equipe",
            description:
              "French sports newspaper covering sports news, analysis, and events.",
            link: "https://www.lequipe.fr/",
          }}
        />

        <Card
          resource={{
            name: "Mediapart",
            description:
              "French online investigative journal covering political and societal issues.",
            link: "https://www.mediapart.fr/",
          }}
        />

        <Card
          resource={{
            name: "Marianne",
            description:
              "French weekly magazine covering politics, society, and culture.",
            link: "https://www.marianne.net/",
          }}
        />

        <Card
          resource={{
            name: "Le Gorafi",
            description:
              "French satirical news website providing humorous articles.",
            link: "https://www.legorafi.fr/",
          }}
        />

        <Card
          resource={{
            name: "Le Canard Enchaîné",
            description:
              "French satirical newspaper known for its investigative journalism.",
            link: "https://www.lecanardenchaine.fr/",
          }}
        />
        <Card
          resource={{
            name: "Le Figaro",
            description:
              "French daily newspaper covering national and international news.",
            link: "https://www.lefigaro.fr/",
          }}
        />
        <Card
          resource={{
            name: "Le Monde",
            description:
              "French news site with a focus on global issues and geopolitics.",
            link: "https://www.lemonde.fr/",
          }}
        />
      </div>
    </div>
  );
}
