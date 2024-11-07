(function(){
    var pages = document.getElementById('pages');
    var input = document.getElementById('pageselector');

    input.oninput = function(e) {
        var value = e.target.value;

        pages.querySelectorAll('.site').forEach(function(page){
            page.style.display = 'none';
        });

        var page = pages.getElementsByClassName(value)[0];

        if(page) {
            page.style.display = 'block';
        }
    };
})();