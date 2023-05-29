import User from "../assets/user-friends 1.svg";
import Guarantor from "../assets/users 1.svg";
import Loans from "../assets/sack 1.svg";
import Decision from "../assets/Vector.svg";
import Savings from "../assets/piggy-bank 1.svg";
import LoanRequest from "../assets/Group 104.svg";
import Whitelist from "../assets/user-check 1.svg";
import Karma from "../assets/user-times 1.svg";

const Customers = [
  {
    img: User,
    link: "Users",
    route: "/dashboard"
  },
  {
    img: Guarantor,
    link: "Guarantors",
    route: "/dashboard/guarantors"
  },
  {
    img: Loans,
    link: "Loans",
    route: "/dashboard/loans"
  },
  {
    img: Decision,
    link: "Decision Models",
    route: "/dashboard/decision-models"
  },
  {
    img: Savings,
    link: "Savings",
    route: "/dashboard/savings"
  },
  {
    img: LoanRequest,
    link: "Loan Requests",
    route: "/dashboard/loan-request"
  },
  {
    img: Whitelist,
    link: "Whitelists",
    route: "/dashboard/whitelist"
  },
  {
    img: Karma,
    link: "Karma",
    route: "/dashboard/karma"
  },
];

export default Customers;
