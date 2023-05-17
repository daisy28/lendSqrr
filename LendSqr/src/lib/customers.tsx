import User from "../assets/user-friends 1.svg";
import Guarantor from "../assets/users 1.svg";
import Loans from "../assets/piggy-bank 1.svg";
import Decision from "../assets/Vector.svg";
import Savings from "../assets/piggy-bank 1.svg";
import LoanRequest from "../assets/Group 104.svg";
import Whitelist from "../assets/Vector (6).svg";
import Karma from "../assets/Vector (7).svg";

const Customers = [
  {
    img: User,
    link: "Users",
    route: "/dashboard"
  },
  {
    img: Guarantor,
    link: "Guarantors",
    route: "guarantors"
  },
  {
    img: Loans,
    link: "Loans",
    route: "loans"
  },
  {
    img: Decision,
    link: "Decision Models",
    route: "decision-models"
  },
  {
    img: Savings,
    link: "Savings",
    route: "savings"
  },
  {
    img: LoanRequest,
    link: "Loan Requests",
    route: "loan-request"
  },
  {
    img: Whitelist,
    link: "Whitelists",
    route: "whitelist"
  },
  {
    img: Karma,
    link: "Karma",
    route: "karma"
  },
];

export default Customers;
