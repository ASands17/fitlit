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
Have you ever wanted to track your 😴 sleep, 🥾 activity, and 💧 hydration habits? Well you are in luck, because FitLit is an app that displays data in these three categories! See all of your data displayed on a convenient dashboard. Get fit with FitLit! 🔥🔥🔥

### Technologies
- JavaScript
- HTML
- CSS
- API fetch/post
- Chai/Mocha testing
- Webpack

### Set Up
1. Clone this [repository](https://github.com/ASands17/fitlit).
2. `cd` into the directory.
3. Run `npm install`.
4. To run tests, run `npm test`.
5. Start the server by running `npm start` and view at http://localhost:8080/.

### Features
- User sees a 👋 welcome card with their 🪪 id, 🤠 name, 🏡 address, 💌 email, 🏃‍♀️ stride length, 🥅 daily step goal, and 👯‍♀️ friends.
- User can view their current 🦶 step goal and average steps.
- User can view their daily and weekly water 🚰 consumption.
- User can view their daily and weekly sleep hours and sleep quality 💤.
- User can add new sleep 😴, hydration 🐳, and activity 🏃💨 data to the local server. 

<img width="1437" alt="Screen Shot 2022-06-06 at 1 55 00 PM" src="https://user-images.githubusercontent.com/98493391/172237647-e4b8ec12-9467-454f-8744-e319d2a5ecc5.png">


### Organizational Resources
- [Figma Dashboard](https://www.figma.com/file/SxZltJr5XcWric3Lbufna7/CIA's-Dashboard-Template?node-id=0%3A1)
- [GitHub Project Board](https://github.com/ASands17/fitlit/projects/1)

### Future Features
- Weekly sleep and hydration data will be displayed using charts for a better user experience.
- Dashboard will update with data added by the user. 
- User will be able to delete data no longer needed or added by accident. 

### Reflection
- One of the most valuable lessons we learned is that we should avoid manipulating the data in our data model. We created a function in our hydration class that would parse our date, and then we would use that parsed date to sort dates in order from most to least recent. However, since we mutated our date data, we encountered bugs once we were further along in our project, and we needed to do a major refactor so that our data remained consistent throughout the application. We learned that it is vital to keep our data consistent, and avoid manipulating it unless absolutely necessary. 

- We utilized many iterator methods in this project. It was fun to see the practical usages of these iterators in our webpage. Most notably, we decided to map through our API endpoints in our fetch call. We also used iterator methods to manipulate the DOM. We look forward to refining our iterator methods in future iterations of this project. 

- This project taught us a lot about Git workflow and troubleshooting Git issues. We encountered errors that none of us had seen before, and we had to spend some time googling those error messages and attempting to solve the issues. We also learned that co-authoring commits is an option, and we intend to do more research on this to implement in the second half of our project.

- Writing the code for the post requests was helpful because it showed how GET calls work together with POST calls. It helped us see how an app manages those interactions and how it works with changing the database. 

- Refactoring proved to be easier than initially expected. It's like the code wanted to be refactored, as it was easily set up to do so. 🤪

### Contributors of the CIA 🕵️‍♀️
- [*C*atlyn Bowles](https://www.linkedin.com/in/catlyn-bowles/)
- [*I*rmak Erdem](https://www.linkedin.com/in/irmakerdem/)
- [*A*manda Sands](https://www.linkedin.com/in/amanda-sands1/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/Fitlit-part-one.html).
