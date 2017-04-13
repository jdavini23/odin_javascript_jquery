$(document).ready(function() {
    for (var i = 0; i < 16; i++) {
        for (var x = 0; x < 16; x++) {
            var grid = $("<div class='grid'></div>");
            grid.appendTo('#container');
        }
    }

    $('.grid').hover(function() {
        $(this).css('background-color', 'yellow');
    });
    $('#clear').click(function() {
        $()
    });
});
