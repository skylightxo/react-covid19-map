export default function sortCountriesByField(countries, func) {
  let countriesCopy = countries;
  countries.sort(func);
  return countriesCopy;
}
