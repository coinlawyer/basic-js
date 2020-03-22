module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw Error;
  let season, month;
  month = date.getMonth() + 1;
  season = (month > 2 && month < 6) ? 'spring' 
    : (month > 5 && month < 9) ? 'summer' 
    : ( month > 8 && month < 12) ?'autumn'
    : 'winter';
  return season;
};
