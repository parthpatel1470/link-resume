const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const numericalMonthToCharConverter = (numericalMonth) => {
  if (
    typeof numericalMonth === "number" &&
    numericalMonth >= 1 &&
    numericalMonth <= 12
  ) {
    return monthList[numericalMonth - 1];
  }
};
