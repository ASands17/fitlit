# FitLit

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Organizational Resources](#organizational-resources)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Have you ever wanted to track your sleep, activity, and hydration habits? Well you are in luck, because Fitlit is an app that displays data in these three categories! See all of your data displayed on a convenient dashboard. Get fit with Fitlit! 🔥🔥🔥


### Technologies
- JavaScript
- HTML
- CSS
- API fetch
- Chai/Mocha testing
- Webpack

### Set Up
1. Clone this [repository](https://github.com/ASands17/fitlit).
2. `cd` into the directory.
3. Run `open index.html`.

### Features
- User sees a welcome card with their name, address, stride length, friends, and daily step goal.
- User can view their current step goal and average steps.
- User can view their daily and weekly water consumption.
- User can view their daily and weekly sleep hours and sleep quality.


![image](https://user-images.githubusercontent.com/93043035/169923910-ccf92de9-6f6f-4882-bac1-e877e8b3bc9d.png)


### Organizational Resources
- [Figma Dashboard](https://www.figma.com/file/SxZltJr5XcWric3Lbufna7/CIA's-Dashboard-Template?node-id=0%3A1)
- [Github Project Board](https://github.com/ASands17/fitlit/projects/1)

### Future Features
- User will be able to add hydration, sleep, and activity entries to their profile. 
- Weekly sleep and hydration data will be displayed using charts for a better user experience.
- Add icons to correspond with different sections. 

### Reflection
-One of the most valuable lessons we learned is that we should avoid manipulating the data in our data model. We created a function in our hydration class that would parse our date, and then we would use that parsed date to sort dates in order from most to least recent. However, since we mutated our date data, we encountered bugs once we were further along in our project, and we needed to do a major refactor so that our data remained consistent throughout the application. We learned that it is vital to keep our data consistent, and avoid manipulating it unless absolutely necessary. 

-We utilized many iterator methods in this project. It was fun to see the practical usages of these iterators in our webpage. Most notably, we decided to map through our API endpoints in our fetch call. We also used iterator methods to manipulate our DOM. We look forward to refining our iterator methods in future iterations of this project. 

-This project taught us a lot about Git workflow and troubleshooting Git issues. We encountered errors that none of us had seen before, and we had to spend some time googling those error messages and attempting to solve the issues. We also learned that co-authoring commits is an option, and we intend to do more research on this to implement in the second half of our project.

### Contributors
- [Irmak Erdem](https://www.linkedin.com/in/irmakerdem/)
- [Catlyn Bowles](https://www.linkedin.com/in/catlyn-bowles/)
- [Amanda Sands](https://www.linkedin.com/in/amanda-sands1/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/Fitlit-part-one.html).
