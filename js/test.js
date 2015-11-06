(function($) {

  $(function() {
    var body = $('body');

    body.addClass('js');
    setTimeout(function() {
      body.addClass('transition');

      var projects = $('#projects .project');

      $.each(projects, function(i, v) {
        var that = $(this);
        setTimeout(function() {
          that.addClass('up');
        }, i * 200);
      });
    }, 1);
  });

})(jQuery);