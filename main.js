
// (function($) {
//   var $nav   = $('#navArea');
//   var $btn = $('.toggle_btn');
//   var $mask  = $('#mask');
//   var open   = 'open'; // class
//   console.log("test1");
//   // menu open close
//   $btn.on( 'click', function() {
//     if ( ! $nav.hasClass( open ) ) {
//       $nav.addClass( open );
//       console.log("test2");
//     } else {
//       $nav.removeClass( open );
//     }
//   });
//   // mask close
//   $mask.on('click', function() {
//     $nav.removeClass( open );
//   });
// } )(jQuery);

(function($) {
  var $nav   = $('#navArea');
  var $btn = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = '.open'; // class
  // menu open close
  $(document).on( 'click', $btn,function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
      console.log("test2");
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);