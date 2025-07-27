export function checkHeading(str) {
    return /^\*{3}/.test(str); // starts with ***
  }
  
  export function replacekHeadingStarts(str) {
    return str.replace(/^\*+/, '').trim(); // remove leading *, keep content
  }
  