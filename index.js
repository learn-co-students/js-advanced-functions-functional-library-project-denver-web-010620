const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const key in collection) {
         callback(collection[key]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      for(const key in collection) {
        newCollection.push(callback(collection[key]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc = 0) {
      for(const key in collection) {
        acc = callback(acc, collection[key]);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for(const key in collection) {
        if(predicate(collection[key])) {
          return collection[key];
        }
      }
    },

    filter: function(collection, predicate) {
      let newCollection = [];
      for(const key in collection) {
        if(predicate(collection[key])) {
          newCollection.push(collection[key]);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      let count = 0;
      for(const key in collection) {
         count++;
      }
      return count;
    },

    first: function(array, n = 1) {
      
      let newArray = [];
      let i = 0;

      if(n === 1) {
        return array[0];
      }

      while(newArray.length < n) {
         newArray.push(array[i]);
         i++;
      }
      return newArray;

    },

    last: function(array, n = 1) {
      let newArray = [];
      let i = array.length - 1;

      if(n === 1) {
        return array[array.length - 1];
      }

      while(newArray.length < n) {
        newArray.unshift(array[i]);
        i--;
      }
      return newArray;
    },

    compact: function(array) {
      let newArr = [];
      for(let i = 0; i < array.length; i++) {
        if(array[i]) {
          newArr.push(array[i]);
        }  
      }
      return newArr;
    },

    sortBy: function(array, callback) {
      let sorted = [];
      for(let i = 0; i < array.length; i++) {
        sorted.push(array[i]);  
      }
      return sorted.sort((a, b) => {return callback(a) - callback(b)});
    },

    flatten: function(array, flag) {
      if(flag === true) {
        return array.flat(1);
      }
      return array.flat(Infinity);
    },

    uniq: function(array, isSorted, callback = null) {
      let newArr = [];
      let transformedArr = [];

      for(let i = 0; i < array.length; i++) {
        let el = array[i];
        if(callback) {
          if(!transformedArr.includes(callback(el))) {
            transformedArr.push(callback(el));
            newArr.push(el);
          }
        } else {
          if(!newArr.includes(el)) {
            newArr.push(el);
          }
        }
      }
      return newArr;
    },

    keys: function(object) {
      const result = [];
      for(const key in object) {
        result.push(key);
      }
      return result;
    },

    values: function(object) {
      const result = [];
      for(const key in object) {
        result.push(object[key]);
      }
      return result;
    },

    functions: function(object) {
      const result = [];
      for(const name in object) {
        if(typeof object[name] === "function") {
          result.push(name);
        }
      }
      return result.sort();
    },
  }
})()

fi.libraryMethod()
