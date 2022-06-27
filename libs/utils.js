import moment from "moment";

export function getCurrentTime(timeString) {
  const m = moment(timeString);
  return (
    padWithLeadingZeros(m.hour().toString(), 2) +
    padWithLeadingZeros(m.minute().toString(), 2) +
    padWithLeadingZeros(m.second().toString(), 2)
  );
}

export function padWithLeadingZeros(str, finalLength) {
  if (str.length >= finalLength) return str;

  const numZeros = finalLength - str.length;
  return "0" * numZeros + str;
}
