$(":root").css("background", "black");


var swiper = new Swiper(".book", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    loopAdditionalSlides: 1,
});


// 탭버튼
let tabButtons = document.querySelectorAll('.tabButton'); //탭버튼 선언

Array.from(tabButtons).forEach((eachBotton, index) => {
    eachBotton.addEventListener('click', function () {
        let tabBoxs = document.querySelectorAll('.tabBox');
        for (var i = 0; i < tabBoxs.length; i++) {
            tabBoxs[i].classList.remove("on");
            tabButtons[i].classList.remove("on");
        }
        tabBoxs[index].classList.add("on");
        this.classList.add("on");
    });
});
tabButtons[0].click();


// 모바일 인포
var swiper = new Swiper(".m_info", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});


// 구매 수량 버튼
$(function () {
    $('.decreaseQuantity').click(function (e) {
        e.preventDefault();
        var stat = $('.numberUpDown').text();
        var num = parseInt(stat, 10);
        num--;
        if (num <= 0) {
            alert('최소 구매 수량 입니다.');
            num = 1;
        }
        $('.numberUpDown').text(num);
    });
    $('.increaseQuantity').click(function (e) {
        e.preventDefault();
        var stat = $('.numberUpDown').text();
        var num = parseInt(stat, 10);
        num++;

        if (num > 5) {
            alert('최대 구매 수량입니다.');
            num = 5;
        }
        $('.numberUpDown').text(num);
    });
});


// 카드리뷰 스와이퍼
var swiper = new Swiper(".card", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// // 별점
// const drawStar = (target) => {
//     document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
// };



// 별점
function Rating() { };
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (newrate) {
    //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
    this.rate = newrate;
    let items = document.querySelectorAll('.rate_radio');
    items.forEach(function (item, idx) {
        if (idx < newrate) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    });
};
let rating = new Rating();//별점 인스턴스 생성

document.addEventListener('DOMContentLoaded', function () {
    //별점선택 이벤트 리스너
    document.querySelector('.rating').addEventListener('click', function (e) {
        let elem = e.target;
        if (elem.classList.contains('rate_radio')) {
            rating.setRate(parseInt(elem.value));
        }
    });
});

//상품평 작성 글자수 초과 체크 이벤트 리스너
document.querySelector('.review_textarea').addEventListener('keydown', function () {
    //리뷰 400자 초과 안되게 자동 자름
    let review = document.querySelector('.review_textarea');
    let lengthCheckEx = /^.{400,}$/;
    if (lengthCheckEx.test(review.value)) {
        //400자 초과 컷
        review.value = review.value.substr(0, 400);
    }
});

//저장 전송전 필드 체크 이벤트 리스너
document.querySelector('#save').addEventListener('click', function (e) {
    //별점 선택 안했으면 메시지 표시
    if (rating.rate == 0) {
        rating.showMessage('rate');
        return false;
    }
    //리뷰 5자 미만이면 메시지 표시
    if (document.querySelector('.review_textarea').value.length < 5) {
        rating.showMessage('review');
        return false;
    }
    //폼 서밋
});

Rating.prototype.showMessage = function (type) {//경고메시지 표시
    switch (type) {
        case 'rate':
            //안내메시지 표시
            document.querySelector('.review_rating .warning_msg').style.display = 'block';
            //지정된 시간 후 안내 메시지 감춤
            setTimeout(function () {
                document.querySelector('.review_rating .warning_msg').style.display = 'none';
            }, 1000);
            break;
        case 'review':
            //안내메시지 표시
            document.querySelector('.review_contents .warning_msg').style.display = 'block';
            //지정된 시간 후 안내 메시지 감춤
            setTimeout(function () {
                document.querySelector('.review_contents .warning_msg').style.display = 'none';
            }, 1000);
            break;
    }
};



// 유사상품 스와이퍼
var swiper = new Swiper(".buy", {
    slidesPerView: 5,
    spaceBetween: 50,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


// 모바일 하단 바
var fixBox = document.querySelector('.bar');
window.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        fixBox.classList.add('open');
    }else if(event.deltaY > 0){
        fixBox.classList.remove('open');
    }
});


// top 버튼
$(function() {
	$(window).scroll(function() { 
		if ($(this).scrollTop() > 200) { 
			$('#topBtn').fadeIn(); } 
		else { $('#topBtn').fadeOut(); }
	}); 
	$("#topBtn").click(function() { 
   	$('html, body').animate({ scrollTop : 0  }, 300); 
    return false; });
});