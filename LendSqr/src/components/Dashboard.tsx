import Logo from "../assets/Group.svg";
import { BsSearch, BsBell } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import UserImg from "../assets/image 4.svg";
import Briefcase from "../assets/briefcase 1.svg";
import Home from "../assets/home 1.svg";
import { Link } from "react-router-dom";
import CustomerData from "../lib/customers";
import BusinessData from "../lib/business";
import SettingsData from "../lib/settings";

const Dashboard = () => {
  return (
    <section>
      <div>
        <div
          className={`h-[100px] p-4 flex justify-between items-center shadow-sm fixed w-full right-0 top-0 left-0 z-20`}
        >
          <div className={`w-20`}>
            <img src={Logo} alt="" />
          </div>
          <div className={`relative w-48 hidden`}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for anything"
              className={`border-[1px] border-primaryColor p-4 outline-none text-textColor rounded-[8px] h-[40px] bg-transparent text-[10px] md:text-[14px] leading-[16px] w-full font-Work Sans`}
            />
            <div
              className={`absolute w-[56px] bg-secondaryColor right-0 h-[40px] flex justify-center items-center top-0 rounded-tr-[8px] rounded-br-[8px]`}
            >
              <BsSearch
                className={`w-[14px] h-[14px] text-white cursor-pointer`}
              />
            </div>
          </div>
          <div className={`flex justify-between items-center w-[14rem]`}>
            <a
              href="docs"
              className={`text-primaryColor font-Roboto text-[16px] underline leading-[19px] mr-3`}
            >
              Docs
            </a>
            <BsBell className={`text-primaryColor`} />
            <div className={`w-[48px] h-[48px] rounded-full`}>
              <img
                src={UserImg}
                alt=""
                className={`w-full h-full rounded-full`}
              />
            </div>
            <p
              className={`text-primaryColor text-[16px] font-[500] leading-[19px] font-Work Sans`}
            >
              Adedeji
            </p>
            <MdArrowDropDown
              className={`w-[25px] h-[25px]  text-primaryColor cursor-pointer`}
            />
          </div>
        </div>

        <div className={``}>
          {/* bg-[#3f3d3d52] relative overflow-hidden top-[100px] bottom-0 right-0 left-0 z-0 */}
          <div
            className={`bg-[rgb(255,255,255)] fixed top-[100px] bottom-0 left-0 z-10 p-4 overflow-y-scroll`}
          >
            <div>
              <div className={`flex items-center mt-4 mb-10`}>
                <Link to="/" className={`flex items-center`}>
                  <img src={Briefcase} alt="" />
                  <p
                    className={`font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2`}
                  >
                    Switch Organization
                  </p>
                  <MdArrowDropDown
                    className={`w-[25px] h-[25px]  text-primaryColor cursor-pointer`}
                  />
                </Link>
              </div>
              <div className={`flex items-center mb-10`}>
                <Link to="/" className={`flex items-center`}>
                  <img src={Home} alt="" />
                  <p
                    className={`font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2`}
                  >
                    Dashboard
                  </p>
                </Link>
              </div>
              <div>
                <p
                  className={`uppercase text-textColor font-[500] text-[12px] leading-[14px] mb-6`}
                >
                  Customers
                </p>
              </div>
              <div className={`mb-10`}>
                {CustomerData.map((data) => {
                  return (
                    <div className={`flex items-center mb-6`}>
                      <Link to="/" className={`flex items-center`}>
                        <img src={data.img} alt="" />
                        <p
                          className={`font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2`}
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
                  className={`uppercase text-textColor font-[500] text-[12px] leading-[14px] mb-6`}
                >
                  Businesses
                </p>
              </div>
              <div className={`mb-10`}>
                {BusinessData.map((data) => {
                  return (
                    <div className={`flex items-center mb-6`}>
                      <Link to="/" className={`flex items-center`}>
                        <img src={data.img} alt="" />
                        <p
                          className={`font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2`}
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
                  className={`uppercase text-textColor font-[500] text-[12px] leading-[14px] mb-6`}
                >
                  Settings
                </p>
              </div>
              <div>
                {SettingsData.map((data) => {
                  return (
                    <div className={`flex items-center mb-6`}>
                      <Link to="/" className={`flex items-center`}>
                        <img src={data.img} alt="" />
                        <p
                          className={`font-Work Sans text-primaryColor text-[16px] leading-[19px] ml-2`}
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
      </div>
    </section>
  );
};

export default Dashboard;
