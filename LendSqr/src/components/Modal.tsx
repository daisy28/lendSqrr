import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Eye from "../assets/np_view_1214519_000000 1.svg";
import BlacklistUser from "../assets/np_delete-friend_3248001_000000 1.svg";
import ActivateUser from "../assets/np_user_2995993_000000 1.svg";
import UserPage from "./Userpage";

const Modal = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  return (
     <section className={`relative`}>
    <div
      className={`w-[180px] bg-white shadow-md border border-[rgba(84, 95, 125, 0.04)] rounded-[4px] absolute right-[-40px] top-[-40px] z-20 p-6 flex flex-col justify-between`}
    >
      <div className={`flex items-center mb-6 cursor-pointer`}>
        <img src={Eye} alt="" />
          <div className={`ml-3 text-textColor font-Work Sans font-[500] text-[14px] leading-[16px]`}
            onClick={() => setOpen(prevState => {
              !prevState
              navigate("user-page")
              return !prevState
          })}
        >View Details
        {open && <UserPage />}
        </div>
      </div>
      <div className={`flex items-center mb-6 cursor-pointer`}>
        <img src={BlacklistUser} alt="" />
        <div className={`ml-3 text-textColor font-Work Sans font-[500] text-[14px] leading-[16px]`}>Blacklist User</div>
      </div>
      <div className={`flex items-center cursor-pointer`}>
        <img src={ActivateUser} alt="" />
        <div className={`ml-3 text-textColor font-Work Sans font-[500] text-[14px] leading-[16px]`}>Activate User</div>
      </div>
    </div>
    </section>
  );
};

export default Modal;
