const DATA=[
{id:"gobekli",title:"Göbekli Tepe",field:"archaeology",status:"attested",type:"Ort / Monument",date:"ca. 9600–8200 v. Chr.",summary:"Monumentale T-förmige Kalksteinpfeiler und Anlagen im südöstlichen Anatolien.",detail:"Ein bedeutender Fundplatz für die Erforschung früher monumentaler Architektur. Pfeiler, Reliefs und Bauorganisation sind direkt archäologisch dokumentiert.",source:"UNESCO World Heritage Centre",url:"https://whc.unesco.org/en/list/1572"},
{id:"stonehenge",title:"Stonehenge & Avebury",field:"archaeology",status:"attested",type:"Megalithische Landschaft",date:"ca. 3700–1600 v. Chr.",summary:"Neolithische und bronzezeitliche Monumente in einer größeren Kulturlandschaft.",detail:"Astronomische Ausrichtungen werden erforscht. Eine Ausrichtung allein beweist jedoch keine bestimmte Funktion.",source:"UNESCO World Heritage Centre",url:"https://whc.unesco.org/en/list/373"},
{id:"space",title:"Archäologie aus dem All",field:"archaeology",status:"attested",type:"Methode",date:"20.–21. Jahrhundert",summary:"Satelliten- und Fernerkundungsdaten machen großräumige Landschaftsspuren sichtbar.",detail:"Fernerkundung kann Hinweise liefern, die anschließend mit Bodenbefunden und weiteren Daten geprüft werden.",source:"NASA Earth Observatory",url:"https://science.nasa.gov/earth/earth-observatory/searching-for-the-origins-of-space-archaeology/"},
{id:"astronomy",title:"Alte Astronomie",field:"knowledge",status:"attested",type:"Wissensgeschichte",date:"Vorgeschichte bis Antike",summary:"Sonne, Mond, Sterne und Planeten wurden beobachtet und in Kalendern und Weltbildern verarbeitet.",detail:"Alte Himmelsbeobachtung ist gut dokumentiert. Die Funktion einzelner Monumente bleibt je nach Befund eine eigene Frage.",source:"Wirkungsfeld",url:"#methodik"},
{id:"geometry",title:"Geometrie & Maß",field:"knowledge",status:"attested",type:"Mathematikgeschichte",date:"Antike und früher",summary:"Geometrische Verfahren sind in verschiedenen historischen Kulturen dokumentiert.",detail:"Mathematisch belegte Verfahren werden von späterer Numerologie getrennt.",source:"Wirkungsfeld",url:"#methodik"},
{id:"metallurgy",title:"Alte Metallurgie",field:"knowledge",status:"attested",type:"Technikgeschichte",date:"Bronzezeit und früher",summary:"Metallgewinnung, Legierungen, Guss und Schmieden zeigen komplexes handwerkliches Wissen.",detail:"Erzquellen, Öfen, Werkzeuge, Brennstoffe und Rekonstruktionsexperimente sind wichtige Untersuchungsebenen.",source:"Wirkungsfeld",url:"#methodik"},
{id:"acoustics",title:"Akustik alter Bauwerke",field:"technology",status:"disputed",type:"Forschungsfrage",date:"verschiedene Epochen",summary:"Einige historische Räume zeigen auffällige akustische Eigenschaften.",detail:"Messbare Akustik ist von der Behauptung zu trennen, ein Bauwerk sei deshalb als Energie- oder Resonanzanlage errichtet worden.",source:"Wirkungsfeld — Prüfakte",url:"#methodik"},
{id:"crystals",title:"Kristalle & Materialeigenschaften",field:"technology",status:"interpretation",type:"Material / Symbolik",date:"verschiedene Epochen",summary:"Mineralien besitzen reale physikalische Eigenschaften und wurden historisch vielfältig verwendet.",detail:"Materialwissenschaft, historische Nutzung und moderne energetische Deutungen sind getrennte Fragen.",source:"Wirkungsfeld — Prüfakte",url:"#methodik"},
{id:"free",title:"Freie Energie",field:"technology",status:"hypothesis",type:"Moderne These",date:"19.–21. Jahrhundert",summary:"Sammelbegriff für unterschiedliche Behauptungen über unbekannte oder neuartige Energiegewinnung.",detail:"Zu prüfen sind Energiequelle, Messmethode, Energiebilanz, Reproduzierbarkeit und unabhängige Kontrolle.",source:"Wirkungsfeld — Methodik",url:"#methodik"},
{id:"flood",title:"Sintflut / Große Flut",field:"catastrophe",status:"disputed",type:"Mythos + Naturgeschichte",date:"verschiedene Zeiträume",summary:"Große Fluterzählungen sind in zahlreichen Traditionen überliefert.",detail:"Lokale Fluten, regionale Überschwemmungen, Meeresspiegelanstieg und literarische Traditionen müssen voneinander getrennt werden.",source:"Wirkungsfeld — Vergleichsakte",url:"#methodik"},
{id:"tartaria",title:"Tartaria",field:"alternative",status:"unsupported",type:"Moderne alternative Geschichtsthese",date:"heutige Debatte",summary:"Moderne Erzählungen verbinden historische Kartenbezeichnungen mit einem angeblich verborgenen Großreich.",detail:"Historische Karten verwenden tatsächlich Begriffe wie Tartaria/Tartary. Daraus folgt nicht automatisch die moderne Vorstellung eines einheitlichen technologisch überlegenen Weltreichs.",source:"Wirkungsfeld — Quellenkritik",url:"#methodik"},
{id:"maps",title:"Alte Karten",field:"alternative",status:"primary",type:"Primärquellen",date:"verschiedene Jahrhunderte",summary:"Historische Karten sind direkte Quellen für damalige geografische Vorstellungen.",detail:"Entstehungszeit, Zweck, Kopiertradition, Projektion und Genauigkeit müssen berücksichtigt werden.",source:"Wirkungsfeld — Quellenkritik",url:"#methodik"},
{id:"remote",title:"Remote Viewing",field:"consciousness",status:"disputed",type:"Grenzforschung",date:"20.–21. Jahrhundert",summary:"Experimentelle Versuche zu Informationen über entfernte Ziele ohne normale sensorische Zugänge.",detail:"Entscheidend sind Kontrollbedingungen, Auswertung, Replikation und die Abgrenzung von Zufall.",source:"Wirkungsfeld — Prüfakte",url:"#methodik"},
{id:"psi",title:"Psi / Parapsychologie",field:"consciousness",status:"disputed",type:"Forschungsfeld",date:"19.–21. Jahrhundert",summary:"Forschungsfragen zu behaupteten außergewöhnlichen Wahrnehmungsphänomenen.",detail:"Historische Experimente und moderne Replikationsfragen werden getrennt dokumentiert.",source:"Wirkungsfeld — Methodik",url:"#methodik"},
{id:"mythflood",title:"Fluterzählungen",field:"myth",status:"primary",type:"Textüberlieferung",date:"Alte Texttraditionen",summary:"Fluterzählungen sind in mehreren alten Literaturen überliefert.",detail:"Ein Text ist zunächst ein Beleg für eine Erzähltradition. Ein dahinterliegendes Naturereignis ist eine gesonderte Hypothese.",source:"British Museum Collection",url:"https://www.britishmuseum.org/collection"},
{id:"weapons",title:"Antike Energie- oder Waffenanlagen",field:"anomaly",status:"hypothesis",type:"Alternative technische These",date:"moderne Debatte",summary:"Moderne Autoren interpretieren bestimmte Monumente oder Artefakte als technische Anlagen.",detail:"Zu prüfen sind Mechanismus, Materialspuren, Energiequelle, Bedienung, Vergleichsfunde und historische Belege.",source:"Wirkungsfeld — Hypothesenakte",url:"#methodik"},
{id:"pyramids",title:"Pyramiden als technische Systeme",field:"anomaly",status:"hypothesis",type:"Alternative Interpretation",date:"moderne Debatte",summary:"Neben religiösen und politischen Erklärungen existieren moderne technische Interpretationen.",detail:"Geometrie und Materialeigenschaften allein sind kein Beweis für eine historische technische Funktion.",source:"Wirkungsfeld — Hypothesenakte",url:"#methodik"},
{id:"antimatrix",title:"AntiMatrix als Recherchearchiv",field:"antimatrix",status:"interpretation",type:"Sammlung / Ausgangspunkt",date:"modern",summary:"Thematische Sammlung zu alten Lehren, Mythologie, Archäologie und alternativen Deutungen.",detail:"Als Recherche-Einstieg nützlich; jede konkrete Aussage wird auf Herkunft, Primärquelle und Gegenpositionen zurückgeführt.",source:"AntiMatrix",url:"https://antimatrix.org/"}
];

