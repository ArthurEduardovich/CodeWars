function addObjectCombined(arr) {
    const newObj = {};
    newObj[arr[0].subjectName] = arr[0].averageScore;
    newObj[arr[1].subjectName] = arr[1].averageScore;
    newObj[arr[2].subjectName] = arr[2].averageScore;
    arr.unshift(newObj);
    return arr;
  };

  console.log(addObjectCombined([ { subjectName: "physics", averageScore: 67}, { subjectName: "algebra", averageScore: 81 }, { subjectName: "geometry", averageScore: 98 } ]))