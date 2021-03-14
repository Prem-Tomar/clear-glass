import Projects from "./models/projects";

let findProjects = async () => {
    return Projects.findAll({})
}