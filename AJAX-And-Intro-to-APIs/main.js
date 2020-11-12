$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
    console.log(result)
})
$.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function(result){
    console.log(result.items[0].volumeInfo.description)
})


const fetch = function(queryType,queryValue) {
    $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
        for(let item of data.items){
            console.log("Title: ",item.volumeInfo.title)
            console.log("Author:",item.volumeInfo.authors)
            console.log(item.volumeInfo.industryIdentifiers[0].identifier)
        }
    },
    error: function (xhr, text, error) {
        console.log(text)
    }
})
}
fetch("isbn",9780575087057)
fetch("title", "The Wise Man's Fears")



