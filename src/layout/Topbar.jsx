import SearchIcon from "./../assets/search-icon.svg";
import MessageIcon from "./../assets/message-icon.svg";
import BellIcon from "./../assets/bell-icon.svg";
import ProfileImg from "./../assets/32px.png";
import CarrotDown from "./../assets/carrot-down.svg";
import { Dropdown } from 'antd';
import { useDispatch } from 'react-redux'
import { authFailure } from "../redux/slices/Auth/authSlice";


const Topbar = () => {
  const dispatch = useDispatch()

  const items = [
    {
      key: '1',
      label: (
        <button onClick={() => {
          dispatch(authFailure())
        }}>
          Logout
        </button>
      ),
    }
  ];
  return (
    <div className="bg-white px-[1.5625rem] py-[.875rem]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 bg-[#EBEBEB] rounded-[.5rem] py-2 px-[1.125rem]">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm focus-visible:outline-none"
          />
        </div>
        <div className="flex gap-[1.875rem] items-center">
          <span>
            <img src={MessageIcon} alt="" />
          </span>
          <span>
            <img src={BellIcon} alt="" />
          </span>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
            className="cursor-pointer"
          >
            <span className="flex gap-[.6875rem]">
            <img src={ProfileImg} alt="" /> <img src={CarrotDown} alt="" />
          </span>
          </Dropdown>
          
        </div>
      </div>
    </div>
  );
};

export default Topbar;
