---
layout: null
sitemap:
  exclude: 'yes'
---
    
  
  $(document).ready(function () {
  
     if (window.location.hash && window.location.hash === '#projects') {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.content-wrapper.projects').removeClass('hidden').addClass('visible');
      }
      if (window.location.hash && window.location.hash === '#publications') {
        $('.panel-cover').addClass('panel-cover--collapsed right');
        $('.content-wrapper.pubs').removeClass('hidden').addClass('visible');
             }

  
    
   $('a.projects-button').click(function (e) {
   
      /*if ($('.content-wrapper.projects').hasClass('showing')){
        $('.content-wrapper.projects').removeClass('animated slideInRight')
        $('.panel-cover').removeClass('panel-cover--collapsed')
        $('.panel-cover').css('max-width', '100%')
        $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
        $('.content-wrapper.projects').removeClass('showing')
        window.location.hash = '';
        parent.location.hash = ''
        return;
      }*/

   currentWidth = $('.panel-cover').width()
      $('.content-wrapper.pubs').removeClass('animated slideInRight').addClass('hidden');
      $('.content-wrapper.projects').removeClass('hidden');
     
       if (currentWidth < 960) {
          $('.panel-cover').addClass('panel-cover--collapsed')
          $('.content-wrapper.projects').addClass('animated slideInRight')

        } else {
          $('.panel-cover').css('max-width', currentWidth)
          $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
         } 
      $('a.pubs-button').removeClass('active');
       $('a.projects-button').addClass('active');
        $('.content-wrapper.projects').addClass('showing');


      })
    
    
   $('a.pubs-button').click(function (e) {

     /*if ($('.content-wrapper.pubs').hasClass('showing')){
        $('.content-wrapper.pubs').removeClass('animated slideInRight')
        $('.panel-cover').removeClass('panel-cover--collapsed')
        $('.panel-cover').css('max-width', '100%')
        $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
        $('.content-wrapper.pubs').removeClass('showing')
        window.location.hash = '';
        parent.location.hash = ''
        return;
      }*/
     currentWidth = $('.panel-cover').width()
       $('.content-wrapper.projects').removeClass('animated slideInRight').addClass('hidden');
      $('.content-wrapper.pubs').removeClass('hidden');
        if (currentWidth < 960) {
          $('.panel-cover').addClass('panel-cover--collapsed')

          $('.content-wrapper.pubs').addClass('animated slideInRight')
        } else {
          $('.panel-cover').css('max-width', currentWidth)
          $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
          }

       $('a.projects-button').removeClass('active');
       $('a.pubs-button').addClass('active');
        $('.content-wrapper.pubs').addClass('showing');

      })

  $('.btn-mobile-menu').click(function (e) {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
   $('.navigation-wrapper .panel-button').click(function (e) {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    
    
})
    
    
