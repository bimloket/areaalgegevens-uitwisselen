# Interview met ON2

Datum: 06-04-2022

Aanwezig:

- ON2
- Rakesh Kalpoe - Arcadis
- Lucas Verhelst - BIM-Connected

## Introductie

- Arcadis licht het plan voor de meeting toe: Eerst wordt de vragenlijst in het algemeen besproken, waarna de benoemde knelpunten in de lijst puntsgewijs worden besproken aan de hand van een paar begeleidende sheets. De presentatie worden tijdens de sessie tevens gebruikt om de kern van het gesprek vast te leggen.
  
## Vragenlijst

- ON2 stuurt de vragenlijst achteraf op. Wel geeft ON2 aan dat één serie aan stappen was niet uitgevoerd, namelijk stap 3. Het samenstellen van de inschrijving middels: 
  - Het BIM-uitvoeringsplan
  - Een overzicht van de beoordeling van de taakgroepen 
  - Het mobilisatieplan en 
  - De risicobeoordeling m.b.t. informatielevering.
- Ten tijde van de gunning was de informatievraag immers niet bekend. Zo werd er wél aangekondigd dat het verplicht was om de informatielevering te laten plaatsvinden via COINS, maar was de OTL nog niet uitgeleverd. Er waren drie leveringen gevraagd: proeflevering, levering van het ontwerp aan het eind van de ontwerp en levering van het gebouwde ten tijde van oplevering
De uitvraag legde de focus op de uitwisseling middels COINS i.p.v. informatiebehoefte middels de OTL. 
Na gunning is dit (in goed overleg) wél ingeregeld.
- De antwoorden in de vragenlijst gelden voor het project: P2. 

## 3.1 t/m 3.7 Inschrijving

**Welke knelpunten zijn er geconstateerd in de projecten?**

- KP-1 De verplichting om via COINS uit te wisselen viel niet op in de uitvraag. 
  - De VSE refereerde naar de ILS (die duidelijk was opgesteld) waarin vervolgens de verplichtingen rondom COINS verdekt waren vermeld. 
Ook omdat de term ‘’COINS’’ niet bekend was binnen de organisatie werd er initieel weinig aandacht aan geschonken in het vormgeven van de aanbieding. Het leverde de opdrachtnemer ná gunning onverwachte kosten op.

**Welke behoefte is er voor landelijke afspraken?**

- De aannemer suggereert om een (lichte) vorm van o.a. een BIM-uitvoeringsplan contractueel uit te vragen. Hierdoor wordt de interne organisatie geforceerd om in een vroeg stadium met het juiste team de voorbereidende stappen te treffen (mocht het project worden gegund). 

## 4.1 t/m 4.7 Gunning

**Welke knelpunten zijn er geconstateerd in de projecten?**

- KP-6 Onduidelijkheid in welke informatie moest worden geleverd.
  - De OTL werd niet aangeleverd ten tijde van de uitvraag. Hierdoor was het in eerste instantie onduidelijk aan welke informatievraag zij moesten voldoen. Middels werksessies met de opdrachtgever is afgestemd 
    - welke eigenschappen er van welke objecttypen dienden te worden geleverd
    - In welke onderverdeling(en) de objecten moesten worden gerangschikt.

  - Toen de informatiebehoefte was gedefinieerd, konden de taken voor het produceren van de informatie alsnog worden uitgezet.

- KP-7 Geen levering van bestaande informatie
  - Door OG werd de bestaande informatie over het projectgebied niet aangeleverd. Daardoor moest die informatie bij de start van het project worden ingewonnen.

**Welke behoefte is er voor landelijke afspraken?**

- N.v.t.

## 6.1 t/m 6.5 Productie van informatie door samenwerking

**Welke knelpunten zijn er geconstateerd in de projecten?**

- KP-14 Informatie wordt vastgelegd vanuit verschillende perspectieven.
  - De eigen informatievraag voor de ontwerp-en realisatiefase verschilde van de informatievraag voor de beheerfase. Het verraste hoeveel informatie er ‘’extra’’ diende te worden geproduceerd voor de informatievraag voor de beheerfase.
  - Voor elk perspectief werd in een afzonderlijk SE systeem (van OA2) informatie geproduceerd. Het synchroniseren tussen deze systemen kostte de opdrachtnemer extra (onverwachte) manuren. De objecten (duizenden) in de omgeving waaruit de OTL gebaseerde levering werd gegenereerd werden gekoppeld aan de SBS objecten (tientallen) middels een speciaal daarvoor opgenomen veld en up to date gehouden d.m.v.een importsheet. 
  - De SBS bevatte veel minder objecten dan de OTL gebaseerde levering om dat in de SBS veel gebruik wordt gemaakt van opbossingen, waar in de OTL gebaseerde dataset alle individuen bestaan. De classificatie van de SBS en de OTL gebaseerde leveringen maakten gebruik van andere objecttypenstructuren, waardoor ze niet te combineren waren.
