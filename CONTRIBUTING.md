# Cześć :wave:

Tutaj znajdziesz wskazówki dotyczące użytych konwencji w naszym projekcie.

## Funkcje, stałe i komponenty

Używamy powszechnie przyjętych konwencji do React'a i Typescript'a. Większość z nich jest wymuszona przez użycie Prettiera.

### Funkcja synchroniczna

Funkcja strzałkowa, parametry z adnotacją typu, zawsze klamry.

```ts
export const appendWorldStr = (s: string): string => {
  return s + "world";
}
```

### Funkcja asynchroniczna

Funkcja strzałkowa, parametry z adnotacją, async/await.

```ts
export const fetchUser = async (id: string): string => {
  const user = await fetch(`api.example/user/${id}`);
  return user;
}
```

### Stała

Zawsze UPPERCASE rozdzielone `_` podłogą.

```ts
const MAX_ROWS_PER_PAGE = 10;
```

### Komponent

Definicja typu nad komponentem, funkcja strzałkowa.

```ts
type ExampleProps = {
  heading: string;
};

export const Example = ({ heading }: ExampleProps): JSX.Element => {
  const [counter, setCounter] = useState(1);
  return <h1>{heading}</h1>;
};
```

## Nazewnictwo plików i katalagów
- `user.ts` - plik Typescript'a z funkcjami,
- `Navbar.tsx` - plik Typescript'a z komponentem (React),
- `lib` - reguralny katalog (lowercase),
- `Navbar` - katalog z komponentem React (PascalCase)

## Komponenty
- `components` - katalog ze wszystkimi komponentami strony,
- `components/generic` - reużywalne (lub potencjalnie reużywalne) komponenty strony,
- `components/composited` - komponenty, które są używane jako podstrona,
- `[NazwaStrony]Page` - plik z podstroną, używany potem w strukturze `/pages/...`

## Pozostałe
- `lib` - funkcje do interakcji z innymi API, najczęściej do pobierania danych,
- `validators` - katalog z walidatorami do pobieranych danych,
- `hooks` - katalog z `React hooks` (używane w komponentach), 
- `constants` - stałe globalne,
- `styles` - globalny CSS (dodanie klas Tailwind.CSS)
