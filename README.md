# Triangle challenge (TS UI)
An ES6 program that determines the type of a triangle. It takes the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

## Technology Stack
This app is build with using vanilla javascript and ES6. Node, npm and webpack is used for building and compiling front end build tasks such as transpiling ES6 to ES5, adding CSS to the application and bundling of Javascript files.

## Design Description
The UI of this coding challenge is build using the Tradeshift UI. Components used from the TS UI are Header, Form, Main, Notification, Spinner and Buttons.
The application's starting point is the index.js which firstly imports all the stylesheets and components and loads them as soon as the DOM is ready.
Here we initialize the Triangle class. The Triangle class contains all the logic to handle the functinalities of the Triangle challenge interface. It consists of all the error handling mechanism and the algorithm to calculate the type of the traingle using the input received from the user. The Form for entering the the sides of the triangle handles error for valid input both on blur and on form submit, hence assuring no invalid data is sent for processing of determining the triangle type. The valid user input is firstly evaluated to check if the entered sides can form a traingle by using some basic triangle algorithm. Once passed it this then sent further for determining the triangle type and resulting in providing an accurate result.

## Running the app
Download the code.
Open command prompt and navigate to the code folder.
npm install
npm run dev
Go to http://localhost:9000 in your browser and enjoy the show.

## Build for prod
npm run build

## Quick Note
The code can also be seen hosted on https://stackblitz.com/edit/es6-vanillajs
