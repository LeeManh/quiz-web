const quizs = [
  {
    id: 1,
    title: "Arts & Literature",
    time: 300,
    maxPoint: 500,
    ratings: 3,
    difficulty: "easy",
    questions: [
      {
        id: "622a1c397cc59eab6f950eab",
        correctAnswer: "J. K. Rowling",
        incorrectAnswers: [
          "Christopher Tolkien",
          "Philip Pullman",
          "C. S. Lewis",
        ],
        question:
          "Which author wrote 'Harry Potter and the Order of the Phoenix'?",
      },
      {
        id: "622a1c397cc59eab6f950f96",
        correctAnswer: "William Shakespeare",
        incorrectAnswers: ["Arthur C. Clarke", "Isaac Newton", "Enid Blyton"],
        question: "Which author wrote 'A Midsummer Night's Dream'?",
      },
      {
        id: "622a1c3e7cc59eab6f95225a",
        correctAnswer: "The Owl",
        incorrectAnswers: ["The Robin", "The Swan", "The Albatross"],
        question: "In Edward Lear's poem, which bird sang to the pussycat?",
      },
      {
        id: "622a1c397cc59eab6f950eae",
        correctAnswer: "J. K. Rowling",
        incorrectAnswers: [
          "Christopher Tolkien",
          "Philip Pullman",
          "C. S. Lewis",
        ],
        question: "Which author wrote 'Harry Potter and the Goblet of Fire'?",
      },
      {
        id: "622a1c3a7cc59eab6f951373",
        correctAnswer: "The Lord of the Rings",
        incorrectAnswers: ["Harry Potter", "Red Rising", "The Hunger Games"],
        question: "In which book series does 'Frodo Baggins' appear?",
      },
      {
        id: "622a1c397cc59eab6f950ebe",
        correctAnswer: "J. K. Rowling",
        incorrectAnswers: [
          "Christopher Tolkien",
          "Philip Pullman",
          "C. S. Lewis",
        ],
        question: "Which author wrote 'Harry Potter'?",
      },
      {
        id: "622a1c397cc59eab6f950f39",
        correctAnswer: "J. R. R. Tolkien",
        incorrectAnswers: ["G. K. Chesterton", "Philip Pullman", "C. S. Lewis"],
        question: "Which author wrote 'The Lord of the Rings'?",
      },
      {
        id: "622a1c3d7cc59eab6f951c9b",
        correctAnswer: "Charles Dickens",
        incorrectAnswers: ["Thomas Hardy", "Jane Austen", "Edgar Allen Poe"],
        question: "Who was the author of 'A Christmas Carol'?",
      },
      {
        id: "622a1c397cc59eab6f950ead",
        correctAnswer: "J. K. Rowling",
        incorrectAnswers: [
          "Christopher Tolkien",
          "Philip Pullman",
          "C. S. Lewis",
        ],
        question:
          "Which author wrote 'Harry Potter and the Philosopher's Stone'?",
      },
      {
        id: "622a1c397cc59eab6f950eb1",
        correctAnswer: "J. K. Rowling",
        incorrectAnswers: [
          "Christopher Tolkien",
          "Philip Pullman",
          "C. S. Lewis",
        ],
        question:
          "Which author wrote 'Harry Potter and the Chamber of Secrets'?",
      },
    ],
  },
  {
    id: 2,
    title: "Film & TV",
    time: 300,
    maxPoint: 250,
    ratings: 3,
    difficulty: "medium",
    questions: [
      {
        id: "62573efd9da29df7b05f7380",
        correctAnswer:
          "A man becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        incorrectAnswers: [
          "In order to power the city, beasts have to scare children so that they scream.",
          "A girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
          "King Arthur and his Knights embark on a search for a religious relic.",
        ],
        question: "What is the plot of the movie Schindler's List?",
      },
      {
        id: "62573f009da29df7b05f7381",
        correctAnswer: "The Matrix",
        incorrectAnswers: ["Pulp Fiction", "Forrest Gump", "Joker"],
        question:
          "Name the movie that matches the following plot summary: 'A hacker discovers the life he knows is the elaborate deception of an evil cyber-intelligence.'",
      },
      {
        id: "622a1c377cc59eab6f950731",
        correctAnswer: "Leonardo DiCaprio",
        incorrectAnswers: ["Ralph Fiennes", "Brian Cox", "Kiefer Sutherland"],
        question:
          "Which actor has featured in films including Titanic and Inception?",
      },
      {
        id: "625740839da29df7b05f73e3",
        correctAnswer:
          "After his son is captured and taken to Sydney, a clownfish sets out on a journey to bring him home.",
        incorrectAnswers: [
          "A prince cursed to spend his days as a monster sets out to regain his humanity.",
          "After he becomes a quadriplegic, an aristocrat hires a young man to be his caregiver.",
          "A high school student is sent thirty years into the past in a time-traveling car.",
        ],
        question: "What is the plot of the movie Finding Nemo?",
      },
      {
        id: "622a1c377cc59eab6f95077c",
        correctAnswer: "Christian Bale",
        incorrectAnswers: ["Keanu Reeves", "Dan Aykroyd", "Donald Sutherland"],
        question: "Which actor played Batman in the Dark Knight trilogy?",
      },
    ],
  },
  {
    id: 3,
    title: "Geography",
    time: 300,
    maxPoint: 500,
    ratings: 3,
    difficulty: "hard",
    questions: [
      {
        id: "6237413acb85f7ce9e949d50",
        correctAnswer: "Antananarivo",
        incorrectAnswers: ["Nicosia", "Naypyidaw", "Ngerulmud"],
        question: "What is the capital city of Madagascar?",
      },
      {
        id: "623388720161109f922aac89",
        correctAnswer: "Western Australia ",
        incorrectAnswers: ["Victoria", "Queensland", "Tasmania"],
        question: "Which Is The Largest State In Australia",
      },
      {
        id: "622a1c357cc59eab6f94ff7b",
        correctAnswer: "Oakland",
        incorrectAnswers: ["Washington, D.C.", "Los Angeles", "Philadelphia"],
        question: "Which city lies on the east side of San Francisco Bay?",
      },
      {
        id: "622a1c357cc59eab6f94ff86",
        correctAnswer: "Ulaanbaatar",
        incorrectAnswers: ["Uliastai", "Khovd", "Ulaangom"],
        question: "What is the capital of Mongolia?",
      },
      {
        id: "62373fc6cb85f7ce9e949cba",
        correctAnswer: "Bandar Seri Begawan",
        incorrectAnswers: ["Beirut", "Apia", "Lilongwe"],
        question: "What is the capital city of Brunei?",
      },
      {
        id: "62374009cb85f7ce9e949cd5",
        correctAnswer: "Democratic Republic of the Congo",
        incorrectAnswers: ["Kyrgyzstan", "Turkmenistan", "Kuwait"],
        question: "Kinshasa is the capital city of which country?",
      },
      {
        id: "625e9e66796f721e95543f55",
        correctAnswer:
          "Three equal horizontal bands of red white and black, with a gold eagle in the center.",
        incorrectAnswers: [
          "White with a blue star centered between two equal horizontal blue bands",
          "Red with a black two headed eagle in the center.",
          "Three horizontal bands of maroon white and maroon.",
        ],
        question: "What does the flag of Egypt look like?",
      },
      {
        id: "622a1c387cc59eab6f950a01",
        correctAnswer: "Thailand",
        incorrectAnswers: ["Cambodia", "Vietnam", "Laos"],
        question: "Which of these countries borders Malaysia?",
      },
      {
        id: "622a1c387cc59eab6f950ada",
        correctAnswer: "Kyrgyzstan",
        incorrectAnswers: ["Bangladesh", "Thailand", "Cambodia"],
        question:
          "Which of these countries borders People's Republic of China?",
      },
      {
        id: "62373f68cb85f7ce9e949c96",
        correctAnswer: "Antigua and Barbuda",
        incorrectAnswers: ["New Zealand", "South Africa", "Jordan"],
        question: "Saint John's is the capital city of which country?",
      },
    ],
  },
  {
    id: 4,
    title: "Music",
    time: 300,
    maxPoint: 500,
    ratings: 3,
    difficulty: "easy",
    questions: [
      {
        id: "622a1c387cc59eab6f950b20",
        correctAnswer: "Spice Girls",
        incorrectAnswers: ["Editors", "Cradle of Filth", "The Sweet"],
        question: "Which band includes 'Geri Halliwell'?",
      },
      {
        id: "622a1c357cc59eab6f94ff10",
        correctAnswer: "Madonna",
        incorrectAnswers: ["Eric Clapton", "Nicki Minaj", "Alanis Morissette"],
        question:
          "Which American singer and songwriter released the song 'Like a Virgin'?",
      },
      {
        id: "622a1c357cc59eab6f94ff3a",
        correctAnswer: "Michael Jackson",
        incorrectAnswers: ["Nicki Minaj", "Neil Young", "Eric Clapton"],
        question: "Which American musician sung 'Rock with You'?",
      },
      {
        id: "622a1c347cc59eab6f94fbb3",
        correctAnswer: '"Pokémon Theme" by Jason Paige',
        incorrectAnswers: [
          '"Let it Be" by the Beatles',
          "\"I'm Real (Murder Remix) by Jennifer Lopez and Ja Rule",
          '"In da Club" by 50 Cent',
        ],
        question:
          'Which song begins with the lyrics: "I wanna be the very best..."?',
      },
      {
        id: "622a1c387cc59eab6f950b92",
        correctAnswer: "The Jackson 5",
        incorrectAnswers: ["Poison", "Three 6 Mafia", "The Velvet Underground"],
        question: "Which band includes 'Michael Jackson'?",
      },
      {
        id: "622a1c387cc59eab6f950b4e",
        correctAnswer: "Bob Marley and the Wailers",
        incorrectAnswers: ["Red Hot Chili Peppers", "Boney M.", "Gorillaz"],
        question: "Which band includes 'Bob Marley'?",
      },
      {
        id: "622a1c357cc59eab6f94fea3",
        correctAnswer: "Elton John",
        incorrectAnswers: ["Eric Clapton", "Paul McCartney", "Sting"],
        question:
          "Which English singer-songwriter released the song 'Rocket Man'?",
      },
      {
        id: "622a1c397cc59eab6f950d4b",
        correctAnswer: "One Direction",
        incorrectAnswers: [
          "Level 42",
          "Orchestral Manoeuvres in the Dark",
          "Blur",
        ],
        question: "Which band includes 'Niall Horan'?",
      },
      {
        id: "622a1c357cc59eab6f94fe67",
        correctAnswer: "Britney Spears",
        incorrectAnswers: ["Madonna", "Alanis Morissette", "Nicki Minaj"],
        question:
          "Which American singer, songwriter, dancer and actress released the song '...Baby One More Time'?",
      },
      {
        id: "6266bc38ff2394bd44dedfff",
        correctAnswer: "Cello",
        incorrectAnswers: ["Castanets", "Cymbal", "Piccolo"],
        question: "Which of these is a stringed instrument?",
      },
    ],
  },
  {
    id: 5,
    title: "Science",
    time: 10,
    maxPoint: 500,
    ratings: 3,
    difficulty: "easy",
    questions: [
      {
        id: "622a1c377cc59eab6f9504b3",
        correctAnswer:
          "planets and solar systems; more commonly called Planetary science",
        incorrectAnswers: [
          "relationships within families particularly with a view to constructing family trees",
          "the process of human psychological evolution",
          "crop circles",
        ],
        question: "What is Planetology the study of?",
      },
      {
        id: "6243347acfaae40c12961447",
        correctAnswer: "A Mare",
        incorrectAnswers: ["A Hen", "A Hembra", "A Jill"],
        question: "A female horse is known as what?",
      },
      {
        id: "622a1c377cc59eab6f9504df",
        correctAnswer: "nutrition",
        incorrectAnswers: [
          "the immune system",
          "cetaceans - whales, dolphins, and porpoise",
          "concept in anthropology, biology, algebraic topology, and sociology, meaning 'likeness in structure'",
        ],
        question: "What is Nutriology the study of?",
      },
      {
        id: "622a1c377cc59eab6f9504c4",
        correctAnswer: "parasites",
        incorrectAnswers: [
          "crime",
          "nutrition",
          "the signification and application of words",
        ],
        question: "What is Parasitology the study of?",
      },
      {
        id: "622a1c377cc59eab6f950577",
        correctAnswer: "the cosmos or our place in it",
        incorrectAnswers: [
          "study of the mouth and its diseases",
          "beetles",
          "flags",
        ],
        question: "What is Cosmology the study of?",
      },
      {
        id: "622a1c377cc59eab6f950598",
        correctAnswer: "The influences of celestial bodies on earthly affairs",
        incorrectAnswers: ["Friction at very small scale", "The Sun", "Men"],
        question: "What is astrology the study of?",
      },
      {
        id: "622a1c377cc59eab6f950541",
        correctAnswer: "the process of human psychological evolution",
        incorrectAnswers: [
          "eggs",
          "the study of picture postcards",
          "sacred texts",
        ],
        question: "What is Evolutionary psychology the study of?",
      },
      {
        id: "622a1c3f7cc59eab6f95237c",
        correctAnswer: "Bulls",
        incorrectAnswers: ["Fellas", "Dogs", "Blokes"],
        question: "What are male cows called?",
      },
      {
        id: "62433510cfaae40c12961482",
        correctAnswer: "A Bunny",
        incorrectAnswers: ["An Elver", "A Farrow", "A Tadpole"],
        question: "What is the word for a young rabbit?",
      },
      {
        id: "622a1c3e7cc59eab6f9522a9",
        correctAnswer: "360",
        incorrectAnswers: ["1", "100", "3.14"],
        question: "How many degrees are there in a circle?",
      },
    ],
  },
  {
    id: 6,
    title: "Science 2",
    time: 200,
    maxPoint: 500,
    ratings: 3,
    difficulty: "medium",
    questions: [
      {
        id: "622a1c377cc59eab6f950544",
        correctAnswer: "race",
        incorrectAnswers: ["parasites", "in ethics, duty", "rocks"],
        question: "What is Ethnology the study of?",
      },
      {
        id: "62433431cfaae40c1296142a",
        correctAnswer: "A Boar",
        incorrectAnswers: ["A Drake", "A Tom", "A Ram"],
        question: "What is a male guinea pig known as?",
      },
      {
        id: "622a1c3a7cc59eab6f9510aa",
        correctAnswer: "Milky way",
        incorrectAnswers: ["Andromeda", "Ursa", "Orion"],
        question:
          "What is the name of the galaxy that includes our solar system?",
      },
      {
        id: "624437a7746187c5e7be9368",
        correctAnswer: "It is used in thermometers, thermostats, barometers",
        incorrectAnswers: [
          "It is used as an ingredient in baking.",
          "It is used as an ingredient in the production of glass, bricks, and ceramics.",
          "It is used in disinfectants and antiseptics.",
        ],
        question: "What is the chemical mercury often used for?",
      },
      {
        id: "6242cb47d543524f1b19c91e",
        correctAnswer: "A shoal",
        incorrectAnswers: ["A host", "A murder", "A kindle"],
        question: "What is the word for a group of herrings?",
      },
      {
        id: "622a1c3f7cc59eab6f95239c",
        correctAnswer: "Prism",
        incorrectAnswers: ["Lens", "Polarizer", "Funnel"],
        question:
          "What is the name for a piece of glass that separates light into the visible spectrum?",
      },
      {
        id: "6243353ecfaae40c12961494",
        correctAnswer: "A Pup",
        incorrectAnswers: ["A Caterpillar", "A Cygnet", "A Calf"],
        question: "What is a baby seal known as?",
      },
      {
        id: "622a1c3c7cc59eab6f951935",
        correctAnswer: "Radio Carbon Dating",
        incorrectAnswers: [
          "Olfactory Dating",
          "Magnetic Resonance Dating",
          "Natural Decayance Dating",
        ],
        question: "What Process Is Used For Dating Ancient Organic Objects?",
      },
      {
        id: "622a1c377cc59eab6f950556",
        correctAnswer:
          "the interrelationships between living organisms and their environment",
        incorrectAnswers: [
          "forms that is used in several other fields (biology, linguistics, astronomy, etc",
          "windmills, watermills and animal engines",
          "the practice of escaping from restraints or other traps",
        ],
        question: "What is Ecology the study of?",
      },
      {
        id: "622a1c377cc59eab6f9504d8",
        correctAnswer: "the eyes",
        incorrectAnswers: ["bacteria", "crayfish", "signs"],
        question: "What is Ophthalmology the study of?",
      },
    ],
  },
  {
    id: 7,
    title: "Science 3",
    time: 200,
    maxPoint: 500,
    ratings: 3,
    difficulty: "hard",
    questions: [
      {
        id: "622a1c377cc59eab6f95047c",
        correctAnswer:
          "physical, psychological and social problems associated with dying",
        incorrectAnswers: [
          "periodic biological phenomena such as flowering, migration, breeding, etc",
          "ends or final causes",
          "hearing; a branch of medicine",
        ],
        question: "What is Thanatology the study of?",
      },
      {
        id: "622a1c377cc59eab6f9504e3",
        correctAnswer: "disease classification",
        incorrectAnswers: [
          "the characteristics of the skull",
          "the theological study of redemption",
          "mental processes in living creatures",
        ],
        question: "What is Nosology the study of?",
      },
      {
        id: "622a1c3a7cc59eab6f950fe9",
        correctAnswer: "Orionids",
        incorrectAnswers: ["Lyrids", "Perseids", "Andromedids"],
        question: "Which meteor shower occurs on the 21st October?",
      },
      {
        id: "622a1c377cc59eab6f9504f7",
        correctAnswer: "windmills, watermills and animal engines",
        incorrectAnswers: [
          "the ecology of plant communities",
          "alternative method of massage, manipulative therapy|therapy or pressure on certain points of the sole of the feet as a means of relieving nervous tension",
          "the biosphere and its relations to the lithosphere and atmosphere",
        ],
        question: "What is Molinology the study of?",
      },
      {
        id: "6243352fcfaae40c1296148e",
        correctAnswer: "A Calf",
        incorrectAnswers: ["A Caterpillar", "A Larva", "A Kid"],
        question: "What is a baby rhinoceros known as?",
      },
      {
        id: "622a1c377cc59eab6f95057e",
        correctAnswer: "Crop circles",
        incorrectAnswers: ["Sex", "Organic particles", "Moons"],
        question: "What is cereology the study of?",
      },
      {
        id: "622a1c3a7cc59eab6f9510b1",
        correctAnswer: "Ecdysis",
        incorrectAnswers: ["Descaling", "Poreolasis", "Unsheathing"],
        question:
          "The process of a snake shedding its skin or a crustacean casting off its outer shell is called __________",
      },
      {
        id: "622a1c377cc59eab6f950483",
        correctAnswer:
          "the ecological interrelationships among communities of organisms",
        incorrectAnswers: ["demons", "cells", "vocal sounds"],
        question: "What is Synecology the study of?",
      },
      {
        id: "6242cb8cd543524f1b19c939",
        correctAnswer: "A field",
        incorrectAnswers: ["A parliament", "A yoke", "A troop"],
        question: "What is the word for a group of racehorses?",
      },
      {
        id: "6243352ccfaae40c1296148d",
        correctAnswer: "A Cow",
        incorrectAnswers: ["A Vixen", "A Ewe", "A Worker"],
        question: "What would you call a female rhinoceros?",
      },
    ],
  },
];

export default quizs;
