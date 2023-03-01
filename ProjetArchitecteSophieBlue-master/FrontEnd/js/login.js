const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    const user = { email, password };

    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(async (response) => {
        try {
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token)
                window.location.href = "/ProjetArchitecteSophieBlue-master/FrontEnd/user.html";
            } else {
                alert("Login failed");
            }
        } catch(e) {
            console.log(e);
        }
    });
});

  
  
  
  

    
 
 


     