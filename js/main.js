---
layout: null
sitemap:
  exclude: 'yes'
---
 $(document).ready(function () {
      $('.btn-mobile-menu').unbind('click').click(function (e) {
        $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
        $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
      });


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
        // Case where the panel is already opened
        if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
          if ($('.panel-cover').hasClass('right')) {
            // Case where the about section is opened
            $('.content-wrapper.pubs').removeClass('visible animated slideInLeft').addClass('hidden');
            $('.panel-cover').animate({'right' : '', 'left' : '0'}, 400, swing = 'swing', function () {
              $('.panel-cover').removeClass('right').removeAttr('style');
              $('a.pubs-button').removeClass('active');
              $('a.projects-button').addClass('active');
              $('.content-wrapper.projects').removeClass('hidden').addClass('visible animated slideInRight');

            })
          }
          return;
        }
        // Test for the size of the window
        let currentWidth = $('.panel-cover').width();
        if (currentWidth < 900) {
          // Mean mobile phone
          $('.panel-cover').addClass('panel-cover--collapsed');
          $('.content-wrapper').addClass('animated slideInRight');
        }
        else {
          // Mean desktop
          $('.panel-cover').css('max-width', currentWidth);
          $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {
            $('.panel-cover').addClass('panel-cover--collapsed').removeAttr('style');
            $('a.pubs-button').removeClass('active');
            $('a.projects-button').addClass('active');
            $('.content-wrapper.projects').removeClass('hidden').addClass('visible animated slideInRight');
          })
        }
      });

      $('a.pubs-button').click(function (e) {
        // Case where the panel is already opened
        console.log('ok');
        if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
          // Case where the about section is opened
          if (! $('.panel-cover').hasClass('right')) {
            $('.content-wrapper.projects').removeClass('visible animated slideInRight').addClass('hidden');
            $('.panel-cover').animate({'right' : '0'}, 400, swing = 'swing', function () {
              $('.panel-cover').addClass('right').removeAttr('style');
              $('a.projects-button').removeClass('active');
              $('a.pubs-button').addClass('active');
              $('.content-wrapper.pubs').removeClass('hidden').addClass('visible animated slideInLeft');

            })
          }
          return;
        }
        // Test for the size of the window
        let currentWidth = $('.panel-cover').width();
        if (currentWidth < 900) {
          // Mean mobile phone
          $('.panel-cover').addClass('panel-cover--collapsed');
          $('.content-wrapper').addClass('animated slideInLeft');
        }
        else {
          // Mean desktop
          $('.panel-cover').css('max-width', currentWidth);
          $('.panel-cover').animate({'max-width': '530px', 'width': '40%', 'right' : '0'}, 400, swing = 'swing', function () {
            $('.panel-cover').addClass('panel-cover--collapsed right').removeAttr('style');
            $('a.projects-button').removeClass('active');
            $('a.pubs-button').addClass('active');
            $('.content-wrapper.pubs').removeClass('hidden').addClass('visible animated slideInLeft');

          })
        }
      });

    }); 
    
    
    
//$(document).ready(function () {
//  $('a.panel-button').click(function (e) {
    /*if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
      $('.content-wrapper').removeClass('showing')
      window.location.hash = '';
      parent.location.hash = ''
      return;
    }*/
 /*   currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').addClass('showing');
    
  })
   
 
  if (window.location.hash && window.location.hash == '#projects') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
    if (window.location.hash && window.location.hash == '#publications') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  
  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
    

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .panel-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})
*/
