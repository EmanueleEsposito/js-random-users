const addBtn = document.getElementById("add");
console.log(addBtn);
addBtn.addEventListener("click",addUser);
function addUser()
{
    console.log("Aggiungo un utente");

axios.get("https://randomuser.me/api/")
    .then(function (response) 
    {
      
      console.log(response);
      const imgUrl = response.data.results[0].picture.large;
      console.log(imgUrl);
      const nameUrl = response.data.results[0].name.first;
      console.log(nameUrl);
      const surnameUrl = response.data.results[0].name.last;
      console.log(surnameUrl);
      createUser(imgUrl,nameUrl,surnameUrl);
    })
    .catch(function(error)
    {
        console.log(error);
    });
    function createUser(imgUrl,nameUrl,surnameUrl){
        let image = document.createElement("img");
        image.src=  imgUrl;
        image.className= "img-fluid";

        
        let body = document.createElement("h2");
        body.innerText = nameUrl+ " " + surnameUrl;
        body.className =("fst-italic");
       let cardBody = document.createElement("div");
       cardBody.className = "card-body";
       cardBody.appendChild(body);

        
        let div = document.createElement("div");
        div.className = 'col-4';
        div.appendChild(image);
        document.getElementById("gallery").appendChild(div);
        div.appendChild(cardBody);
        document.getElementById("gallery").appendChild(div);
        
        


      

    } 
}
