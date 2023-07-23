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
    
    $("#starrange").on("input", ()=>{
        let starContainer = $("#container-star")
        while(starContainer.firstChild){
            firstChild.removeChild(firstChild)
        }
        let starVal = $("#starrange").val()
        let emptyStar = $("<i class='bi bi-star'>")
        let halfStar = $("<i class='bi bi-star-half'>")
        let fillStar = $("<i class='bi bi-star-fill'>")
        starVal = (starVal-0.5)+1
        
        switch(starVal){
            case 0.5:
                matrice = [0.5, 0, 0, 0, 0]
                break;
            
            case 1:
                matrice = [1, 0, 0, 0, 0]
                break;

            case 1.5:
                matrice = [1, 0.5, 0, 0, 0]
                break;

            case 2:
                matrice = [1, 1, 0, 0, 0]
                break;

            case 2.5:
                matrice = [1, 1, 0.5, 0, 0]
                break;

            case 3:
                matrice = [1, 1, 1, 0, 0]
                break;

            case 3.5:
                matrice = [1, 1, 1, 0.5, 0]
                break;

            case 4:
                matrice = [1, 1, 1, 1, 0]
                break;
            
            case 4.5:
                matrice = [1, 1, 1, 1, 0.5]
                break;

            case 5:
                matrice = [1, 1, 1, 1, 1]
                break;

            default:
                matrice = [0.5, 0, 0, 0, 0]
                break;
        }

        starArray = []

        for(x=0; x<matrice.length; x++){
            if(matrice[x] == 0){
                starArray.push(emptyStar)

            }else if(matrice[x] == 0.5){
                starArray.push(halfStar)

            }else if(matrice[x] == 1){
                starArray.push(fillStar)
            }
        }

        for(i=0; i<starArray.length; i++){
            starContainer.append(starArray[i])
        }
    })
})
