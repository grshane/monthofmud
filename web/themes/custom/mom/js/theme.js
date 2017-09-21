(function ($, Drupal, window, document) {
  'use strict';

  // Example of Drupal behavior loaded.
  Drupal.behaviors.themeJS = {
    attach: function (context, settings) {
      if (typeof context['location'] !== 'undefined') { // Only fire on document load.

        try{Typekit.load({ async: true });}catch(e){}
      }
    }
  };

})(jQuery, Drupal, this, this.document);
