const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// Hard-coded articles data
const articles = [
  {
    title: "Inte klart med ersättare för Ribbenvik",
    summary:
      " Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.",
    link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik",
    published: new Date("2022-08-25"),
    topic: ["SamhalleKonflikter"],
  },
  {
    title: "Drogs in i inhägnad – dödades av 40 krokodiler",
    summary:
      " En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date("2023-05-15"),
    topic: ["Ekonomi"],
  },

  {
    title: "David Lega om KD-krisen: ”Sara hälsade inte på mig",
    summary:
      " David Lega bryter tystnaden om krisen i Kristdemokraterna.I en stor intervju med Aftonbladet berättar den förre partitoppen om besvikelsen över petningen, telefonsamtalet från Ebba Busch och den ansträngda relationen med Sara Skyttedal. Hon hälsade inte på mig.Jag kunde säga hej på möten och inte få ett svar tillbaka, säger han.",
    link: "https://www.aftonbladet.se/nyheter/a/0VBXy0/david-lega-om-daliga-stamningen-med-sara-skyttedal",
    published: new Date("2020-01-24"),
    topic: ["SamhalleKonflikter"],
  },

  {
    title: "Riksbanken sänker räntan med 25 punkter",
    summary:
      " Precis som väntat sänker Riksbanken styrräntan med 25 punkter. Den nya räntan blir på 3,5 procent. Samtidigt tror Riksbanken att räntan kan sänkas ytterligare två eller tre gånger i år.",
    link: "https://www.expressen.se/ekonomi/ekonomernas-krav-fyra-rantesankningar/",
    published: new Date("2024-08-20"),
    topic: ["Ekonomi"],
  },

  {
    title: "Hatet växer i Kina – tvingas radera allt",
    summary:
      " Kina gjorde ett rekordstarkt OS. Ändå har flera av landets olympier utsatts för grovt hat i sociala medier, vilket nu får den kinesiska staten att agera.",
    link: "https://www.expressen.se/sport/hatet-vaxer-i-kina-tvingas-radera-allt/",
    published: new Date("2024-08-20"),
    topic: ["Idrott"],
  },

  {
    title: "Nostalgiskorna tillbaka – blev oväntad sommartrend",
    summary:
      " Många av oss hade dem under 80-talet – i sommar såg vi dem igen. Här är skorna vi aldrig trodde skulle komma tillbaka!",
    link: "https://www.livsstil.se/mode/a/5EpAJK/jellysandaler",
    published: new Date("2024-08-19"),
    topic: ["LivsstillFritt"],
  },
];

// API endpoint to get articles
app.get("/api/articles", (req, res) => {
  let filteredArticles = articles;
  const { topic, sortBy } = req.query;

  if (topic) {
    filteredArticles = filteredArticles.filter((article) =>
      article.topic.includes(topic)
    );
  }

  if (sortBy === "newest") {
    filteredArticles = filteredArticles.sort(
      (a, b) => new Date(b.published) - new Date(a.published)
    );
  } else if (sortBy === "oldest") {
    filteredArticles = filteredArticles.sort(
      (a, b) => new Date(a.published) - new Date(b.published)
    );
  }

  res.json(filteredArticles);
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
