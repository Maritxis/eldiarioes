function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    return userDate.split('/').reverse().toString().replace(/,/g,'');
  }
  console.log(formatDate('11/26/2014'));
  