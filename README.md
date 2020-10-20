# technical-questions-marathon

### Prerequsites

- Node

### How to run

> node questionOne.js

### Questions 

Question 1  

Create a method that takes a URL (string), removes duplicate URL query parameters and they are specified within the 2nd argument (which will be an optional array).  

Examples  
```
stripUrlParams("https://google.com?a=1&b=2&a=2") ➞ "https://google.com?a=2&b=2"  
stripUrlParams("https://google.com?a=1&b=2&a=2", ["b"]) ➞ "https://google.com?a=2"   
stripUrlParams("https://google.com", ["b"]) ➞ "https://google.com"  
```

Notes  
- The 2nd argument paramsToStrip is optional.  
- paramsToStrip can contain multiple params.   
- If there are duplicate query parameters with different values, use the value of the last occurring parameter (see examples #1 and #2 above).   

Question 2 

Create a method that takes an array of strings of arbitrary dimensionality (String[], String[][], String[][][], etc) and returns the sum of every separate number in each string in the array.

Examples   
```sum({"1", "five", "2wenty", "thr33"}) ➞ 36   
sum({  
  {"1X2", "t3n"},    
  {"1024", "5", "64"}   
}) ➞ 1099   
sum({  
  {  
    {"0", "0x2", "z3r1"},  
    {"1", "55a46"}   
  },  
  {    
    {"1", "2", "4"},   
    {"0x5fp-2", "nine", "9"},   
    {"4", "4", "4"}  
  },   
  {  
    {"03"}  
  },  
  {}  
}) ➞ 142
```  

Notes  
- Numbers in strings can be negative, but will all be base-10 integers.  
- Negative numbers may directly follow another number.  
- The hyphen-minus character ("-") does not only occur in numbers.  
- Arrays may be ragged or empty.  
