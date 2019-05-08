function accessor(obj, val, path) {
  if (path) {
    const pathArray = path.split(".");
    let prop = obj;
    pathArray.forEach(key => {
      if (prop && prop[key]) {
        prop = prop[key];
      } else {
        prop = val;
      }
    });

    return prop;
  } else {
    return function(arg) {
      const prevObj = obj;
      const prevVal = val;
      return accessor(prevObj, prevVal, arg);
    };
  }
}
