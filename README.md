# DaylieLearn
Classroom application.

Clone the repository by copying the HTTPS adress on the projects GitHub page.
Choose a map to store the projekt in; right click the map and choose "git bacth here".
Your terminalwindow should now be open.
Wright "git clone " in the terminal and paste the copied HTTPS adress of the project.
Press Enter.
Ensure that you are on the right path of the project.
Run "npm install" in the terminal to install dependensies.
Run "npm start" in the terminal to start server .
Open up your webb-browser and paste "http://localhost:1234/app.html".

Parsel will transpile the code outomagicaly when you run "npm start". This because we have "start": "parcel *.html --port 1234" in our "scripts" inside of the package.json file


#Kravlista

#källkod:
1. Korta och tydliga instruktioner i README.filen om hur man bygger och besöker applikationen i webbläsaren.
2. Källkoden ska kunna transpileras med Parcel.
3. beskriv Parcel i README-filen.
4. Lämpliga filer -som inte kan genereras av Parcel- ska vara versionshanterade.
5. git-repot är samma som i tidigare inlämningsuppgift.
6. git-repot ska innehålla samma index.html och app.html, som ska fungera på samma sätt som i tidigare inlämningsuppgift.

#app.html:
1. app.html ska renderas med React när den besöks.
2. React träd ska bestå av 5 komponenter.
3. komponenterna ska finnas med i källkoden -på github-.
4. React komponenterna är skrivna med JSX.
5. 2 komponenter ska hantera event -ex. från användaren-.
6. 2 komponenter ska hantera state -rendera tillståndsbaserad information-.
[7]. 1 komponent hanterarLifecycle hook -för att påverka annan komponenst tillstånd-.
[8]. via 1 komponent ska användare kunna spara information i LocalStorage.
[9]. Information i LocalStorage används vid rendering av React-trädet.
10. I app.html används egen css eller ett bibliotek för att ge kompnenter stil och form.
[11]. I app.html används egen css för att ge komponenter rörelse.