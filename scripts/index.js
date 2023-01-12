var skillBox = document.querySelector(".skill");
let delay = 500;
skills.forEach(function (skill) {

    let innerBox = document.createElement("div");
    innerBox.classList.add('s');
    innerBox.innerHTML = "<div data-aos='flip-up' data-aos-delay=" + delay + " <span>" + skill.name + "</span><div class='progress'><div class='progress-bar bg-info' role='progressbar' style='width: " + skill.percent + "%' aria-valuenow=" + skill.percent + " aria-valuemin='0' aria-valuemax='100'></div></div>";
    skillBox.appendChild(innerBox);
    delay += 100;
});

let box = document.querySelector("#mini-projects");
// delay = 500;
majorProjects.forEach(function (project) {

    let innerBox = document.createElement("div");
    innerBox.classList.add('project');
    // style fetched from data.js
    innerBox.innerHTML = projectStyleBox(project);
    box.appendChild(innerBox);
    delay += 100;
});

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//     card.addEventListener("mouseover", function () {
//         card.querySelector(".hide").classList.toggle("hide");
//     })
// });

function textEffect() {
    const box = document.querySelector("#programmer-text");
    const textArr = "devloper";

    const text = textArr.split("");
    text.forEach(function (letter) {
        box.innerHTML += "<span>" + letter + "</span>";
    });

    setInterval(function () {

        addFloationEffect();
        removeFloationEffect();
    }, 2500);

};

textEffect();

function addFloationEffect() {
    let i = 0;
    let intervalId = setInterval(function () {
        const box = document.querySelector("#programmer-text")
        const span = box.querySelectorAll("span");
        if (i < span.length) {
            span[i].classList.add("fade-1");
            i++;
        } else {
            clearInterval(intervalId);
        }

    }, 100);
};

function removeFloationEffect() {
    const box = document.querySelector("#programmer-text");
    const span = box.querySelectorAll("span");
    span.forEach(function (s) {
        s.classList.remove("fade-1");
    });
};