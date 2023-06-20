import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Group.svg";
import HeroImg from "../assets/pablo-sign-in 1.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    return navigate("/dashboard");
  }

  return (
    <section className={`p-8 lg:p-[5rem]`}>
      <div className={`mb-[5rem] md:mb-[5rem]`}>
        <img src={Logo} alt="Lendsqr logo" />
      </div>
      <div className={`md:grid grid-cols-2 gap-8 md:gap-14`}>
        <div className={`mb-[5rem] md:mb-0`}>
          <img src={HeroImg} alt="sign in image" className={`w-full h-full`} />
        </div>
        <div>
          <div className={`mb-6`}>
            <h2
              className={`font-face-an text-primaryColor font-[700] text-[40px] leading-[55px] mb-4 tracking-[0.04rem]`}
            >
              Welcome!
            </h2>
            <p
              className={`font-face-an text-textColor font-[400] text-[20px] leading-[27px] mb-14 `}
            >
              Enter details to login.
            </p>
          </div>
          <form action="">
            <div>
              <input
                className={`rounded-[5px] bg-transparent border border-[rgba(84,95,125,0.15)] text-textColor text-[14px] leading-[19px] px-3 h-[50px] mb-6 w-full outline-none font-face-an`}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required={true}
              />
            </div>

            <div className={`relative mb-4`}>
              <input
                className={`rounded-[5px] bg-transparent border border-[rgba(84,95,125,0.15)] text-textColor text-[14px] leading-[19px] px-3 h-[50px] w-full outline-none font-face-an`}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required={true}
              />
              <p
                className={`absolute text-[12px] font-[600] leading-[16px] text-secondaryColor uppercase right-[10px] top-[18px] font-face-an tracking-[.1rem] cursor-pointer`}
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? "hide" : "show"}
              </p>
            </div>
            <a
              href="forgotpassword"
              className={`text-[12px] font-[600] leading-[16px] text-secondaryColor uppercase font-face-an tracking-[.1rem]`}
            >
              forgot password?
            </a>
            <button
              className={`bg-secondaryColor uppercase text-white text-[14px] font-[600] leading-[19px] text-center font-face-an rounded-[8px] w-full mt-4 tracking-[.1rem] h-[48px]`}
              onClick={login}
            >
              log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
