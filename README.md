# Quizweb 🎯

Interactieve quiz website gebouwd met React & Vite | Interactive quiz website built with React & Vite

## Beschrijving

Quizweb is een interactieve quiz website waar gebruikers kennis kunnen testen op verschillende categorieën zoals Algemeen, Sport, Film, Muziek, Geografie, Kunst en Geschiedenis. De applicatie is gebouwd als eindopdracht voor de Frontend opleiding bij NOVI Hogeschool.

## 📸 Screenshots
### 1. Home
![Home pagina](./screenshots/home.png)
### 2. Quiz
![Quiz pagina](./screenshots/quiz.png)
### 3. Quiz finish
![Quiz finish pagina](./screenshots/quiz-finish.png)
### 4. Scorelist 
![Quiz scorelist pagina](./screenshots/scorelist.png)

## Functionaliteiten

- 🎮 Quiz spelen in verschillende categorieën
- ⏱️ Timer per vraag
- 📊 Scorelijst met top 3 ranking
- 🔐 Registreren en inloggen
- 🌐 Meertalig (Nederlands / Engels)
- 👤 Admin dashboard voor beheer van users, scores en berichten
- 📬 Contactformulier
- 📱 Responsive design (mobile, tablet, desktop)

## Technologieën

- React 18
- Vite
- React Router
- Iconify
- Open Trivia API
- NOVI Dynamic API
- CSS Flexbox
- Responsive Design (mobile, tablet, desktop)

## Voorwaarden vooraf

Zorg dat de volgende software geïnstalleerd is op je computer voordat je begint:

- [Node.js](https://nodejs.org/) versie 18 of hoger — download via nodejs.org
- [Git](https://git-scm.com/) — download via git-scm.com
- Een code editor zoals [WebStorm](https://www.jetbrains.com/webstorm/) of [VS Code](https://code.visualstudio.com/)

Controleer installatie:
```bash
node -v
npm -v
```

## Vereisten

- Node.js (versie 18 of hoger)
- npm
- Git
- NOVI studentenmail (voor NOVI Dynamic API)

## Installatie

1. Clone de repository
2. Installeer dependencies: `npm install`
3. Hernoem `.env.example` naar `.env`
4. Start de applicatie: `npm run dev`
5. Open `http://localhost:5173`

Na het hernoemen van .env.example naar .env is de applicatie direct klaar voor gebruik.
## Standaard accounts

Na het uploaden van de `quizweb-config.json` zijn de volgende accounts beschikbaar:

| Email | Wachtwoord | Rol |
|-------|-----------|-----|
| admin@quizweb.nl | admin123 | Admin |
| user@quizweb.nl | user123 | User |

## Scripts
```bash
npm run dev      # Start development server
npm run build    # Build voor productie
npm run test     # Run tests
```

## Projectstructuur
```
src/
├── assets/          # Afbeeldingen en CSS bestanden
├── components/      # Herbruikbare componenten
├── helpers/         # Helper functies en vertalingen
├── hooks/           # Custom React hooks
├── layout/          # Layout componenten
├── pages/           # Pagina componenten
│   └── admin/       # Admin pagina's
├── services/        # API service functies
└── tests/           # Test bestanden
```

## Bekende problemen

- De NOVI Dynamic API database wordt dagelijks geleegd. Registreer opnieuw als je niet kunt inloggen.
- De taalwisseling herlaadt de pagina — quiz voortgang gaat verloren bij taalwisseling.
- Zorg dat je de applicatie draait op poort 5173 of 3000 om CORS-fouten te vermijden.

## GitHub Repository

https://github.com/I-Tosun/quizweb

## Licentie

Dit project is gemaakt als eindopdracht voor NOVI Hogeschool en is niet bedoeld voor commercieel gebruik.