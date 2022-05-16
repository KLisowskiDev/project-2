const menuToggle = function () {
    const btn = document.querySelector('.navbar-toggler');
    const menu =  document.querySelector('.navbar');
 
    btn.addEventListener('click', function() {
        menu.classList.toggle('fadeInUp');
    }, false); 
    
};

export default menuToggle;
