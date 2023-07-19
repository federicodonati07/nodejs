/* LOGIC STATEMENT (redirect, button) */
$("body").ready(()=>{
    $("#feedback").on("click", ()=>{
        $.ajax({
            url: "/feedback",
            type: "GET",
            success: (data)=>{
                console.log("url changed: ", data.callback_data)
            },
            error: (error)=>{
                console.error("Errore durante la chiamata AJAX: ", error)
            }
        })
    })    
})