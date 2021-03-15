# trick-app-django-react 
Trick App is a "to-do" list for learning skateboard tricks. You enter a trick name, type of trick and a tutorial video URL from YouTube into the app and once you learn the trick you can mark it as **completed**.  

Trick App was build using Django as the backend and React for the frontend. It is a revamped, full-stack version of an application I made earlier in my programming journey. You can find the original project live [here](https://sk8pp.herokuapp.com/) and the repo [here](https://github.com/qeOnda/trick-app-django).  
  
The site was deployed using Google App Engine and can be viewed here: https://trick-app-306710.nw.r.appspot.com/

## Install and run on localhost 
First clone repo:   
```
$ git clone https://github.com/qeOnda/trick-app-django-react
```
Then install React dependencies and start frontend development server: 
```
$ cd trick-app-django-react
$ cd backend/frontend
$ yarn install 
$ yarn start
```
Then install Django dependencies and start backend development server from root directory:
```
$ cd backend
$ pipenv shell 
$ pipenv install 
$ DJANGO_ENV=development python manage.py runserver
```
Now the development server will be running at localhost:8000.  


## Useful Resources
#### Configure React with Django
* https://fractalideas.com/blog/making-react-and-django-play-well-together/  
#### React router and protected routes    
* https://dev.to/mychal/protected-routes-with-react-function-components-dh  
* https://learnwithparam.com/blog/dynamic-pages-in-react-router/ 
#### JWT authentication 
* https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
* https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta
#### Deploy to GCP
* https://codeburst.io/beginners-guide-to-deploying-a-django-postgresql-project-on-google-cloud-s-flexible-app-engine-e3357b601b91
