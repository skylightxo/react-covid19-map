export default function sortCountriesByField(countries, func) {
  countries.sort(func);
  return countries;
}
