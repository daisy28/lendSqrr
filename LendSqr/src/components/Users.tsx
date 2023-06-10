import { useState, useContext } from "react";
import { UserContext } from "../App";
import { User } from "../App";
import style from "./style.module.css";
import UserInfo from "../lib/userInfo";
import Icon from "../assets/Vector (3).svg";
import Menu from "../assets/Vector (4).svg";
import Paginate from "./Paginate";
import Modal from "./Modal";
import UserForm from "./UserForm";

const Users = () => {
  const users = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(10);
  const [openModal, setOpenModal] = useState("0");
  const [openForm, setOpenForm] = useState(false);
  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;
  const currentPageInfo = users.users.slice(indexOfFirstInfo, indexOfLastInfo);
  const numberOfPages = Math.ceil(users.users.length / infoPerPage);
 
  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      className={`${style._section_width} mt-[100px] ml-auto bg-[#fbfbfb] relative p-6 md:p-[3rem]`}
    >
      <div>
        <div className={``}>
          <p
            className={`text-primaryColor font-Work Sans font-[500] text-[24px] leading-[28px] mb-10`}
          >
            Users
          </p>
        </div>
        <div
          className={`grid md:grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-4 mb-8`}
        >
          {UserInfo.map((info) => {
            return (
              <div
                className={`bg-[#fff] rounded-[4px] shadow-md border-[1px] border-[rgba(125, 125, 125, 0.06)] p-4  w-full hover:bg-[#f3efef] cursor-pointer`}
                key={info.title}
              >
                <img src={info.img} alt="" className={`mb-4`} />
                <p
                  className={`uppercase text-textColor font-Work Sans font-[500] text-[14px] leading-[16px] mb-4`}
                >
                  {info.title}
                </p>
                <p
                  className={`uppercase text-primaryColor font-Work Sans font-[600] text-284px] leading-[16px]`}
                >
                  {info.count}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`${style._content} relative bg-[#fff] rounded-[4px] shadow-md border-[1px] border-[rgba(125, 125, 125, 0.06)]`}
        >
          <div className={`w-[1100px] p-6`}>
            <div className={`grid grid-cols-6 gap-8 mb-6`}>
              <div className={`flex items-center relative`}>
                <p
                  className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor cursor-pointer`}
                  onClick={() => setOpenForm(prevState => !prevState)}
                >
                  Organization
                </p>
                <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
                {openForm && <UserForm />}
              </div>
              <div className={`flex items-center relative`}>
                <p
                  className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}
                >
                  Username
                </p>
                <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
              </div>
              <div className={`flex items-center relative`}>
                <p
                  className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}
                >
                  Email
                </p>
                <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
              </div>
              <div className={`flex items-center relative`}>
                <p
                  className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}
                >
                  Phone Number
                </p>
                <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
              </div>
              <div className={`flex items-center relative`}>
                <p
                  className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}
                >
                  Date Joined
                </p>
                <img src={Icon} alt="" className={`ml-2 cursor-pointer`} />
              </div>
              <div className={`flex items-center relative`}>
                <p
                  className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}
                >
                  Status
                </p>
                <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
              </div>
            </div>
            {currentPageInfo.map((user: User) => {
              return (
                <div className={`relative`} key={user.id}>
                  <div
                    className={`py-6  grid grid-cols-6 gap-8 h-[76.84px] border-b border-[rgba(33, 63, 125, 0.1)]`}
                    key={user.id}
                  >
                    <p
                      className={`font-Work Sans font-[400] text-[12px] leading-[14px] text-textColor`}
                    >
                      {user.orgName}
                    </p>
                    <p
                      className={`font-Work Sans font-[400] text-[12px] leading-[14px] text-textColor`}
                    >
                      {user.userName}
                    </p>
                    <p
                      className={`font-Work Sans font-[400] text-[12px] leading-[14px] text-textColor break-words`}
                    >
                      {user.email}
                    </p>
                    <p
                      className={`font-Work Sans font-[400] text-[12px] leading-[14px] text-textColor`}
                    >
                      {user.phoneNumber}
                    </p>
                    <p
                      className={`font-Work Sans font-[400] text-[12px] leading-[14px] text-textColor`}
                    >
                      {new Date(user.createdAt).toDateString()} 10:00 AM
                    </p>
                    <p
                    className={`font-Work Sans font-[400] text-[14px] leading-[16px] 
                    ${new Date(user.createdAt).getFullYear() > 2089 && `bg-[rgba(233,179,0,0.1)] text-[#E9B200] text-center rounded-[100px] flex items-center justify-center w-[60%]`}
                    ${new Date(user.createdAt).getFullYear() <= 2089 && `bg-[rgba(57,205,99,0.06)] text-[#39CD62] text-center rounded-[100px] flex items-center justify-center w-[50%]`} 
                    ${new Date(user.createdAt).getFullYear() < 2030 && `bg-[rgba(84,95,125,0.06)] text-[#545F7D] text-center rounded-[100px] flex items-center justify-center w-[55%]`} 
                    ${new Date(user.createdAt).getFullYear() < 2010 && `bg-[rgba(228,3,59,0.14)] text-[rgb(228,3,59)] text-center rounded-[100px] flex items-center justify-center w-[95px]`} 
                      `}
                    >
                      {new Date(user.createdAt).getFullYear() < 2010 ? `Blacklisted` : `` 
                      || new Date(user.createdAt).getFullYear() < 2030 ? `Inactive` : ``
                      || new Date(user.createdAt).getFullYear() <= 2089 ? `Active` : ``  
                      || new Date(user.createdAt).getFullYear() > 2089 ? `Pending` : `` }
                    </p>
                    <div
                      className={`cursor-pointer mt-3 absolute right-0 top-[15px]`}
                      onClick={(e) => {
                        const target = e.target as Element
                        user.id === target.id ? setOpenModal(user.id) : null
                      }}>
                      <img src={Menu} alt="" id={user.id} />
                      { openModal === user.id && <Modal /> }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Paginate
            numberOfPages={numberOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPageInfo={currentPageInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default Users;
