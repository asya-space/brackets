function check(brackets, bracketsConfig) {
  const configMap = new Map(bracketsConfig),
        reverseMap = new Map(),
        stack = [];
  for(let [open, close] of configMap) {
    reverseMap.set(close, open);
  }
  for(let el of brackets) {
    const opened = configMap.has(el),
          closed = reverseMap.has(el);
    if(opened && reverseMap.get(el) === el) {
      if(stack[stack.length-1] === el) {
        stack.pop()
      } else {
        stack.push(el);
      }
    }
    else if(configMap.has(el)) {
      stack.push(el)
    } else {
      const last = stack.pop();
      if(reverseMap.get(el) !== last) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
module.exports = check;