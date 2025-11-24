In ColdFusion, I could never find a good way to count the occurrences of a substring within a larger string. I built this simple CFC to accomplish that. 

1. it will return the number of occurrences as an int
2. if you want, the position of the last occurrence, again as an int
3. you can pass in a param to either useoverlapping logic or not. 
 example: given you have the larger string of "abbbcdeeffttiilkoo" and you want to count the occurrences of the substring "bb", if you call it without allowing overlaps (default), it would return "1" because it would start looking for the second match after the end of the complete first match. 
If you allow overlaps by passing in bAllowOverlaps as "true", it would return "2", because it would start looking for the next match just 1 character after the first occurrence of the first match.




LICENSE. 
this is just a simple CFC to help me write code that i was surprised wasn't built into CF at the time. Use it however you want, alter it however you want. whatever.


