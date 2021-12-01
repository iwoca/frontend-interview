const { FAKER_SEED } = require("./config.js");
const faker = require("faker");

faker.seed(FAKER_SEED);

const LOAN_TYPES = [
  "Flexi-Loan",
  "Business Loan",
  "Cash Advance",
  "RLS",
  "CBILS",
];

module.exports = () => {
  const data = {
    applications: [],
  };

  for (let i = 1; i <= 100; i++) {
    const application = {
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      loan_amount: parseInt(faker.finance.amount(1000, 150000, 0)),
      loan_type: fakeLoanType(),
      email: faker.internet.email(),
      company: faker.company.companyName(),
      date_created: faker.date.between("01/01/2021", new Date()),
      expiry_date: faker.date.between("01/01/2021", new Date()),
      avatar: faker.image.avatar(),
      loan_history: fakeLoanHistory(),
    };

    data.applications.push(application);
  }

  return data;
};

function fakeLoanType() {
  return LOAN_TYPES[faker.datatype.number(LOAN_TYPES.length - 1)];
}

function fakeLoanHistory() {
  let history = [];

  for (let index = 0; index < faker.datatype.number(10); index++) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const yearForHistory = year - (index + 1);

    const principle = faker.finance.amount(1000, 150000, 0);
    const interestRate = faker.finance.amount(1, 10, 0);
    const interest = (parseInt(interestRate) / 100) * parseInt(principle);

    const singleYear = {
      loan_started: faker.date.between(
        `${yearForHistory}-01-01`,
        `${yearForHistory}-06-30`
      ),
      loan_ended: faker.date.between(
        `${yearForHistory}-07-01`,
        `${yearForHistory}-12-31`
      ),
      principle: parseInt(principle),
      interest_rate: parseInt(interestRate) / 100,
      interest: parseInt(Math.trunc(interest)),
    };

    history.push(singleYear);
  }

  return history;
}
