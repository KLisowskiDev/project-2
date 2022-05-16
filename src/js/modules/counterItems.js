const counterItems = function () {
    const counterSection = document.querySelector('.counter');

    const options = { };

    const observer = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const counters = document.querySelectorAll('.counter__value');
                const speed = 500;

                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const inc = target / speed;
                
                        // Check if target is reached
                        if (count < target) {
                            // Add inc to count and output in counter
                            counter.innerText = count + inc;
                            // Call function every ms
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target;
                        }
                    };
                
                updateCount();
                })
            }
        })
    }, options);

    if(counterSection) {
        observer.observe(counterSection);
    }
    
};

export default counterItems;