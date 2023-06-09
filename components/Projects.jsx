import { projects } from "../public/lists/items"
import Carousel from "./Carousel"

export default function Projects() {
    return (
        <section id="projectsSection">
            {projects.map((project, index) => {
                return(
                    <Carousel key={project.name} item={project} index={index} length={project.list.length}/>
                )
            })}
        </section>
    )
}