const FIELDS=[
["archaeology","Archäologie & Monumente","Megalithen, Monolithen, Pyramiden, Tempel und rätselhafte Bauwerke."],
["knowledge","Altes & verlorenes Wissen","Astronomie, Geometrie, Metallurgie, Medizin und Handwerk."],
["technology","Energie & Technologie","Materialien, Akustik, Resonanz, Elektrizität und technische Thesen."],
["catastrophe","Katastrophen & vergangene Welten","Fluten, Klima, Landschaftswandel und versunkene Räume."],
["alternative","Alternative Geschichte","Alte Karten, Chronologiefragen und moderne alternative Geschichtsbilder."],
["consciousness","Bewusstsein & Grenzforschung","Remote Viewing, Psi, Wahrnehmung und Bewusstseinsfragen."],
["myth","Mythos & Überlieferung","Schöpfung, Flut, Götter, Riesen und Weltalter."],
["anomaly","Anomalien","Befunde und Behauptungen, die genauer untersucht werden müssen."],
["antimatrix","AntiMatrix — Archiv & Referenz","Recherche-Ausgangspunkt, nicht automatische Autorität."]
];
const STATUS={all:"Alle",primary:"Primärquelle",attested:"Historisch belegt",interpretation:"Interpretation",disputed:"Umstritten",hypothesis:"Hypothese",unsupported:"Unbelegt",refuted:"Widerlegt"};
const $=s=>document.querySelector(s);

