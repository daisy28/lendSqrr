import { useState, useContext, useRef, MutableRefObject} from "react";
import { ToggleContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import { BsSearch, BsBell } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { User } from "../App";
import Logo from "../assets/Group.svg";
import UserImg from "../assets/image 4.svg";
import Briefcase from "../assets/briefcase 1.svg";
import Home from "../assets/home 1.svg";
import CustomerData from "../lib/customers";
import BusinessData from "../lib/business";
import SettingsData from "../lib/settings";
import style from "./style.module.css";

const Dashboard = () => {
  const searchRef = useRef() as MutableRefObject<HTMLFormElement>;
  const searchRefMd = useRef() as MutableRefObject<HTMLFormElement>;
  const users: User = JSON.parse(localStorage.getItem("userInfo") || "false")
  const location = useLocation();
  const splitLocation = location.pathname;
  const toggle = useContext(ToggleContext);
  const [toggled, setToggled] = useState(toggle);

  return (
    <section className={``}>
      <div>
        <div
          className={`bg-[#fff] h-[100px] p-4 flex justify-between items-center shadow-sm fixed w-full right-0 top-0 left-0 z-40`}
        >
          <div className={`w-16 md:w-[20%]`}>
            <img src={Logo} alt="" />
          </div>
          <div className={`relative w-48 hidden md:block md:w-[40%]`}>
            <form action=""
              ref={searchRefMd}
            >
              <input
              type="text"
              name=""
              id=""
              placeholder="Search for anything"
              className={`border-[1px] border-primaryColor p-4 outline-none text-textColor rounded-[8px] h-[40px] bg-transparent text-[10px] md:text-[14px] leading-[16px] w-full font-Work Sans`}
            />
            <div
                className={`absolute w-[56px] bg-secondaryColor right-0 h-[40px] flex justify-center items-center top-0 rounded-tr-[8px] rounded-br-[8px]`}
                onClick={() => searchRefMd.current.reset()}
            >
              <BsSearch
                className={`w-[14px] h-[14px] text-white cursor-pointer`}
              />
            </div>
            </form>
          </div>
          <div className={`flex justify-between items-center w-[14rem] ml-3`}>
            <a
              href="docs"
              className={`text-primaryColor font-Roboto text-[16px] underline leading-[19px] md:mr-3`}
            >
              Docs
            </a>
            <BsBell className={`text-primaryColor`} />
            <div className={`w-[40px] h-[40px] rounded-full`}>
              <img
                src={users.profile.avatar || UserImg}
                alt=""
                className={`w-full h-full rounded-full`}
              />
            </div>
            <p
              className={`text-primaryColor text-[16px] font-[500] leading-[19px] font-Work Sans`}
            >
              {users.profile.firstName || "Adedeji"}
            </p>
            <MdArrowDropDown
              className={`w-[25px] h-[25px]  text-primaryColor cursor-pointer`}
            />
          </div>
        </div>

          <div
            className={`${style._nav} ${toggled ? `w-[240px]` : `w-[60px]`} bg-[#fff] shadow-sm fixed overflow-y-scroll overflow-x-hidden top-[100px] bottom-0 left-0 z-20`}
          >
          <MdArrowDropDown
              className={`${toggled ? `left-[220px] rotate-90` : `left-[40px] -rotate-90`} w-[25px] h-[25px]  text-primaryColor cursor-pointer fixed top-[100px]`}
              onClick={() => setToggled(prevState => !prevState)}
            />
            <div className={`bg-[rgba(255,255,255,0.05)]`}>
            <div className={`${toggled ? `block` : `hidden`} relative px-4 mt-10 w-full mb-10 md:hidden`}>
              <form action=""
                ref={searchRef}>
                <input
                type="text"
                name=""
                id=""
                placeholder="Search for anything"
                className={`border-[1px] border-primaryColor p-4 outline-none text-textColor rounded-[8px] h-[40px] bg-transparent text-[10px] md:text-[14px] leading-[16px] w-full font-Work Sans`}
              />
              <div
                className={`absolute w-[56px] bg-secondaryColor right-[12px] h-[40px] flex justify-center items-center top-0 rounded-tr-[8px] rounded-br-[8px]`}
                onClick={() => searchRef.current.reset()}
              >
                <BsSearch
                  className={`w-[14px] h-[14px] text-white cursor-pointer`}
                />
              </div>
              </form>
          </div>
              <div className={`flex items-center my-10 px-4`}>
                <Link to="/" className={`flex items-center`}>
                  <img src={Briefcase} alt="" />
                  <p
                    className={`${toggled ? `block` : `hidden`} font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2`}
                  >
                    Switch Organization
                  </p>
                  <MdArrowDropDown
                    className={`w-[25px] h-[25px] text-primaryColor cursor-pointer`}
                  />
                </Link>
              </div>
              <div className={`flex items-center mb-10 px-4`}>
                <Link to="/" className={`flex items-center`}>
                  <img src={Home} alt="" />
                  <p
                    className={`${toggled ? `block` : `hidden`} font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2`}
                  >
                    Dashboard
                  </p>
                </Link>
              </div>
              <div>
                <p
                  className={`${toggled ? `text-[12px]` : `text-[.4rem]`} uppercase text-textColor font-[500] leading-[14px] mb-6 px-4`}
                >
                  Customers
                </p>
              </div>
              <div className={`mb-10`}>
                {CustomerData.map(data => {
                  return (
                  <div className={`flex items-center mb-8 px-4 ${splitLocation === `${data.route}` ? `bg-[rgba(57,205,205,0.06)] border-l-2 border-secondaryColor py-3` : ``}`} key={data.link}>
                      <Link to={data.route} className={`flex items-center`}>
                        <img src={data.img} alt="" />
                        <p
                          className={`${toggled ? `block` : `hidden`} font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2 `}
                        >
                          {data.link}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div>
                <p
                  className={`${toggled ? `text-[12px]` : `text-[.4rem]`} uppercase text-textColor font-[500] leading-[14px] mb-6 px-4`}
                >
                  Businesses
                </p>
              </div>
              <div className={`mb-10`}>
                {BusinessData.map((data) => {
                  return (
                    <div className={`flex items-center mb-8 px-4`} key={data.link}>
                      <Link to="/" className={`flex items-center`}>
                        <img src={data.img} alt="" />
                        <p
                          className={`${toggled ? `block` : `hidden`} font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2 ${splitLocation === `/${data.link}` ? `bg-[rgba(57,205,205,0.06)] border-left border-secondaryColor` : ``}`}
                        >
                          {data.link}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div>
                <p
                  className={`${toggled ? `text-[12px]` : `text-[.4rem]`} uppercase text-textColor font-[500] leading-[14px] mb-6 px-4`}
                >
                  Settings
                </p>
              </div>
              <div>
                {SettingsData.map((data) => {
                  return (
                    <div className={`flex items-center mb-8 px-4`} key={data.link}>
                      <Link to="/" className={`flex items-center`}>
                        <img src={data.img} alt="" />
                        <p
                          className={`${toggled ? `block` : `hidden`} font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2 ${splitLocation === `/${data.link}` ? `bg-[rgba(57,205,205,0.06)] border-left border-secondaryColor` : ``}`}
                        >
                          {data.link}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Dashboard;
