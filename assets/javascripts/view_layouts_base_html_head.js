$(document).ready(function () {
    var href = $('a.redmine-shortcuts').attr('href');
    $('a.redmine-shortcuts').attr('onclick', "window.open('" + href + "', 'Redmine Shortcuts', 'width=360,height=520');return false;");
});

$(document).keydown(function (e) {
    if (!$(':focus').is('input') && !$(':focus').is('select') && !$(':focus').is('textarea')) {
        // S
        if (!e.ctrlKey && !e.altKey && !e.shiftKey && e.keyCode == 83) {
            $("#q").focus();
            e.preventDefault();
        // M
        } else if (e.keyCode == 77) {
            window.location.href = '/my/page';
            e.preventDefault();
        // P
        } else if (e.keyCode == 80) {
            window.location.href = '/projects';
            e.preventDefault();
        }
    }
});