function render(){
  const q=$("#search").value.trim().toLowerCase(), f=$("#field").value;
  const active=document.querySelector(".filter.active")?.dataset.status||"all";
  const list=DATA.filter(x=>{
    const text=[x.title,x.summary,x.detail,x.type,x.date,x.source,FIELDS.find(y=>y[0]===x.field)?.[1]].join(" ").toLowerCase();
    return (f==="all"||x.field===f)&&(active==="all"||x.status===active)&&(!q||text.includes(q));
  });
  $("#count").textContent=`${list.length} EINTRÄGE`;
  $("#results").innerHTML=list.map(x=>`<article class="card" data-id="${x.id}"><span class="status status-${x.status}">${STATUS[x.status]}</span><h3>${x.title}</h3><p>${x.summary}</p><div class="card-footer"><span class="meta">${x.type}</span><span class="meta">${x.date}</span></div></article>`).join("");
  document.querySelectorAll(".card").forEach(c=>c.onclick=()=>openDetail(c.dataset.id));
}
function openDetail(id){
  const x=DATA.find(a=>a.id===id), field=FIELDS.find(a=>a[0]===x.field);
  $("#modalBody").innerHTML=`<div class="eyebrow">${field[1]} · ${STATUS[x.status]}</div><h2>${x.title}</h2><p><strong>${x.summary}</strong></p><p>${x.detail}</p><div class="questions"><h3>PRÜFFRAGEN</h3><p>Was ist direkt belegt?<br>Welche Quelle steht am Anfang der Aussage?<br>Welche unabhängigen Befunde existieren?<br>Welche Gegenargumente gibt es?<br>Was wäre ein belastbarer Test?</p><p>Ausgangspunkt: ${x.source}</p><a href="${x.url}" target="_blank" rel="noopener">Quelle / Recherche ↗</a></div>`;
  $("#modal").classList.add("open");$("#modal").setAttribute("aria-hidden","false");
}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"})}

