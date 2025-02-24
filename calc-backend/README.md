# Backend guide

### Scroll down for new important commands

### How to run this project
It will be best to run both frontend and backend at the sametime to avoid any errors
1. In one terminal cd into calc-frontend and run:
```
npm run dev
```
<br/>

2. Create another terminal, or split your current one and cd into calc-backend and run:
```
python app.py (python3 for mac)
```
<br/>

Both servers are now running and can interact with eachother. You do not need to have
the back end server opened in your browser since theres nothing for it to display

### Setting up the backend for the first time
It is recommended to create a virtual environment when working with python. You can skip these steps but they are **recommended** because it keeps all of our dependencies consistent.
<br/>

1. Make sure you are in calc-backend directory
2. Create the virtual environment (one time only)
```
python -m venv venv #(python3 if in mac)
```
3. Activate the virtual environment (try one of the following, you should be able to click tab for auto complete to ensure you are typing the right one)
```
source venv/bin/activate #(for mac)
```
```
venv/Scripts/activate #(for windows)
```
```
venv/Scripts/Activate.ps1 #(for PowerShell)
```
```
source venv/Scripts/activate #(for bash)
```
<br/>
Your virtual environment is now set up and your terminal should say (venv). 

### To deactivate the virtual environment
```
deactivate
```
### To reactivate the virtual environment look at step 3 above

### Dependencies
Dependencies will have to be managed by us manually. You can see the current dependencies by looking at **required.txt**
1. After installing a new python dependency (probably pip install {name}) update the dependencies:
```
pip freeze > required.txt
```
This will update the required.txt and you must remember to git push it

2. **Activate your venv before:** If someone installed new dependencies, after git pulling the changes:
```
pip install -r required.txt
```

### Where to git pull now
Now with a dedicated front end and back end, run **git pull** in calc-visualizer directory.
Then cd into frontend or backend directory depending on what you are working on.
Do your git adds, commits, and pushes in whatever directory your working in.
Continue to run **npm install** and **npm run dev** within calc-frontend