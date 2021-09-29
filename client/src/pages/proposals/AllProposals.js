import { Button } from "@mui/material";
import React from "react";

const AllProposals = ({ proposals, page, setPage }) => {
  return (
    <div>
      <div>
      <Button
        onClick={() => setPage('')}
        variant='contained'
      >
        Go back
      </Button>
      </div>
      <br />
      {proposals.map(({ project_name, project_description, project_image, project_target_group }) => {
        return page === "" ? (
          <h3>--No proposals to display--</h3>
        ) : (
          <div key={project_name}>
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={project_image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{project_name} created by {project_target_group}</h5>
                    <p className="card-text">{project_description}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProposals;