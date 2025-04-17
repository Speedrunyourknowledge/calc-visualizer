## Docker Images

### Backend
The image **emeraldkeys/calc-visualizer-backend** runs the backend server on port 3000. The associated dockerfile is in /calc-backend. 
This is the production build.

Commands to run the image on your computer:
```
docker pull emeraldkeys/calc-visualizer-backend:latest      
docker run -d --name=calc-backend -p 3000:3000 emeraldkeys/calc-visualizer-backend:latest

```
You can send requests to the server on http://localhost:3000

When you run the image, a new docker container is created on your computer. You can choose to delete old containers before creating a new one. 
