import Inputmask from "inputmask"

$(document).ready(function(){
  $('.js-inputmask').inputmask("+9(999) 999 - 9999");
});

// let selector = document.getElementById(".js-inputmask");
//
// let im = new Inputmask("+7({1,3}) {1,3} - {1,4}");
// im.mask(selector);