- KP-17 Het aantal conversies tussen systemen en daardoor bewerkelijke versiebeheer.
  - De geometrische informatie werd ingewonnen en geproduceerd door een onderaannemer (OA4). Dit werd aangeleverd in dwg-formaat dat werd omgezet in een gml-formaat. Op basis van dit gml-formaat werden er exports gegenereerd in csv-formaat, zodat in de SE tool de geometrische data (o.a. de GML UUIDs) konden worden geïmporteerd en gekoppeld aan de fysieke objecten. Middels een SE tool werd (via een COINS-exporter) een levering gedaan in ccr-formaat.						
  - Bij de opbouw van geometrische data liep men tegen technische problemen aan.
    - Bij het toevoegen van de as-built informatie ontstonden nieuwe id’s. Dit gebeurde in de geometrische data toen daar de as-built situatie in werd verwerkt.
    - Bij de omzetting van CAD naar GIS kwamen er gaten in de GIS laag. Dit is opgelost in de GIS software

- KP-22 Onduidelijkheid in het gebruik van de OTL
  - Op het eerste oog was het niet altijd duidelijk wat de betekenis was van OTL concepten om de instanties naartoe te classificeren.
  - Een voorbeeld hiervan betrof de OTL documenttypen. Deze waren vrij abstract zoals "ontwerptekening"". Voor de opdrachtnemer was het niet duidelijk of zij een aanzicht, plattegrond, model of juist alles mee daarnaartoe konden classificeren.
  - Ook was het niet altijd duidelijk hoe er diende te worden gedecomponeerd volgens de OTL.
  - Middels voorbeelden (vanuit de opdrachtnemer) werd het per sessie duidelijk hoe de OTL decompositie diende te worden gevolgd, wat de betekenis was van de concepten en hoe de eigenschappen moesten worden ingevuld. 
  - Om tot dit voorbeeld te komen is een van de kruisingen vanuit Autodesk Civil3D omgezet in GML via ArcGIS (een bestand per objecttype. Daarbij zijn de eigenschappen die al in het CAD aanwezig waren overgenomen in de GML. Vervolgens zijn alle objecten aangemaakt in de SE tool en gekoppeld. Daarna werden alle objecten onderling gerelateerd om een decompositie te vormen. De COINS producer van OA1 is vervolgens gebruikt om de container te genereren. Over deze proeflevering is vervolgens afstemming geweest met de opdrachtgever.

- KP-23 Onduidelijkheid hoe eigenschappen ingevuld moesten worden (conform de OTL).
  - Er waren lijsten beschikbaar met welke eigenschappen moesten worden ingevuld bij elk object, maar daaruit werd niet duidelijk aan welke eisen de ingevulde waarde moest voldoen.
  - Er waren geen gedetaileerde eisen aan de GIS data (bijv. tekenrichting)

- KP-24 Onduidelijkheid over de inhoud van documenten zelf en hoe deze ingevuld moesten worden (conform de OTL).
  - Voor de documenten was ook niet duidelijk welk document werd verwacht bij een bepaald objecttype
  - ON heeft uiteindelijk naar eigen inzicht documenten geleverd
  - Het lijstje met documenttypen waarmee het type document kon worden aangegeven was erg summier.
  - Waar de inhoud van de documenten aan moest voldoen was niet duidelijk.
**Welke behoefte is er voor landelijke afspraken?**
- Er is behoefte aan informatie over het scheiden van geometrische data met andere objectdata.

## 7.1 t/m 7.4 Levering van het informatiemodel

- KP-26 Onduidelijke validatiemethode
  - Voor gunning was niet duidelijk hoe en op welke (technische) acceptatiecriteria de levering zou worden gevalideerd door opdrachtgever. Zo was niet duidelijk hoe de geometrie-instanaties moest worden opgebouwd (bijv. dat een vlak in een bepaalde richting dient te worden getekend) of welke naamgeving-conventie er moest worden toegepast voor de instanties. 
  - Uiteindelijk contracteerde opdrachtnemer (OA1) voor de eigen OTL validatie dezelfde partij die informatieleveringen valideerde namens opdrachtgever.
- KP-29 Inflexibiliteit door koppeling van informatieleveringen aan betalingstermijnen
  - In dit project bleek dat er nog buiten informatie moest worden ingewonnen (door de onderaannemer), terwijl de informatie al moest worden geleverd vanwege de planning van de betalingstermijnen. Wanneer de betalingstermijn was verstreken werd er vanuit de opdrachtnemer immers standaard geen informatie meer nageleverd, aangezien er (contractueel) geen betaling tegenover stond. 
- KP-30 Dubbelingen in oplevering
  - In dit project diende (vrijwel) dezelfde levering tweemaal te worden opgeleverd, namelijk als een traditionele dossier én als COINS container. Zodoende werden de documenten dubbel geleverd ten opzichte van elkaar.
  - Omdat een deel van de informatie ook was bedoeld voor een gemeente was er een splitsing gemaakt in de leveringen. Zo was er in iedere afzonderlijke levering een hoofdmap voor elke opdrachtgever geïntroduceerd met daarin de documenten die de opdrachtgever wenste te ontvangen. Ofwel, er zaten ook dubbelingen tussen de afzonderlijke leveringen in het traditionele dossier.
  - Deze dubbele uitvraag (traditioneel, COINS) was bij uitvraag bekend.

**Welke behoefte is er voor landelijke afspraken?**

- De aannemer suggereert om de optie op naleveringen (m.a.w. standaard restpunten) in de uitvraag mee te nemen. Dit stelt de aannemer in staat om van te voren een budget in te ramen om deze naleveringen te verrichten.



