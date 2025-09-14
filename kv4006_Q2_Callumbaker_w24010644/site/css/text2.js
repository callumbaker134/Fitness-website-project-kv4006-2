// Get the current page URL
const currentPage = window.location.pathname;

// Define the mapping between URL paths and icon IDs
const iconMapping = {
    '/home.html': 'homeIcon',
    '/': 'aboutIcon',
    '/contact.html': 'contactIcon'
};

// Add the 'active' class to the icon corresponding to the current page
if (iconMapping[currentPage]) {
    document.getElementById(iconMapping[currentPage]).classList.add('active');
}
