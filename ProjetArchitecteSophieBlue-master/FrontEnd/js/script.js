const log = console.log
fetch("http://localhost:5678/api/categories")
    .then((reponse) => reponse.json())
    .then((data) => {
        
        console.log(data)
        let naviguation = document.createElement("nav")
        // let gallery = document.querySelector("#gallery")
        const portfolio = document.querySelector("#portfolio")
        portfolio.appendChild(naviguation)
        let categories = document.createElement("ul")
        naviguation.appendChild(categories)

        let Tous = document.createElement("li")
        categories.appendChild(Tous)
        Tous.textContent = "Tous"
        
        
       
        let Objets = document.createElement("li")
        categories.appendChild(Objets)
        Objets.textContent = data[0].name
        Objets.id = data[0].id

        let Appartements = document.createElement("li")
        categories.appendChild(Appartements)
        Appartements.textContent = data[1].name
        Appartements.id = data[1].id

        let hotelResto = document.createElement("li")
        categories.appendChild(hotelResto)
        hotelResto.textContent = data[2].name
        hotelResto.id = data[2].id

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
            
            
            Tous.addEventListener("click", function () {
                for (let i = 0; i < worksContainer.children.length; i++) {
                    let currentFigure = worksContainer.children[i];
                    currentFigure.style.display = "block";
                }
               
            });
            Objets.addEventListener("click", function () {
                let selectedCategory = Objets.id;
                for (let i = 0; i < worksContainer.children.length; i++) {
                let currentFigure = worksContainer.children[i];
                if (currentFigure.categ == selectedCategory) {
                    currentFigure.style.display = "block";
                } else {
                    currentFigure.style.display = "none";
                }
                }
               
            });
            Appartements.addEventListener("click", function () {
                let selectedCategory = Appartements.id;
                for (let i = 0; i < worksContainer.children.length; i++) {
                let currentFigure = worksContainer.children[i];
                if (currentFigure.categ == selectedCategory) {
                    currentFigure.style.display = "block";
                } else {
                    currentFigure.style.display = "none";
                }
                }
               
            });
            hotelResto.addEventListener("click", function () {
                let selectedCategory = hotelResto.id;
                for (let i = 0; i < worksContainer.children.length; i++) {
                let currentFigure = worksContainer.children[i];
                if (currentFigure.categ == selectedCategory) {
                    currentFigure.style.display = "block";
                } else {
                    currentFigure.style.display = "none";
                }
                }
               
            });
            
              
              

            

           

        })
       
    })
