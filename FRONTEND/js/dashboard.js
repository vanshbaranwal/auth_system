const navEmail = document.getElementById("navEmail");
const welcomeName = document.getElementById("welcomeName");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileRole = document.getElementById("profileRole");
const userId = document.getElementById("profileId");


async function getUser() {

    try {
        const res = await fetch("http://localhost:3000/api/v1/users/me", {
            method: "GET",
            headers: {"Content-Type" : "application/json"},
            credentials: "include"
        });
        
        const data = await res.json();

        if(res.ok && data.success){
            const user = data.user;

            navEmail.textContent = user.email;
            welcomeName.textContent = user.name;
            profileName.textContent = user.name;
            profileEmail.textContent = user.email;
            profileRole.textContent = user.role;
            userId.textContent = user._id;

        } else{
            window.location.href = "../index.html";
        }


    } catch (error) {
        window.location.href = "../index.html";
    }

}

getUser();