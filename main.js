/*ниже создание слайдера*/
/*на 44-46 строках в html у нас есть 3 div'а, в них находятся наши слайды, то есть картинки
так вот, родителя этих трех div зовут slider он на 43 строке html поэтому сейча в js я 
должен его найти, другими словами вычислить, это на 6 строке кода $('.slider')*/
$(function(){
    $('.slider').slick({
        /*сдесь ниже будут некие файлы настройки слайдера*/
        arrows: false, /*убирает кнопки Previos и Next, которые появились вместе со слайдером*/
        fade: true, /*для того чтобы слайды не просто листались, а красиво переключались*/
        autoplay: 3000, /*для того чтобы слайды сами переключались каждые 3000 милисекунд*/
        dots: true/*создаем дотсы, это такие точки, под слайдером*/
    });

    /*для начало нам надо найти наш элемент header-btn, для этого мы пишем $('.header-btn') знак $ нужен 
    для поиска этого обьекта, знаете header-btn такой заходит в дом под названием html, проходится и такой хоп нашел,
    и я говорю спаисбо. Итак, далее что мы будем с ним делать, я буду на него нажимать, и поэтому прописываем on, 
    ну и дальше пишу click, то что именно кликать буду, дальше пишем funtion потому что нам важно чтобы это все работало
    несколько раз, далее я хочу чтобы когда это событие произойдет, к меню добавлляллся класс active, дальше уже
    шаманим(menu.active(109 строка)) в css. Для этого сначало находим menu написав $('.menu'), и так нашли и далее пишем 
    active в тот самый класс addClass
    */
    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });


});