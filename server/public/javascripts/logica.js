/* LOGIC STATEMENT (redirect, button) */
$("body").ready(()=>{
    $("#feedback").on("click", ()=>{ // feedback btn page change
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
    
    $("#starrange").on("input", () => {
        let starContainer = $("#container-star");
        starContainer.empty(); // Rimuove tutti i figli da starContainer
    
        let starVal = parseFloat($("#starrange").val()); // Converti il valore a virgola mobile
        let emptyStar = $("<i class='bi bi-star'>");
        let halfStar = $("<i class='bi bi-star-half'>");
        let fillStar = $("<i class='bi bi-star-fill'>");
        
        // Calcola il numero di stelle piene, mezze e vuote
        let fullStars = Math.floor(starVal);
        let hasHalfStar = starVal % 1 !== 0;
        let emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
        // Aggiungi le stelle al contenitore
        for (let i = 0; i < fullStars; i++) {
            starContainer.append(fillStar.clone());
        }
    
        if (hasHalfStar) {
            starContainer.append(halfStar.clone());
        }
    
        for (let i = 0; i < emptyStars; i++) {
            starContainer.append(emptyStar.clone());
        }
    });
})
