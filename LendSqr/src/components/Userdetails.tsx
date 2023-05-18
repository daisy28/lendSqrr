import style from "./style.module.css";
import UserInfo from "../lib/userInfo";
import tableHeading from "../lib/tableHeading";
const UserDetails = ({...props}) => {
  const { toggle } = props;
     

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

               <div className={`${style._content} bg-[#fff] rounded-[4px] shadow-md border-[1px] border-[rgba(125, 125, 125, 0.06)] p-4`}>
                         <div className={`w-[1000px]`}>
                              <div className={`flex justify-between relative`}>
                                   {tableHeading.map(heading => {
                                        return <div className={``}>
                                             <div className={`flex items-center`} key={heading.header}>
                                                  <p className={`font-Work Sans font-[600] text-[12px] leading-[14px] uppercase text-textColor`}>{heading.header}</p>
                                                  <img src={heading.icon} alt="" className={`ml-2`} />
                                             </div>
                                             <div className={`py-6 `}>
                                                  <p>{heading.details}</p>
                                             </div>
                                             <div className={`  bg-[#766f6f]`}></div>
                                        </div>
                                   })}
                              </div>
                              
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
