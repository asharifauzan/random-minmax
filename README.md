## How to use:

```
const getRandomMinMax = require('random-minmax);

const random = getRandomMinMax({min: -100, max: 100})
console.log(random) // -100 upto 100
```

## Props:
```
min: 0 || -100 || 100 // either integer or float
max: 0 || -100 | 100 // same as min but must be greater
double: true || false // return double data type 
```