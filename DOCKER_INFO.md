## Docker Images

### Frontend
The image **emeraldkeys/calc-visualizer-frontend** runs a Vite server on port 5173. This displays the website's frontend. The associated dockerfile is in /calc-frontend.
This is the development version, which contains the original files before they are assembled into the final javascript bundle.

Commands to run the image on your computer:
```
docker pull emeraldkeys/calc-visualizer-frontend:latest      
docker run -d --name=calc-frontend -p 5173:5173 emeraldkeys/calc-visualizer-frontend:latest

```
You can access the server on http://localhost:5173

When you run the image, a new docker container is created on your computer. You can choose to delete old containers before creating a new one. 
