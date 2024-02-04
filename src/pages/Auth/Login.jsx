import LoginForm from "../../components/Auth/LoginForm";
import Ilustration from "./../../assets/illustration.png";
import Logo from './../../assets/logo.png'
import Logo2 from './../../assets/logo-2.png'
const Login = () => {
  return (
    <div className="max-w-[1188px] mx-auto my-[3.625rem]">
      <div className="flex gap-[10.4375rem] items-center flex-col lg:flex-row">
        <div className="flex-1">
          <img src={Ilustration} className="mx-auto" />
          <h2 className="text-primary font-semibold mt-[2.625rem] text-center text-[1.51875rem]">
            <span className="text-[#3F4254] font-kanit">The Ultimate</span> HR
            Management Solution
          </h2>
          <p className="text-center leading-[1.65625rem] text-[#7E8299] text-xs mt-4">
            At SourceCode, we have a reliable, secure and adaptable HR
            management built from the ground up.We are determined to help our
            employees to give their best efforts every day to achieve the goals
            of their job.
          </p>
        </div>
        <div className=" relative flex-1 py-[3.125rem] px-[4rem] bg-white rounded-[3.75rem] shadow-2xl">
            <div className="absolute left-0 top-0 bg-[red] w-[101.5%] h-[101.5%] -z-10 translate-x-[-0.7%] translate-y-[-0.7%] [background:linear-gradient(135.59deg,#29A095_1.28%,rgba(88,130,193,0.11)_96.26%),linear-gradient(0deg,#FFFFFF,#FFFFFF)] rounded-[3.75rem]" />
            <img src={Logo} alt="" className="mx-auto" />
            <h3 className="font-inter text-[#271F1F] mt-[2.625rem] mb-[2.5rem] text-sm text-center font-medium">Log in to start your session</h3>
            <LoginForm />
            <img src={Logo2} alt="" className="mx-auto mt-[2.3125rem] mb-[2.5rem]" />
            <p className="text-center text-[#181C32] text-[0.8125rem]">© 2024 MegaHCM. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
