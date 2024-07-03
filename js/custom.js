$(document).ready(function(){
    // Course Carousel
    $('.course-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:false,
        margin: 10,
        responsive:{
            900:{
                items:4
            },
            600:{
                items:3
            },
            400:{
                items:1
            }
        }
    });

    // Category Carousel
    $('.category-carousel').owlCarousel({
        items:2,
        loop:true,
        center:true,
        margin:15,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        responsive:{
            900:{
                items:4
            },
            400:{
                items:2
            }
        }
    });

    // Inner Slider Carousel
    $('.inner-slider-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:10000,
        dots:false,
        responsive:{
            400:{
                items:1
            }
        }
    });

    // Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        items:2,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        responsive:{
            900:{
                items:3
            },
            600:{
                items:2
            },
            400:{
                items:1
            }
        }
    });
 
});