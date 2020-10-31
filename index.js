const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, alert) {
      for (const ele in collection) {
        alert(collection[ele]);
      }
      return collection;
    },

    map: function (collection, callback) {
      const array = [];
      for (const ele in collection) {
        array.push(callback(collection[ele]));
      }
      return array;
    },

    reduce: function (collection, callback, acc) {
      if (acc === undefined) {
        return collection.reduce(callback);
      } else {
        return collection.reduce(callback, acc);
      }
    },

    find: function (collection, predicate) {
      for (const ele in collection) {
        if (predicate(collection[ele]) === true) {
          return collection[ele];
        }
      }
    },

    filter: function (collection, predicate) {
      const filteredArr = [];
      for (const ele in collection) {
        if (predicate(collection[ele]) === true) {
          filteredArr.push(collection[ele]);
        }
      }
      return filteredArr;
    },

    size: function (collection) {
      return Object.keys(collection).length;
    },

    first: function (array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function (array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        return array.slice(array.length - n);
      }
    },

    compact: function (array) {
      const compactArr = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          compactArr.push(array[i]);
        }
      }
      return compactArr;
    },

    sortBy: function (array, callback) {
      return [...array].sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function (array, shallow) {
      let newArray = [];
      if (!!shallow) {
        newArray = array.flat();
      } else {
        newArray = array.flat(3);
      }
      return newArray;
    },

    uniq: function (array, isSorted, callback) {
      let newArray = [];
      if (!callback) {
        return [...new Set(array)];
      } else {
        let arr = [...array].map((element) => callback(element));
        newArray = array.filter(
          (value, index) => arr.indexOf(callback(value)) === index
        );
        return newArray;
      }
    },

    keys: function (obj) {
      return Object.keys(obj);
    },

    values: function (obj) {
      return Object.values(obj);
    },

    functions: function (fi) {
      let newArr = [];
      for (let i in fi) {
        if (typeof fi[i] == "function") {
          newArr.push(fi[i]);
        }
      }
      newArr.sort();
      return newArr;
    },
  };
})();

fi.libraryMethod();
