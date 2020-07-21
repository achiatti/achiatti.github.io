---
layout: null
sitemap:
  exclude: 'yes'
---
  $(document).ready(function () {

 $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .panel-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
    
      if (window.location.hash && window.location.hash === '#projects') {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.content-wrapper.projects').removeClass('hidden').addClass('visible');
        $('a.pubs-button').removeClass('active');
        $('a.projects-button').addClass('active');
      }
      if (window.location.hash && window.location.hash === '#publications') {
        $('.panel-cover').addClass('panel-cover--collapsed right');
        $('.content-wrapper.pubs').removeClass('hidden').addClass('visible');
        $('a.projects-button').removeClass('active');
        $('a.pubs-button').addClass('active');
      }

      if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html'
          && window.location.hash !== '#publications') {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.content-wrapper.projects').removeClass('hidden').addClass('visible');
        $('a.pubs-button').removeClass('active');
        $('a.projects-button').addClass('active');
      }

    
  $('a.projects-button').click(function (e) {
    
      currentWidth = $('.panel-cover').width()
     $('.content-wrapper.pubs').removeClass('animated slideInRight').addClass('hidden');
    $('.content-wrapper.projects').removeClass('hidden');
$('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper.projects').addClass('animated slideInRight')
    /*
     if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper.projects').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
      }*/
    $('a.pubs-button').removeClass('active');
     $('a.projects-button').addClass('active');
      $('.content-wrapper.projects').addClass('showing');
    
    
    })
    
    
  $('a.pubs-button').click(function (e) {
    
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



}); 
    
    
    
