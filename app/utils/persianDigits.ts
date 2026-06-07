const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const arabicDigits = "٠١٢٣٤٥٦٧٨٩";

export function toPersianDigits(value: string | number | null | undefined) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/\d/g, (digit) => persianDigits[Number(digit)])
    .replace(/[٠-٩]/g, (digit) => persianDigits[arabicDigits.indexOf(digit)]);
}
