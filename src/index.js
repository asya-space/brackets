function check(brackets, bracketsConfig) {
  const stack = [],
        bracketsMap = new Map(bracketsConfig),
        reverseBracket = new Map();
  for(let [open, close] of bracketsConfig) {
    reverseBracket.set(close, open);
  }
  for(const el of brackets) {
    if(bracketsMap.has(el)) {
      stack.push(el)
    } else {
      const last = stack.pop();
      if(reverseBracket.get(el) !== last) return false;
   }
  }
  return stack.length === 0;
}
module.exports = check;