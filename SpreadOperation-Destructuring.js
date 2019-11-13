//Spread operation: 
//take array/object and spread it onto a new array/object 

const dull = { a: 'alpha', b: 'beta' } 

const shiny = { ...dull, c: 'carotene' } 

//De-structuring assignment: 
//we’re taking an existing data structure and extracting values from it. 

const [first, second, ...rest] = ['some', 'long', 'array', 'of', 'values'] 
