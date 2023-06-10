import { useState, useContext } from "react";
import { UserContext } from "../App";
import { User } from "../App";
import style from "./style.module.css";

const UserPage = ({ ...props }) => {
  // const { userInfo } = props;
  // console.log(userInfo);
  // const users = useContext(UserContext);
  // const [user, setUser] = useState(users)
  // user.setUsers(userInfo)
  // console.log(user)
  
  return (
    <section className={`${style._section_width} mt-[100px] ml-auto bg-[#fbfbfb] relative p-6 md:p-[3rem]`}>
      Display complete user details here
    </section>
  )
}

export default UserPage;
