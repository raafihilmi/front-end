const btnShare = document.getElementById("btnShare")
const openShare = document.getElementById("share")

btnShare.addEventListener('click', function() {
    console.log('click btn');

    if(openShare.classList.contains('fade-in')){
        openShare.classList.remove("fade-in");
        openShare.classList.add("fade-out");
    }

    else {
        openShare.classList.remove("fade-out");
        openShare.classList.add("fade-in");
        
    }

    
});
