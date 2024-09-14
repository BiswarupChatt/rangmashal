
import ProjectDetails from "./components/ProjectDetails"
import eventsData from "./eventsData";


export default function AllProjects() {

    return (
        <>
            {eventsData.map((event, index) => (
                <ProjectDetails
                    key={index}
                    events={event}
                    order={index}
                />
            ))}
        </>
    )
}