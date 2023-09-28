// day04.js
// questions
// qué genero se escucha más en cada paíset property (value) {
 // qué género es el más escuchado globalmente
// de qué país existen más usuarios
// cuál es el promedio de tracks por albums
 //  

var people = {
  idUser1: {
    firstName: "Pablo",
    lastName: "Cocodrilo",
    email: "pablo@something.com",
    phone: "5555-5555",
    countryOfOrigin: "idCountry5",
    favoriteArtists: ["idArtist1", "idArtist2"],
  },
  idUser2: {
    firstName: "Chad",
    lastName: "Angelelli",
    email: "chad@tes.com",
    phone: "123-456-789",
    countryOfOrigin: "IdCountry2",
    favoriteArtists: ["idArtist3", "idArtist4"],
  },
  idUser3: {
    firstName: "Pam",
    lastName: "Redin",
    email: "pam@redin.com",
    phone: "000-999-000",
    countryOfOrigin: "idCountry5",
    favoriteArtists: ["idArtist5", "idArtist6"],
  },
  idUser4: {
    firstName: "Caro",
    lastName: "Castaneda",
    email: "caro@algo.com",
    phone: "248-238-238",
    countryOfOrigin: "idCountry5",
    favoriteArtists: ["idArtist7", "idArtist8"],
  },
};

var artists = {
  "idArtist1": {
    artistName: "The Clash",
    artistGenre: "idGenre1",
    artistCountryOfOrigin: "idCountry1",
  }, 
  "idArtist2": {
    artistName: "Beirut",
    artistGenre: "idGenre2",
    artistCountryOfOrigin: "idCountry2",
  }, 
  "idArtist3": {
    artistName: "Pink Floyd",
    artistGenre: "idGenre3",
    artistCountryOfOrigin: "idCountry1",
  }, 
  "idArtist4": {
    artistName: "Grateful Dead",
    artistGenre: "idGenre4",
    artistCountryOfOrigin: "idCountry2",
  }, 
  "idArtist5": {
    artistName: "Travis",
    artistGenre: "idGenre5",
    arhtistCountryOfOrigin: "idCountry1",
  },
  "idArtist6": {
    artistName: "Karol G",
    artistGenre: "idGenre6",
    artistCountryOfOrigin: "idCountry3",
  },
  "idArtist7": {
    artistName: "Portishead",
    artistGenre: "idGenre7",
    artistCountryOfOrigin: "idCountry1",
  }, 
  "idArtist8": {
    artistName: "Moriarty",
    artistGenre: "idGenre2",
    artistCountryOfOrigin: "idCountry4",
  }, 
};

