let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ullength = document.querySelector("li")


for(let i=0;i<ullength.length;i++){
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close")
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;    
}


btnDOM.addEventListener('click',elemanEkle)

function check(){
    this.classList.toggle("checked");
}
function removeButton(){
    this.parentElement.remove();
}

function elemanEkle(){
    if(taskDOM.value == ""){
        $(".error").toast("show");
    }
    else{
        $(".success").toast("show");

        let liDOM = document.createElement('li') //yeni bir li elementi yaratacagımızı ilan edip yaratacagımız li elementini liDOM değişkenine atayacağımızı söyledik.
        listDOM.appendChild(liDOM); // Yaratacağımız liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
        liDOM.innerHTML = task.value; // Burda ise inputID.değer diyerek inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
        taskDOM.value = "";

        liDOM.onclick = check;
        
        let closeButton = document.createElement("span");
            closeButton.textContent = "\u00D7";
            closeButton.classList.add("close");
            closeButton.onclick = removeButton;
            
            liDOM.append(closeButton);
            listDOM.append(liDOM);
            inputElement.value = ("");
    }
}