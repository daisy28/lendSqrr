import Calendar from "../assets/np_calendar_2080577_000000 1.svg"

const Form = () => {
     return(
          <section className={`absolute top-[28px] z-[30]`}>
               <div className={`shadow-md w-[270px] bg-white rounded-[4px] border border-[rgba(84, 95, 125, 0.14)] p-4 py-6`}>
                    <form action="">
                         <div className={`relative mb-4`}>
                              <label htmlFor="organization" className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}>Organization</label>
                              <div className={`relative`}>
                                   <select
                                        name="organization"
                                        id="organization"
                                        placeholder=""
                                        className={`absolute right-[.8rem] top-[10px] outline-none text-[#213f7d] cursor-pointer z-[20]`}
                                   >
                                   </select>
                                   <input 
                                   className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`} 
                                   type="" 
                                   name="" 
                                   id="" 
                                   placeholder="select" />
                              </div>
                         </div>
                         <div className={`relative mb-4`}>
                              <label htmlFor="username" className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}>Username</label>
                              <div className={`relative`}>
                                   <input 
                                   className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`} 
                                   type="text" 
                                   name="" 
                                   id="username" 
                                   placeholder="User" />
                              </div>
                         </div>
                         <div className={`relative mb-4`}>
                              <label htmlFor="Email" className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}>Email</label>
                              <div className={`relative`}>
                                   <input 
                                   className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`} 
                                   type="text" 
                                   name="" 
                                   id="Email" 
                                   placeholder="Email" />
                              </div>
                         </div>
                         <div className={`relative mb-4`}>
                              <label htmlFor="Date" className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}>Date</label>
                              <div className={`relative`}>
                                   <input 
                                   className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`} 
                                   type="datetime" 
                                   name="" 
                                   id="Date" 
                                   placeholder="Date" />
                                   <img src={Calendar} alt="" className={`absolute right-[.8rem] top-[12px]`} />
                              </div>
                         </div>
                         <div className={`relative mb-4`}>
                              <label htmlFor="Phone Number" className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}>Phone Number</label>
                              <div className={`relative`}>
                                   <input 
                                   className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`} 
                                   type="text" 
                                   name="" 
                                   id="Phone Number" 
                                   placeholder="Phone Number" />
                              </div>
                         </div>
                         <div className={`relative mb-6`}>
                              <label htmlFor="status" className={`font-Work Sans text-[14px] font-[500] leading-[16px] text-textColor`}>Status</label>
                              <div className={`relative`}>
                                   <select
                                        name="status"
                                        id="status"
                                        placeholder=""
                                        className={`absolute right-[.8rem] top-[10px] outline-none text-[#213f7d] cursor-pointer z-[20]`}
                                   >
                                   </select>
                                   <input 
                                   className={`bg-transparent border border-[#213f7d] rounded-[8px] font-Work Sans text-[14px] leading-[16px] text-textColor opacity-[0.7] p-2 px-3 w-full outline-none mt-1`} 
                                   type="" 
                                   name="" 
                                   id="" 
                                   placeholder="select" />
                              </div>
                         </div>
                         <div className={`mb-4 flex`}>
                              <button className={`w-[98px] text-center border border-[#545f7d] rounded-[8px] font-Work Sans font-[600] text-[14px] leading-[16px] text-textColor py-2`}>Reset</button>
                              <button className={`w-[98px] text-center bg-secondaryColor rounded-[8px] font-Work Sans font-[600] text-[14px] leading-[16px] text-white py-2 ml-3`}>Filter</button>
                         </div>

                         
                    </form>
               </div>
          </section>
     )
}

export default Form;