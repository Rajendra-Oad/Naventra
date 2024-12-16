

// Function to handle navigation

function navigateToPage(event, href) {

    event.preventDefault();

    window.location.href = href; 



    // Wait for navigation to complete before updating the active class

    setTimeout(() => {

        setActiveNav(href);

    }, 100);

}



// Function to set the active class

function setActiveNav(href) {

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');



    navLinks.forEach(link => {

        // Remove the active class from all links

        link.classList.remove('active');



        // Add the active class to the link that matches the current page

        if (link.getAttribute('href') === href) {

            link.classList.add('active');

        }

    });

}



// Automatically set the active class on page load

document.addEventListener('DOMContentLoaded', () => {

    setActiveNav(window.location.pathname);

});



// Attach click event to all nav-links

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {

    link.addEventListener('click', (event) => {

        navigateToPage(event, link.getAttribute('href'));

    });

});



