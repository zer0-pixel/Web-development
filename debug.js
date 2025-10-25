const container = document.getElementsByClassName('container')[0];
const eventBanner = document.getElementsByClassName('season')[0];
const sideBar = document.getElementsByClassName('sidebar')[0];
const header =document.getElementsByClassName('header')[0];

const conWidth = container.offsetWidth;
const conHeight = container.offsetHeight;

const eveWidth = eventBanner.offsetWidth;
const eveHeight = eventBanner.offsetHeight

const sideWidth = sideBar.offsetWidth;
const sideHeight = sideBar.offsetHeight;

const headWidth = header.offsetWidth;
const headHeight = header.offsetHeight;

console.log(`Grid Container = width: ${conWidth}, height: ${conHeight}`);
console.log(`Event Banner = width: ${eveWidth}, height: ${eveHeight} `);
console.log(`SideBar = width: ${sideWidth}, height: ${sideHeight}`);
console.log(`Header = width: ${headWidth}, height: ${headHeight}`);