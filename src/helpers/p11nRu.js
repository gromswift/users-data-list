export default function(num) {
  const value = num.toString();
  const lastChar = value[value.length - 1];
  const befLastChar = value[value.length - 2];

  if (lastChar === '1' && befLastChar !== '1') return `${num} год`;

  if ((2 <= lastChar && lastChar <= 4) && befLastChar !== '1') return `${num} года`;

  return `${num} лет`;
}
