
const swiper = new Swiper('.main-banner .swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 10, // 슬라이드 사이 여백
    slidesPerView : 3,  //한 슬라이드에 보여줄 갯수
    centerdSlides : true, //센터모드
    autoplay:           //자동슬라이드
    {
        delay: 2500, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction', // 숫자로 표시하는 타입 설정
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


