/**
 * Generate v4 UUID
 * @param radix  The number base scale. Most UUIDs use base 16
 * @returns a string
 */
function generateUUID(radix: number = 16) {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const rnd = (Math.random() * radix) | 0,
      v = c === "x" ? rnd : (rnd & 0x3) | 0x8;
    return v.toString(radix);
  });
}

export { generateUUID };

export const capitalizeFirstWord = (sentence?: string) => {
  if (!sentence) return;
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};

function getDaySuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function getDateAndTimeFromISOString(isoString: string | number | Date) {
  const dateObj = new Date(isoString);

  if (isNaN(dateObj.getDate())) {
    return "N/A";
  }

  const day = dateObj.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = String(minutes).padStart(2, "0");

  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${month}, ${year} at ${formattedHours}:${formattedMinutes} ${ampm}`;
}
