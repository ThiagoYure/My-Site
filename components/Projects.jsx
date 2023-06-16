import { projects } from "../public/lists/items"
import Gallery from "./Gallery"

export default function Projects() {
    return (
        <section id="projectsSection">
            {projects.map((project, index) => {
                return(
                    <Gallery key={project.name} item={project}/>
                )
            })}
        </section>
    )
}