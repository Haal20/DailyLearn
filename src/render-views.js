//Page to handle rendering of views.
let main = document.getElementById('main');
let viewPlan = document.getElementById('businessPlan');
let viewIdea = document.getElementById('projectIdea');
let viewContact = document.getElementById('contact');


main.innerHTML = 'Hej från förstasidan';


viewPlan.addEventListener('click', (e) => {
    main.innerHTML = 'Hej från Affärsplan';
});

viewIdea.addEventListener('click', (e) => {
    main.innerHTML = 'Hej från Produktidé';
});

viewContact.addEventListener('click', (e) => {
    main.innerHTML = 'Hej från Kontaktuppgifter';
});