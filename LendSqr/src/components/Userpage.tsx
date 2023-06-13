import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsStarFill, BsStar } from "react-icons/bs";
import { User } from "../App";
import style from "./style.module.css";

const UserPage = () => {
  const navigate = useNavigate();
  const users: User = JSON.parse(localStorage.getItem("userInfo"))
  console.log(users);
  
  return (
    <section className={`${style._section_width} font-Work Sans mt-[100px] ml-auto bg-[#fbfbfb] relative p-6 md:p-[3rem]`}>
      <div>
        <div
          className={`flex items-center mb-8 cusrsor-pointer`}
          onClick={() => navigate("/dashboard")}
        >
          <BsArrowLeft className={`text-[16px] leading-[18.7px] text-textColor`} />
          <p className={`ml-3  text-[16px] leading-[18.7px] text-textColor`}>Back to Users</p>
        </div>
        <div className={`md:flex justify-between items-center mb-10`}>
          <h1 className={`text-[18px] md:text-[24px] leading-[28px] font-[500] text-primaryColor mb-4 md:mb-0`}>User Details</h1>
          <div className={`flex items-center`}>
            <button className={`border border-blacklist text-blacklist p-2 font-[600] uppercase text-[10px] md:text-[14px] leading-[16px] text-center tracking-[.1rem] rounded-[8px] md:px-4`}>Blacklist user</button>
            <button className={`border border-secondaryColor text-secondaryColor p-2 font-[600] uppercase text-[10px] md:text-[14px] leading-[16px] text-center tracking-[.1rem] rounded-[8px] ml-4 md:px-4`}>Activate user</button>
          </div>
        </div>
        <div className={`bg-white border border-[rgba(33, 63, 125, 0.06)] shadow-md rounded-[4px] p-4 py-8 md:py-0 md:pt-8 md:px-6`}>
          <div className={`md:grid gap-4 mb-8 grid-flow-col-dense`}>
            <div className={`flex items-center border-b border-textColor mb-6 pb-6 md:border-b-0 md:border-r md:mb-0 md:pb-0`}>
            <img src={users.profile.avatar} alt="" className={`w-[80px] h-[80px] rounded-full`} />
            <div className={`ml-4`}>
              <p className={`text-[16px] md:text-[22px] leading-[26px] font-[500] text-primaryColor mb-1`}>{users.profile.firstName} {users.profile.lastName}</p>
              <p className={`text-[14px] leading-[16px] text-textColor`}>{users.accountNumber}</p>
            </div>
          </div>
          <div className={`border-b border-textColor mb-4 pb-6 md:border-b-0 md:border-r md:mb-0 md:pb-0`}>
            <div className={``}>
              <p className={`text-[14px] leading-[16px] font-[500] text-textColor mb-2`}>User's Tier</p>
              <div className={`w-20 flex justify-between items-center`}>
                <BsStarFill className={`text-pending`} />
                <BsStar className={`text-pending`} />
                <BsStar className={`text-pending`} />
              </div>
            </div>
          </div>
          <div className={`mb-6`}>
            <div className={``}>
              <p className={`text-[22px] leading-[26px] font-[500] text-primaryColor mb-1`}>{users.profile.currency} {users.accountBalance}</p>
              <div className={`flex justify-between items-center`}>
                <p className={`text-[12px] leading-[14px] text-primaryColor`}>{users.profile.bvn}/Providus Bank</p>
              </div>
            </div>
          </div>
          </div>
          <div className={`grid grid-rows-5 w-[150px] md:w-[100%] md:grid-flow-col-dense md:grid-rows-none md:gap-4`}>
            <div className={`text-[16px] leading-[19px] text-secondaryColor border-b border-secondaryColor mb-2 pb-2 md:mb-0`}>General details</div>
            <div className={`text-[16px] leading-[19px] text-[rgba(0, 0, 0, 0.8)] mb-2 pb-2 md:mb-0`}>Documents</div>
            <div className={`text-[16px] leading-[19px] text-[rgba(0, 0, 0, 0.8)] mb-2 pb-2 md:mb-0`}>Bank details</div>
            <div className={`text-[16px] leading-[19px] text-[rgba(0, 0, 0, 0.8)] mb-2 pb-2 md:mb-0`}>Loans</div>
            <div className={`text-[16px] leading-[19px] text-[rgba(0, 0, 0, 0.8)] mb-2 pb-2 md:mb-0`}>Savings</div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default UserPage;
