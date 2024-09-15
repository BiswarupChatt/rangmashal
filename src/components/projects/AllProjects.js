import React, { useState } from "react";
import { Box, Button, Container, Grid, Pagination } from '@mui/material';
import ProjectDetails from "./components/ProjectDetails"
import eventsData from "./eventsData";


export default function AllProjects() {

    const [currentPage, setCurrentPage] = useState(1)
    const projectPerPage = 3

    const totalPages = Math.ceil(eventsData.length / projectPerPage)

    const currentProjects = eventsData.slice(
        (currentPage - 1) * projectPerPage, currentPage * projectPerPage
    )

    const handlePageChange = (_, value) => {
        setCurrentPage(value);
    }

    return (
        <>
            {
                currentProjects.map((event, index) => (
                    <React.Fragment key={index}>
                        <ProjectDetails
                            events={event}
                            order={index}
                        />
                    </React.Fragment>
                ))
            }

            <Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="medium"
                    shape="rounded"
                    variant="outlined"
                    siblingCount={1}
                    boundaryCount={1} 
                />
            </Box>

        </>
    )
}