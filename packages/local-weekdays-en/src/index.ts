enum WeekdaysShort {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

enum WeekdaysMin {
  Su,
  Mo,
  Tu,
  We,
  Th,
  Fr,
  Sa,
}

enum Weekdays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export default {
  default: Weekdays,
  min: WeekdaysMin,
  short: WeekdaysShort,
};
