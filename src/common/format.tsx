export const formatDate = (date: any) => {
  const formattedDate = date.split(' ')[0].replace(/-/g, '/');
  return formattedDate;
};

export const formatMoney = (number: any) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(number);
};
