// en caso de que queramos checkear si el objeto tiene la propiedad incluyendo las del prototype que pueden venir heredadas

function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj[prop];
    return true;
  } else {
    return false;
  }
}

// en caso de que queramos ver si el objeto tiene en sí mismo la propiedad sin contar las heredadas

function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  } else {
    return false;
  }
}
