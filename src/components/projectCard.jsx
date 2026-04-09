export const ProjectCard = (props) => {
    return (
        <a className="project-card" href={props.projectLink}>
            <img src={props.projectImg} alt={props.projectName} />
            <h3>{props.projectName}</h3>
        </a>
    )
}
