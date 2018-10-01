class ChangeTheWords {

  constructor() {
    this.events();
  }

  events() {
    $(function($) {
      $.fn.changeWords = function(options) {
        var settings = $("#changethewords").extend({
          time: 2000,
          animate: "flash",
          selector: "span",
          repeat: true
        }, options);
        var wordCount = $(settings.selector, this).length;
        var words = $(settings.selector, this);
        words.filter(function() {
          return $(this).attr("data-id") != "1"
        }).css("display", "none");
        var count = 1;
        var changeThisWord = setInterval(function() {
          ++count;
          var wordOrder = count;
          words.filter(function() {
            return $(this).attr("data-id") == wordOrder
          }).addClass("animated " + settings.animate).css("display", "inline-block");
          words.filter(function() {
            return $(this).attr("data-id") != wordOrder
          }).css("display", "none").removeClass();
          if (count == wordCount) {
            count = 0;
          }
          if(count == 0 && settings.repeat != true)
          {
            clearInterval(changeThisWord);
          }
        }, settings.time);
      }
    }(jQuery));
  }
}

export default ChangeTheWords;