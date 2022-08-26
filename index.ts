// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const canvas = document.getElementsByTagName<"canvas">(
  "canvas"
) as HTMLCollectionOf<HTMLCanvasElement>;

console.log(canvas);
console.log(canvas[0]);