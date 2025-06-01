import greet from "./module01";

// Import our custom CSS
import "../scss/styles.scss";

// Import only the Bootstrap components we need
import { Popover } from "bootstrap";

// import bootstrap icons
// import "bootstrap-icons/font/bootstrap-icons.css";

// Import images
// If you want to import a single image separately, use a different name:
import horseImage from "../assets/img/afternoon-with-the-horses-horsesback-trace-cusco.jpg";

const htc = document.getElementById("htc");
htc.src = horseImage;
htc.alt = "Afternoon with the horses on the Horsesback Trail in Cusco, Peru";
htc.title = "Afternoon with the horses - Horsesback Trail Cusco";
htc.loading = "lazy";

import horsesbackJourney from "../assets/img/home-go-peru-now.jpg";

const hj = document.getElementById("hj");
hj.src = horsesbackJourney;
hj.alt = "Horse ranch on the Horsesback Trail in Cusco, Peru";
hj.title = "Horse ranch - Horsesback Trail Cusco";
hj.loading = "lazy";
// hj.width = 300;
// hj.height = 300;

import logoGoPeru from "../assets/img/go-peru-now-logo.svg";
const logo = document.getElementById("logo");
logo.src = logoGoPeru;
logo.alt = "Go Peru Now Logo";
logo.title = "Go Peru Now Logo";
logo.loading = "lazy";
// logo.width = 200;
// logo.height = 200;
