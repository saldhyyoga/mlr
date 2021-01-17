const FormatRupiah = ( amount ) => {
  let result = new Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(parseInt(amount));
  return result;
}

export { FormatRupiah };
