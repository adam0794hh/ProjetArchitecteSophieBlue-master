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
          let img = document.createElement("img");
          div.appendChild(img);
          img.src = works[i].imageUrl;
        }
        let input = document.createElement("input")
        modalContent.appendChild(input);
        input.setAttribute('type','submit')
        input.setAttribute('value','Ajouter une photo')
        let modal = null
        const openModal = function (e) {
          e.preventDefault()
          const target = document.querySelector(e.target.getAttribute('href'))
          target.style.display = null
          target.removeAttribute("aria-hidden")
          modal = target
          
          modal.addEventListener("click", closeModal)
          modal.querySelector(".fa-solid").addEventListener("click", closeModal)
          modal.querySelector(".modal-stop").addEventListener("click", stopPropagation)
          
        }
        const closeModal = function (e) {
          
          e.preventDefault()
          modal.style.display = "none"
          modal.removeEventListener("click", closeModal)
          modal.querySelector(".fa-solid").removeEventListener("click", closeModal)
          modal.querySelector(".modal-stop").removeEventListener("click", stopPropagation)
          
        }
        const stopPropagation = function (e) {
          e.stopPropagation()
        }
        document.querySelectorAll(".js-modal").forEach(a =>{
          a.addEventListener("click", openModal)
        })

        

    

        
      });
        


        
    

    

   
 





