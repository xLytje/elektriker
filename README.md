# Elektriker firma projekt
***Skoleprojekt***

## Projektbeskrivelse
+ Elektrikere skal bruge en hjemmeside
+ hjemmesiden bruges til at promovere deres firma
+ Der skal laves et logo
+ Kunden har bestemt at bruge Poppins google font
+ De har efterspurgt som minimum en
  - Forside
    - Sticky menu m. user settings som overlay onclick
    - Form m. form validering (smides ind på alle undersider)
  - 2 undersider
    - Side med informationer 
    - Side med tilbud (price tables)
  - Om os
    - Historie om firma og grundlæggeren
    - Få info boksen til at gå ind over hero
  - Kontakt
    - Informationer omkring tel, mail, adresse
    - Tilføj google map visning til adresse (ekstra opgave)
  - Tak
    - Kort side 
    - Tilgåelse efter form validering
    - Tilføj "tilbage til forside" funktion. Just in case
+ Deres kunder er husejere, så de vil gerne have et design som hr. og fru Jensen kan finde igennem
+ Den skal være mobil optimeret, fordi ikke alle har computere

<sub>Siden skal indeholde HTML, CSS og JS</sub>

## Delopgaver
1. Lav tidsordning
    - Gantt diagram https://www.onlinegantt.com/
2. Lav wireframe
    - Wireframe på Figma https://www.figma.com/
3. Lav styleguide
    - Font(e)
    - Farver
    - Skriftstørrelser
4. Begynd på kodning
    - Start med HTML og CSS
    - Husk core web vitals https://web.dev/learn-core-web-vitals/
      - Lazy load
      - Læs op på Core web vitals
      - Indfør best practice
      - https://syntax.fm/ (Responsive Design Techniques)
    - Forside
      - Header
      - Hero
      - Information
      - Indhold
      - CTA
      - Priser
      - Formular
      - Footer
    - Underside
      - Header
      - Hero
      - Information
      - Lange teskter x2
      - Form
      - Footer
    - Om-os-side
      - Header
      - Hero
      - Information
      - CTA
      - Form
      - Footer
    - Kontakt-side
      - Header
      - Hero
      - Form
      - Footer
    - Tak-side
      - Header
      - Hero
      - Footer
    - Når design er på plads kan der fortsættes med logik (JS)
      - Form validation
      - Event listeners
      - Tilføj settings via en HTML knap  
5. Tilføj JS og debug
  - Test at designet er optimalt på alle skærme, og mobil venligheden er tilpas
  - Tilføj JS til forms, submit buttons og dyslexia option mm.
    - Tilføj en options knap der fører til et overlay hvor du kan tilføje støtte til 
      - Farveblindhed (css filters)
      - Ordblindhed
      - https://www.pagecloud.com/blog/how-to-add-custom-fonts-to-any-website 
      - https://fonts.google.com/specimen/Lexend
      - https://opendyslexic.org/
      - Dark mode (mørk tema)
      - Læsestøtte (større tekst)
      - Det laves i seperate stylesheets
      - Link stylesheet med JS (eventListener toggle til eksterne stylesheets)
  - Gå igennem forms og test at JS slår korrekt igennem alle steder 
6. Aflever produkt
  - Hold tidligt møde med kunden og notér evt. rettelser

## Gannt diagram
![Gannt diagram](https://rasmuslytje.dk/wp-content/uploads/2022/11/gantt-diagram.png)

## Wireframe
https://www.figma.com/file/zYkjJqf02t7oShwBiAt5sQ/Wireframe-elektriker-side?t=rUC9qnbtfQasNduv-6

## Styleguide
+ Font: Poppins - light 300, normal 500, bold 700 
  - https://fonts.google.com/specimen/Poppins
+ Farver: 
  - `#fa7b61` - Orange
  - `#262322` - Sort
  - `#f9f9f9` - Lys grå
  - `#e6e6e6` - Grå
  - `#888888` - Mørk grå
  - `#ffffffcc` - Overlay
  - `5px 5px 10px #00000022` - Skygge
  - `#ffffff` - Hvid
+ Skriftstørrelse
  - `h1: clamp(2.4em, 10vw,  5em);`
  - `h2: clamp(2em, 5vw,  3em);`
  - `h3_1: clamp(2em, 5vw,  2.5em);`
  - `h3_2: clamp(1.4em, 5vw,  2em);`
  - `h3_3: clamp(1.2em, 5vw,  1.4em);`
  - `p: 1em;`
  - `p: clamp(1.1em, 5vw,  1.3em);` Læsevenlighed

#### Nyttige links
+ https://app.logo.com/
+ https://shortpixel.com/
+ https://devhints.io/
+ https://fontawesome.com/
+ https://flaticon.com/
+ https://animate.style/
