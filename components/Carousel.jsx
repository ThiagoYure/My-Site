import { useEffect, useState } from "react"

export default function Carousel({ item, index, length }) {
    const [marginValue, setMarginValue] = useState(0);
    const [offset, setOffset] = useState(0);
    const [panelWidth, setpanelWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    useEffect(() => {
        const item = document.getElementsByClassName('itemProject')[0];
        const panel = document.getElementsByClassName('carouselPanelProject')[0];
        const marginInitial = panel.offsetLeft;
        const itemWidth = item.width + (item.offsetLeft * 2);
        const panelWidth = itemWidth * length;
        console.log(marginInitial);
        console.log(itemWidth);
        console.log(panelWidth);
        setMarginValue(marginInitial);
        setOffset(itemWidth);
        setItemWidth(itemWidth);
        setpanelWidth(panelWidth);
    }, [])

    const btPrev = () => {
        const newMargin = marginValue + offset;
        const diff = newMargin - itemWidth;
        if(diff < 0){
            setMarginValue(newMargin);
        }
    }

    const btNext = () => {
        const newMargin = marginValue - offset;
        const diff = panelWidth + newMargin;
        if(diff > offset){
            setMarginValue(newMargin);
        }
    }

    return (
        <div className="carouselSection">
            <h2>_{item.name}</h2>
            <div className="carouselProject">
                <div className="carouselPanelProject" style={marginValue != 0 ? {
                    marginLeft: marginValue + 'px'
                } : {

                }}>
                    {item.list.map((project, index) => {
                        return (
                            <img className="itemProject" key={project.name} src={project.image} alt={"Projeto " + project.name} />
                        )
                    })}
                </div>
                <div className="carouselButtonsProject">
                    <div className="leftButtonProject" onClick={btPrev}></div>
                    <div className="rightButtonProject" onClick={btNext}></div>
                </div>
            </div>
        </div>
    )
}