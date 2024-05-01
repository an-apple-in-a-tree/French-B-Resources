export default function Home() {
  return (
    <>
      <header className="w-full font-bold bg-header h-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-8xl">Bienvenue!</h1>
        <p className="open-sans text-white text-center text-xl">
          ⬇️ Let's get through french class together...
        </p>
      </header>

      <div className="w-3/4 mx-auto my-5 red-hat">
        <p className="text-green-500 font-semibold">
          This website contains learning resourches for students in IB French
          B! You can browse resources by clicking on the navigation bar from
          above.
        </p>

        <hr class="mx-auto w-full mt-5 mb-10 h-0.5 border-t-0 bg-green-500 dark:bg-white/10" />

        <h1 class="text-4xl my-10 text-green-600 font-bold text-center">
          Language B Course Guide Extract
        </h1>
        <h2 class="montserrat mt-5 text-3xl text-green-500 font-extrabold mb-3">Themes:</h2>
        
        <main class="montserrat p-10 pt-5 border-green-500 bg-green-50">
          <p className="font-semibold text-green-500">
            Five prescribed core themes below provide relevant contexts for study of
            French (adapted from 2020 IB Language B Guide):
          </p>
          <ol class="list-decimal pl-8 text-green-600 mt-5 font-bold">
            <li class="pb-4">
              Identities
              <ul class="font-normal list-disc pl-8 text-green-500">
                <li class="pb-1">
                  Explore the nature of the self and what it is to be human.
                </li>
                <li class="pb-1">Lifestyles</li>
                <li class="pb-1">Health and wellbeing</li>
                <li class="pb-1">Beliefs and values</li>
                <li class="pb-1">Subcultures</li>
                <li class="pb-1">Language and identity</li>
                <li class="pb-1">What constitutes an identity?</li>
                <li class="pb-1">How do we express our identity?</li>
                <li class="pb-1">
                  What ideas and images do we associate with a healthy
                  lifestyle?
                </li>
                <li class="pb-1">
                  How do language and culture contribute to form our identity?
                </li>
              </ul>
            </li>
            <li class="pb-4">
              Experiences
              <ul class="font-normal list-disc pl-8 text-green-500">
                <li class="pb-1">
                  Explore and tell the stories of the events, experiences, and
                  journeys that shape our lives.
                </li>
                <li class="pb-1">Leisure activities</li>
                <li class="pb-1">Holidays and travel</li>
                <li class="pb-1">Life stories</li>
                <li class="pb-1">Rites of passage</li>
                <li class="pb-1">Customs and traditions</li>
                <li class="pb-1">Migration</li>
                <li class="pb-1">How does travel broaden our horizons?</li>
                <li class="pb-1">
                  How does our past shape our present and our future?
                </li>
                <li class="pb-1">
                  How and why do different cultures mark important moments in
                  life?
                </li>
                <li class="pb-1">
                  How would living in another culture affect our worldview?
                </li>
              </ul>
            </li>
            <li class="pb-4">
              Human Ingenuity
              <ul class="font-normal list-disc pl-8 text-green-500">
                <li class="pb-1">
                  Explore the ways in which human creativity and innovation
                  affect our world.
                </li>
                <li class="pb-1">Entertainment</li>
                <li class="pb-1">Artistic expressions</li>
                <li class="pb-1">Communication and media</li>
                <li class="pb-1">Technology</li>
                <li class="pb-1">Scientific innovation</li>
                <li class="pb-1">
                  How do developments in science and technology influence our
                  lives?
                </li>
                <li class="pb-1">
                  How do the arts help us understand the world?
                </li>
                <li class="pb-1">
                  What can we learn about a culture through its artistic
                  expression?
                </li>
                <li class="pb-1">
                  How do the media change the way we relate to each other?
                </li>
              </ul>
            </li>
            <li class="pb-4">
              Social Organization
              <ul class="font-normal list-disc pl-8 text-green-500">
                <li class="pb-1">
                  Explore the ways in which groups of people organize
                  themselves, or are organized, through common systems or
                  interests.
                </li>
                <li class="pb-1">Social relationships</li>
                <li class="pb-1">Community</li>
                <li class="pb-1">Social engagement</li>
                <li class="pb-1">Education</li>
                <li class="pb-1">The working world</li>
                <li class="pb-1">Law and order</li>
                <li class="pb-1">
                  What is the individual’s role in the community?
                </li>
                <li class="pb-1">
                  What role do rules and regulations play in the formation of a
                  society?
                </li>
                <li class="pb-1">What role does language play in a society?</li>
                <li class="pb-1">
                  What opportunities and challenges does the 21st-century
                  workplace bring?
                </li>
              </ul>
            </li>
            <li class="pb-4">
              Sharing the Planet
              <ul class="font-normal list-disc pl-8 text-green-500">
                <li class="pb-1">
                  Explore the challenges and opportunities faced by individuals
                  and communities in the modern world.
                </li>
                <li class="pb-1">The environment</li>
                <li class="pb-1">Human rights</li>
                <li class="pb-1">Peace and conflict</li>
                <li class="pb-1">Equality</li>
                <li class="pb-1">Globalization</li>
                <li class="pb-1">Ethics</li>
                <li class="pb-1">Urban and rural environment</li>
                <li class="pb-1">
                  What environmental and social issues present challenges to the
                  world, and how can these challenges be overcome?
                </li>
                <li class="pb-1">
                  What ethical issues arise from living in the modern world, and
                  how do we resolve them?
                </li>
                <li class="pb-1">
                  What challenges and benefits does globalization bring?
                </li>
                <li class="pb-1">
                  What challenges and benefits result from changes in urban and
                  rural environments?
                </li>
              </ul>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
}
