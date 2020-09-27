// $(function () {
//     $('li').on('click', function () {

//     })
//     $.ajax({
//         method: 'GET',
//         url: 'https://photo.sina.cn/aj/index',
//         data: {
//             page: 1,

//         },
//         success: function (res) {
//             console.log(res);
//         }
//     })
// })
$(function () {
    tatabo()
    function tatabo() {
        $.ajax({
            url: 'https://photo.sina.cn/aj/index',
            dataType: 'jsonp',
            data: {
                page: 1,
cate:"recommend"
            },
            jsonp: 'callback',
            jsonpCallback: 'abc',

            success: function (res) {
                console.log(res);
                gegebuyu(res)
            }
        })
    }

    function gegebuyu(res) {
        
        var htmlStr = template('tpl-table', res);
        $(".content").html(htmlStr)
        console.log(htmlStr);
    }


})
// $(function () {

// })