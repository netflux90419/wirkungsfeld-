const FIELDS = [
  {
    id: "archaeology",
    name: "Archäologie & Monumente",
    short: "Megalithen, Monolithen, Pyramiden, Tempel, Landschaften und rätselhafte Bauwerke.",
    icon: "01"
  },
  {
    id: "knowledge",
    name: "Altes & verlorenes Wissen",
    short: "Astronomie, Mathematik, Geometrie, Medizin, Metallurgie, Handwerk und überlieferte Wissenssysteme.",
    icon: "02"
  },
  {
    id: "technology",
    name: "Energie & Technologie",
    short: "Materialien, Mechanik, Akustik, Elektrizität, Magnetismus, Resonanz und technische Deutungen.",
    icon: "03"
  },
  {
    id: "catastrophe",
    name: "Katastrophen & vergangene Welten",
    short: "Fluten, Klimawandel, Landschaftswandel, Impakte, versunkene Landschaften und Kollapsfragen.",
    icon: "04"
  },
  {
    id: "alternative",
    name: "Alternative Geschichte",
    short: "Chronologiefragen, alte Karten, verschwundene Kulturen und moderne alternative Geschichtsbilder.",
    icon: "05"
  },
  {
    id: "consciousness",
    name: "Bewusstsein & Grenzforschung",
    short: "Wahrnehmung, Träume, Parapsychologie, Remote Viewing und Forschungsfragen zum Bewusstsein.",
    icon: "06"
  },
  {
    id: "myth",
    name: "Mythos & Überlieferung",
    short: "Schöpfung, Flut, Götter, Riesen, Weltalter, Unterwelt und Himmelsvorstellungen.",
    icon: "07"
  },
  {
    id: "anomaly",
    name: "Anomalien",
    short: "Befunde und Behauptungen, bei denen Beobachtung, Erklärung oder Quellenlage genauer untersucht werden müssen.",
    icon: "08"
  },
  {
    id: "antimatrix",
    name: "AntiMatrix — Archiv & Referenz",
    short: "Thematische Sammlung als Recherche-Ausgangspunkt; Aussagen werden unabhängig geprüft.",
    icon: "09"
  }
];


