import { useEffect, useState } from "react"

export default function Gallery({ item }) {

    return (
        <div className="gallerySection">
            <h2>_{item.name}</h2>
            <div className="gallery">
                {item.list.map((project, index) => {
                    return (
                        <a className="itemProject" key={project.name} href={project.link} target="_blank">
                            <img src={project.image} alt={"Projeto " + project.name} />
                            <span className="projectCaption">
                                {project.name}
                            </span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}