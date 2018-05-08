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
        $.getJSON(url, params, function (data) {
            showResults(data.Search);
        });
    }
    function showResults(data) {
        console.log(data);
        
        $.each(data, function (i, value) {
            $('#search-results').append(`<p>${value.Title}</p>`);
        });
    }
});