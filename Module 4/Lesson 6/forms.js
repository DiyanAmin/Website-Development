function validate(e){

    e.preventDefault(); // stop page refresh
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const messagebox = document.getElementById("messagebox");
    
    if (email === "") {

        messagebox.innerHTML = "Enter email";
        messagebox.style.color = "red";

    }

    else if (password === "") {

        messagebox.innerHTML = "Enter password";
        messagebox.style.color = "red";

    }

    else if (age === "") {

        messagebox.innerHTML = "Enter your age";
        messagebox.style.color = "red";

    }

    else {

        messagebox.innerHTML = "Sign up successful!";
        messagebox.style.color = "green";

    }

    }
}