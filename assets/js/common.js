// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function () {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
    $('div.card-project').click(function () {
        $(this).find(".hidden").toggleClass('open');
    });
    $('button.datasetbutton').click(function () {
        $(this).parent().parent().find(".hidden").toggleClass('open');
    });
    $('#download').on('click', function (evt) {
        evt.preventDefault(); //don't submit the form, which a button naturally does
        if (confirm('The database is very large! Are you sure you want to continue?"'))
            location.href = 'https://ioannismavromatis.com/dataset'; //redirect only on confirm
    });
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});

