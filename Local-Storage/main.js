let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

localStorage['userStorage'] = JSON.stringify(userStorage)
let userStuff = JSON.parse(localStorage.userStorage)
console.log(userStuff.cart[1].count)

//ex1 instructions
const wisdom = []
let input
let texts = JSON.parse(localStorage.wisdom || "[]")

if(texts){
    for(let t of texts){
        $('#show').append(`<div class="line-delete" data-id="${t.text}"><i class="fas fa-trash delete"></i><span>${t.text}</span></div>`)
    }
}

let isInside
	let p
	$("#ok").on("click", function () {
	    $("#show").empty()
	    input = $("input").val()
	    $("#show").append(`<div>${input}</div>`)
	    wisdom.push({ "text": input })
	    $("input").val("")
	

	    if (!(wisdom.length % 2)) {
	        if (localStorage.wisdom) {
	            p = JSON.parse(localStorage.wisdom)
	            for (let i in wisdom) {
	                isInside = false
	                for (let j in p) {
	                    if (p[j].text === wisdom[i].text) {
	                        isInside = true
	                    }
	                }
	                if(!isInside){
	                    p.push(wisdom[i])
	                }
	            }
	            localStorage.wisdom = JSON.stringify(p)
	        } else {
	            localStorage.wisdom = JSON.stringify(wisdom)
	        }
	

	    }
    })
    
    $("#clear").on("click", function() {
	    localStorage.removeItem("wisdom")
	    $("#info").empty()
    })
    
    $("show").on("click", ".delete", function() {
	    $(this).closest(".line-delete").remove()
	

	    let id = $(this).closest(".line-delete").data().id
	

	    let storage = JSON.parse(localStorage.wisdom)
	

	    for(let i in storage) {
	        if(storage[i].text == id){
	            storage.splice(i, 1)
	        }
	    }
	

	    localStorage.wisdom = JSON.stringify(storage)
	})