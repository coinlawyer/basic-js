module.exports = function createDreamTeam(members) {
  let teamName;
  if (!Array.isArray(members)) return false;
  teamName = members
    .filter(el => typeof(el) === 'string')
    .map(el => el.trim().slice(0, 1).toUpperCase())
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('');
  return teamName;
};