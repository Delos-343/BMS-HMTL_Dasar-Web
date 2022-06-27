
/* Show Menu */
const showMenu = (toggleId, navId) => {
  
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    /* Validate variables */
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
          
            /* Add .show-menu to .nav__menu  */
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle','nav-menu');
