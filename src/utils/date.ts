export function dateWithoutTime(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function dateIsToday(d: Date) {
  return dateWithoutTime(d).getTime() === dateWithoutTime(new Date()).getTime();
}

export function dateIsEq(d1: Date, d2: Date) {
  return dateWithoutTime(d1).getTime() === dateWithoutTime(d2).getTime();
}

export function dateIsMore(d1: Date, d2: Date) {
  return dateWithoutTime(d1).getTime() < dateWithoutTime(d2).getTime();
}

export function dateIsLess(d1: Date, d2: Date) {
  return dateWithoutTime(d1).getTime() > dateWithoutTime(d2).getTime();
}

export function dateIsMoreOrEq(d1: Date, d2: Date) {
  return dateWithoutTime(d1).getTime() <= dateWithoutTime(d2).getTime();
}

export function dateIsLessOrEq(d1: Date, d2: Date) {
  return dateWithoutTime(d1).getTime() >= dateWithoutTime(d2).getTime();
}

export function dateStartDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
}

export function dateEndDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
}

export function dateDifferenceInDays(d1: Date, d2: Date) {
  return Math.round((dateWithoutTime(d2).getTime() - dateWithoutTime(d1).getTime()) / (1000 * 3600 * 24));
}