const DATA = [

  {
    id: "gobekli",
    title: "Göbekli Tepe",
    field: "archaeology",
    status: "attested",
    type: "Ort / Monument",
    date: "ca. 9600–8200 v. Chr.",
    summary: "Monumentale T-förmige Kalksteinpfeiler und Anlagen im südöstlichen Anatolien.",
    detail: "Göbekli Tepe gehört zu den bedeutenden Fundplätzen für die Erforschung früher monumentaler Architektur. Besonders interessant sind die monumentalen Pfeiler, Reliefdarstellungen und die soziale Organisation, die für ihre Errichtung notwendig war.",
    source: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/1572"
  },

  {
    id: "stonehenge",
    title: "Stonehenge & Avebury",
    field: "archaeology",
    status: "attested",
    type: "Megalithische Landschaft",
    date: "ca. 3700–1600 v. Chr.",
    summary: "Großes Netz neolithischer und bronzezeitlicher Monumente.",
    detail: "Stonehenge ist Teil einer weit größeren archäologischen Landschaft. Dazu gehören unter anderem Avenues, Grabhügel, Siedlungsplätze und weitere Monumente. Astronomische Ausrichtungen sind Teil der Forschung, beweisen aber nicht automatisch eine bestimmte Funktion.",
    source: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/373"
  },

  {
    id: "space-archaeology",
    title: "Archäologie aus dem All",
    field: "archaeology",
    status: "attested",
    type: "Methode",
    date: "20.–21. Jahrhundert",
    summary: "Satelliten- und Fernerkundungsdaten ermöglichen die Untersuchung großräumiger Landschaftsspuren.",
    detail: "Fernerkundung kann alte Kanäle, Siedlungsspuren und Landschaftsveränderungen sichtbar machen, die vom Boden schwer erkennbar sind. Solche Hinweise müssen anschließend mit weiteren Daten und möglichst mit Bodenbefunden überprüft werden.",
    source: "NASA Earth Observatory",
    url: "https://science.nasa.gov/earth/earth-observatory/searching-for-the-origins-of-space-archaeology/"
  },

  {
    id: "ancient-astronomy",
    title: "Alte Astronomie",
    field: "knowledge",
    status: "attested",
    type: "Wissensgeschichte",
    date: "Antike bis Vorgeschichte",
    summary: "Beobachtung von Sonne, Mond, Sternen und Planeten spielte in vielen Gesellschaften eine Rolle.",
    detail: "Astronomische Beobachtung konnte Kalender, Landwirtschaft, Navigation und religiöse Weltbilder beeinflussen. Die Existenz alter Himmelsbeobachtung ist gut belegt. Schwieriger ist die Bestimmung der konkreten Funktion einzelner Monumente.",
    source: "Wirkungsfeld",
    url: "#"
  },

  {
    id: "geometry",
    title: "Geometrie & Maß",
    field: "knowledge",
    status: "attested",
    type: "Mathematikgeschichte",
    date: "Antike und früher",
    summary: "Geometrische Verfahren sind in verschiedenen historischen Kulturen dokumentiert.",
    detail: "Wirkungsfeld trennt mathematisch nachweisbare Verfahren von späteren numerologischen Deutungen. Eine auffällige Zahlbeziehung ist zunächst eine Beobachtung; ihre historische Bedeutung muss separat belegt werden.",
    source: "Wirkungsfeld",
    url: "#"
  },

  {
    id: "metallurgy",
    title: "Alte Metallurgie",
    field: "knowledge",
    status: "attested",
    type: "Technikgeschichte",
    date: "Bronzezeit und früher",
    summary: "Metallgewinnung, Legierungen, Guss, Schmieden und Wärmebehandlung zeigen komplexes handwerkliches Wissen.",
    detail: "Die Untersuchung alter Metallurgie fragt nach Erzquellen, Öfen, Brennstoffen, Werkzeugen, Arbeitsteilung und Wissenstransfer. Rekonstruktionsexperimente können dabei helfen, historische Verfahren besser zu verstehen.",
    source: "Wirkungsfeld",
    url: "#"
  },

  {
    id: "acoustics",
    title: "Akustik alter Bauwerke",
    field: "technology",
    status: "disputed",
    type: "Forschungsfrage",
    date: "verschiedene Epochen",
    summary: "Einige historische Räume zeigen auffällige akustische Eigenschaften.",
    detail: "Akustische Messungen können reproduzierbare Eigenschaften eines Raums erfassen. Die weitergehende Behauptung, ein Bauwerk sei deshalb als Energie- oder Resonanzanlage errichtet worden, benötigt zusätzliche historische und technische Belege.",
    source: "Wirkungsfeld — Prüfakte",
    url: "#"
  },

  {
    id: "crystals",
    title: "Kristalle & Materialeigenschaften",
    field: "technology",
    status: "interpretation",
    type: "Material / Symbolik",
    date: "verschiedene Epochen",
    summary: "Kristalle und Mineralien besitzen reale physikalische Eigenschaften und wurden historisch vielfältig verwendet.",
    detail: "Wirkungsfeld trennt Materialwissenschaft, historische Nutzung und moderne energetische Deutungen. Eine physikalische Eigenschaft eines Minerals ist nicht automatisch ein Beweis für eine historische Energietechnologie.",
    source: "Wirkungsfeld — Prüfakte",
    url: "#"
  },

  {
    id: "free-energy",
    title: "Freie Energie",
    field: "technology",
    status: "hypothesis",
    type: "Moderne These",
    date: "19.–21. Jahrhundert",
    summary: "Unter dem Begriff werden unterschiedliche Behauptungen über Energiegewinnung und unbekannte Energiequellen zusammengefasst.",
    detail: "Für jede konkrete Behauptung müssen Energiequelle, Messmethode, Energiebilanz, Reproduzierbarkeit und unabhängige Prüfung getrennt untersucht werden.",
    source: "Wirkungsfeld — Methodik",
    url: "#"
  },

  {
    id: "flood",
    title: "Sintflut / Große Flut",
    field: "catastrophe",
    status: "disputed",
    type: "Mythos + Naturgeschichte",
    date: "verschiedene Zeiträume",
    summary: "Große Fluterzählungen sind in zahlreichen Traditionen überliefert.",
    detail: "Zu unterscheiden sind lokale Naturkatastrophen, regionale Überschwemmungen, Meeresspiegelanstieg und die literarische Entwicklung von Fluterzählungen. Aus der weiten Verbreitung von Flutmythen folgt nicht automatisch eine einzige globale Flut.",
    source: "Wirkungsfeld — Vergleichsakte",
    url: "#"
  },

  {
    id: "lost-landscapes",
    title: "Versunkene Landschaften",
    field: "catastrophe",
    status: "attested",
    type: "Geoarchäologie",
    date: "Prähistorische Zeit",
    summary: "Küstenlinien haben sich durch Meeresspiegeländerungen stark verändert.",
    detail: "Die Erforschung versunkener Landschaften verbindet Geologie, Klimageschichte, Archäologie und Unterwasserforschung. Ehemalige Lebensräume können heute unter Wasser liegen.",
    source: "Wirkungsfeld",
    url: "#"
  },

  {
    id: "tartaria",
    title: "Tartaria",
    field: "alternative",
    status: "unsupported",
    type: "Moderne alternative Geschichtsthese",
    date: "heutige Debatte",
    summary: "Unter 'Tartaria' werden heute verschiedene Vorstellungen über ein angeblich verborgenes Großreich zusammengefasst.",
    detail: "Historische Karten verwenden tatsächlich Bezeichnungen wie Tartaria oder Tartary für große Regionen Eurasiens. Daraus folgt jedoch nicht automatisch die Existenz eines einheitlichen, technologisch überlegenen Weltreichs im Sinne moderner Tartaria-Erzählungen.",
    source: "Wirkungsfeld — Quellenkritik",
    url: "#"
  },

  {
    id: "old-maps",
    title: "Alte Karten",
    field: "alternative",
    status: "primary",
    type: "Primärquellen",
    date: "verschiedene Jahrhunderte",
    summary: "Historische Karten sind direkte Quellen für damalige geografische Vorstellungen.",
    detail: "Karten müssen nach Entstehungszeit, Zweck, Kopiertradition, Projektion und Genauigkeit eingeordnet werden. Ein historischer Ortsname ist nicht automatisch Beleg für die moderne Interpretation dieses Namens.",
    source: "Wirkungsfeld — Quellenkritik",
    url: "#"
  },

  {
    id: "remote-viewing",
    title: "Remote Viewing",
    field: "consciousness",
    status: "disputed",
    type: "Grenzforschung",
    date: "20.–21. Jahrhundert",
    summary: "Experimentelle Versuche, Informationen über entfernte Ziele ohne normale sensorische Zugänge zu gewinnen.",
    detail: "Die entscheidende Forschungsfrage ist, ob Ergebnisse unter kontrollierten Bedingungen über Zufall hinaus reproduzierbar sind. Studien, Methodik, Auswertung und Replikation müssen getrennt betrachtet werden.",
    source: "Wirkungsfeld — Prüfakte",
    url: "#"
  },

  {
    id: "psi",
    title: "Psi / Parapsychologie",
    field: "consciousness",
    status: "disputed",
    type: "Forschungsfeld",
    date: "19.–21. Jahrhundert",
    summary: "Sammelbegriff für Forschungsfragen zu behaupteten außergewöhnlichen Wahrnehmungsphänomenen.",
    detail: "Das Feld ist historisch und methodisch umstritten. Wirkungsfeld dokumentiert Hypothesen und Experimente, ohne aus einzelnen positiven oder negativen Ergebnissen einen Gesamtbeweis abzuleiten.",
    source: "Wirkungsfeld — Methodik",
    url: "#"
  },

  {
    id: "flood-myth",
    title: "Fluterzählungen",
    field: "myth",
    status: "primary",
    type: "Textüberlieferung",
    date: "Alte Texttraditionen",
    summary: "Fluterzählungen sind in mehreren alten Literaturen überliefert.",
    detail: "Eine literarische Fluterzählung ist zunächst eine Quelle über eine Erzähltradition. Ob und welche Naturereignisse dahinterstehen, ist eine davon getrennte Forschungsfrage.",
    source: "British Museum Collection",
    url: "https://www.britishmuseum.org/collection"
  },

  {
    id: "energy-weapons",
    title: "Antike Energie- oder Waffenanlagen",
    field: "anomaly",
    status: "hypothesis",
    type: "Alternative technische These",
    date: "moderne Debatte",
    summary: "Moderne Autoren interpretieren bestimmte Monumente oder Artefakte als technische Anlagen.",
    detail: "Solche Thesen können als Hypothesen untersucht werden. Entscheidend sind technische Mechanismen, Materialspuren, Energiequellen, Bedienung, Vergleichsfunde und historische Belege.",
    source: "Wirkungsfeld — Hypothesenakte",
    url: "#"
  },

  {
    id: "pyramids",
    title: "Pyramiden als technische Systeme",
    field: "anomaly",
    status: "hypothesis",
    type: "Alternative Interpretation",
    date: "moderne Debatte",
    summary: "Neben religiösen und politischen Erklärungen existieren moderne technische Interpretationen von Pyramiden.",
    detail: "Technische Hypothesen werden separat geprüft und nicht allein aus Proportionen, Materialien oder geometrischen Beziehungen als historische Tatsache abgeleitet.",
    source: "Wirkungsfeld — Hypothesenakte",
    url: "#"
  },

  {
    id: "antimatrix",
    title: "AntiMatrix als Recherchearchiv",
    field: "antimatrix",
    status: "interpretation",
    type: "Sammlung / Ausgangspunkt",
    date: "modern",
    summary: "Thematische Sammlung zu alten Lehren, Mythologie, Archäologie, Grenzforschung und alternativen Deutungen.",
    detail: "AntiMatrix kann als umfangreicher Wegweiser dienen. Für Wirkungsfeld beginnt danach die Rückverfolgung: Woher stammt eine Aussage? Gibt es eine Primärquelle? Was sagt die historische Forschung? Welche Gegenargumente existieren?",
    source: "AntiMatrix",
    url: "https://antimatrix.org/"
  },

  {
    id: "anomaly-method",
    title: "Was ist eine Anomalie?",
    field: "anomaly",
    status: "interpretation",
    type: "Methodik",
    date: "laufend",
    summary: "Eine Anomalie ist zunächst eine Abweichung von einer Erwartung oder einem Modell.",
    detail: "Eine Anomalie kann auf Messfehler, unvollständige Daten, unbekannte Randbedingungen oder tatsächlich neue Phänomene hinweisen. Weitere Prüfung ist notwendig.",
    source: "Wirkungsfeld — Methodik",
    url: "#"
  }

];


