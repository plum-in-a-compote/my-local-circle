# My local circle

Aplikacja została stworzona, aby zwiększyć wpływ społeczności lokalnej (mieszkańcy bloku, studenci, uczniowie) na decyzje dot. realizowanych projektów (np. budowa parku, zbiórka na wycieczkę), a także proponować własne pomysły. Jako uczestnik społeczności możesz tworzyć zbiórki, głosować na ciekawe pomysły, a także monitorować przebieg obecnych inwestycji. Wspieramy także interfejs w języku ukraińskim, wykorzustując prostą autorską bibliotekę do mapowania danych.

## Architektura

Zastosowaliśmy architekturę trójwarstwową (baza danych, serwer, klient). Framework [Next.js](https://nextjs.org/) umożliwia m.in. statyczne generowanie stron (SSG), czy stworzenie prostego serwera HTTP (API Routes).


### TLDR;

- **Next.js** (serwer HTTP, SSG, SSR),
- **React** (komponenty),
- **Tailwind.CSS** (predefiniowany zbiór wartości),
- **Supabase, PostgreSQL** (baza danych),
- **React Query** (pobieranie, cache danych po stronie klienta),
- **zod** (walidacja danych, generowanie typów)

### Front-end




### Baza danych

Do przechowywania danych, użyliśmy dość nowej otwartoźródłowej biblioteki [supabase](https://supabase.com/). Wewnętrznie używany jest tam PostgreSQL, więc zaprojektowaliśmy relacyjny model danych. Większość danych pobieramy bezpośrednio z bazy danych, korzystając z RLS (Row level security), co pozwala na ograniczenie uprawnień użytkownika np. do modyfikowania własnych rekordów.

Część zapytań jest wysyłana na nasz serwer Proxy (`/pages/api`), aby zapewnić poprawność typu danych (np. w przypadku generowania slug'a). W tym celu wykorzystujemy funkcjonalność serwera Next.js (Edge API Routes), dzięki czemu nasz vendor (Netlify) może rozmieścić nasze Proxy w wielu centrach danych.



## Konwencje nazewnictwa i struktura

Wszystko zostało dokładnie opisane w pliku [CONTRIBUTING.md](CONTRIBUTING.md). Zachęcamy do zapoznania z plikiem.
