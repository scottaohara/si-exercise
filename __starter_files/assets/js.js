$(function () {

  // if JavaScript is available, remove the no-js class
   $('html').removeClass('no-js')

  // setup vars
  var page = $('#page');


  // allow for the nav to pop out if a user has focused on a nav item
  // but the nav is not currently set to active on the site



  // hide the sidebar if focus is removed from a nav element


  // function to show navigation via specific nav-buttons


});



// State function to toggle attributes
// 'skip link fix'
;(function() {

  'use strict';

  window.addEventListener("hashchange", function(event) {

    var element = document.getElementById(location.hash.substring(1));

    if (element) {

      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
      }

      element.focus();
    }

  }, false);

})();
