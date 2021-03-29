let main = document.getElementById('main');
let viewPlan = document.getElementById('businessPlan');
let viewIdea = document.getElementById('projectIdea');
let viewContact = document.getElementById('contact');


main.innerHTML = `<p>Detta är min förstasida. klicka vidare för att se mer ínformation om mitt projekt</p>`;


viewPlan.addEventListener('click', (e) => {
    main.innerHTML = `<h2>Affärsplan</h2>
    <p>Detta är min affärsplan</p>`;
});

viewIdea.addEventListener('click', (e) => {
    main.innerHTML = `<h2>Produktidé</h2>
    <p>Detta är min projektidé</p>`;
});

viewContact.addEventListener('click', (e) => {
    main.innerHTML = `<h2>Mina kontaktuppgifter:</h2>
    Alma Härlin <br>
    Email: <a href="mailto: alma-harlin@hotmail.com">alma-harlin@hotmail.com</a><br>
    Tel: <a href="tel:+739714337">0739-71 43 37</a>`;
});

