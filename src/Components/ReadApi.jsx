// //  const arr = apiResponse.data.cards;

   

    // Function to recursively search for all values of a specific key in a nested object
  function findAllValuesForKey(obj, targetKey) {
    let values = [];

    // Check if obj is null or undefined
    if (!obj || typeof obj !== "object") {
      return values;
    }

    // Check if the targetKey is present in the current level of obj
    if (targetKey in obj) {
      values.push(obj[targetKey]);
    }

    // Recursively search in nested objects and arrays
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          values = values.concat(findAllValuesForKey(obj[key], targetKey));
        }
      }
    }

    return values;
  }