/* LOGIC STATEMENT (redirect, button) */
$("body").ready(()=>{
    $("#feedback").on("click", ()=>{
        console.log("feed btn clicked")
        $.ajax({
            url: "/feedback",
            type: "GET",
            success: (data)=>{
                window.location.href = "/feedback"
            },
            error: (error)=>{
                console.error("Errore durante la chiamata AJAX: ", error)
            }
        })
    })    
})
