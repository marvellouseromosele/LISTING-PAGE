// document.getElementById('heart').src = "heart.png"


function swapImage(){
    if (document.getElementById("heart").src.endsWith('like.png') == true)  //Comparison
    { 
         document.getElementById("heart").src = "heart.png"; //assignment  

     } 
     else if (document.getElementById("heart").src.endsWith('heart.png') == true) 
     { 
        document.getElementById("heart").src = "like.png"; 
        
    }
}


// ADD TO CART