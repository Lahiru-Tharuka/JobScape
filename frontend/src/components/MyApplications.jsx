import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAllApplicationErrors,
  resetApplicationSlice,
  deleteApplication,
  fetchJobSeekerApplications,
} from "../store/slices/applicationSlice";
import Spinner from "../components/Spinner";
import Button from "./ui/Button";

const MyApplications = () => {
  const { loading, error, applications, message } = useSelector(
    (state) => state.applications
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobSeekerApplications());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetApplicationSlice());
      dispatch(fetchJobSeekerApplications());
    }
  }, [dispatch, error, message]);

  const handleDeleteApplication = (id) => {
    dispatch(deleteApplication(id));
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : applications && applications.length <= 0 ? (
        <h1 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
          You have not applied for any job.
        </h1>
      ) : (
        <>
          <div className="account_components">
            <h3>My Application For Jobs</h3>
            <div className="applications_container">
              {applications.map((element) => {
                return (
                  <div className="card" key={element._id}>
                    <p className="sub-sec">
                      <span>Job Title: </span> {element.jobInfo.jobTitle}
                    </p>
                    <p className="sub-sec">
                      <span>Name</span> {element.jobSeekerInfo.name}
                    </p>
                    <p className="sub-sec">
                      <span>Email</span> {element.jobSeekerInfo.email}
                    </p>
                    <p className="sub-sec">
                      <span>Phone: </span> {element.jobSeekerInfo.phone}
                    </p>
                    <p className="sub-sec">
                      <span>Address: </span> {element.jobSeekerInfo.address}
                    </p>
                    <p className="sub-sec">
                      <span>Coverletter: </span>
                      <textarea
                        value={element.jobSeekerInfo.coverLetter}
                        rows={5}
                        disabled
                      ></textarea>
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        variant="outline"
                        onClick={() => handleDeleteApplication(element._id)}
                      >
                        Delete Application
                      </Button>
                      <Button
                        href={element.jobSeekerInfo?.resume?.url}
                        target="_blank"
                      >
                        View Resume
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyApplications;
