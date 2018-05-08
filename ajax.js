$(function () {
    $('#search-form').submit(function (e) {
        e.preventDefault();
        var searchTerm = $('#search-input').val();
        getRequest(searchTerm);
    });
    function getRequest(searchTerm) {
        var url = 'http://www.omdbapi.com/?';
        var params = {
            apikey: '7f2d4a08',
            s: searchTerm,
            r: 'json'
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: params,
            dataType: 'json'
        })
        .done(function (data) {
            showResults(data.Search);
        })
        .fail(function (fail) {
            console.log(fail);            
        });
    }
    function showResults(data) {
        $.each(data, function (i, value) {
            $('#search-results').append(`<p>${value.Title}</p>`);
        });
    }
});