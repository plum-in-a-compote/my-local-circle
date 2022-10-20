# My local circle

Aplikacja została stworzona, aby zwiększyć wpływ społeczności lokalnej (mieszkańcy bloku, studenci, uczniowie) na decyzje dot. realizowanych projektów (np. budowa parku, zbiórka na wycieczkę), a także proponować własne pomysły. Jako uczestnik społeczności możesz tworzyć zbiórki, głosować na ciekawe pomysły, a także monitorować przebieg obecnych inwestycji.

## Architektura

### Front-end



### Baza danych

Do przechowywania danych, użyliśmy dość nowej otwartoźródłowej biblioteki [supabase](https://supabase.com/). Wewnętrznie używany jest tam PostgreSQL, więc zaprojektowaliśmy relacyjny model danych. Większość danych pobieramy bezpośrednio z bazy danych, korzystając z RLS (Row level security), co pozwala na ograniczenie uprawnień użytkownika np. do modyfikowania własnych rekordów.

Część zapytań jest wysyłana na nasz serwer Proxy (`/pages/api`), aby zapewnić poprawność typu danych (np. w przypadku generowania slug'a). W tym celu wykorzystujemy funkcjonalność serwera Next.js (Edge API Routes), dzięki czemu nasz vendor (Netlify) może rozmieścić nasze Proxy w wielu centrach danych.



## Konwencje nazewnictwa i struktura

### Komponenty
- `components` - katalog ze wszystkimi komponentami strony,
- `components/generic` - reużywalne (lub potencjalnie reużywalne) komponenty strony,
- `components/composited` - komponenty, które są używane jako podstrona,
- `[NazwaStrony]Page` - plik z podstroną, używany potem w strukturze `/pages/...`,

### Pozostałe
- `lib` - funkcje do interakcji z innymi API, najczęściej do pobierania danych,
- `validators` - katalog z walidatorami do pobieranych danych,
- `hooks` - katalog z `React hooks` (używane w komponentach), 
- `constants` - stałe globalne,
- `styles` - globalny CSS (dodanie klas Tailwind.CSS)
