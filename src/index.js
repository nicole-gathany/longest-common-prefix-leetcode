/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // i want something that looks at all substrings in every word
  //start with a for loop and then test
  // let test = strs.every(x => x)
  //syntax: string.substr(start, length), the start will always be 0, the length may change
  for (let i = 0; i < strs.length; i++) {
    console.log(strs[i]);
  }

  console.log("Hi");
};

longestCommonPrefix(["flower", "flow", "flight"]);
