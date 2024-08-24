let file = document.getElementById("fileInput");
let dropBox = document.getElementById("upload-certificate-container");

let fileMessage = document.getElementById("fileMessage");

/////////////////////////////////////////////////////////////////
function selectFile(){
    file.click();
}

file.onchange = (event)=>{
    fileMessage.style.display="block";
    fileMessage.innerText = event.target.files[0].name + " is loaded";
}


////////////////////////////////////////////

dropBox.addEventListener('drop' , (event)=>{

    event.preventDefault();
    event.stopPropagation();
   let myfile= event.dataTransfer.files[0];

//    dropBox.classList.remove('inBoxDragging');
   fileMessage.style.display="block";
   fileMessage.innerText = myfile.name + " is loaded";
    

})

dropBox.addEventListener('dragenter', (event)=>{
    event.preventDefault();
    // dropBox.classList.add('inBoxDragging');
})


dropBox.addEventListener('dragleave', (event)=>{
    event.preventDefault();
    // dropBox.classList.remove('inBoxDragging');
})


/////////// window events //////////////////

window.addEventListener('dragenter',(event)=>{event.preventDefault();})
window.addEventListener('dragover',(event)=>{event.preventDefault();})
window.addEventListener('drop',(event)=>{event.preventDefault();})



