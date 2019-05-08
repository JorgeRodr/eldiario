function formatDate(userDate) {
    const date = new Date(userDate);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}${month}${day}`;
  // format from M/D/YYYY to YYYYMMDD
}
console.log(formatDate('11/26/2014'));
