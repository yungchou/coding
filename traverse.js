"use strict";

function traverse (x) {
  if (isArray(x)) {
    traverseArray(x)
  } else if ((typeof x === 'object') && (x !== null)) {
    traverseObject(x)
  } else {

  }
}

function traverseArray (arr) {
  arr.forEach(function (x) {
    traverse(x)
  })
}

function traverseObject (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      traverse(obj[key])
    }
  }
}

function isArray (o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

// usage:
traverse(largeObject)