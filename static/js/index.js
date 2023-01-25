// index 부분
// 1번째 캐러셀
let swiper = new Swiper(".mySwiper", {

  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 40000000, /* 이벤트 페이지 넘기는 속도 조절 */
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});


// 2번째 반응향
const windowWidth = window.matchMedia("screen and (max-width: 768px)");

if (windowWidth.matches) {
  let swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  
  // 미디어 환경 아닐시 PC으로 전환
} else {
  let swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 20,
    cssMode:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
}


// 2번째 캐러셀 class prices가 자동으로 한국 원화표시 해주는 기능

Number.prototype.format = function(){
  if(this==0) return 0;

  let reg = /(^[+-]?\d+)(\d{3})/;
  let n = (this + '');

  while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

  return n+"원";
};

String.prototype.format = function(){
  let num = parseFloat(this);
  if( isNaN(num) ) return "무료";

  return num.format();
};


jQuery('.prices').text(function() {
  jQuery(this).text(
      jQuery(this).text().format()
  );
});


//lecture-index 부분
//조회수명
Number.prototype.format = function(){
  if(this==0) return 0;

  let reg = /(^[+-]?\d+)(\d{3})/;
  let n = (this + '');

  while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

  return n+"명";
};


String.prototype.format = function(){
  let num = parseFloat(this);
  if( isNaN(num) ) return "";

  return num.format();
};


jQuery('.huts').text(function() {
  jQuery(this).text(
      jQuery(this).text().format()
  );
});


$(window).scroll(function() {
	let scroll = $(window).scrollTop();
  
	if (scroll >= 140) {
		$(".lecture-box-info").addClass("sticky");
  } else {
		$(".lecture-box-info").removeClass("sticky");
  }
});

$(function (){
  $('.flip').click(function(){
    $(this).next().slideToggle(50);
  });
});


$(function(){	  
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: (target.offset().top - 42)
			}, 850, "easeInOutExpo");
			return false;
		  }
		}
	  });
  });











// 로그인
    let replaceChar = /[<>()]/gi;
    let replaceNotFullKorean = /[ㄱ-ㅎㅏ-ㅣ]/gi;

  $(document).ready(function(){
      $("#login").on("focusout", function() {
          let x = $(this).val();
          if (x.length > 0) {
              if (x.match(replaceChar) || x.match(replaceNotFullKorean)) {
                  x = x.replace(replaceChar, "").replace(replaceNotFullKorean, "");
              }
              $(this).val(x);
          }
          }).on("keyup", function() {
              $(this).val($(this).val().replace(replaceChar, ""));
      });

  });    
