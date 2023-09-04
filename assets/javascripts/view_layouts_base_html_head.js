$(document).ready(function () {
    var href = $('a.redmine-shortcuts').attr('href');
    $('a.redmine-shortcuts').attr('onclick', "window.open('" + href + "', 'Redmine Shortcuts', 'width=650,height=520');return false;");
});

$(document).keydown(function (e) {
    if (!$(':focus').is('input') && !$(':focus').is('select') && !$(':focus').is('textarea')) {
        // S
        if (!e.ctrlKey && !e.altKey && !e.shiftKey && e.keyCode == 83) {
            $("#q").focus();
            e.preventDefault();
        // I
        } else if (e.keyCode == 73) {
            $(location).attr('href', $('.issues').attr('href'));
            e.preventDefault();
        // J
        } else if (e.keyCode == 74) {
            window.location.href = '/issues/new';
            e.preventDefault();
        // L
        } else if (e.keyCode == 76) {
            window.location.href = '/issues';
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
