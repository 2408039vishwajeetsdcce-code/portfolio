
// Welcome message
function welcomeMessage() {
    alert("Hello! Welcome to my portfolio website.");
}

// Show and hide skills
function toggleSkills() {

    var skills = document.getElementById("skills");
    var button = document.getElementById("skillButton");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        button.innerHTML = "Hide Skills";
    }
    else {
        skills.style.display = "none";
        button.innerHTML = "Show Skills";
    }
}
