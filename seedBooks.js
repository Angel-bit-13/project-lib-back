// seedBooks.js
const mongoose = require("mongoose");
const Book = require("./models/Book");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const books = [
  {
    title: "Journey to the Mountains",
    author: "A. Explorer",
    publicationYear: 2015,
    genre: "Adventure",
    ISBN: "978-0000000001",
    status: "available",
    image: "https://picsum.photos/seed/book1/200/300"
  },
  {
    title: "Secrets of the Forest",
    author: "F. Green",
    publicationYear: 2017,
    genre: "Fantasy",
    ISBN: "978-0000000002",
    status: "available",
    image: "https://picsum.photos/seed/book2/200/300"
  },
  {
    title: "City Lights",
    author: "N. Urban",
    publicationYear: 2018,
    genre: "Drama",
    ISBN: "978-0000000003",
    status: "available",
    image: "https://picsum.photos/seed/book3/200/300"
  },
  {
    title: "Time Traveler",
    author: "C. Chronos",
    publicationYear: 2019,
    genre: "Sci-Fi",
    ISBN: "978-0000000004",
    status: "available",
    image: "https://picsum.photos/seed/book4/200/300"
  },
  {
    title: "Love in Bloom",
    author: "R. Heart",
    publicationYear: 2016,
    genre: "Romance",
    ISBN: "978-0000000005",
    status: "available",
    image: "https://picsum.photos/seed/book5/200/300"
  },
  {
    title: "Mystery Manor",
    author: "D. Whodunit",
    publicationYear: 2014,
    genre: "Mystery",
    ISBN: "978-0000000006",
    status: "available",
    image: "https://picsum.photos/seed/book6/200/300"
  },
  {
    title: "Ocean Depths",
    author: "S. Wave",
    publicationYear: 2013,
    genre: "Adventure",
    ISBN: "978-0000000007",
    status: "available",
    image: "https://picsum.photos/seed/book7/200/300"
  },
  {
    title: "Space Odyssey",
    author: "G. Star",
    publicationYear: 2020,
    genre: "Sci-Fi",
    ISBN: "978-0000000008",
    status: "available",
    image: "https://picsum.photos/seed/book8/200/300"
  },
  {
    title: "Haunted Mansion",
    author: "P. Ghost",
    publicationYear: 2012,
    genre: "Horror",
    ISBN: "978-0000000009",
    status: "available",
    image: "https://picsum.photos/seed/book9/200/300"
  },
  {
    title: "Cooking with Love",
    author: "M. Chef",
    publicationYear: 2021,
    genre: "Cooking",
    ISBN: "978-0000000010",
    status: "available",
    image: "https://picsum.photos/seed/book10/200/300"
  },
  {
    title: "Mindful Living",
    author: "E. Zen",
    publicationYear: 2018,
    genre: "Self-Help",
    ISBN: "978-0000000011",
    status: "available",
    image: "https://picsum.photos/seed/book11/200/300"
  },
  {
    title: "Legends of Old",
    author: "T. Ancient",
    publicationYear: 2010,
    genre: "Fantasy",
    ISBN: "978-0000000012",
    status: "available",
    image: "https://picsum.photos/seed/book12/200/300"
  },
  {
    title: "Detective Diaries",
    author: "S. Clue",
    publicationYear: 2016,
    genre: "Mystery",
    ISBN: "978-0000000013",
    status: "available",
    image: "https://picsum.photos/seed/book13/200/300"
  },
  {
    title: "The Great Escape",
    author: "R. Runner",
    publicationYear: 2019,
    genre: "Adventure",
    ISBN: "978-0000000014",
    status: "available",
    image: "https://picsum.photos/seed/book14/200/300"
  },
  {
    title: "Poetry of the Heart",
    author: "V. Verse",
    publicationYear: 2015,
    genre: "Poetry",
    ISBN: "978-0000000015",
    status: "available",
    image: "https://picsum.photos/seed/book15/200/300"
  },
  {
    title: "Tech Tomorrow",
    author: "I. Byte",
    publicationYear: 2022,
    genre: "Technology",
    ISBN: "978-0000000016",
    status: "available",
    image: "https://picsum.photos/seed/book16/200/300"
  },
  {
    title: "Wild Safari",
    author: "A. Savannah",
    publicationYear: 2011,
    genre: "Travel",
    ISBN: "978-0000000017",
    status: "available",
    image: "https://picsum.photos/seed/book17/200/300"
  },
  {
    title: "Magic Spells",
    author: "W. Wizard",
    publicationYear: 2013,
    genre: "Fantasy",
    ISBN: "978-0000000018",
    status: "available",
    image: "https://picsum.photos/seed/book18/200/300"
  },
  {
    title: "History Untold",
    author: "A. Scholar",
    publicationYear: 2010,
    genre: "History",
    ISBN: "978-0000000019",
    status: "available",
    image: "https://picsum.photos/seed/book19/200/300"
  },
  {
    title: "The Final Chapter",
    author: "F. End",
    publicationYear: 2021,
    genre: "Drama",
    ISBN: "978-0000000020",
    status: "available",
    image: "https://picsum.photos/seed/book20/200/300"
  }
];

Book.insertMany(books)
  .then(() => {
    console.log("20 books inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error inserting books:", err));
