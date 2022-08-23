$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    autoplay:3000,
    dots:false,
    spaces:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

function head1() {
    document.getElementById("content1").classList.toggle("active")
    document.getElementById("content2").classList.remove("active")
    document.getElementById("content3").classList.remove("active")
    document.getElementById("content4").classList.remove("active")
    document.getElementById("content5").classList.remove("active")
}
function head2() {
    document.getElementById("content1").classList.remove("active")
    document.getElementById("content2").classList.toggle("active")
    document.getElementById("content3").classList.remove("active")
    document.getElementById("content4").classList.remove("active")
    document.getElementById("content5").classList.remove("active")
}
function head3() {
    document.getElementById("content1").classList.remove("active")
    document.getElementById("content2").classList.remove("active")
    document.getElementById("content3").classList.toggle("active")
    document.getElementById("content4").classList.remove("active")
    document.getElementById("content5").classList.remove("active")
}
function head4() {
    document.getElementById("content1").classList.remove("active")
    document.getElementById("content2").classList.remove("active")
    document.getElementById("content3").classList.remove("active")
    document.getElementById("content4").classList.toggle("active")
    document.getElementById("content5").classList.remove("active")
}

$(document).ready(function(){
    $('.list').onclick(function(){
        const value = $(this).attr('data-flter');
        if(value == 'All')
        {
            $('.card').show('1000');
        }
        else
        {
            $('.card').not('.'+value).hide('1000');
            $('.card').filter('.'+value).show('1000');
        }
    }) 

    $('.list').onclick(function()
    {
        $(this).addclass('active').siblings().removeclass('active');
    })
})