let main = document.getElementById('main');
let viewPlan = document.getElementById('businessPlan');
let viewIdea = document.getElementById('projectIdea');
let viewContact = document.getElementById('contact');


main.innerHTML = `<p>Detta är min förstasida. klicka vidare för att se mer ínformation om mitt projekt</p>`;


viewPlan.addEventListener('click', (e) => {
    main.innerHTML = `<h2>Affärsplan</h2>
    <p>DailyLearn är ett digitalt redskap som riktar sig mot elever och deras lärande på högstadiet. Visionen är att främja ett 
    livslångt lärande och jämna ut skillnader i samhället när det kommer till betygsskillnader mellan flickor och pojkar. Vi vill ta 
    ansvar från lärare och lägga det på eleven själv för att hen ska lära sig och få möjligheten att ta ansvar över egna studier. 
    Vi vill även hjälpa att skapa en hälsosam pluggkultur och sin egen studieteknik som blir ett redskap för elever, även 
    senare i livet.</p><p>
    Vår lösning är en applikation i mobiltelefonen som hjälper eleven att prioritera och inspirerar till att ta tag i studier i god 
    tid. Vi kan uppskattningsvis spara in 4 timmar/veckan på en lärares förtroendetid som annars brukar gå till att kontakta 
    vårdnadshavare och enskilda individer samt konstruktion av omprövningar.
    Applikationen använder sig av etablerade studietekniker i form av popups när eleven studerar. Detta hjälper eleven att ta
    vara på kunskapen hen lär sig. Kommer även inkludera ”brain breaks” som i studier visat sig förbättra skolresultat med 
    upp till 40%. </p><p>
    I applikationen kommer det finnas en Hem-vy. Här kommer inlämningar och prov visas i ett individuellt flöde. Eleven 
    kommer även se rekommenderad tid att studera på uppgiften; hur länge hen studerat på uppgiften samt hur det gått de 
    senaste dagarna.</p><p>
    I den gemensamma-vyn kommer en månadssammanfattning visas. Beroende på hur mycket eleven studerar så kommer 
    hen vandra längsmed en visuell karta. Klarar eleven av all rekommenderad tid under en vecka så når hen en stjärna som 
    blir guldfärgad. Det kommer även finnas röda flaggor på kartan som representerar prov och uppgifterna i Hem-vyn.
    I den gemensamma-vyn ska man även kunna bjuda in ”Workbuddies” som då också kommer visas på kartan. Vilka som 
    ska bjudas in till att vara ”Workbuddies” ska vara upp till eleven själv.</p><p>
    Uppskattningsvis så kommer nyttorna i applikationen innefatta:
    Ett ökat snittbetyg på 40%; 
    ökad känsla av kontroll över egenstudier med 59%; 
    en minskad betygsklyfta mellan tjejer och killar med 23%; 
    samt en minskning med 4 timmar av en lärares förtroendetid som går till påminnelser och konstruktioner av 
    omprövningar.</p><p>
    Denna applikation fokuserar på digitala lösningar med ett elevperspektiv; har elevers studieteknik och djupinlärning i 
    åtanke; möjliggör till eget ansvarstagande samt underlättar för föräldrar att hjälpa sina barn att prioritera.
    Allt i applikationen är specialanpassat för den som skolan är inrättad för, eleven.</p>`;
});

viewIdea.addEventListener('click', (e) => {
    main.innerHTML = `<h2>Produktidé</h2>
    <p>Prototypen jag ska bygga under kursen ska vara uppdelad i 3 delar. Den första delen är en "smart" att-göra-lista; den andra är en gemensam månadskarta; den sista är en övrigt-vy som visar samlad information kring hur en förbättrar sina studier.</p>
    <img src="./src/image/hem-vy.jpg" alt="Hem Vy">
    <p>Ovan ser du nu idén för hem-vyn. Här kommer alla inlämningar och prov som prioriteras att studera till en given dag att visas i ett induviduellt flöde i elevans applikation.
    Överskriften berättar vilken typ av uppgift eller prov det är och vad den heter; under visas hur många minuter eleven totalt rekomenderas att lägga på att studera på uppgiften samt hur många minuter den hittils har laggt.
    Det finns även en visuell representation av de studerade timmarna i form av en "bar" som fylls utefter procent avklarade minuter. Till sist har vi också till höger i uppgifts-objektet en liten sammanfattning som visar hur det gått att studera de senaste dagarna. fylls plutten i så betyder det att alla rekomenderade studietimmar är laggda.</p><br>
    <img src="./src/image/gemensamt-vy.jpg" alt="Gemensamt Vy">
    <p>Som också beskrivet kort i Affärsplanen så kommer det finnas en gemensam-vy. Denna kommer visa en sammanfattning av hela månadens studier. Här kommer man se röda flaggor som representerar uppgifterna som man såg på hemskärmen -håller en elev in på en av flaggorna så ska namnet på uppgiften den flaggan representerar visas-. 
    Det kommer finnas små avatar-bilder som representerar eleven och vänner eleven bjudit in till sin karta. 
    Det kommer även finnas stjärnor som representerar varje vecka i månaden. 
    Allt detta kommer visas på en liten "väg" som fylls i när eleven gör framsteg och tar sig fram i sina studier. 
    Att få se uppgifterna som ska göras och sig själv i förhållande till dessa ska främja elevens medvetenhet och uppmuntra till att studera mer fokuserat.</p>`;
});

viewContact.addEventListener('click', (e) => {
    main.innerHTML = `<h2>Mina kontaktuppgifter:</h2>
    Alma Härlin <br>
    Email: <a href="mailto: alma-harlin@hotmail.com">alma-harlin@hotmail.com</a><br>
    Tel: <a href="tel:+739714337">0739-71 43 37</a>`;
});

