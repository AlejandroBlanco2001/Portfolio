const WorkShowcase = ({title, description, image, orientation, link} : {title: string, description: string, image: string, orientation: string, link: string}) => {
    
    const moveToLink = () => window.open(link, "_blank");
    
    return (
        <div className="work">
            {orientation === "left" ? <img src={image} alt={title + " image"}/> : <div></div>}
            <div className="work-text">    
                <h4>{title}</h4>
                <p>{description}</p>
                <button onClick={moveToLink} className="btn">GitHub</button> 
            </div>
            {orientation === "right" ? <img src={image} alt={title + " image"}/> : <div></div>}
        </div>
    )
}

export default WorkShowcase