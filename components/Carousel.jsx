import { useEffect, useState } from "react"

export default function Carousel({ item, index, length }) {
    const [maxWidth, setMaxWidth] = useState(0);
    const [marginValue, setMarginValeu] = useState(0);
    const [offset, setOffset] = useState(0);
    const [panelWidth, setPanelWidth] = useState(0);

    useEffect(() => {
        const item = document.getElementsByClassName('itemProject')[0];
        const panel = document.getElementsByClassName('carouselPanelProject')[0];
        const marginInitial = Number(window.getComputedStyle(panel).left.split('px')[0]);
        const itemWidth = Number(window.getComputedStyle(item).width.split('px')[0]) + 
        Number(window.getComputedStyle(item).marginLeft.split('px')[0]) + 
        Number(window.getComputedStyle(item).marginRight.split('px')[0]);
        const panelWidth = Number(window.getComputedStyle(item).width.split('px')[0]) * length;
        setPanelWidth(panelWidth);
        setMarginValeu(marginInitial);
        setOffset(itemWidth);
    }, [])

    const btPrev = () => {
        const newMargin = marginValue + offset;
        if(newMargin > panelWidth){
            setMarginValeu(newMargin);
        }
    }

    const btNext = () => {
        const newMargin = marginValue - offset;
        if(newMargin > (panelWidth * -1)){
            setMarginValeu(newMargin);
        }
    }

    return (
        <div className="carouselSection">
            <h2>_{item.name}</h2>
            <div className="carouselProject">
                <div className="carouselPanelProject" style={marginValue != 0 ? {
                    left: marginValue + 'px'
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