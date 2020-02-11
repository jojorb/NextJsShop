export default function(amount) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  };
  // if its a whole, dollar amount, leave off the .00
  if (amount % 100 === 0) options.minimumFractionDigits = 2;
  const formatter = new Intl.NumberFormat('fr-FR', options);
  return formatter.format(amount / 100);
}
