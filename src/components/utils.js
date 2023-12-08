const urlPattern = /^(?:https?:\/\/)?(?:www\.)?(?:[a-zA-Z0-9-]+\.)+(?:com|io|ghw\.mlh\.io)(?:\/\S*)?$/;

export function isValidUrl(url) {
  return urlPattern.test(url);
};

export function generateRandomPassword(length) {
  const words = [
  'Aegean Airlines',
  'Aeroflot',
  'Aerolineas Argentinas',
  'Aeromexico',
  'Air Algerie',
  'Air Arabia',
  'Air Canada',
  'Air China',
  'Air Europa',
  'Air France-KLM',
  'Air India',
  'Air Mauritius',
  'Air New Zealand',
  'Air Niugini',
  'Air Tahiti',
  'Air Tahiti Nui',
  'Air Transat',
  'AirAsia X',
  'AirAsia',
  'Aircalin',
  'Alaska Airlines',
  'Alitalia',
  'All Nippon Airways',
  'Allegiant Air',
  'American Airlines',
  'Asiana Airlines',
  'Avianca',
  'Azul Linhas Aereas Brasileiras',
  'Azur Air',
  'Beijing Capital Airlines',
  'Boliviana de Aviacion',
  'British Airways',
  'Cathay Pacific',
  'Cebu Pacific Air',
  'China Airlines',
  'China Eastern Airlines',
  'China Southern Airlines',
  'Condor',
  'Copa Airlines',
  'Delta Air Lines',
  'Easyfly',
  'EasyJet',
  'EcoJet',
  'Egyptair',
  'El Al',
  'Emirates Airlines',
  'Ethiopian Airlines',
  'Etihad Airways',
  'EVA Air',
  'Fiji Airways',
  'Finnair',
  'Flybondi',
  'Flydubai',
  'FlySafair',
  'Frontier Airlines',
  'Garuda Indonesia',
  'Go First',
  'Gol Linhas Aereas Inteligentes',
  'Hainan Airlines',
  'Hawaiian Airlines',
  'IndiGo Airlines',
  'Japan Airlines',
  'Jeju Air',
  'Jet2',
  'JetBlue Airways',
  'JetSMART',
  'Juneyao Airlines',
  'Kenya Airways',
  'Korean Air',
  'Kulula.com',
  'LATAM Airlines',
  'Lion Air',
  'LOT Polish Airlines',
  'Lufthansa',
  'Libyan Airlines',
  'Linea Aerea Amaszonas',
  'Malaysia Airlines',
  'Nordwind Airlines',
  'Norwegian Air Shuttle',
  'Oman Air',
  'Pakistan International Airlines',
  'Pegasus Airlines',
  'Philippine Airlines',
  'Qantas Group',
  'Qatar Airways',
  'Republic Airways',
  'Royal Air Maroc',
  'Ryanair',
  'S7 Airlines',
  'SAS',
  'Satena',
  'Saudia',
  'Shandong Airlines',
  'Sichuan Airlines',
  'Singapore Airlines',
  'Sky Airline',
  'SkyWest Airlines',
  'South African Airways',
  'Southwest Airlines',
  'SpiceJet',
  'Spirit Airlines',
  'Spring Airlines',
  'SriLankan Airlines',
  'Star Peru',
  'Sun Country Airlines',
  'SunExpress',
  'TAP Air Portugal',
  'Thai AirAsia',
  'Thai Airways',
  'TUI Airways',
  'Tunisair',
  'Turkish Airlines',
  'Ukraine International',
  'United Airlines',
  'Ural Airlines',
  'VietJet Air',
  'Vietnam Airlines',
  'Virgin Atlantic Airways',
  'Virgin Australia',
  'VivaAerobus',
  'VOEPASS Linhas Aereas',
  'Volaris',
  'WestJet',
  'Wingo',
  'Wizz Air',
];

  const specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];

  let password = "";

  const randomWord = words[Math.floor(Math.random() * words.length)];
  password += randomWord;

  const randomNumber = Math.floor(Math.random() * 10);
  password += randomNumber;

  const randomCharacter =
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  password += randomCharacter;

  const remainingLength = length - 3;
  const characters = words.join("") + randomNumber + specialCharacters.join("");
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  password = password.replace(/ +/g, "");

  let shuffledPassword = shuffleString(password);
  shuffledPassword = shuffledPassword.slice(0, length);

  const hasNumber = /\d/.test(shuffledPassword);
  const hasSpecialCharacter = /[!@#$%&*]/.test(shuffledPassword);

  if (!hasNumber || !hasSpecialCharacter) {
    return generateRandomPassword(length);
  }

  return shuffledPassword;
}

function shuffleString(string) {
  let shuffledString = "";
  string = string.split("");

  while (string.length > 0) {
    shuffledString += string.splice(
      Math.floor(Math.random() * string.length),
      1
    );
  }

  return shuffledString;
}
