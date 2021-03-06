function camelize(snakeCase) {
  return snakeCase.replace(/_[a-z]/g, function(match) {
    return match[1].toUpperCase();
  });
};

camelize.keys = function(object) {
  return Object.keys(object).reduce((result, key) => {
    result[camelize(key)] = object[key];
    return result;
  }, {});
};

camelize.deep = function(object) {
  if (Array.isArray(object)) {
    return object.map(camelize.deep);
  }
  else if (typeof object === 'object' && object) {
    return Object.keys(object).reduce((result, key) => {
      result[camelize(key)] = camelize.deep(object[key]);
      return result;
    }, {});
  }
  else {
    return object;
  }
};

export default camelize;
