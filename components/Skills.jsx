import { useEffect, useState } from "react";
import { fighters } from "../public/lists/items"

export default function Skills() {
    const [marginValue, setMarginValue] = useState(0);
    const [offset, setOffset] = useState(0);
    const [panelWidth, setpanelWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [fighterCards, setFighterCards] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFighterCards(document.querySelectorAll('[data-js="fighter"]'));
        }
        const item = document.getElementsByClassName('item')[0];
        const panelWidth = item.width * fighters.length;
        setOffset(item.width);
        setItemWidth(itemWidth);
        setpanelWidth(panelWidth);
    }, [])

    const btPrev = () => {
        const newMargin = marginValue + offset;
        const index = activeIndex - 1;
        if(activeIndex != 0){
            setActiveIndex(index);
            fighterCards.forEach((f) => {
                f.classList.remove("active");
            });
            fighterCards[index].classList.add("active");
            setMarginValue(newMargin);
        }
    }

    const btNext = () => {
        const newMargin = marginValue - offset;
        const index = activeIndex + 1;
        if(index < fighterCards.length){
            setActiveIndex(index);
            fighterCards.forEach((f) => {
                f.classList.remove("active");
            });
            fighterCards[index].classList.add("active");
            setMarginValue(newMargin);
        }
    }

    return (
        <section id="skillsSection">
            <h2><span></span>Escolha seu<span></span><br /><b>Profissional</b></h2>
            <div id="carousel">
                <div id="fighters">
                    <div id="carouselPanel" style={{
                        marginLeft: marginValue + 'px'
                    }}>
                        {fighters.map((fighter, index) => {
                            return (
                                <img className="item" key={fighter.name} src={fighter.image} alt={"Ilustração de personagem profissional " + fighter.name} />
                            )
                        })}
                    </div>
                    <div id="carouselButtons">
                        <div className="leftButton" onClick={btPrev}></div>
                        <div className="rightButton" onClick={btNext}></div>
                    </div>
                </div>
                <div id="fighterDescriptionPanel">
                    {fighters.map((fighter, index) => {
                        return (
                            <div data-js={'fighter'} key={fighter.name} className={index === activeIndex ? "active" : ""}>
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