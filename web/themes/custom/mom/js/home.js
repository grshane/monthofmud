(function ($, Drupal, window, document) {
  'use strict';

  // Example of Drupal behavior loaded.
  Drupal.behaviors.themeJS = {
    attach: function (context, settings) {
      if (typeof context['location'] !== 'undefined') { // Only fire on document load.

        $(".race--all--block.view-content").accAccordion({
          defaultPanel: 1,
          horizontal: true
        });

      }
    }
  };

})(jQuery, Drupal, this, this.document);
