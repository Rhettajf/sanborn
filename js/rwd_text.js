/*!
* Scalem v1.0.2 - A responsive text jQuery plugin
* Copyright 2014, Tom Doan (http://www.tohodo.com/)
*
* Scalem by Tom Doan is licensed under the MIT License.
* Read a copy of the license in the LICENSE file or at
* http://choosealicense.com/licenses/mit
*/

(function($) {
  $.fn.scalem = function(oOptions) {
    var oSettings = $.extend({
        ratio: .5,        /* Scale ratio (1 = 100%) */
        reference: null,  /* Text will scale relative to this element */
        styles: ''        /* List of styles to scale (useful for buttons) */
      }, oOptions),
      updateStyles = function(o, e) {
        var $o = $(o),
          /* Create clone to get true text width */
          $o2 = $o.clone().css({
            'width': 'auto',
            'display': 'none',
            'white-space': 'nowrap'
          }),
          /* If data attribute exists, use that instead */
          $ref = o.getAttribute('data-scale-reference') ? $(o.getAttribute('data-scale-reference')) : $(oSettings.reference),
          /* Array of styles to scale */
          aStyles = (o.getAttribute('data-scale-styles') || oSettings.styles).split(' '),
          /* Scale ratio */
          nRatio = parseFloat(o.getAttribute('data-scale-ratio')) || oSettings.ratio,
          /* Reference width (set to parent width by default) */
          nRefWidth = ($ref.length > 0) ? $ref.width() : $o.parent().width(),
          nTargetWidth = nRefWidth * nRatio,
          /* Text width */
          nTextWidth;
        // Append clone to body to get inline width
        $o2.appendTo('body');
        nTextWidth = $o2.width();
        // Exit if something doesn't look right
        if (nTargetWidth === 0 || nTextWidth === nRefWidth) {
          $o2.remove();
          return;
        }
        // Scale the text! (6px is minimum font size to get accurate ratio)
        for (var i=Math.round((6/$o2.css('font-size', '6px').width())*nTargetWidth), o2=$o2[0]; i<nTargetWidth; i++) {
          // Update font-size using native method for better performance
          // (see http://jsperf.com/style-vs-csstext-vs-setattribute)
          o2.style.fontSize = i + 'px';
          if ($o2.width() / nRefWidth > nRatio) {
            $o.css('font-size', (i - 1) + 'px');
            break;
          }
        }
        // Clean up
        $o2.remove();
        // Scale additional styles
        if (aStyles[0]) {
          var nScale = $o.width() / nTextWidth,
            oStyles = {};
          for (var i=0, imax=aStyles.length; i<imax; i++) {
            if (!aStyles[i]) continue;
            oStyles[aStyles[i]] = Math.round(parseFloat($o.css(aStyles[i])) * nScale) + 'px';
          }
          $o.css(oStyles);
        }
      };
    return this.each(function() {
      // This scope required for resize handler
      var o = this;
      // Update CSS styles upon resize
      $(window).resize(function(e) {
        updateStyles(o, e);
      });
      // Set font size on load
      updateStyles(o);
    });
  };
}(jQuery));
