document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.x-scrolled')) {
        let el = document.querySelectorAll('.x-scrolled');

        el.forEach(item => {
            Ps.initialize(item);
        })

    }

    function showHeaderDropdown() {
        this.closest('.x-blog-header__category')
            .classList.toggle('open')
    }

    if (document.querySelector('.btn-classes-open') != undefined) {
        document.querySelector('.btn-classes-open').addEventListener('click', showHeaderDropdown);
        document.querySelector('.btn-modes-open').addEventListener('click', showHeaderDropdown);
    }


    if (document.querySelector('.x-blog-header__menu-button')) {
        document.querySelector('.x-blog-header__menu-button').addEventListener('click', () => {
            document.querySelector('.x-blog-header__menu-list').classList.toggle('open');
            document.body.classList.toggle('overflow-hidden');
            document.querySelector('.x-blog-header__icon--menu').classList.toggle('open');
        })
    }

    $(".js-range-slider").ionRangeSlider({
        hide_min_max: true,
        hide_from_to: true,
        min: 0,
        max: 100,
        onChange: function (data) {
            $('.input-slider-value').val(data.from);
        },
    });

    $(".x-detailed-slider__item").ionRangeSlider({
        hide_min_max: true,
        hide_from_to: true,

        type: "double",
        grid: true,
        min: 1400,
        max: 3600,
        from: 200,
        to: 800,
        prefix: "$"
    })


    new Swiper('.x-calendar-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
            nextEl: '.x-calendar-next',
            prevEl: '.x-calendar-prev',
        },
    });

    // $('.js-select').select2({
    //     minimumResultsForSearch: Infinity
    // });

    /* datepicker */

    $(".x-datepicker").flatpickr({
        prevArrow:
            '<svg width="8" height="12" viewBox="0 0 8 12" fill="#F9F9F9" xmlns="http://www.w3.org/2000/svg"> <path d="M7.08922 1.58909C7.41465 1.26366 7.41465 0.736018 7.08922 0.410582C6.76378 0.0851447 6.23614 0.0851447 5.9107 0.410582L0.910705 5.41058C0.595222 5.72606 0.584184 6.23405 0.885665 6.56294L5.469 11.5629C5.77999 11.9022 6.30713 11.9251 6.6464 11.6141C6.98566 11.3031 7.00858 10.776 6.69759 10.4367L2.65341 6.0249L7.08922 1.58909Z" fill="#B2BEC7"/> </svg>',

        nextArrow:
            '<svg width="8" height="12" viewBox="0 0 8 12" fill="#F9F9F9" xmlns="http://www.w3.org/2000/svg"> <path d="M0.910785 1.58909C0.585348 1.26366 0.585348 0.736019 0.910785 0.410582C1.23622 0.0851447 1.76386 0.0851447 2.0893 0.410582L7.0893 5.41058C7.40478 5.72606 7.41582 6.23405 7.11433 6.56294L2.531 11.5629C2.22001 11.9022 1.69287 11.9251 1.3536 11.6141C1.01434 11.3031 0.991419 10.776 1.30241 10.4367L5.34659 6.0249L0.910785 1.58909Z" fill="#F9F9F9"/> </svg>',
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ["S", "M", "T", "W", "T", "F", "S"]
            }
        }
    });

    if (document.querySelector('.jsOpenTop') != undefined) {
        document.querySelector('.jsOpenTop').addEventListener('click', () => {
            document.querySelector('.x-mob-map').classList.toggle('open')
        })

        document.querySelector('.jsCloseTop').addEventListener('click', () => {
            document.querySelector('.x-mob-map').classList.toggle('open')
        })
    }



})


