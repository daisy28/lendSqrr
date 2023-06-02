import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import Calendar from "../assets/np_calendar_2080577_000000 1.svg";

const Form = ({ ...props }) => {
  const { filterUsers, setOrganization, setUsername, setEmail, setDate, setPhone, setStatus } = props;
  const [users, setUsers] = useState([]);

  interface User {
    id: string;
    orgName: string;
  }

   const getUsers = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
  useEffect(() => {
    axios
      .get(getUsers)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, [getUsers]);

  const formRef = useRef();

  return (
    <section className={`absolute top-[28px] z-[30]`}>
      <div
        className={`shadow-md w-[270px] bg-white rounded-[4px] border border-[rgba(84, 95, 125, 0.14)] p-4 py-6`}
      >
        <form action="" onSubmit={filterUsers} ref={formRef}>
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
                className={`absolute right-[.8rem] top-[10px] outline-none text-[#213f7d] cursor-pointer z-[20] w-[160px]`}
                onChange={(e) => setOrganization(e.target.value)}
              >
                  <option value="" disabled>--Choose--</option>
                  {users.map((user: User) => {
                    return <option value={user.orgName} key={user.id} className={``}>{user.orgName}</option>
                  })}
              </select>
              <input
                className={`relative bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`}
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
                placeholder="Datey"
                onChange={(e) => setDate(new Date(e.target.value).toDateString())}
              />
              {/* <img
                src={Calendar}
                alt=""
                className={`absolute top-[.85rem] right-[14px]`}
              /> */}
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
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>--Choose--</option>
                <option value="Active" className={`text-[#39CD62]`}>Active</option>
                <option value="Blacklisted" className={`text-[rgb(228,3,59)]`}>Blacklisted</option>
                <option value="Pending" className={`text-[#E9B200]`}>Pending</option>
                <option value="Inactive" className={`text-[#545F7D]`}>Inactive</option>
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
              onClick={}
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
