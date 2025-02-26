# Game Hub

Game Hub to aplikacja internetowa, która pozwala użytkownikom przeglądać informacje o grach, w tym zrzuty ekranu, zwiastuny, oceny krytyków i wiele więcej.

## Funkcje

- Przeglądanie listy gier
- Wyszukiwanie gier
- Filtracja gier według platformy i gatunku
- Sortowanie gier według różnych kryteriów
- Wyświetlanie szczegółowych informacji o grach, w tym zrzutów ekranu i zwiastunów

## Technologie

- React
- TypeScript
- Chakra UI
- React Query
- Zustand
- Vite

## Instalacja

1. Sklonuj repozytorium:

   ```sh
   git clone https://github.com/vat332/game-hub-site.git
   cd game-hub
   ```

2. Zainstaluj zależności:

   ```sh
   npm install
   ```

3. Utwórz plik i dodaj klucz API:

   ```env
   VITE_RAWG_API_KEY=twój_klucz_api
   ```

## Uruchamianie projektu

Aby uruchomić projekt w trybie deweloperskim, użyj:

```sh
npm run dev
```

## Aby zbudować projekt, użyj:

```sh
npm run build
```

## Aby uruchomić podgląd zbudowanego projektu, użyj:

```sh
npm run preview
```

## Struktura projektu

```sh
.env
.gitignore
.vercel/
.vscode/
index.html
package.json
public/
src/
  assets/
  components/
  data/
  entities/
  hooks/
  pages/
  services/
  store.ts
  theme.ts
  vite-env.d.ts
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Licencja

Ten projekt jest licencjonowany na warunkach licencji MIT.
