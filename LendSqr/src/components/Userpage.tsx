// import { useState, useContext } from "react";
import style from "./style.module.css";

const UserPage = ({ ...props }) => {
  const { fullUserInfo } = props;
  console.log(fullUserInfo);
  return (
    <section className={`${style._section_width} mt-[100px] ml-auto bg-[#fbfbfb] relative p-6 md:p-[3rem]`}>
      Display complete user details here
    </section>
  )
}

export default UserPage;
