import React, { useState, useEffect } from "react";
import SingleApplication from "../singleApplications/SingleApplication";
import styles from "./Applications.module.css";
import axios from "axios";
import { Button } from "../ui/Button/Button";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    //fetch api data once on mount
    axios
      .get(`http://localhost:3001/api/applications?_page=${pageNum}&_limit=5`)
      .then((res) => {
        let { data } = res;
        //add data to state
        setApplications(data);
        // data is no longer loading
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);

  //show loading state
  if (loading) {
    return (
      <div className={styles.status} data-testid="loading">
        Loading page {pageNum}...
      </div>
    );
  }
  //else show application list
  return (
    <div className={styles.Applications} data-testid="applications">
      {applications.map((application) => (
        <SingleApplication
          data-testId={application.id}
          key={application.id}
          application={application}
        />
      ))}
      <div className={styles.footer}>
        <p>Current Page: {pageNum}</p>

        <Button
          onClick={() => {
            //toggle loading status
            setLoading(!loading);
            //increment page number
            setPageNum((currPageNum) => currPageNum + 1);
          }}
          className={styles.btn}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Applications;
