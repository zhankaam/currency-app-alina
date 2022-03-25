const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n);

const getCurrencyRate = (currency: any, base: string, rates: any) => currency === base ? 1 : rates[currency];

export const convertAmount = (base: string, rates: any, amount: any, from: any, to: any) => {
  if (!from || !to) return 0;

  const fromRate = getCurrencyRate(from, base, rates);
  const toRate = getCurrencyRate(to, base, rates);
  return (toRate * amount) / fromRate;
};

const getSorted = (arrayToSort: any) =>
  arrayToSort.sort((a: any, b: any) => a[0].localeCompare(b[0]));

export const getCurrencyOptions = (rates = {}, selectedRate: any) => {
  const ratesKeys = Object.keys(rates);
  const ratesWitoutSelected = selectedRate
    ? ratesKeys.filter((rk) => rk !== selectedRate.label)
    : ratesKeys;
  const sortedRates = getSorted(ratesWitoutSelected);
  return sortedRates.map((s: any) => ({ label: s, value: s.toLowerCase() }));
};

export const getAmountError = (value: any) => {
  return value
    ? isNumeric(value)
      ? value <= 0
        ? 'The amount must be bigger than 0'
        : undefined
      : 'The amount must be a number'
    : 'The amount is required';
};
