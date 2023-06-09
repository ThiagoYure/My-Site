import { fighters } from "../public/lists/items"

export default function Skills() {
    return (
        <section id="skillsSection">
            <h2><span></span>Escolha seu<span></span><br /><b>Profissional</b></h2>
            <div id="carousel">
                <div id="fighters">
                    <div id="carouselPanel">
                        {fighters.map((fighter, index) => {
                            return (
                                <img key={fighter.name} src={fighter.image} alt={"Ilustração de personagem profissional " + fighter.name} />
                            )
                        })}
                    </div>
                    <div id="carouselButtons">
                        <div className="leftButton"></div>
                        <div className="rightButton"></div>
                    </div>
                </div>
                <div id="fighterDescriptionPanel">
                    {fighters.map((fighter, index) => {
                        return (
                            <div key={fighter.name} className={index === 0 ? "active" : ""}>
                                <h3 className="fighterName">{fighter.name}</h3>
                                <p className="fighterDescription">
                                    {fighter.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}