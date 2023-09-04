$(document).keydown(function (e) {
    if (!$(':focus').is('input') && !$(':focus').is('select') && !$(':focus').is('textarea')) {
        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
            // New issue shortcut key implementation removed
        }
    }
});
