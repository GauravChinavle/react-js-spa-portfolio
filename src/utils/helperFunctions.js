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
  const years = moment().diff(moment(startDate, "DD MMM YYYY"), "years", true).toFixed(1);
  return years;
};

export function scrollTo(location) {
    const targetElement = document.getElementById(location);
    var navbarHeight = document.querySelector('.navbar-container').offsetHeight;

    if (targetElement) {
        const offsetTop = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}