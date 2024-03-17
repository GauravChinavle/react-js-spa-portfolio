import { moment } from "./requireHelper";

export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export function getYears(startDate) {
  let result = "";
  const start = moment(startDate);
  const end = moment();
  
  const years = end.diff(start, 'years');
  start.add(years, 'years');
  const months = end.diff(start, 'months');
  result = `${years} years`;

  if (months !== 0) {
    result += ` and ${months} months`;
  }

  return result;
};

export function scrollTo(location) {
    const targetElement = document.getElementById(location);
    let navbar = ".navbar-container";
    if (window.matchMedia('(max-width: 700px)').matches) {
      navbar = ".ham-container";
    }
    var navbarHeight = document.querySelector(navbar).offsetHeight;
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}