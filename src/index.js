// Import stylesheets
import 'main.css';

// Import Triangle class
import Triangle from 'components/Triangle';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// On load start the app.
ts.ui.ready(() => {
  // Loading the header component
  let headerTitle = 'Triangle Challenge',
    headerIcon = 'https://i.ibb.co/zPsLYv0/triangle-ruler.png',
    headerColor = 'ts-blue';
  ts.ui.Header.title(headerTitle).icon(headerIcon).color(headerColor);

  // Initializing the Triangle class.
  let app = new Triangle();
});