var albums = {
  idAlbum1: {
    albumArtist: "idArtist1",
    albumTitle: "London Calling",
    albumYear: "1979",
    albumSongs: [
      "London Calling",
      "Brand New Cadillac",
      "Jimmy Jazz",
      "Hateful",
      "Rudie Can't Fail",
      "Spanish Bombs",
      "The Right Profile",
      "Lost in the Supermarket",
      "Clampodown",
      "The Guns of Brixton",
      "Wring 'Em Boyo",
      "Death or Glory",
      "Koka Kola",
      "The Card Cheat",
      "Lover's Rock",
      "Four Horsemen",
      "I'm Not Down",
      "Revolution Rock",
      "Train in Vain (Stand by Me)",
    ],
  }, 
  idAlbum2: {
    albumArtist: "idArtist2",
    albumTitle: "The Flying Club Cup",
    albumYear: "2007",
    albumSongs: [
      "A Call To Arms",
      "Nantes",
      "A Sunday Smile",
      "Guaymas Sonora",
      "La Banlieue",
      "Cliquot",
      "The Penalty",
      "Forks and Knives (La Fete)",
      "In the Mausoleum",
      "Un Dernier Verre (Pour La Route)",
      "Cherbourg",
      "St. Apollonia",
      "The Flying Club Cup",
    ],
  }, 
  idAlbum3: {
    albumArtist: "idArtist3",
    albumTitle: "The Wall",
    albumYear: "1979",
    albumSongs: [
      "In the Flesh?",
      "The Thin Ice",
      "Another Brick in the Wall, Pt. 1",
      "The Happiest Days of Our Lives",
      "Another Brick in the Wall, Pt. 2",
      "Mother",
      "Goodbye Blue Sky",
      "Empty Spaces",
      "Young Lust",
      "One of My Turns",
      "Don't Leave Me Now",
      "Another Brick in the Wall, Pt. 3",
      "Goodbye Cruel World",
      "Hey You",
      "Is There Anybody Out There?",
      "Nobody Home",
      "Vera",
      "Bring the Boys Back Home",
      "Comfortably Numb",
      "The Show Must Go on",
      "In the Flesh",
      "Run Like Hell",
      "Waiting for the Worms",
      "Stop",
      "The Trial",
      "Outside the Wall",
    ],
  },
  idAlbum4: {  
    albumArtist: "idArtist4",
    albumTitle: "American Beauty",
    albumYear: "1970",
    albumSongs: [
      "Box of Rain",
			"Friend of the Devil",
			"Sugar Magnolia",
			"Operator",
			"Candyman",
			"Ripple",
			"Breakdown Place",
			"Till the Morning Comes",
			"Attics of My Life",
			"Truckin",
    ],
  }, 
  idAlbum5: {
    albumArtist: "idArtist5",
    albumTitle: "The Invisible Band",
    albumYear: "2001",
    albumSongs: [
			"Sing",
			"Dear Diary",
			"Side",
			"Pipe Dreams",
			"Flowers in the Window",
			"The Cage",
			"Safe",
			"Follow the Light",
			"Last Train",
			"Afterglow",
			"Indefinitely",
			"The Humpty Dumpty Love Song",
    ],
  },
  idAlbum6: {
    albumArtist: "idArtist6",
    albumTitle: "KG0516",
    albumYear: "2021",
    albumSongs: [
			"DÉJALOS QUE MIREN",
			"EL MAKINON",
			"200 COPAS",
			"CONTIGO VOY A MUERTE",
			"DVD",
			"EL BARCO",
			"LOCATION",
			"GATO MALO",
			"ODISEA",
			"BICHOTA",
			"SOLA ES MEJOR",
			"ARRANCA PAL CARAJO",
			"Ay, DiOs Mío!",
			"BEAUTIFUL BOY",
			"Tusa",
			"LEYENDAS",
    ],
  },
  idAlbum7: {
    albumArtist: "idArtist7",
    albumTitle: "Dummy",
    albumYear: "1994",
    albumSongs: [
			"Mysterons",
			"Sour Times",
			"Strangers",
			"It Could Be Sweet",
			"Wandering Star",
			"It's a Fire",
			"Numb",
			"Roads",
			"Pedestal",
			"Biscuit",
			"Glory Box",
    ],
  },
  idAlbum8: {
    albumArtist: "idArtist8",
    albumTitle: "Epitaph",
    albumYear: "2015",
    albumSongs: [
			"When I Ride",
			"Reverse (Anger)",
			"History of Violence",
			"Long Live the (D)Evil",
			"Milena",
			"Diamonds Never Die",
			"Ginger Joe",
			"Maybe a Little Lie",
			"Across from My Windows",
			"G.I. Jesus",
			"Back in Town",
			"Fire Fire",
			"Long Is the Night",
			"(Valter Konig)",     
    ],
  },
};

var genres = {
  "idGenre1": "Punk rock", 
  "idGenre2": "Indie folk", 
  "idGenre3": "Progressive rock", 
  "idGenre4": "Folk Rock",
  "idGenre5": "Britpop", 
  "idGenre6": "Latin trap",
  "idGenre7": "Trip hop",
};

var countries = {
  "idCountry1": {
    countryNameEn: "United Kingdom",
    countryNameEs: "Reino Unido",
    countryAbbr: "UK",
  },
  "idCountry2": {
    countryNameEn: "United States",
    countryNameEs: "Estados Unidos",
    countryAbbr: "EU",
  },
  "idCountry3": {
    countryNameEn: "Colombia",
    countryNameEs: "Colombia",
    countryAbbr: "CO",
  },
  "idCountry4": {
    countryNameEn: "France",
    countryNameEs: "Francia",
    countryAbbr: "FR",
  },
  "idCountry5": {
    countryNameEn: "Mexico",
    countryNameEs: "Mexico",
    countryAbbr: "MX",
  },
};

