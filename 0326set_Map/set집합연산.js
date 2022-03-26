// set의 교집합(intersection)
Set.prototype.intersection = function (set) {
    const result = new Set();
  
    for(const val of set){
      if(this.has(val)) result.add(val);
    }
  
    return result;
  }
  /* 
  // 교집합의 다른 방법
  Set.prototype.intersection = function (set) {
    return new Set([...this]).filter(v => set.has(v)));
  }
  */
  
  // set의 합집합(union)
  Set.prototype.union = function (set) {
    const result = new Set(this);
  
    for(const val of set){
      result.add(val);
    }
  
    return result;
  }
  /*
  // 합집합의 다른예
  Set.prototype.union = function (set){
    return new Set([...this, ...set]);
  }
  */
  
// set의 차집합(difference)
  Set.prototype.difference = function (set) {
      const result = new Set(this);

      for(const val of set){
          result.delete(val);
      }

      return result;
  }
/*
  // 차집합의 다른 방법
  Set.prototype.difference = function (set) {
    return new Set([...this]).filter((v) => !set.has(v)));
  }
*/

// set의 부분집합과 상위집합(isSuperSet)
Set.prototype.isSuperSet = function (subSet){
    for (const val of subSet){
        if(!this.has(val)) return false;
    }
    return true;
};

/*
  // 부분집합의 다른 방법
Set.prototype.isSuperSelt = function (subset) {
    const supersetArr = [...this]'
    retrun [...subset].every(v => supersetArr.includes(v));
};
*/

  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 4]);
  
  // console.log(setA.intersection(setB));
  // console.log(setB.intersection(setA));
  console.log(setA.union(setB));
  console.log(setA.difference(setB));
  console.log(setA.isSuperSet(setB));