document.addEventListener("DOMContentLoaded",()=>{
  $("#recordCount") && ($("#recordCount").textContent=`${DATA.length} EINTRÄGE`);
  FIELDS.forEach(f=>{ $("#field").insertAdjacentHTML("beforeend",`<option value="${f[0]}">${f[1]}</option>`); $("#fields").insertAdjacentHTML("beforeend",`<article class="field" data-field="${f[0]}"><span class="field-number">${String(FIELDS.indexOf(f)+1).padStart(2,"0")}</span><h3>${f[1]}</h3><p>${f[2]}</p><small class="meta">${DATA.filter(x=>x.field===f[0]).length} EINTRÄGE · ERKUNDEN ↘</small></article>`);});
  Object.entries(STATUS).forEach(([key,label])=>$("#filters").insertAdjacentHTML("beforeend",`<button class="filter ${key==="all"?"active":""}" data-status="${key}">${label}</button>`));
  $("#filters").addEventListener("click",e=>{if(!e.target.matches(".filter"))return;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));e.target.classList.add("active");render()});
  $("#fields").addEventListener("click",e=>{const card=e.target.closest(".field");if(!card)return;$("#field").value=card.dataset.field;render();scrollToId("erkunden")});
  $("#search").addEventListener("input",render);$("#field").addEventListener("change",render);
  $("#clear").onclick=()=>{$("#search").value="";render();$("#search").focus()};
  $("#modalClose").onclick=()=>{$("#modal").classList.remove("open");$("#modal").setAttribute("aria-hidden","true")};
  $("#modal").onclick=e=>{if(e.target===$("#modal"))$("#modalClose").click()};
  $("#menuBtn").onclick=()=>$("#nav").classList.toggle("open");
  $("#nav").addEventListener("click",e=>{if(e.target.matches("a"))$("#nav").classList.remove("open")});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));
  const timeline=[["ca. 10000–8000 v. Chr.","Frühes Neolithikum","Monumentale Anlagen entstehen in Teilen Vorderasiens."],["ca. 3700–1600 v. Chr.","Stonehenge-Landschaft","Monumente werden über lange Zeit erweitert und genutzt."],["2.–1. Jt. v. Chr.","Schrift & Kosmos","Astronomische und religiöse Wissenssysteme werden überliefert."],["Antike","Naturphilosophie","Stoff, Bewegung, Kosmos, Seele und Ursache werden systematisch diskutiert."],["Mittelalter","Überlieferung & Transformation","Wissensbestände werden kopiert, verändert und neu eingeordnet."],["15.–18. Jh.","Karten & Naturkunde","Kartografie, Vermessung und experimentelle Naturforschung verändern Wissensproduktion."],["19.–20. Jh.","Archäologie & Grenzforschung","Archäologie professionalisiert sich; neue Forschungsfelder entstehen."],["21. Jh.","Satelliten & Daten","Fernerkundung, digitale Archive und 3D-Dokumentation verändern die Untersuchung alter Spuren."]];
  $("#timeline").innerHTML=timeline.map(t=>`<article class="time"><span class="meta">${t[0]}</span><h3>${t[1]}</h3><p>${t[2]}</p></article>`).join("");
  $("#dossiers").innerHTML=DATA.filter(x=>["gobekli","stonehenge","acoustics","flood","tartaria","free","remote","weapons"].includes(x.id)).map(x=>`<article class="dossier" data-id="${x.id}"><span class="meta">FALLAKTE</span><h3>${x.title}</h3><p>${x.summary}</p><div class="dossier-tags"><span class="status status-${x.status}">${STATUS[x.status]}</span></div></article>`).join("");
  document.querySelectorAll(".dossier").forEach(c=>c.onclick=()=>openDetail(c.dataset.id));
  const sources=[["INSTITUTION","UNESCO — Göbekli Tepe","Dokumentation zum Welterbe-Kontext.","https://whc.unesco.org/en/list/1572"],["INSTITUTION","UNESCO — Stonehenge & Avebury","Dokumentation zu Monumenten und Landschaft.","https://whc.unesco.org/en/list/373"],["FORSCHUNG","NASA — Space Archaeology","Fernerkundung und archäologische Landschaftsforschung.","https://science.nasa.gov/earth/earth-observatory/searching-for-the-origins-of-space-archaeology/"],["SAMMLUNG","British Museum — Collection","Museale Sammlung historischer Objekte.","https://www.britishmuseum.org/collection"],["ARCHIV","AntiMatrix","Thematisches Archiv und Recherche-Ausgangspunkt.","https://antimatrix.org/"]];
  $("#sources").innerHTML=sources.map(s=>`<article class="source"><span class="meta">${s[0]}</span><div><h3>${s[1]}</h3><p>${s[2]}</p></div><a href="${s[3]}" target="_blank" rel="noopener">↗</a></article>`).join("");
  render();
});
 