const SOURCES = [

  {
    type: "INSTITUTION",
    title: "UNESCO — Göbekli Tepe",
    desc: "Dokumentation zu Monumenten und Welterbe-Kontext.",
    year: "UNESCO",
    url: "https://whc.unesco.org/en/list/1572"
  },

  {
    type: "INSTITUTION",
    title: "UNESCO — Stonehenge & Avebury",
    desc: "Dokumentation zu Monumenten, Landschaft und Bauphasen.",
    year: "UNESCO",
    url: "https://whc.unesco.org/en/list/373"
  },

  {
    type: "FORSCHUNG",
    title: "NASA — Astronomy",
    desc: "Material zur Geschichte astronomischer Beobachtung.",
    year: "NASA",
    url: "https://imagine.gsfc.nasa.gov/ask_astro/general.html"
  },

  {
    type: "FORSCHUNG",
    title: "NASA — Space Archaeology",
    desc: "Fernerkundung und archäologische Landschaftsforschung.",
    year: "NASA",
    url: "https://science.nasa.gov/earth/earth-observatory/searching-for-the-origins-of-space-archaeology/"
  },

  {
    type: "SAMMLUNG",
    title: "British Museum — Collection",
    desc: "Museale Sammlung von Artefakten und historischen Objekten.",
    year: "Sammlung",
    url: "https://www.britishmuseum.org/collection"
  },

  {
    type: "ARCHIV",
    title: "AntiMatrix",
    desc: "Thematisches Archiv und Recherche-Ausgangspunkt.",
    year: "Archiv",
    url: "https://antimatrix.org/"
  },

  {
    type: "METHODE",
    title: "Wirkungsfeld — Quellenkritik",
    desc: "Interne Struktur zur Trennung von Quelle, Beleg, Deutung und Hypothese.",
    year: "V1.0",
    url: "#"
  }

];


