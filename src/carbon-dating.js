const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || 
    typeof(sampleActivity) !== 'string' || 
    typeof(parseFloat(sampleActivity)) !== 'number' || 
    parseFloat(sampleActivity) <= 0 || 
    parseFloat(sampleActivity) > 15 || 
    isNaN(parseFloat(sampleActivity)) || 
    !isFinite(parseFloat(sampleActivity))) 
    {return false;}
  let age, rateConstant, activityRate;
  activityRate = MODERN_ACTIVITY/parseFloat(sampleActivity).toFixed(51);
  rateConstant = (0.693/HALF_LIFE_PERIOD).toFixed(51);
  age = Math.ceil(Math.log(activityRate)/+rateConstant);
  return age;
};
