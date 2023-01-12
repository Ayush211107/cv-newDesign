const skills = [
    {
        name: "Html",
        percent: 80
    },
    {
        name: "Css",
        percent: 80
    },
    {
        name: "JavaScript",
        percent: 80
    },
    {
        name: "Node.js",
        percent: 80
    },
    {
        name: "C/C++",
        percent: 80
    },
    {
        name: "Python",
        percent: 80
    },
    {
        name: "Python",
        percent: 80
    }
];
{/* <div class='card-body'>  </div>  */}
function projectStyleBox(project) {
    return "<div class='card' style='width: 18rem;'><img src=" + project.image + " class='card-img-top' alt='image'><div class='card-body'><h5 class='card-title'>" + project.title + "</h5> <section class='card-description' > <p class='card-text' > " + project.description + "</p> <a href='" + project.gitHubLink + "' class='card-link'> GitHub link </a> <a href='" + project.link + "' class='card-link'> Site link </a> </div> </section> </div > ";
}
const majorProjects = [
    {
        title: "abc",
        image: "images/computer.png",
        description: "This is my  project.",
        gitHubLink: "https:www.google.com",
        link: "https:www.google.com"
    },
    {
        title: "abc",
        image: "images/computer.png",
        description: "This is my  project.",
        gitHubLink: "https:www.google.com",
        link: "https:www.google.com"
    },
    {
        title: "abc",
        image: "images/computer.png",
        description: "This is my  project.",
        gitHubLink: "https:www.google.com",
        link: "https:www.google.com"
    },
    {
        title: "abc",
        image: "images/computer.png",
        description: "This is my  project.",
        gitHubLink: "https:www.google.com",
        link: "https:www.google.com"
    },
    {
        title: "abc",
        image: "images/computer.png",
        description: "This is my  project.",
        gitHubLink: "https:www.google.com",
        link: "https:www.google.com"
    },
    {
        title: "abc",
        image: "images/computer.png",
        description: "This is my  project.",
        gitHubLink: "https:www.google.com",
        link: "https:www.google.com"
    },
    {
        title: "abc",
        image: "images/computer.png",
        description: "This is my  project.",
        gitHubLink: "https:www.google.com",
        link: "https:www.google.com"
    }
]