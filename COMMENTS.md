<!-- Project Comments Go Here -->

# Notes

## Key Decisions

- Two trello tickets were addressed, there are:
  1.  [GET applications from the api](https://trello.com/c/a9sJifFk/4-get-applications-from-the-api)
  2.  [Remove line from far right column](https://trello.com/c/5l4SHY0p/2-remove-line-from-far-right-column)
      Partially Addressed
  3.  [Incorrect formatting in applications list for "Loan amount"](https://trello.com/c/8WjXdlwr/3-incorrect-formatting-in-applications-list-for-loan-amount-application-date-and-expiry-date)
- Some file structure adjustments were made to help keep the project readable.
- Two third-party libraries were used:
  1. Axios- installed and the preferred over the browser's fetch API mainly due to popularity, familiarity and access to the data as an object.
  2. React Number Format- used to format the loan amount.
- The assumption was made that only 5 application items were expected to be shown at once.
- 2 simple tests were implemented and can be found in the **tests** folder.
- Due to time contraints, on the Loan amount was formatted in No. 3 listed above, leaving the ticket incomplete.
- Mobile consideration was included in design updates.

## Running the project

- No updates to scripts were made, the entire project can be run using: `npm run start` and tests can be run using `npm run test`. The project must be running to run tests successfully.
