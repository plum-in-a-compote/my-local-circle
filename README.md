[![Netlify Status](https://api.netlify.com/api/v1/badges/643b7640-740f-4db3-b3f3-ea179b2ad3e8/deploy-status)](https://app.netlify.com/sites/localcircle/deploys)

# My Local Circle

## Krótka nota

Projekt (graficzny oraz wykonanie) został stworzony **w ciągu dwóch tygodni** w ramach hackathonu/konkursu programistycznego Hack Heroes 2022. W związku z nałożonym limitem czasu, nie zdążyliśmy zrealizować wszystkich założeń, a poniższy opis został napisany jeszcze przed jego ukończeniem. Zdecydowaliśmy się zostawić projekt na GitHubie, ponieważ uważamy, że pomimo kilku niedociągnięć, jest on przyjemny dla oka i stanowi ciekawy proof-of-concept użycia różnych bibliotek. Był także dla nas cennym doświadczeniem. 

Pozdrowawiamy wszystkich, którzy zechcieli zapoznać się z naszą aplikacją :wink:

## O projekcie

Aplikacja została stworzona, aby zwiększyć wpływ społeczności lokalnej (mieszkańcy bloku, studenci, uczniowie) na decyzje dot. realizowanych projektów (np. budowa parku, zbiórka na wycieczkę), a także proponować własne inicjatywy. Jako uczestnik społeczności możesz np. tworzyć zbiórki, głosować na ciekawe pomysły, a także monitorować przebieg obecnych inwestycji. Wspieramy też interfejs w języku ukraińskim, wykorzystując prostą autorską bibliotekę do mapowania danych.

Staramy się odpowiedzieć na oczekiwania społeczności poprzez przejrzysty, **responsywny interfejs graficzny**. Obecnie nasza aplikacja (strona internetowa) jest dostosowana do wyświetlania na wszystkich urządzeniach. Dobrym pomysłem na ulepszenie funkcjonalności jest także przystosowanie strony do poziomu natywnych aplikacji poprzez PWA (Progressive Web Applications).

## Przykład użycia języka ukraińskiego w naszej aplikacji

Stworzyliśmy autorską bibliotekę do tłumaczenia poszczególnych elementów naszej aplikacji na język ukraiński. Zawarliśmy tutaj przykład jej użycia i działania. Przykład ukazany jest na stronie logowania, tj. [/signin](https://i18n--localcircle.netlify.app/signin) oraz stronie rejestracji [/signup](https://i18n--localcircle.netlify.app/signup).

### Jak przejść na wersję ukraińską

Aby skorzystać z tłumaczenia, należy przejść na adres [/signin](https://i18n--localcircle.netlify.app/uk/signin) lub [/signin](https://i18n--localcircle.netlify.app/uk/signup). Są to automatycznie wygenerowane strony, z tłumaczeniem elementów interfejsu.

### Dlaczego nie użyliśmy tego rozwiązania w projekcie

Po prostu zabrakło nam czasu. Bibliotekę stworzyliśmy jako jedną z pierwszych rzeczy i zostawiliśmy na koniec. Okoliczności czasowe pokazały jednak, że nie dane będzie jej nam użyć. Zdecydowaliśmy się więc stworzyć ten prosty przykład, aby zaprezentować możliwość rozwinięcia naszej aplikacji w stronę zgodną z tematem konkursu.

## Architektura

Aplikacja została w całości napisana w języku Typescript. Naszym zdaniem jest to najlepsze podejście do pisania złożonych aplikacji internetowych ze względu na ułatwienie pracy dewelopera i podpowiedzi jakie na podstawie typów generuje IDE. Zastosowaliśmy architekturę trójwarstwową (baza danych, serwer, klient). Framework [Next.js](https://nextjs.org/) umożliwia m.in. statyczne generowanie stron (SSG), czy stworzenie prostego serwera HTTP (API Routes).

### TLDR;

- **Next.js** (serwer HTTP, SSG, SSR),
- **React** (komponenty),
- **Tailwindcss** (predefiniowany zbiór wartości),
- **Supabase, PostgreSQL** (baza danych),
- **React Query** (pobieranie, cache danych po stronie klienta),
- **Zod** (walidacja danych, generowanie typów)

### Front-end

Podczas korzystania z naszej strony może się wydawać, że wszystkie strony ładują się praktycznie tak szybko jak czysty HTML. Dokładnie tak jest - no... prawie. Używamy tutaj czegoś co nazywa się **SSG (Static site generation)**, który generuje wcześniej strony z dynamiczną treścią. Po załadowaniu wygenerowanego wcześniej HTMLa, strona stanie się aktywna poprzez proces zwany hydracją. Dodatkowo wszystkie strony co jakiś czas są budowane od początku z najnowszymi danymi, co pozwala uzyskać świetny stosunek optymalizacji co do aktualności danych.

Oczywiście to rozwiązanie nie jest idealne dla stron, które zawierają dane prywatne np. konto użytkownika, czy budżety społeczności, w tym wypadku używamy biblioteki `react-query`, która pobiera dane po stronie klienta, korzystając z techniki `stale-while-revalidate`, co również wpływa bardzo korzystnie na wydajność strony.

W celu zapewnienia poprawności formatu wprowadzanych danych (m.in. po stronie klienta - wcześniejszy feedback dla użytkownika), używamy biblioteki do walidacji `zod`. Dzięki niej możemy tworzyć "schematy" jaki musi przyjąć obiekt z danymi, a następnie sprawdzamy (parsujemy) input od użytkownika.

### Baza danych

Do przechowywania danych, użyliśmy dość nowej otwartoźródłowej biblioteki [supabase](https://supabase.com/). Wewnętrznie używany jest tam PostgreSQL, więc zaprojektowaliśmy relacyjny model danych. Większość danych pobieramy bezpośrednio z bazy danych, korzystając z RLS (Row level security), co pozwala na ograniczenie uprawnień użytkownika np. do modyfikowania własnych rekordów.

Część zapytań jest wysyłana na nasz serwer Proxy (`/pages/api`), aby zapewnić poprawność typu danych (np. w przypadku generowania slug'a). W tym celu wykorzystujemy funkcjonalność serwera Next.js (Edge API Routes), dzięki czemu nasz vendor (Netlify) może rozmieścić nasze Proxy w wielu centrach danych.

## Konwencje nazewnictwa i struktura

Wszystko zostało dokładnie opisane w pliku [CONTRIBUTING.md](CONTRIBUTING.md). Zachęcamy do zapoznania z plikiem.
