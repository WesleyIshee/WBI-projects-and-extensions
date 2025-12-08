USAGE:
This page is meant to be the interface to gather user input for a second auth/OTP type of numeric or text code.
presumably, it will be sent to a page with some scripting capabilites (not just html) to validate the code that was passed in by the user

that page can be specified in the action attribute of the form. This form can also hold the id of the pre-created code if thats the pattern that you want to use. this page is really just the interfave part, not the scripting/DB/validation of the code.

you can also invoke a timer ont his page if you want. to turn the timer on, set the JS vairable "doUseClock" to 1. To turn it off, set "doUseClock" to 0.
set the time of the coutndown clock by setting the variable "timerMinutes" to some number of minutes. Decimals are acceptable.

Change the CSS classes however you want. 
The Javascript relies on the inclusion of the JQuery library. yuou can switch this out if you want for vanilla JS.
 
 
 LICENSE:
 no license required. Use it and change it however you wish
