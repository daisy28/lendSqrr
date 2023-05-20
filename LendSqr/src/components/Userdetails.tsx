import { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import UserInfo from "../lib/userInfo";
import Icon from "../assets/Vector (3).svg";
import Menu from "../assets/Vector (4).svg";

const UserDetails = ({...props}) => {
     const { toggle } = props;
     const [users, setUsers] = useState<[]>([]);
     const getUsers = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
     const getUserDetailsById = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id`;
     
     useEffect(() => {
          axios.get(getUsers)
               .then((data) => {
                    console.log(data.data)
                     setUsers(data.data)
               })
               .catch(err => console.log(err))
     }, [getUsers]);

     useEffect(() => {
          axios.get(getUserDetailsById)
               .then((data) => {
                    console.log(data.data)
                    setUsers(data.data)
               })
               .catch(err => console.log(err))
     }, [getUserDetailsById])

     
     interface User {
          userName: string;
          email: string;
          profile: object;
          phoneNumber: string;
          createdAt: string;
          id: number;
          orgName: string;
          lastActiveDate: string
     }
     

     return (
          <section className={`${toggle ? `${style._section_width_resize}` : `${style._section_width}`} mt-[100px] ml-auto bg-[#fbfbfb] relative  p-6 md:p-[3rem]`}>
               <div>
                    <div className={``}>
                         <p className={`text-primaryColor font-Work Sans font-[500] text-[24px] leading-[28px] mb-10`}>Users</p>
                    </div>
               <div className={`grid md:grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-4 mb-8`}>
                    {UserInfo.map(info => {
                         return (<div className={`bg-[#fff] rounded-[4px] shadow-md border-[1px] border-[rgba(125, 125, 125, 0.06)] p-4  w-full hover:bg-[#f3efef] cursor-pointer`} key={info.title}>
                    <img src={info.img} alt="" className={`mb-4`} />
                              <p className={`uppercase text-textColor font-Work Sans font-[500] text-[14px] leading-[16px] mb-4`}>{info.title}</p>
                              <p className={`uppercase text-primaryColor font-Work Sans font-[600] text-284px] leading-[16px]`}>{info.count}</p>
               </div>)})}
               </div>

               <div className={`${style._content} bg-[#fff] rounded-[4px] shadow-md border-[1px] border-[rgba(125, 125, 125, 0.06)] p-6`}>
                         <div className={`w-[1100px]`}>
                              <div className={`grid grid-cols-7 gap-8 mb-6`}>
                                        <div className={`flex items-center relative`}>
                                             <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}>Organization</p>
                                             <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
                                        </div>
                                        <div className={`flex items-center relative`}>
                                             <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}>Username</p>
                                             <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
                                        </div>
                                        <div className={`flex items-center relative`}>
                                             <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}>Email</p>
                                             <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
                                        </div>
                                        <div className={`flex items-center relative`}>
                                             <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}>Phone Number</p>
                                             <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
                                        </div>
                                        <div className={`flex items-center relative`}>
                                             <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}>Date Joined</p>
                                             <img src={Icon} alt="" className={`ml-2 cursor-pointer`} />
                                        </div>
                                        <div className={`flex items-center relative`}>
                                             <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}>Status</p>
                                             <img src={Icon} alt="" className={`ml-3 cursor-pointer`} />
                                        </div>
                                   </div>
                                   {users.map((user:User) => {
                                        return <div className={``} key={user.id}>
                                             <div className={`py-6 border-b border-[rgba(33, 63, 125, 0.1)] grid grid-cols-7 gap-8`} key={user.id}>
                                                  <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] text-textColor`}>{user.orgName}</p>
                                                  <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] text-textColor`}>{user.userName}</p>
                                                  <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] text-textColor break-words`}>{user.email}</p>
                                                  <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] text-textColor`}>{user.profile.phoneNumber}</p>
                                                  <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] text-textColor`}>{user.createdAt}</p>
                                                  <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] text-textColor`}>{user.lastActiveDate}</p>
                                                  <div className={`cursor-pointer`}>
                                                       <img src={Menu} alt="" />
                                                  </div>
                                             </div>
                                        </div>
                                        
                                   })}
                    </div>
                    </div>
                    <div>
                         lorem
                    </div>
               </div>
               
               
          </section>
     )
}

export default UserDetails;
