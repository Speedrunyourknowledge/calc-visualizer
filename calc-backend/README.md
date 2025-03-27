# Info about the backend

1. Installing new dependencies will be same as frontend
```
npm install [name of dependency]
```

2. If someone installs new dependencies be inside **calc-backend** and run:
```
npm install
```

3. To start the server, be inside **calc-backend** and run:
```
npm run dev
```

4. For frontend to make calls to the backend, make sure both serves are running (split your terminals)

## Project Structure

The **src** directory is the main directory, most of the files will be inside here
<br/>

1. **routes** directory will contain files with routes inside them
2. **controllers** directory will contain files that handle logic for the requests (handlers)
3. **middleware** directory will contain files that contain logic that will be executed before the main logic is executed (before the **controllers** logic).

Middleware can be error checking or checking for authentication

4. **services** directory will contain files for database calls

It will contain common functions like getUsersById that are used frequently so we dont need to keep coding them over and over in different places

5. **server.routes.ts** file links all the routes together.

Whenever a new route is created inside routes directory, you should make sure you also put it in here.

6. **index.ts** file is where the server gets run/setup

## Python Code
The graph route uses python code, so you must first create a virtual environment in **calc-backend**

```
python3 -m venv .venv
```

Then activate the virtual environment with 
```
source .venv/bin/activate
```

Then install the required python libraries with the following command (while the virtual environment is active)

```
python3 -m pip install -r requirements.txt
```

To deactivate the virtual environment just run
```
deactivate
```
