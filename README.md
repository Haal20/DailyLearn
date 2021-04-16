# DaylieLearn
Classroom application.
This application is only designed for mobile use. Please have that in mind if 
viewing on a big screen device.

#Getting started
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
Open up your webb-browser and paste "http://localhost:1234".
OR
(Ctrl + Right) click the "http://localhost:1234" that appers in the terminal after running the npm start command.
In the browser window (Ctrl + Shift + M) for the best mobile friendly experience the application was designed for.

Parsel will transpile the code outomagicaly when you run "npm start". This because we have "start": "parcel *.html --port 1234" in our "scripts" inside of the package.json file.