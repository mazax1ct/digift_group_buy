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

  $(".calendar-overlay").click(function() {
    $(".calendar-overlay").fadeOut();
    $(".calendar").fadeOut();
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

  //добавление email удалить к черту!!!
  $(".js-add").click(function() {
    var parent = $(this).parent(".email-row");
    if($('.email-row').length < 2) {
      $(parent).before('<div class="email-row centered-block"><label class="input-block" for="name_'+ $(".email-row").length +'"><input class="input" id="name_'+ $(".email-row").length +'" name="name_'+ $(".email-row").length +'" type="text" value=""><span class="input-block__label">Имя</span></label><label class="input-block" for="email_'+ $(".email-row").length +'"><input class="input" id="email_'+ $(".email-row").length +'" name="email_'+ $(".email-row").length +'" type="text" value=""><span class="input-block__label">Email</span></label><button class="delete-button delete-button--small" type="button">Удалить <svg class=" delete-button__icon" aria-hidden="true"><use xlink:href="#close"/></svg></button></div>');
    } else {
      $(".background").removeClass("with-preview");
      $(".choosen-options").addClass("choosen-options--small_indent");
      $(".card-preview").animate({
        opacity: 0,
        marginTop: -48,
      }, 200, function() {
        if($('.email-row').length >= 4) {
          $(".emails-list__inner").addClass("scrollbox1");
        }
        $(parent).before('<div class="email-row centered-block"><label class="input-block" for="name_'+ $(".email-row").length +'"><input class="input" id="name_'+ $(".email-row").length +'" name="name_'+ $(".email-row").length +'" type="text" value=""><span class="input-block__label">Имя</span></label><label class="input-block" for="email_'+ $(".email-row").length +'"><input class="input" id="email_'+ $(".email-row").length +'" name="email_'+ $(".email-row").length +'" type="text" value=""><span class="input-block__label">Email</span></label><button class="delete-button delete-button--small" type="button">Удалить <svg class=" delete-button__icon" aria-hidden="true"><use xlink:href="#close"/></svg></button></div>');
        var scrollBlock = $(".emails-list__inner");
        scrollBlock.scrollTop(scrollBlock.prop('scrollHeight'));
      });
    }
  });

  //удаление email удалить к черту!!!
  $(document).on("click", ".delete-button", function() {
    if($('.email-row').length <= 5) {
      $(".emails-list__inner").removeClass("scrollbox1");
    }
    if($('.email-row').length < 4) {
      $(".background").addClass("with-preview");
      $(".choosen-options").removeClass("choosen-options--small_indent");
      $(".card-preview").animate({
        opacity: 1,
        marginTop: 0,
      }, 200);
    }
    $(this).parent(".email-row").remove();
  });

  //открытие/закрытие выпадашки со списком участнкиов групповой покупки
  $(".js-group-holder-opener").click(function() {
    $(".group-holder__dropdown").toggleClass("is-open");
  });
});
