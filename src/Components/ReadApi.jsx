// //  const arr = apiResponse.data.cards;

    // const ans = findAllValuesForKey(apiResponse, "info");
    // //  console.log("ans" ,ans)

    // //  const arr = ans[2];
    // // console.log("ans[2]", ans[2]);
    // const infoArr = [];

    // for (let i = 0; i < Math.min(23, ans.length); i++) {
    //   const eachAns = ans[i];
    //   // Check if the current object has the "name" key
    //   if (eachAns.hasOwnProperty("avgRating")) {
    //     // Push the object to infoArr if it has "name" key
    //     infoArr.push(eachAns);
    //   }
    // }

    // console.log("infoArr", infoArr);
    // setFiltercards(infoArr);
    // setFilteredRestaurants(infoArr);

    // const response = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );


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