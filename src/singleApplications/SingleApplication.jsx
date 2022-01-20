import React from "react";
import styles from "./SingleApplication.module.css";
import NumberFormat from "react-number-format";

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.SingleApplication} data-testid="single-application">
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        <NumberFormat
          value={application.loan_amount}
          displayType="text"
          thousandSeparator={true}
          prefix="£"
        />
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {application.date_created}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {application.expiry_date}
      </div>
    </div>
  );
};

export default SingleApplication;
