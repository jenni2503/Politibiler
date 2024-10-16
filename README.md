## Mine valg

Mappestruktur:
Jeg valgte å opprette en mappe kalt Pages, hvor jeg plasserer landingPage.tsx, og de tilhørende komponentene. Dette gir en mer organsiert og ryddig struktur.

Design: Jeg holdt designet enkelt og responsivt, slik at det tilpasser seg ulike skjermstørrelser og gir en brukervennlig opplevelse. Designet er laget for å vise oversikten i et grid-system, som endres til to kolonner i medium skjermstørrelser og en kolonne i mindre skjermstørrleser.

## LandingPage.tsx

Her henter jeg data fra API-et, sorterer ID-ene i numerisk rekkefølge, og lagrer dem i en useState.
Jeg har en useState for å holde verdien av alle politbilene fra apiet, samt en annen useState for å lagre verdien av de filterte politbilene.

For å dele data eller state mellom søskenkomponenter benytter jeg konspetet "lifting state up". Disse statene sender jeg som props til child-komponentene, ettersom begge komponentene trenger tilgang til samme state.

## CarFilter.tsx

Denne komponenten inneholder to ulike filtre. Ett for bilmerker og ett for status. Antagelsen er at brukeren kan filtrere på merke og status. Filtrene vises i en dropdown-meny.
Jeg inkluderte ikke setFilteredPoliceCars i dependencies, fordi ifølge React docs, er setState-funksjoner stabil og endres ikke ved re-renderinger. Derfor er det trygt å utelate den fra useEffect.

## Card.tsx

Denne komponenten har filteredPoliceCars-staten og mottar en liste over filterte politbiler fra CarFilter.tsx. For hver politbil opprettes et div-element som presenterer en oversikt over informasjonen om bilen.

## UpdateStatus.tsx

Funksjonen updateStatus er en fiktiv backend-kall som oppdaterer statusen til en politibil. Den sender en HTTP-forespørsel med metoden PATCH for å oppdatere deler av ressursen.

## PoliceCarsTypes.ts

Definerer en type som beskriver strukturen til et politibil objekt.

## Testing

Jeg gjennomførte unit testing for å teste ulike deler av koden. Til dette valgte jeg Vitest som testverktøy, siden det er spesielt tilpasset JavaScript og TypeScript, og fungerer godt sammen med Vite. I kombinasjon med React Testing Library og Jest-DOM.
