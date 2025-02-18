$(document).ready(function () {
    var href = $('a.redmine-shortcuts').attr('href');
    $('a.redmine-shortcuts').attr('onclick', "window.open('" + href + "', 'Redmine Shortcuts', 'width=500,height=520');return false;");
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
        // K
        } else if (e.keyCode == 75) {
            window.location.href = '/issues';
            e.preventDefault();
        // M
        } else if (e.keyCode == 77) {
            window.location.href = '/my/page';
            e.preventDefault();
        // N
        } else if (e.keyCode == 78) {
            window.location.href = '/issues/new';
            e.preventDefault();
        // P
        } else if (e.keyCode == 80) {
            window.location.href = '/projects';
            e.preventDefault();
        }
    }
});
