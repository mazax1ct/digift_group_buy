$(document).ready(function() {
  //закрытие iframe
  $(".js-iframe-close").click(function() {
    $(this).toggle(0);
    $(".reject").addClass("is-open");
  });

  //отмена закрытия iframe
  $(".js-reject-close").click(function() {
    $(".iframe-close").toggle(0);
    $(".reject").removeClass("is-open");
  });

  //выбор предустановленного номинала
  $(".par").click(function() {
    $(".par").removeClass("is-active");
    $(this).addClass("is-active");
    $(".js-card-preview__par-num").text($(this).attr("data-value"));
  });

  //закрытие поля ввода поздравления
  $(".grats__textarea").blur(function() {
    $(".grats").removeClass("focus");
    if($(".grats__textarea").val()){
      $(this).addClass("edited");
      $(".grats__fake-textarea").html($(".grats__textarea").val());
    } else {
      $(this).removeClass("edited");
      $(".grats__fake-textarea").html('');
    }
  });

  //окрашивание radio-button
  $(".radio-button").click(function() {
    $('.radio-button[data-name='+ $(this).attr('data-name') +']').removeClass("is-active");
    $(this).addClass("is-active");
  });

  //снятие focus с поля ввода
  $(".input").blur(function() {
    if($(this).val()) {
      $(this).parent(".input-block").addClass("edited");
    } else {
      $(this).parent(".input-block").removeClass("edited");
    }
  });

  //маска ввода телефона
  $(".js-phone").inputmask("+7(999)-999-99-99");

  //открытие календаря
  $(".js-calendar-opener").click(function() {
    $(".calendar-overlay").fadeIn();
    $(".calendar").fadeIn();
  });

  //переключение вкладки календаря
  $(".calendar__switch").click(function() {
    var block = $(this).attr("data-href");
    $(".calendar__switch").removeClass("is-active");
    $(this).addClass("is-active");
    $(".calendar__block").removeClass("is-active");
    $(".calendar__block[data-target=" + block + "]").addClass("is-active");
    return false;
  });

  //копирование ссылки из инпута
  $(".js-ltc-button").click(function() {
    var copyText = document.querySelector('#ltc');
    copyText.focus();
    copyText.setSelectionRange(0, copyText.value.length);
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
  });

  //открытие поля ввода скадки
  $("#discount_info").focus(function() {
    $(".overlay2").fadeIn();
    $(".discount").addClass("focus");
  });

  //закрытие поля ввода скадки
  $(".discount__accept").click(function() {
    $(".overlay2").fadeOut();
    $(".discount").removeClass("focus");
    return false;
  });
});
