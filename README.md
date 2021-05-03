# DaylieLearn 
Classroom application.
This application is only designed for mobile use. Please have that in mind if 
viewing on a big screen device.

#GETTING STARTED
Clone the repository by copying the HTTPS adress on the projects GitHub page (should be a button called "Code" where you can fint it).
Choose a map to store the projekt in; right click the map and choose "Git Bash Here".
Your terminalwindow should now be open.
Wright "git clone " in the terminal and paste the projects HTTPS adress we copied earlier. 
Run the command.
Wright "cd " and drag the mapp that just got created into the terminalwindow.
Run the command.
Ensure that you are on the right path of the project.
Wright "code ." in order to open the project with the code-editor VS Code.
Open the Termilanwindow inside VS Code.
Run "npm ci" in the terminal to install dependensies.
Run "npm start" in the terminal to run the application on a server with Parcel.
Open up your webb-browser and paste "http://localhost:1337".
OR
(Ctrl + Right) click the "http://localhost:1337" that appers in the terminal after running the npm start command.
In the browser window (Ctrl + Shift + M) for the best mobile friendly experience the application was designed for.

Parsel will transpile the code outomagicaly when you run "npm start". This because we have "start": "parcel *.html --port 1337" in our "scripts" inside of the package.json file.

#LISTA MED EXTERNA BIBLIOTEK
"@fortawesome/fontawesome-svg-core": "^1.2.35",
"@fortawesome/free-solid-svg-icons": "^5.15.3",
"@fortawesome/react-fontawesome": "^0.1.14",
VADFÖR DE TRE OVAN: för att kunna använda fontawesome-iconer i min application.

"bulma": "^0.9.2",
VARFÖR: för att kunna använda Bulma för styling och css i hela applikationen.

"parcel": "^2.0.0-beta.2",
VARFÖR: för att kunna använda Parcel till att transpilera react-koden till ett tillstånd som är körbart i webbläsaren.

"react": "^17.0.2",
"react-dom": "^17.0.2"
VARFÖR: för att göra det möjligt att koda med react-komponenter, JSX samt rendera react kod i DOM:en

"@parcel/transformer-image": "^2.0.0-beta.2"
Parcel/transformer-image finns för att kunna importera bilder i applikationen 

"react-router-dom": "^5.2.0"
react-router används i applikationen för att presentera olika vyer för användaren samt för att få tillgång till funktionen med webb-historikens tillbaka frammåt och ladda om knapp. så man stannar på senast besökta vun när man laddar om eller gå till baka till föregående om man laddar om osv.

#TJÄNSTER
API:et:
https://retoolapi.dev/T5kUZD/todos
Är ett API fyllt med mock-data av olika slag.
Jag använder API:et för att ha en databas med todos att testa fetch anrop med i min applikation. Tanken är att denna senare ska bytas ut till en databas med riktig todo information.
Jag använder API:et i:
app.js rad 17 för att hämta alla todos.
form-get-to-do.js rad 22 för att hämta ett todo men hjälp av id.
form-create-to-do.js rad 23 för att för att skapa nytt todo.
todo.js rad 11, 26, 35 för att skapa logiken för ovanstående funktioner.