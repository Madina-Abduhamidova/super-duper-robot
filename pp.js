const MAtem = {
  floor: function (float) {
    if (float == 0) {
      return 0;
    }
    if (float > 0) {
      return float - (float % 1);
    } else {
      return float - (float % 1) - 1;
    }
  },
  //======================================
  ceil: function (float) {
    if (float == 0) {
      return float;
    }
    if (float > 0) {
      return float - (float % 1) + 1;
    } else {
      return float - (float % 1) - 1;
    }
  },
  //====================================
  round: function (float) {
    if (float == 0) {
      return float;
    }
    if (float > 0) {
      if (float % 1 >= 0.5) {
        return float - (float % 1) + 1;
      } else {
        return float - (float % 1);
      }
    } else {
      if (float % 1 > -0.5) {
        return float - (float % 1);
      } else {
        return float - (float % 1) - 1;
      }
    }
  },
  //======================================
  max: function (...args) {
    let max = args[0];
    for (let i of args) {
      if (i > max) {
        max = i;
      } else {
        continue;
      }
    }
    return max;
  },
  //=======================================
  min: function (...args) {
    let min = args[0];
    for (let i of args) {
      if (i < min) {
        min = i;
      } else {
        continue;
      }
    }
    return min;
  },
  //========================================
  trunc: function (float) {
    if (float == 0) {
      return float;
    }
    if (float > 0) {
      return float - (float % 1);
    } else {
      return float - (float % -1);
    }
  },
  pow: function (arg1, arg2) {
    return arg1 ** arg2;
  },
};
console.log(MAtem.floor(3.9));
console.log(MAtem.ceil(3.9));
console.log(MAtem.round(3.9));
console.log(MAtem.max(-2, 34, 456, 12, 1, 0, -10));
console.log(MAtem.min(-2, 34, 456, 12, 1, 0, -10));
console.log(MAtem.trunc(23.3333));
console.log(MAtem.pow(2, 10));
//============================================================================
//============================================================================
//============================================================================
const users = [
  { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
  { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
  { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
  { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
  { id: 3, name: "Jasur", age: 30, job: "Menejer" },
  { id: 3, name: "Jasur", age: 30, job: "Menejer" },
  { id: 4, name: "Madina", age: 27, job: "Shifokor" },
  { id: 4, name: "Madina", age: 27, job: "Shifokor" },
];

function birmarta(arr) {
  let newarr = [];
  let newar2 = [];
  for (let i in arr) {
    let Ijson = JSON.stringify(arr[i]);
    if (!newarr.includes(Ijson)) {
      newarr.push(Ijson);
    }
  }
  for (let j in newarr) {
    newar2.push(JSON.parse(newarr[j]));
  }
  return newar2;
}
console.log(birmarta(users));
