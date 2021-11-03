const faker = require("faker");

faker.seed(14111954);

module.exports = () => {
  const data = {
    applications: [],
    profiles: [],
  };

  for (let i = 1; i <= 100; i++) {
    let application = {};

    application.id = i;

    application["first_name"] = faker.name.firstName();
    application["last_name"] = faker.name.lastName();
    application["loan_amount"] = faker.finance.amount(1000, 150000, 0);
    application["email"] = faker.internet.email();
    application["company"] = faker.company.companyName();

    const creationDate = faker.date.between("01/01/2021", new Date());
    application["date_created"] = creationDate;
    application["expiry_date"] = faker.date.between("01/01/2021", new Date());
    application["last_name"] = faker.name.lastName();
    data.applications.push(application);

    let profile = { ...application };

    profile.avatar = faker.image.avatar();

    const loanHistory = getLoanHistory();

    profile["loan_history"] = loanHistory;

    const loanTypes = [
      "Flexi-Loan",
      "Business Loan",
      "Cash Advance",
      "RLS",
      "CBILS",
    ];

    var loan = loanTypes[Math.floor(Math.random() * loanTypes.length)];

    profile["loan_type"] = loan;

    data.profiles.push(profile);
  }

  return data;
};

function getLoanHistory() {
  let history = [];

  for (let index = 0; index < faker.datatype.number(10); index++) {
    let singleYear = {};
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const yearForHistory = year - (index + 1);

    singleYear["loan_started"] = faker.date.between(
      `${yearForHistory}-01-01`,
      `${yearForHistory}-06-30`
    );
    singleYear["loan_ended"] = faker.date.between(
      `${yearForHistory}-07-01`,
      `${yearForHistory}-12-31`
    );

    const principle = faker.finance.amount(1000, 150000, 0);
    singleYear.principle = parseInt(principle);

    const interestRate = faker.finance.amount(1, 10, 0);

    const totalInterest = (parseInt(interestRate) / 100) * parseInt(principle);

    singleYear.interest = parseInt(Math.trunc(totalInterest));

    history.push(singleYear);
  }

  return history;
}
