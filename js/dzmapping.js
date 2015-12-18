(function($) {

  $(function() {
    var objects = $('[data-dz-mapping]');

    $.each(objects, function() {
      var that = $(this);
      var data = that.data('dz-mapping');

      var mappings = data.split(';');

      for (var index in mappings) {
        var values = mappings[index].split('=');

        that.css(values[0], -that[values[1]]());
      }
    });
  });

})(jQuery);


/*
 * idea
 * .function|para1|para2...=.function|para1|para2...
 *
 * "top=height" => o.css('top', o.css('height'));
 * "top=.outerHeight|true" => o.css('top', o.outerHeight('true'));
 * "top=.outerHeight|b:true" => o.css('top', o.outerHeight(true));
 * ".attr|top|&=.outerHeight|b:true" => o.attr('top', o.outerHeight(true));
 * mit dem '&' sagt man wo der parameter eingefügt werden soll
 *
 */