//const GemensamVy = <img src="./src/index/image/gemensamt-vy.jpg" alt="Gemensamt Vy"></img>
//const HemVy = <img src="./src/index/image/hem-vy.jpg" alt="Hem Vy"></img>

export function renderIdeaView() {
    let main = document.getElementById('main');
    main.innerHTML = ` <div>
        <h2>Produktidé</h2>
        <p>Prototypen jag ska bygga under kursen ska vara uppdelad i 3 delar. Den första delen är en "smart" att-göra-lista; den andra är en gemensam månadskarta; den sista är en övrigt-vy som visar samlad information kring hur en förbättrar sina studier.</p>
        `
        let HemVy = document.createElement('img');
        HemVy.setAttribute("src", "url:./image/hem-vy.png"); 
        HemVy.setAttribute("alt","Hem Vy"); 
        main.appendChild(HemVy);

        main.innerHTML +=`<p>Ovan ser du nu idén för hem-vyn. Här kommer alla inlämningar och prov som prioriteras att studera till en given dag att visas i ett induviduellt flöde i elevans applikation.
        Överskriften berättar vilken typ av uppgift eller prov det är och vad den heter; under visas hur många minuter eleven totalt rekomenderas att lägga på att studera på uppgiften samt hur många minuter den hittils har laggt.
        Det finns även en visuell representation av de studerade timmarna i form av en "bar" som fylls utefter procent avklarade minuter. Till sist har vi också till höger i uppgifts-objektet en liten sammanfattning som visar hur det gått att studera de senaste dagarna. fylls plutten i så betyder det att alla rekomenderade studietimmar är laggda.</p><br />
        `
        let GemensamVy = document.createElement('img');
        GemensamVy.setAttribute("src","url:./image/gemensamt-vy.png"); 
        GemensamVy.setAttribute("alt","Gemensamt Vy"); 
        main.appendChild(GemensamVy);
        
        main.innerHTML +=`
        <p>Som också beskrivet kort i Affärsplanen så kommer det finnas en gemensam-vy. Denna kommer visa en sammanfattning av hela månadens studier. Här kommer man se röda flaggor som representerar uppgifterna som man såg på hemskärmen -håller en elev in på en av flaggorna så ska namnet på uppgiften den flaggan representerar visas-. 
        Det kommer finnas små avatar-bilder som representerar eleven och vänner eleven bjudit in till sin karta. 
        Det kommer även finnas stjärnor som representerar varje vecka i månaden. 
        Allt detta kommer visas på en liten "väg" som fylls i när eleven gör framsteg och tar sig fram i sina studier. 
        Att få se uppgifterna som ska göras och sig själv i förhållande till dessa ska främja elevens medvetenhet och uppmuntra till att studera mer fokuserat.</p>
        </div>`
}
