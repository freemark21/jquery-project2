$(function() {
    function loadJSON(){
    $.getJSON('js/info.json')
    .done(function (data){
        for (var i = 0; i < data.things.length; i++){
            addContent(data.things[i]);
        };
        $('img').hide();
        $('h1').on('click', function(){
            $(this).siblings().slideToggle();
        });
        
    });
    };

function addContent(obj){
    $('body').append('<div><h1>' + obj.name + '</h1><img src ="' + obj.img + '"/></div>');
};

function addFavs(obj){
    
}

loadJSON();


});