const WorkShowcase = ({title, description, image, orientation} : {title: string, description: string, image: string, orientation: string}) => {
    
    return (
        <div className="work">
            {orientation === "left" ? <img src={image} alt={title + " image"}/> : <div></div>}
            <div>    
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            {orientation === "right" ? <img src={image} alt={title + " image"}/> : <div></div>}
        </div>
    )
}

export default WorkShowcase