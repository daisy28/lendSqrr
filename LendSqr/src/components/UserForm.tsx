// import { useRef } from "react";
import { useState } from "react";
import Calendar from "../assets/np_calendar_2080577_000000 1.svg";

const Form = ({ ...props }) => {
  const { users } = props;
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");


  const filterUsers = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(users);
    console.log(username, email, date, phone);
  };

  const nums = [3, 6, 60, 68, 79, 100, 120, 403, 0, 3]
  console.log(nums.filter(num => !(num > 60)))

  return (
    <section className={`absolute top-[28px] z-[30]`}>
      <div
        className={`shadow-md w-[270px] bg-white rounded-[4px] border border-[rgba(84, 95, 125, 0.14)] p-4 py-6`}
      >
        <form action="" onSubmit={filterUsers}>
          <div className={`relative mb-4`}>
            <label
              htmlFor="organization"
              className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}
            >
              Organization
            </label>
            <div className={`relative`}>
              <select
                name="organization"
                id="organization"
                placeholder=""
                className={`absolute right-[.8rem] top-[10px] outline-none text-[#213f7d] cursor-pointer z-[20]`}
              >
                <option value="">--Choose--</option>
                <option value="">lendsqr</option>
                <option value="">lenders</option>
                <option value="">access</option>
              </select>
              <input
                className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`}
                type=""
                name=""
                id=""
                disabled={true}
                placeholder="select"
              />
            </div>
          </div>
          <div className={`relative mb-4`}>
            <label
              htmlFor="username"
              className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}
            >
              Username
            </label>
            <div className={`relative`}>
              <input
                className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`}
                type="text"
                name=""
                id="username"
                placeholder="User"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className={`relative mb-4`}>
            <label
              htmlFor="Email"
              className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}
            >
              Email
            </label>
            <div className={`relative`}>
              <input
                className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`}
                type="text"
                name=""
                id="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={`relative mb-4`}>
            <label
              htmlFor="Date"
              className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}
            >
              Date
            </label>
            <div className={`relative`}>
              <input
                className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`}
                type="date"
                name=""
                id="Date"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
              />
              <img
                src={Calendar}
                alt=""
                className={`absolute top-[.85rem] right-[14px]`}
              />
            </div>
          </div>
          <div className={`relative mb-4`}>
            <label
              htmlFor="Phone Number"
              className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}
            >
              Phone Number
            </label>
            <div className={`relative`}>
              <input
                className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`}
                type="text"
                name=""
                id="Phone Number"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className={`relative mb-6`}>
            <label
              htmlFor="status"
              className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}
            >
              Status
            </label>
            <div className={`relative`}>
              <select
                name="status"
                id="status"
                placeholder=""
                className={`absolute right-[.8rem] top-[10px] outline-none text-[#213f7d] cursor-pointer z-[20]`}
              >
                <option value="">--Choose--</option>
                <option value="Active">Active</option>
                <option value="Blacklist">Blacklist</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
              <input
                className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`}
                type=""
                name=""
                id=""
                placeholder="select"
              />
            </div>
          </div>
          <div className={`mb-4 flex`}>
            <button
              className={`w-[98px] text-center border border-[#545f7d] rounded-[8px] font-Work Sans font-[600] text-[14px] leading-[16px] text-textColor py-2`}
            >
              Reset
            </button>
            <button
              className={`w-[98px] text-center bg-secondaryColor rounded-[8px] font-Work Sans font-[600] text-[14px] leading-[16px] text-white py-2 ml-3`}
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
