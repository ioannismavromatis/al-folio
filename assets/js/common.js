$(document).ready(function() {
    $('a.abstract').click(function () {
        $(this).parent().parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function () {
        $(this).parent().parent().parent().find(".bibtex.hidden").toggleClass('open');
    });

    $('a.copybutton').click(function (event) {
        var buttonid = event.target.id;
        var range = document.createRange();
        var padid = "copy-";
        var newid = padid.concat(buttonid);

        var range = document.createRange();
        range.selectNode(document.getElementById(newid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        $(this).text('Copied!'); 
    });

    $('div.card-project').click(function () {
        $(this).find(".hidden").toggleClass('open');
    });

    $('a.datasetbutton').click(function () {
        $(this).parent().parent().find(".hidden").toggleClass('open');
    });

    $('#download').on('click', function(evt) {
        evt.preventDefault(); //don't submit the form, which a button naturally does
        if (confirm('The database is very large! Are you sure you want to continue?"'))
            location.href = 'https://ioannismavromatis.com/dataset'; //redirect only on confirm
    });

    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
