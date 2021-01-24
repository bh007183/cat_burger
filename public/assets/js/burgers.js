
$(function(){
$(".change-devour").on("click", function(){
    const id = $(this).data("id")
    const newdevour = $(this).data("newdevour")

    const newDevourState = {
        devour: newdevour
    }
    console.log("clickclick")
    //  console.log(newDevourState + "????????????????")
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
    }).then(res=>{
        console.log(res +"//////////////////////////////////////////////////////")
        location.reload()
    })

})




$(".create-form").on("submit", function(event){
    event.preventDefault()
    let newBurger = {
        name: $("#bur").val().trim(),
        devour: 0

    }
    console.log(event)
    console.log(newBurger)
    $.ajax({

        url: "/api/burgers",
        method: "POST",
        data: newBurger
    }).then(res => {
        console.log(res)
         location.reload()
    })
   
})

})

