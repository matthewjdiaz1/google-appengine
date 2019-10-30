# Altirnao - Google AppEngine exercise

## Installing Dependencies

From within the root directory:

install dependencies:
```sh
npm install
```

create bundle.js:
```
npm run build
```

start localhost server:
```
npm start
```

## Instructions 
Build a simple web application using Google AppEngine (Java or any other language, you can check the available languages on the documentation page). Any framework for the frontend part is welcome. When done, you can publish the application on a appspot.com domain following the documentation and share with us the code (or publishing it on some platform like github or bitbucket).

The webapp should contain:
  []  Login / logout main page (access with Google account)
  []  Page where the user can launch a simulation of 100 tasks when each has to produce 1000 random numbers between 0 and 50
  []  Page with simulation results visualization (results can be shown by graphics using a javascript library of your choice)
    []  how many numbers have been generated
    []  % of appearance of numbers (eg: the number 2 has been generated 5% of the time)
    []  the most frequently generated number, total time of simulation

## Useful links

```sh
https://cloud.google.com/appengine/kb/
https://console.cloud.google.com/
https://eu.udacity.com/course/developing-scalable-apps-in-java--ud859
```
