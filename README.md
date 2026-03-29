# Dywan Sierpińskiego / Sierpiński Carpet

Projekt przedstawia wizualizację Dywanu Sierpińskiego zrealizowaną w technologii HTML, CSS i JavaScript.  
Aplikacja umożliwia generowanie fraktala metodą rekurencyjną oraz animację iteracyjnego usuwania fragmentów siatki.

## Funkcjonalności
- generowanie Dywanu Sierpińskiego,
- regulacja liczby iteracji,
- animacja kolejnych etapów wycinania,
- sterowanie animacją: Start, Stop, Reset,
- prosty interfejs użytkownika,
- prezentacja działania algorytmu fraktalnego.

## Technologie
- HTML5
- CSS3
- JavaScript
- Canvas API

## Uruchomienie projektu
1. Pobierz lub sklonuj repozytorium.
2. Otwórz folder `frontend`.
3. Uruchom plik `index.html` w przeglądarce  
   lub użyj rozszerzenia Live Server w Visual Studio Code.

## Struktura projektu
```text
sierpinski-carpet-project/
├── backend/
│   ├── README.md
│   └── .gitignore
├── frontend/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
└── README.md
```

Dywan Sierpińskiego powstaje przez podział kwadratu na siatkę 3x3 i usunięcie środkowego pola.
Następnie ten sam proces jest powtarzany dla pozostałych części.
Aplikacja umożliwia zarówno natychmiastowe wygenerowanie fraktala, jak i obserwowanie procesu iteracyjnego w formie animacji.
