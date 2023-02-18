const log = console.log

let Tous = document.createElement("li")
let Objets = document.createElement("li")
let Appartements = document.createElement("li")
let hotelResto = document.createElement("li")


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

        categories.appendChild(Tous)
        Tous.textContent = "Tous"




        categories.appendChild(Objets)
        Objets.textContent = data[0].name
        Objets.id = data[0].id
        categories.appendChild(Appartements)

        Appartements.textContent = data[1].name
        Appartements.id = data[1].id

        categories.appendChild(hotelResto)
        hotelResto.textContent = data[2].name
        hotelResto.id = data[2].id

    })

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
            this.style.backgroundColor = "#1D6154";
            this.style.color = "white";
        });
        Objets.addEventListener("click", function () {
            let selectedCategory = Number(Objets.id);
            for (let i = 0; i < worksContainer.children.length; i++) {
                let currentFigure = worksContainer.children[i];
                if (currentFigure.categ === selectedCategory) {
                    currentFigure.style.display = "block";
                } else {
                    currentFigure.style.display = "none";
                }
            }
            this.style.backgroundColor = "#1D6154";
            this.style.color = "white";
        });
        Appartements.addEventListener("click", function () {
            let selectedCategory = Number(Appartements.id);
            for (let i = 0; i < worksContainer.children.length; i++) {
                let currentFigure = worksContainer.children[i];
                if (currentFigure.categ === selectedCategory) {
                    currentFigure.style.display = "block";
                } else {
                    currentFigure.style.display = "none";
                }
            }
            this.style.backgroundColor = "#1D6154";
            this.style.color = "white";
        });
        hotelResto.addEventListener("click", function () {
            let selectedCategory = Number(hotelResto.id);
            for (let i = 0; i < worksContainer.children.length; i++) {
                let currentFigure = worksContainer.children[i];
                if (currentFigure.categ === selectedCategory) {
                    currentFigure.style.display = "block";
                } else {
                    currentFigure.style.display = "none";
                }
            }
            this.style.backgroundColor = "#1D6154";
            this.style.color = "white";
        });








    })
