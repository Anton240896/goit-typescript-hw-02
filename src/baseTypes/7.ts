/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Seturday = "Seturday",
  Sunday = "Sunday",
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Monday || day === DayOfWeek.Sunday;
}
