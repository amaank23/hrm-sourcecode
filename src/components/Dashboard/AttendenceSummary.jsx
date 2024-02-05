import AttendenceSummaryBox from "./AttendenceSummaryBox";

const AttendenceSummary = () => {
  const summarys = [
    {
      title: "Total Present",
      count: 24,
      subtitle: "31 Days",
      performance: 74,
      bgColor: "#29AB91",
    },
    {
      title: "On Leaves",
      count: "03",
      subtitle: "Casual",
      performance: 4,
      bgColor: "#FFA600",
    },
    {
      title: "On Absent",
      count: "02",
      subtitle: "Leave Disprove",
      performance: 2,
      bgColor: "#FF5630",
    },
    {
      title: "OFF Days",
      count: "08",
      subtitle: "Weeks",
      performance: 8,
      bgColor: "#377DFF",
    },
  ];
  return (
    <div className="mt-[78px]">
      <h2 className="text-[#21252B] text-lg font-bold mb-[1.125rem]">
        My Attendance Summary{" "}
        <span className="font-kanit font-normal">(January-2024)</span>
      </h2>
      <div className="grid grid-cols-4 gap-[1.0313rem]">
        {summarys.map((item, i) => {
          return (
            <AttendenceSummaryBox
              key={i}
              title={item.title}
              count={item.count}
              subtitle={item.subtitle}
              performence={item.performance}
              bgColor={item.bgColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AttendenceSummary;
