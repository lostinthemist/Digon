// sticky header
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').classList.remove('navbar-absolute');
            // add padding top to show content behind navbar
            //   navbar_height = document.querySelector('.navbar').offsetHeight;
            //   document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_top').classList.add('navbar-absolute');
            // remove padding top from body
            //   document.body.style.paddingTop = '0';
        }
    });
});

// owl carousel init
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar").toggleClass("navbar-open", 0);
    });
    $(".navbar-collapse a").click(function () {
        $(".navbar").removeClass("navbar-open", 0);
        $(".navbar-collapse").removeClass("show");

    });
    $(".sc-hero-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500
    });

    $(".sc-reference-carousel").owlCarousel({
        items: 6.5,
        loop: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1500,
        margin: 15,
        center: true,
        responsive: {
            0: {
                items: 1.25,
            },
            576: {
                items: 2.25,
            },
            768: {
                items: 2.25,
            },
            991: {
                items: 5.5,
            },
            1200: {
                items: 6.5,
            }
        }
    });

    const allSections = document.querySelectorAll('.sc-about,.sc-services,.sc-reference-container');

    const revealSection = function (entries, observer) {
        const [entry] = entries;
        console.log(entries);

        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate-fade-left');
        entry.target.classList.remove('section-hidden');
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.25
    });

    allSections.forEach(function (section) {
        sectionObserver.observe(section);
        section.classList.add('section-hidden');
    });

    // item1

    // const item1 = document.querySelector('.sc-service-animate1');

    // const revealitem1 = function (entries, observer) {
    //     const [entry] = entries;
    //     console.log(entries);

    //     if (!entry.isIntersecting) return;
    //     entry.target.classList.add('animate-fade-left');
    //     entry.target.classList.remove('section-hidden');
    //     observer.unobserve(entry.target);
    // };

    // const itemObserver = new IntersectionObserver(revealitem1, {
    //     root: null,
    //     threshold: 0.25
    // });
    // item1.bind(function (item) {
    //     itemObserver.observe(item);
    //     item.classList.add('section-hidden');
    // });
});
