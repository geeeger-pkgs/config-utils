enum WeekdaysShort {
  周日,
  周一,
  周二,
  周三,
  周四,
  周五,
  周六,
}

enum WeekdaysMin {
  日,
  一,
  二,
  三,
  四,
  五,
  六,
}

enum Weekdays {
  星期日,
  星期一,
  星期二,
  星期三,
  星期四,
  星期五,
  星期六,
}

export default {
  default: Weekdays,
  min: WeekdaysMin,
  short: WeekdaysShort,
};