const TIMELINE = [

  [
    "ca. 10000–8000 v. Chr.",
    "Frühes Neolithikum",
    "Monumentale Anlagen entstehen in Teilen Vorderasiens."
  ],

  [
    "ca. 3700–1600 v. Chr.",
    "Stonehenge-Landschaft",
    "Neolithische und bronzezeitliche Monumente werden über lange Zeit erweitert und genutzt."
  ],

  [
    "2.–1. Jt. v. Chr.",
    "Schrift & Kosmos",
    "Astronomische, religiöse und politische Wissenssysteme werden in verschiedenen Regionen überliefert."
  ],

  [
    "Antike",
    "Naturphilosophie",
    "Fragen nach Stoff, Bewegung, Kosmos, Seele und Ursache werden systematisch diskutiert."
  ],

  [
    "Mittelalter",
    "Überlieferung & Transformation",
    "Wissensbestände werden kopiert, verändert und neu eingeordnet."
  ],

  [
    "15.–18. Jh.",
    "Karten & Naturkunde",
    "Kartografie, Vermessung und experimentelle Naturforschung verändern die Wissensproduktion."
  ],

  [
    "19.–20. Jh.",
    "Archäologie & Grenzforschung",
    "Archäologie professionalisiert sich; parallel entstehen neue Forschungsfelder."
  ],

  [
    "21. Jh.",
    "Satelliten & Daten",
    "Fernerkundung, digitale Archive, 3D-Dokumentation und offene Daten verändern die Untersuchung alter Spuren."
  ]

];


