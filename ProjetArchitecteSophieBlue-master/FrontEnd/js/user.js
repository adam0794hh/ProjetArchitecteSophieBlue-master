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
            figure.id = works[i].id;
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
              .then((response) => response.json())
              .then((data) => {
                console.log("Image supprimée:", data);
                // Retirer l'élément "imgContainer" de la liste des images
                imgContainer.remove();
                worksContainer.remove();
                
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
          console.log(formData.get("image"))
          console.log(formData.get("title"))
          console.log(formData.get("category"))
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
                    // Récupérer les projets depuis l'API
                    fetch('http://localhost:5678/api/works')
                    .then(response => response.json())
                    .then(works => {
                      // Récupérer la div qui contiendra les projets
                      const gallery = document.getElementById('gallery');

                      // Pour chaque projet, créer un élément HTML et l'ajouter à la galerie
                      works.forEach(work => {
                        // Créer un élément figure pour le projet
                        const figure = document.createElement('figure');
                        

                        // Ajouter une image pour le projet
                        const image = document.createElement('img');
                        image.src = work.imageUrl;
                        figure.appendChild(image);

                        // Ajouter un titre pour le projet
                        const title = document.createElement('figcaption');
                        title.textContent = work.title;
                        figure.id = works.length.id;
                        figure.categ = works[i].categoryId;
                        figure.appendChild(title);

                        // Ajouter l'élément figure à la galerie
                        gallery.appendChild(figure);
                      });
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
        // Vérifier que l'utilisateur sélectionne un fichier
        const imageUpload = document.getElementById('image-upload');
        imageUpload.addEventListener('change', () => {
          console.log('selected file:', imageUpload.files[0]);
        });
      })    
        
        
      
      
        

})

  
// const form = document.getElementById('modal-form');
// const titleInput = document.getElementById('title');
// const categoryInput = document.getElementById('category');
// const imageInput = document.getElementById('image-upload');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const title = titleInput.value;
//   const category = categoryInput.value;
//   const image = imageInput.files[0];
//   const userId = 1
//   const formData = new FormData();
//   formData.append('title', title);
//   formData.append('category', category);
//   formData.append('image', image);
//   formData.append('userId', userId);
//   console.log(formData.get("image"))
//   console.log(formData.get("title"))
//   console.log(formData.get("category"))
//   console.log(formData.get("userId"))

//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";
  
//   const url = "http://localhost:5678/api/works";
//   const options = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${token}`,
//     },
//     body: formData,
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     if (response.ok) {
//       console.log("Successful request:", data);
//     } else {
//       console.log("Unsuccessful request:", data);
//       alert("Une erreur est survenue lors de l'envoi du formulaire");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//     alert("Une erreur est survenue lors de l'envoi du formulaire");
//   }
// });   

             

        

      
      



        


        
    

    

   
 





