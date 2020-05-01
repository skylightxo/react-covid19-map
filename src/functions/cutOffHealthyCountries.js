export default function cutOffHealthyCountries(data) {
  const firstNotNullIndex = data.findIndex(
    (country) => country.TotalConfirmed !== 0
  );
  return data.slice(firstNotNullIndex, data.length);
}
