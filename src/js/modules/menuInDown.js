const menuInDown = function () {
    const btn = document.querySelector('.navbar-toggler');
    const menu =  document.querySelector('.navbar');
 
    btn.addEventListener('click', function() {
        btn.classList.toggle('open');
        menu.classList.toggle('fadeInDown');
    }, false); 
    
};

export default menuInDown;
