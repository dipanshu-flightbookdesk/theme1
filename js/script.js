

let getYear = document.getElementById('getYear');

let currentYear = new Date().getFullYear();
getYear.textContent = currentYear

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").classList.add('active')
        setTimeout(() => {
            document.getElementById("navbar").classList.add('active1')
        }, 500);
    } else {
        document.getElementById("navbar").classList.remove("active",'active1')
    }
}

$('.responsive').slick({
    arrows:true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    nextArrow:'<i class="fa-solid fa-arrow-right sliderArrow"></i>',
    prevArrow:'<i class="fa-solid fa-arrow-left sliderArrow"></i>',
    autoplay:true,
    autoplaySpeed:2000,
    speed:1000,
    responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1 }
        }
    ]
});


$(document).ready(function () {
    
    $("#fromDate").datepicker();
    
    $("#departDate").datepicker({
        minDate: 0,
        dateFormat: 'dd-mm-yy',
        onSelect: function(dateText, inst) {
            var departDate = $(this).datepicker('getDate');
            $("#returnDate").datepicker('option', 'minDate', departDate);
        }
    });
    
    $("#returnDate").datepicker({
        minDate: 0,
        dateFormat: 'dd-mm-yy'
    });
    

    $(".tripType label").click(function(){
        let forVal = $(this).attr('for')
        $(".tripType label").removeClass('active');
        $(this).addClass('active');
        if(forVal == 'oneWay'){
            $("#returnDiv").hide()
        }else{
            $("#returnDiv").show()
        }
    })

    $(".selectAirlineType").focus(function(){
        $(this).select()
    })

    $(".selectAirlineType").keyup(function(){
        let value = $(this).val();
        let div = $(this).data('div');
        if(value.trim().length >= 3){
            $(`#${div}`).addClass('active')
        }else{
            $(`#${div}`).removeClass('active')
        }
    })

})

function handleSubmitAirline(input,div,city,airport,code,country){
    let value = `${city} - ${airport}: [${code}] - ${country}`;
    $(`#${input}`).val(value);
    $(`#${div}`).removeClass('active');
}
