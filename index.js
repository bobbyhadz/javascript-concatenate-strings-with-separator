// EXAMPLE 1 - Concatenate Strings with a Separator in JavaScript

const str1 = 'bobby';
const str2 = 'hadz';
const str3 = 'com';

const commaSeparated = [str1, str2, str3].join(',');
console.log(commaSeparated); // 👉️ "bobby,hadz,com"

const hyphenSeparated = [str1, str2, str3].join('-');
console.log(hyphenSeparated); // 👉️ "bobby-hadz-com"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Dealing with empty strings

// const str1 = 'bobby';
// const str2 = 'hadz';
// const str3 = '';
// const str4 = 'com';

// const result = [str1, str2, str3, str4].join('#');
// console.log(result); // 👉️ bobby#hadz##com

// ------------------------------------------------------------------

// // EXAMPLE 3 - Concatenating Strings with different separators

// const str1 = 'bobby';
// const str2 = 'hadz';
// const str3 = 'com';

// const withoutSeparator = [str1, str2, str3].join();
// console.log(withoutSeparator); // 👉️ "bobby,hadz,com"
