import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { User } from "../App";
import style from "./style.module.css";

const UserPage = () => {
  const navigate = useNavigate();
  const users: User = JSON.parse(localStorage.getItem("userInfo"))
  console.log(users);
  
  return (
    <section className={`${style._section_width} mt-[100px] ml-auto bg-[#fbfbfb] relative p-6 md:p-[3rem]`}>
      <div>
        <div className={`flex items-center mb-8`} onClick={() => navigate("/dashboard") }>
          <BsArrowLeft className={`text-[16px] leading-[18.7px] text-textColor`} />
          <p className={`ml-3 font-Work Sans text-[16px] leading-[18.7px] text-textColor`}>Back to Users</p>
        </div>
        <div>
          <h1 className={`font-Work Sans text-[24px] leading-[28px] font-[500] text-primaryColor`}>User Details</h1>
          <div className={`flex w-96 justify-between items-center`}>
            <button className={`border border-blacklist text-blacklist font-Work Sans p-3 font-[600] uppercase text-[14px] leading-[16px] text-center tracking-[.1rem] rounded-[8px]`}>Blacklist user</button>
            <button>Activate user</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserPage;
