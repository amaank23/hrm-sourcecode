import BG from "./../../assets/bg-1.png";
import ProfileImg from "./../../assets/profile-img.png";
import EditIcon from "./../../assets/edit-iconn.svg";
import BoxIcon from "./../../assets/box-icon.svg";
const Profile = () => {
  return (
    <div>
      <div
        className="w-full h-[240px] bg-[#49CEC1] rounded-b-[.9375rem] relative"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="p-4 flex justify-between items-center w-[95%] mx-auto rounded-[.9375rem] bg-[#ffffffd1] absolute left-[50%] bottom-[-30px] translate-x-[-50%]"
          style={{
            boxShadow:
              "0px 1.9999998807907104px 5.499999523162842px 0px #00000005",
          }}
        >
          <div className="flex gap-[1.1875rem] items-center">
            <div className="w-[76.8px] h-[80px]  relative">
              <div className="overflow-hidden rounded-[.75rem]">
                <img src={ProfileImg} alt="" />
              </div>
              <div
                className="absolute bg-white bottom-[-6px] right-[-3px] w-[24.96px] h-[26px] rounded-[.5rem] flex justify-center items-center"
                style={{
                  boxShadow:
                    "0px 1.9999998807907104px 5.499999523162842px 0px #0000000F",
                }}
              >
                <img src={EditIcon} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#2D3748] text-lg">M Rameez</h2>
              <h4 className="text-[#718096] text-sm">Senior</h4>
            </div>
          </div>
          <div>
            <button className="w-[129px] h-[35px] bg-white flex gap-3 items-center text-[.9375rem] justify-center rounded-[.75rem]">
              <span>
                <img src={BoxIcon} alt="" />
              </span>
              <span className="font-kanit">Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
