import Eye from "../assets/np_view_1214519_000000 1.svg";
import BlacklistUser from "../assets/np_delete-friend_3248001_000000 1.svg";
import ActivateUser from "../assets/np_user_2995993_000000 1.svg";

const Modal = () => {
  return (
     <section className={`relative`}>
    <div
      className={`w-[180px] bg-white shadow-md border border-[rgba(84, 95, 125, 0.04)] rounded-[4px] absolute right-[60px] top-[-30px] z-20 p-6 flex flex-col justify-between`}
    >
      <div className={`flex items-center mb-6 cursor-pointer`}>
        <img src={Eye} alt="" />
        <p className={`ml-3 text-textColor font-Work Sans font-[500] text-[14px] leading-[16px]`}>View Details</p>
      </div>
      <div className={`flex items-center mb-6 cursor-pointer`}>
        <img src={BlacklistUser} alt="" />
        <p className={`ml-3 text-textColor font-Work Sans font-[500] text-[14px] leading-[16px]`}>Blacklist User</p>
      </div>
      <div className={`flex items-center cursor-pointer`}>
        <img src={ActivateUser} alt="" />
        <p className={`ml-3 text-textColor font-Work Sans font-[500] text-[14px] leading-[16px]`}>Activate User</p>
      </div>
    </div>
    </section>
  );
};

export default Modal;
