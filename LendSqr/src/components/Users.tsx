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
  const usersInfo = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(10);
  const [openModal, setOpenModal] = useState("0");
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState("0");
  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;
  const currentPageInfo = usersInfo.users.slice(indexOfFirstInfo, indexOfLastInfo);
  const numberOfPages = Math.ceil(usersInfo.users.length / infoPerPage);
 
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
  type Header = { name: string, id: string };
  const headers = [
    { name: "Organization", id: "0" },
    { name: "Username", id: "1" },
    { name: "Email", id: "2" },
    { name: "Phone Number", id: "3" },
    { name: "Date Joined", id: "4" },
    { name: "Status", id: "5" }
  ];

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
          className={`grid md:grid-cols-2 gap-4 lg:grid-cols-4 mb-8`}
        >
          {UserInfo.map((info) => {
            return (
              <div
                className={`bg-[#fff] rounded-[4px] shadow-md border-[1px] border-[rgba(125, 125, 125, 0.06)] p-4  w-full hover:bg-[#f9f6f6] cursor-pointer`}
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
              {
                headers.map((header: Header) => {
                  return <div className={`flex items-center relative`} key={header.id}>
                <p
                  className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor cursor-pointer`}
                >
                 {header.name}
                </p>
                    <img src={Icon} alt=""
                      className={`ml-3 cursor-pointer`}
                      id={header.id}
                      onClick={(e) => {
                        const target = e.target as Element
                        if (header.id === target.id) {
                          setForm(header.id)
                          setOpenForm(prevState => !prevState)}}}
                    />
                      {form === header.id && openForm ? <UserForm /> : null}
              </div>
                })}
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
                      {user.profile.phoneNumber}
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
                    ${new Date(user.createdAt).getFullYear() < 2010 && `${style._blacklisted} text-[rgb(228,3,59)] text-center rounded-[100px] flex items-center justify-center w-[95px]`} 
                      `}
                    >
                      {new Date(user.createdAt).getFullYear() < 2010 && `Blacklisted` 
                      || new Date(user.createdAt).getFullYear() < 2030 && `Inactive`
                      || new Date(user.createdAt).getFullYear() <= 2089 && `Active`
                      || new Date(user.createdAt).getFullYear() > 2089 && `Pending`}
                    </p>
                    <div
                      className={`cursor-pointer mt-3 absolute right-0 top-[15px]`}
                      onClick={(e) => {
                        const target = e.target as Element
                        if (user.id === target.id) {
                          setOpenModal(user.id);
                          localStorage.setItem("userInfo", JSON.stringify(user))}}}>
                      <img src={Menu} alt={user.id} id={user.id} />
                      {openModal === user.id && <Modal />}
                    </div>
                  </div>
                </div>
              );})}
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
