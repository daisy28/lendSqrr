import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeft, BsStarFill, BsStar } from "react-icons/bs";
import { User } from "../App";
import style from "./style.module.css";
import UserImg from "../assets/image 4.svg";

const UserPage = () => {
  const navigate = useNavigate();
  const getUser = localStorage.getItem("userInfo");
  let user;
  typeof getUser === "string" ? user = JSON.parse(getUser) : "";
  const users: User = user;
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
        <div className={`lg:flex justify-between items-center mb-10`}>
          <h1 className={`text-[18px] md:text-[24px] leading-[28px] font-[500] text-primaryColor mb-6 lg:mb-0`}>User Details</h1>
          <div className={`flex items-center`}>
            <button className={`border border-blacklist text-blacklist p-2 font-[600] uppercase text-[10px] md:text-[14px] leading-[16px] text-center tracking-[.1rem] rounded-[8px] md:p-4`}>Blacklist user</button>
            <button className={`border border-secondaryColor text-secondaryColor p-2 font-[600] uppercase text-[10px] md:text-[14px] leading-[16px] text-center tracking-[.1rem] rounded-[8px] ml-4 md:p-4`}>Activate user</button>
          </div>
        </div>
        <div className={`bg-white border border-[rgba(33, 63, 125, 0.06)] shadow-md rounded-[4px] p-4 py-8 md:py-0 md:pt-8 md:px-6 mb-6`}>
          <div className={`lg:grid gap-4 mb-10 grid-flow-col-dense lg:w-[550px] lg:gap-0`}>
            <div className={`flex items-center border-b border-[rgba(33,64,125,0.15)] mb-6 pb-6 lg:border-b-0 lg:border-r lg:mb-0 lg:pb-0 lg:w-[250px]`}>
              <img src={users ? users.profile.avatar : UserImg} alt="" className={`w-[60px] h-[60px] rounded-full`} />
              <div className={`ml-6`}>
                <p className={`text-[16px] md:text-[22px] leading-[26px] font-[500] text-primaryColor mb-1`}>{users ? users.profile.firstName : "Carter"} {users ? users.profile.lastName : "Williams"}</p>
                <p className={`text-[14px] leading-[16px] text-textColor`}>{users ? users.accountNumber : "WE78K9OLFH"}</p>
              </div>
            </div>
            <div className={`md:flex justify-start items-start lg:w-[100%] md:border-b border-[rgba(33,64,125,0.15)] lg:border-b-0`}>
              <div className={`border-b border-[rgba(33,64,125,0.15)] mb-4 pb-6 md:border-b-0 lg:border-r md:mb-0 lg:pb-0 lg:flex items-center justify-center md:mr-8 lg:w-[130px] lg:h-[60px]`}>
              <div className={``}>
                <p className={`text-[14px] leading-[16px] font-[500] text-textColor mb-2`}>User's Tier</p>
                <div className={`w-14 flex justify-between items-center text-pending`}>
                  <BsStarFill className={``} />
                  <BsStar className={``} />
                  <BsStar className={``} />
                </div>
              </div>
            </div>
            <div className={`mb-6 lg:flex items-center justify-center lg:mb-0 lg:w-[144px]`}>
              <div className={``}>
                <p className={`text-[22px] leading-[26px] font-[500] text-primaryColor mb-1`}>{users ? users.profile.currency : "NGN"}{users ? users.accountBalance : "100,000"}</p>
                <div className={`flex justify-between items-center`}>
                  <p className={`text-[12px] leading-[14px] text-primaryColor`}>{users ? users.profile.bvn : "0693822073"}/Access Bank</p>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className={`grid grid-rows-5 gap-y-3 w-[150px] text-center lg:w-[100%] lg:grid-flow-col-dense lg:grid-rows-none lg:gap-4`}> {
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
                className={`text-[16px] rounded-[6px] leading-[19px] mb-2 pb-2 lg:mb-0 cursor-pointer hover:text-secondaryColor ${mainCategory === category ? `text-secondaryColor border-b-2 border-secondaryColor` : `text-[rgba(0, 0, 0, 0.8)] border-0`}`}>{category}</div>
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
              <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 md:w-[950px] border-b border-[rgba(33,64,125,0.15)] xl:w-[100%]`}>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={``}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Full Name</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.profile.firstName : "Carter"} {users ? users.profile.lastName : "Williams"}</p>
                  </div>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Marital Status</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>Single</p>
                  </div>
                </div>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Phone Number</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users? users.profile.phoneNumber : "+190-678-342 x789"}</p>
                  </div>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Children</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>None</p>
                  </div>
                </div>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={`mb-4`}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Email Address</h1>
                    <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.email : "MaverickHayett345@hotmail.com"}</p>
                  </div>
                  <div className={``}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Type of Residence</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>Parent's Apartment</p>
                  </div>
                </div>
                <div className={`grid grid-rows-2 md:gap-4`}>
                  <div className={``}>
                    <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Bvn</h1>
                    <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.profile.bvn : "WE78K9OLFH"}</p>
                  </div>
                  <div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Gender</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.profile.gender : "Male"}</p>
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
                <div className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-b border-[rgba(33,64,125,0.15)] pb-4 xl:w-[100%] md:w-[950px]`}>
                  <div className={`grid grid-rows-2 md:gap-4`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Level of Education</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.education.level : "Bsc"}</p>
                    </div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Office Email</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words w-[176px]`}>{users ? users.education.officeEmail: "lendswork@hotmail.com"}</p>
                    </div>
                  </div>
                  <div className={`grid grid-rows-2 md:gap-4`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Employment Status</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.education.employmentStatus : "Employed"}</p>
                    </div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Monthly Income</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users? users.profile.currency : "NGN"}{users ? users.education.monthlyIncome[0] : 5500} - {users? users.profile.currency : "NGN"}{users ? users.education.monthlyIncome[1] : 15500}</p>
                    </div>
                  </div>
                  <div className={`grid grid-rows-2 md:gap-4`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Sector of Employment</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.education.sector : "Oil & Gas"}</p>
                    </div>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Loan Repayment</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.education.loanRepayment : 6000}</p>
                    </div>
                  </div>
                  <div className={`grid grid-cols-1 mb-4 md:mb-0`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Duration of Employment</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.education.duration : "4 years"}</p>
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
                <div className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 md:w-[950px] border-b border-[rgba(33,64,125,0.15)] pb-4 xl:w-[100%]`}>
                  <div className={`grid mb-4`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Twitter</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.socials.twitter : "@MaveHyatte"}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Facebook</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.socials.facebook : "@Mavee"}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>instagram</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.socials.instagram : "@Mhyatte"}</p>
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
                <div className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 md:w-[950px] pb-4 xl:w-[100%]`}>
                  <div className={`grid mb-4`}>
                    <div className={``}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Full Name</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.guarantor.firstName : "Wilburn"} {users ? users.guarantor.lastName: "Rice"}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Phone Number</h1>
                      <p className={`font-[500] text-[16px] leading-[19px] text-textColor`}>{users ? users.guarantor.phoneNumber : "+167-895-999"}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>House Address</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.guarantor.address : "Beverly Hills"}</p>
                    </div>
                  </div>
                  <div className={`grid`}>
                    <div className={`mb-4`}>
                      <h1 className={`text-[12px] leading-[14px] text-textColor uppercase mb-2`}>Gender</h1>
                      <p className={`w-[174px] font-[500] text-[16px] leading-[19px] text-textColor break-words`}>{users ? users.guarantor.gender : "Male"}</p>
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
