# SixthFence (Weekend of Innovation)


This application consists of cards on the left panel and the right hand panel corresponds to a geographical map. There are few custom points plotted on the map which correspond to the location of bridges (in this case) on the graph. 
This is a web appliation implemented using JavaScript, Bootstrap (previous version), ArcGIS JavaScript APIs such as Map, InfoWindow, Popups etc. 
Tinify - A node module is used to compress the images that are too huge in size. When you run "npm run build" then first, the css gets compliled and then the script responsible for compressing these files gets executed.  
Whenever you hit the url for the first time, a service worker gets register under the Applications -> Service Worker inside the inspect element. The service worker is scripted in such a way that it will cache all the media files in the browser cache and the next time you run this application, it can even work as before with offline network.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
Here is the link to a Story Map used to present this project: 
https://ess.maps.arcgis.com/apps/Cascade/index.html?appid=94a2f301ce3a4b04997063ba2a8422e3

### Prerequisites

What things you need to use this project : 
Localhost Server : (XAMPP) or any other

### Installing and Running

A step by step series of examples that tell you how to get a development env running

-If you have a web server like XAMPP, clone the folder and copy paste it into the htdocs folder of XAMPP.
-Go to the control panel of your web server and start it. Once your server is started, you can to the browser
 and type localhost:8080/intern/intro.html
  -8080 is the port number and it might vary if you have the web server running on a different port number
  -intern is the name of the cloned folder (Project Folder Name)
-Once you enter this URL, a logo will appear for 3 seconds (splash screen) and then it will be redirected to index.html

## Demo
![alt text](https://raw.githubusercontent.com/kunalbidkar/SixthFence.github.io/master/sf.gif)

## Technologies Used

* [HTML5]
* [ArcGIS JavaScript APIs]
* [ArcGIS Desktop]
* [ArcGIS Online]
* [GeoEvent Server]
 
 
## Authors

* **Kunal Bidkar, Developer** 
* **Jen Kern, Geographer and media creator ** 
* **Joe Efenecy, Geographer and spearhead of GeoEvent ** 

## Acknowledgments

* Stewart Rouse and Gregory Christakos for throughout guidance & suggestions in the project.

