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

    var wrapper = $('#page-wrapper');
    if (wrapper.hasClass('test-page')) {
      $(window).scroll(function() {
        var scroll = body.scrollTop();

        if (scroll == 0) {
          body.addClass('top-scroll');
        } else {
          body.removeClass('top-scroll');
        }
      }).trigger('scroll');
    }

    $.ajax({
        method: "GET",
        url: encodeURIComponent('package.json'),
        success: function(json, status) {
          if (status == 'success') {
            console.log(json);
          } else {
            console.warn('Call: ' + url);
            console.warn('Status: ' + status);
          }
        },
      });
  });

})(jQuery);