const checkbox = document.querySelector("input[type='checkbox']");const body = document.querySelector(".main-body");const text_color = document.querySelector(".navbar-heading");const button_text = document.querySelector(".btn-type");const logo = document.querySelector(".fa-sun");const logo_list = document.querySelector(".btn-logo");const social_media_icons = document.querySelector(".social-media");checkbox.addEventListener("click", () => {body.classList.toggle("bg-dark");text_color.classList.toggle("text-color-dark");button_text.classList.toggle("btn-type-dark");logo_list.classList.toggle("btn-type-dark");logo.classList.toggle("text-color-dark");social_media_icons.classList.toggle("text-color-dark");if (checkbox.checked) {logo.classList.remove("fa-sun");logo.classList.add("fa-moon");button_text.textContent = "Dark Mode";} else {logo.classList.remove("fa-moon");logo.classList.add("fa-sun");button_text.textContent = "Light Mode";}});


//selecting all required elements
const dropArea = document.querySelector(".upload-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", ]; //adding some valid extensions in array
  if(fileType){ //if user selected file is a img/pdf/json/csv file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        
      let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}