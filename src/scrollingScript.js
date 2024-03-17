if(document) {
    document?.addEventListener("DOMContentLoaded", function () {
        // Smooth scrolling for anchor links with offset
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor?.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                let navbar = ".navbar-container";
                if (window.matchMedia('(max-width: 700px)').matches) {
                    const navLinks = document.querySelector('.ham-nav-menu');
                    navLinks.classList.remove('show-menu');
                    navbar = ".ham-container";
                }
    
                const navbarHeight = document.querySelector(navbar).offsetHeight;
    
                if (targetElement) {
                    const offsetTop = targetElement ? targetElement.offsetTop - navbarHeight : 0;
    
                    if (window.matchMedia('(max-width: 700px)').matches) {
                        // For screens <= 700px, scroll to the bottom of the target element
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    } else {
                        // For screens > 700px, scroll to the top of the target element
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } else {
                }
            });
        });
        window?.addEventListener('scroll', function () {
            const sections = document.querySelectorAll('.section');
            const smallScreen = window.matchMedia('(max-width: 700px)').matches;
            let navbar;
            if (smallScreen) {
                navbar = document.querySelector('.ham-navbar');
            } else {
                navbar = document.querySelector('.navbar-container');
            }
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (navbar && rect.top <= 10 && rect.bottom >= 10) {
                    const sectionBackgroundColor = window.getComputedStyle(section).getPropertyValue('background-color');
                    // Change navbar background based on section background color
                    if (sectionBackgroundColor === 'rgb(255, 198, 41)') { // Check if section background is yellow
                        navbar.style.backgroundColor = smallScreen ? '#fefae0': '#a3b18a'; // Light yellow
                    } else {
                        navbar.style.backgroundColor = smallScreen ? '#a3b18a' : '#fefae0'; // Default color for other backgrounds
                    }
                }
            });
        });
    });    
}
