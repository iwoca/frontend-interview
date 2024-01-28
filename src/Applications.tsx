import React, { useState, useEffect } from "react";
import SingleApplication from "./SingleApplication";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";
import styles from "./Applications.module.css";
import { Button } from "./ui/Button/Button";
import axios from 'axios';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplication();
  }, [page])

  const fetchApplication = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3001/api/applications?_page=${page}&_limit=5`);
      setApplications((prevApplications => [...prevApplications, ...response.data]));
    } catch(error) {
      console.log('Failed load application', error);
    } finally {
      setLoading(false);
    }
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <div className={styles.Applications}>
      {applications.map(application => (
        <SingleApplication key={application.guid} application={application} />
      ))}
      <Button onClick={handleLoadMore}>{loading ? 'Loading...' : 'Load more'}</Button>
    </div>
  );
};

export default Applications;
