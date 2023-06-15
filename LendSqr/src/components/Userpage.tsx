import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeft, BsStarFill, BsStar } from "react-icons/bs";
import { User } from "../App";
import style from "./style.module.css";
import UserImg from "../assets/image 4.svg";

const UserPage = () => {
  const navigate = useNavigate();
  const users: User = JSON.parse(localStorage.getItem("userInfo") || "false");
  const [mainCategory, setMainCategory] = useState("General Details");
  const categories = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];
  
  return (
    <section className={`${style._section_width} font-Work Sans mt-[100px] ml-auto bg-[#fbfbfb] relative p-6 md:p-[3rem]`}>
      <div>
        <div
          className={`flex items-center mb-8 cursor-pointer`}
          onClick={() => navigate("/dashboard")}
        >
          <BsArrowLeft className={`text-[16px] leading-[18.7px] text-textColor`} />
          <p className={`ml-3 text-[16px] leading-[18.7px] text-textColor`}>Back to Users</p>
        </div>
        <div className={`md:flex justify-between items-center mb-10`}>
          <h1 className={`text-[18px] md:text-[24px] leading-[28px] font-[500] text-primaryColor mb-4 md:mb-0`}>User Details</h1>
          <div className={`flex items-center`}>
            <button className={`border border-blacklist text-blacklist p-2 font-[600] uppercase text-[10px] md:text-[14px] leading-[16px] text-center tracking-[.1rem] rounded-[8px] md:px-4`}>Blacklist user</button>
            <button className={`border border-secondaryColor text-secondaryColor p-2 font-[600] uppercase text-[10px] md:text-[14px] leading-[16px] text-center tracking-[.1rem] rounded-[8px] ml-4 md:px-4`}>Activate user</button>
          </div>
        </div>
        <div className={`bg-white border border-[rgba(33, 63, 125, 0.06)] shadow-md rounded-[4px] p-4 py-8 md:py-0 md:pt-8 md:px-6 mb-6`}>
          <div className={`md:grid gap-4 mb-10 grid-flow-col-dense`}>
            <div className={`flex items-center border-b border-[rgba(33,64,125,0.15)] mb-6 pb-6 md:border-b-0 md:border-r md:mb-0 md:pb-0`}>
              <img src={users.profile.avatar || UserImg} alt="" className={`w-[60px] h-[60px] rounded-full`} />
              <div className={`ml-4`}>
                <p className={`text-[16px] md:text-[22px] leading-[26px] font-[500] text-primaryColor mb-1`}>{users.profile.firstName} {users.profile.lastName}</p>
                <p className={`text-[14px] leading-[16px] text-textColor`}>{users.accountNumber}</p>
              </div>
            </div>
            <div className={`border-b border-[rgba(33,64,125,0.15)] mb-4 pb-6 md:border-b-0 md:border-r md:mb-0 md:pb-0 md:flex items-center justify-center`}>
              <div className={``}>
                <p className={`text-[14px] leading-[16px] font-[500] text-textColor mb-2`}>User's Tier</p>
                <div className={`w-20 flex justify-between items-center text-pending`}>
                  <BsStarFill className={``} />
                  <BsStar className={``} />
                  <BsStar className={``} />
                </div>
              </div>
            </div>
            <div className={`mb-6 md:flex items-center justify-center md:mb-0`}>
              <div className={``}>
                <p className={`text-[22px] leading-[26px] font-[500] text-primaryColor mb-1`}>{users.profile.currency} {users.accountBalance}</p>
                <div className={`flex justify-between items-center`}>
                  <p className={`text-[12px] leading-[14px] text-primaryColor`}>{users.profile.bvn}/Providus Bank</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`grid grid-rows-5 w-[150px] md:text-center md:w-[100%] md:grid-flow-col-dense md:grid-rows-none md:gap-4`}> {
            categories.map(category => {
              return <div
                id={category}
                onClick={(e) => {
                  const target = e.target as Element
                  if (category === target.id) {
                    setMainCategory(category)
                  }
                }}
                key={category}
                className={`text-[16px] leading-[19px] mb-2 pb-2 md:mb-0 cursor-pointer hover:text-secondaryColor ${mainCategory === category ? `text-secondaryColor border-b-2 border-secondaryColor` : `text-[rgba(0, 0, 0, 0.8)] border-0`}`}>{category}</div>
            })}
          </div>
        </div>

        <div className={`${style._content} bg-white border border-[rgba(33, 63, 125, 0.06)] shadow-md rounded-[4px] p-4 md:p-8 overflow-x-scroll`}>
          <div className={``}>
            <div className={``}>
              <div>
                <h1 className={`text-primaryColor font-[500] text-[16px] leading-[19px] mb-8`}>
                  Personal Information
                </h1>
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 md:w-[950px] border-b border-[rgba(33,64,125,0.15)] lg:w-[100%]`}>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={``}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Full Name</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.profile.firstName} {users.profile.lastName}</p>
                  </div>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Marital Status</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>Single</p>
                  </div>
                </div>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Phone Number</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.profile.phoneNumber}</p>
                  </div>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Children</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>None</p>
                  </div>
                </div>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Email Address</h1>
                    <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.email}</p>
                  </div>
                  <div className={``}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Type of Residence</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>Parent's Apartment</p>
                  </div>
                </div>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={``}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Bvn</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.profile.bvn}</p>
                  </div>
                  <div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Gender</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.profile.gender}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`my-8`}>
                <div className={`relative`}>
                  <h1 className={`text-primaryColor font-[500] text-[16px] leading-[19px] mb-8`}>
                    Education and Employment
                  </h1>
                </div>
                <div className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-b border-[rgba(33,64,125,0.15)] pb-4 lg:w-[100%] md:w-[950px]`}>
                  <div className={`grid grid-rows-2 md:gap-4`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Level of Education</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.education.level}</p>
                    </div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Office Email</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words w-[176px]`}>{users.education.officeEmail}</p>
                    </div>
                  </div>
                  <div className={`grid grid-rows-2 md:gap-4`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Employment Status</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.education.employmentStatus}</p>
                    </div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Monthly Income</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.profile.currency}{users.education.monthlyIncome[0]} - {users.profile.currency}{users.education.monthlyIncome[1]}</p>
                    </div>
                  </div>
                  <div className={`grid grid-rows-2 md:gap-4`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Sector of Employment</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.education.sector}</p>
                    </div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Loan Repayment</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.education.loanRepayment}</p>
                    </div>
                  </div>
                  <div className={`grid grid-cols-1 mb-4 md:mb-0`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Duration of Employment</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.education.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`my-8`}>
                <div className={`relative`}>
                  <h1 className={`text-primaryColor font-[500] text-[16px] leading-[19px] mb-8`}>
                    Socials
                  </h1>
                </div>
                <div className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 md:w-[950px] border-b border-[rgba(33,64,125,0.15)] pb-4 lg:w-[100%]`}>
                  <div className={`grid mb-4`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Twitter</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.socials.twitter}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Facebook</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.socials.facebook}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>instagram</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.socials.instagram}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`my-8`}>
                <div className={`relative`}>
                  <h1 className={`text-primaryColor font-[500] text-[16px] leading-[19px] mb-8`}>
                    Guarantor
                  </h1>
                </div>
                <div className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 md:w-[950px] pb-4 lg:w-[100%]`}>
                  <div className={`grid mb-4`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Full Name</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.guarantor.firstName} {users.guarantor.lastName}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Phone Number</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users.guarantor.phoneNumber}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>House Address</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.guarantor.address}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Gender</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users.guarantor.gender}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
