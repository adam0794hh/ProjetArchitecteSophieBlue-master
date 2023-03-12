fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((works) => {
      
  
        console.log(works);
        let worksContainer = document.createElement("div")
        portfolio.appendChild(worksContainer)
        worksContainer.classList.add("gallery")


        for (let i = 0; i < works.length; i++) {
            let figure = document.createElement("figure");
            worksContainer.appendChild(figure);
            figure.id = "bc"+ works[i].id;
            figure.categ = works[i].categoryId;
            let image = document.createElement("img");
            figure.appendChild(image);
            image.src = works[i].imageUrl;
            let titleImage = document.createElement("figcaption");
            figure.appendChild(titleImage);
            titleImage.textContent = works[i].title;
        }

        let modalContent = document.querySelector(".modal-content")
        let div = document.createElement("div")
        div.classList.add("modal-projet")
        modalContent.appendChild(div)
        
        for (let i = 0; i < works.length; i++) {
          let imgContainer = document.createElement("div");
          div.appendChild(imgContainer);
          imgContainer.classList.add("img-container");
          let img = document.createElement("img");
          imgContainer.appendChild(img);
          img.src = works[i].imageUrl;
          let iconContainer = document.createElement("div")
          iconContainer.classList.add("iconContainer");
          let deleteIcon = document.createElement("i");
          deleteIcon.classList.add("fas", "fa-trash-alt","fa-sm");
          iconContainer.appendChild(deleteIcon);
          imgContainer.appendChild(iconContainer);
          let imgContainerTxt = document.createElement("p");
          imgContainerTxt.textContent = "editer"
          imgContainer.appendChild(imgContainerTxt);
          deleteIcon.addEventListener("click", () => {
            const token = localStorage.getItem("token")
            // Envoyer une requête DELETE au serveur avec l'ID du projet
            fetch(`http://localhost:5678/api/works/${works[i].id}`, {
              method: "DELETE",
              headers: {
                'Authorization': 'Bearer '+ token
              }
             
            })
              .then((response) => {
                imgContainer.remove();
                worksContainer.querySelector(`#bc${works[i].id}`).remove();
                
              })
              
              .catch((error) => {
                console.error("Erreur lors de la suppression de l'image:", error);
              });
          });
          
        }
        
        
      

        

        
        
       
        



        let lien = document.createElement("button")
        modalContent.appendChild(lien);
        lien.classList.add("btn")
        lien.textContent = "Ajouter une photo"
        let modal2 = document.getElementById("modal2");
        let btn = document.querySelector(".btn");
        let closeModal = document.querySelector(".modal2-content i");
        let link = document.querySelector(".fa-solid");
        btn.addEventListener("click",function() {
          modal1.style.display = "none";
          modal2.style.display = "flex";
        })
        link.addEventListener("click",function() {
          modal1.style.display = "none";
        })
        closeModal.addEventListener("click",function() {
          modal2.style.display = "none";
        })
          
        let arrowLeft = document.querySelector(".fa-arrow-left")
        arrowLeft.addEventListener("click",function() {
          modal2.style.display = "none";
          modal1.style.display = "flex";
        })
        
        
        const modal1 = document.getElementById("modal1");
        const openModal = document.getElementById("link-modal");
        openModal.onclick = function() {
          
          modal1.style.display = "flex";
        }
        

        window.addEventListener("click", function(event) {
          if (event.target == modal1) {
            modal1.style.display = "none";
          }
        })
        window.addEventListener("click", function(event) {
          if (event.target == modal2) {
            modal2.style.display = "none";
          }
        })
        

        

        const form = document.getElementById('modal-form');
        
        form.addEventListener('submit', (event) => {
          event.preventDefault();

          const title = document.getElementById('title').value;
          const category = document.getElementById('category').value;
          const image = document.getElementById('image-upload').files[0];

          const formData = new FormData();
          formData.append('title', title);
          formData.append('category', category);
          formData.append('image', image);
          
          const token = localStorage.getItem("token")

              fetch('http://localhost:5678/api/works' , {
                method: 'POST',
                body: formData,
                headers: {
                  'Authorization': 'Bearer '+ token
                  
                }
              }).then(async (response) => {
              try {
                const data = await response.json();
                if (response.ok) {
                  modal2.style.display = "none"
                  let modalProjet = document.querySelector(".modal-projet")
                  worksContainer.innerHTML = ''
                  modalProjet.innerHTML = ''
                    // Récupérer les projets depuis l'API
                    fetch('http://localhost:5678/api/works')
                    .then(response => response.json())
                    .then(works => {
                      for (let i = 0; i < works.length; i++) {
                        let figure = document.createElement("figure");
                        worksContainer.appendChild(figure);
                        figure.id = "bc"+ works[i].id;
                        figure.categ = works[i].categoryId;
                        let image = document.createElement("img");
                        figure.appendChild(image);
                        image.src = works[i].imageUrl;
                        let titleImage = document.createElement("figcaption");
                        figure.appendChild(titleImage);
                        titleImage.textContent = works[i].title;
                    }
                    for (let i = 0; i < works.length; i++) {
                      let imgContainer = document.createElement("div");
                      div.appendChild(imgContainer);
                      imgContainer.classList.add("img-container");
                      let img = document.createElement("img");
                      imgContainer.appendChild(img);
                      img.src = works[i].imageUrl;
                      let iconContainer = document.createElement("div")
                      iconContainer.classList.add("iconContainer");
                      let deleteIcon = document.createElement("i");
                      deleteIcon.classList.add("fas", "fa-trash-alt","fa-sm");
                      iconContainer.appendChild(deleteIcon);
                      imgContainer.appendChild(iconContainer);
                      let imgContainerTxt = document.createElement("p");
                      imgContainerTxt.textContent = "editer"
                      imgContainer.appendChild(imgContainerTxt);
                      deleteIcon.addEventListener("click", () => {
                        const token = localStorage.getItem("token")
                        // Envoyer une requête DELETE au serveur avec l'ID du projet
                        fetch(`http://localhost:5678/api/works/${works[i].id}`, {
                          method: "DELETE",
                          headers: {
                            'Authorization': 'Bearer '+ token
                          }
                         
                        })
                          .then((response) => {
                            imgContainer.remove();
                            worksContainer.querySelector(`#bc${works[i].id}`).remove();
                            
                            
                          })
                          
                          .catch((error) => {
                            console.error("Erreur lors de la suppression de l'image:", error);
                          });
                      });
                    }
                      
                    });
                } else {
                    alert("envoi echouer");
                    console.log(response);
                    console.log(data);
                }
            } catch(e) {
                console.log(e);
            }
          }) 
        
      })    
        
        
      
      
        

})

// récupérer l'élément input file
let fileInput = document.getElementById("image-upload");

// créer un élément span personnalisé pour le bouton de fichier
let customInput = document.createElement("span");
customInput.className = "custom-file-upload";
customInput.innerHTML = "+ Ajouter photo";

// insérer le nouvel élément avant l'élément input file
fileInput.parentNode.insertBefore(customInput, fileInput);

// ajouter un événement click à l'élément personnalisé
customInput.addEventListener("click", function() {
  fileInput.click();
});

let imagePreview = document.getElementById("image-preview");



fileInput.addEventListener("input", function() {
  let imageContainer = document.querySelector(".imageContainer");
  if (fileInput.files && fileInput.files[0]) {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(fileInput.files[0]);
    img.style.maxWidth = "100%";
    img.style.height = "-webkit-fill-available";
    imageContainer.innerHTML = ""; 
    imageContainer.appendChild(img);
    let span = document.querySelector(".custom-file-upload")
    let text = document.querySelector("#image-preview p")
    let icon = document.querySelector("#image-preview i")
    span.style.display = "none"
    text.style.display = "none"
    icon.style.display = "none"
  }
});




  

             

        

      
      



        


        
    

    

   
 





