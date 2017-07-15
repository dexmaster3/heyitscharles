jQuery(document).ready(function($) {

  var phrases = ['waiting for the last Kingkiller Chronicle.', 'looking at food pics while hungry.', 'waiting for Mount and Blade 2.', 'reading spoilers on Wikipedia.'],
      counter = phrases.length - 1,
      arraylength = phrases.length - 1,
      previousPhrase = $('.phrases');

  var phraseSwap = function() {
      if (counter === arraylength) {
        counter = 0;
      } else {
        counter++;
      }

      previousPhrase.html(phrases[counter]);

  };

  phraseSwap();

  setInterval(function() {
    phraseSwap();
  }, 5500);

});
