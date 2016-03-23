$(function () {

    function loadJSON() {
        $.getJSON('js/info.json')
            .done(function (data) {
                $('#portfolio').append('<h1>Portfolio</h1>');
                for (var i = 0; i < data.portfolio.length; i++) {
                    $('#portfolio').append(data.portfolio[i].name);
                }
            }).fail(function () {
                $('#skills').append('<h1>Sorry, something went wrong</h1>');
            });
    };
loadJSON();

    function addSkills() {
        $('<h1>Skills</h1>').appendTo("#skills");
        for (var i = 0; i < 5; i++) {
            if (i % 2 !== 0) {
                $('#skills').append('<div class="row"><p class="col-md-6">' + 'JSON data' + '</p></div>');
            } else {
                $('#skills .row').append('<p class="col-md-6">' + 'JSON data' + '</p>');
            }
        };
    };
});