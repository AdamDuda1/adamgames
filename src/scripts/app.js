let ShowNotify = true;
let update = true; // update
let updateNumber = 1;


function CheckUpdate() {
    if (update) {
        console.log("New update: " + updateNumber + ", " + update);  
        setTimeout(function() {
            document.querySelector(".updateNotiy").style.left = "30%";
          }, 100);
    }
}

function HideUpdateNityfi() {
    document.querySelector(".updateNotiy").style.left = "60%";
}