function statusLabel(status){

  const labels = {
    primary: "Primärquelle",
    attested: "Historisch belegt",
    interpretation: "Interpretation",
    disputed: "Umstritten",
    hypothesis: "Hypothese",
    unsupported: "Unbelegt",
    refuted: "Widerlegt"
  };

  return labels[status] || status;
}


function renderFields(){

  const fieldGrid = document.querySelector("#fieldGrid");

  if(!fieldGrid) return;

  fieldGrid.innerHTML = FIELDS.map(field => {

    const count = DATA.filter(item => item.field === field.id).length;

    return `
      <article
        class="field"
        data-field="${field.id}"
        onclick="filterField('${field.id}')">

        <span class="field-number">
          ${field.icon}
        </span>

        <h3>
          ${field.name}
        </h3>

        <p>
          ${field.short}
        </p>

        <small>
          ${count} EINTRÄGE · ERKUNDEN ↘
        </small>

      </article>
    `;

  }).join("");


  const select = document.querySelector("#fieldFilter");

  if(select){

    select.innerHTML =
      `<option value="all">Alle Felder</option>` +
      FIELDS.map(field =>
        `<option value="${field.id}">
          ${field.name}
        </option>`
      ).join("");

  }

}


function renderResults(){

  const searchInput = document.querySelector("#searchInput");

  if(!searchInput) return;

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  const activeFilter =
    document.querySelector(".filter.active");

  const status =
    activeFilter
      ? activeFilter.dataset.status
      : "all";

  const field =
    document.querySelector("#fieldFilter")
      ? document.querySelector("#fieldFilter").value
      : "all";


  const results = DATA.filter(item => {

    const matchesStatus =
      status === "all" ||
      item.status === status;

    const matchesField =
      field === "all" ||
      item.field === field;

    const fieldName =
      FIELDS.find(f => f.id === item.field)?.name || "";

    const searchableText = [

      item.title,
      item.summary,
      item.detail,
      item.type,
      item.date,
      fieldName,
      item.source

    ].join(" ").toLowerCase();

    const matchesSearch =
      !query ||
      searchableText.includes(query);

    return (
      matchesStatus &&
      matchesField &&
      matchesSearch
    );

  });


  const resultGrid =
    document.querySelector("#results");

  resultGrid.innerHTML =
    results.map(item => {

      const fieldName =
        FIELDS.find(f => f.id === item.field)?.name || "";

      return `
        <article
          class="result-card"
          onclick="openDetail('${item.id}')">

          <div class="card-top">

            <span class="status status-${item.status}">
              ${statusLabel(item.status)}
            </span>

            <span class="card-field">
              ${fieldName}
            </span>

          </div>

          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.summary}
          </p>

          <div class="card-footer">

            <span>
              ${item.type}
            </span>

            <span>
              ${item.date}
            </span>

          </div>

        </article>
      `;

    }).join("");


  const empty =
    document.querySelector("#emptyState");

  if(empty){
    empty.classList.toggle(
      "hidden",
      results.length !== 0
    );
  }

}


function renderDossiers(){

  const grid =
    document.querySelector("#dossierGrid");

  if(!grid) return;

  const ids = [

    "gobekli",
    "stonehenge",
    "acoustics",
    "flood",
    "tartaria",
    "free-energy",
    "remote-viewing",
    "energy-weapons"

  ];


  grid.innerHTML =
    ids.map((id,index) => {

      const item =
        DATA.find(x => x.id === id);

      return `
        <article
          class="dossier"
          onclick="openDetail('${item.id}')">

          <div class="dossier-index">
            AKTE ${String(index + 1).padStart(2,"0")}
       
