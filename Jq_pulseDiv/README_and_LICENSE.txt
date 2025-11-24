I built this as a more dynamic way to open and close divs. It is build on the jQuery library.

1. THE 2 jQuery JS files need to be included either locally or from a remote storage

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.3/jquery-ui.min.js"></script> 

2. include the pulsate div JS file
<script src="JQ_pulseDiv.js"></script>

there are a total of 3 divs that make up the opening div. all of this is commented in the example file. Stylize them however you want, either statically or depending on which link is clicked
- the outermost div ("divPulsateOuter" in the example file) is used for for positioning the div, sizing the div and displaying.
- the close div ("spanOuterXButton" in the example file) contains the X SVG icon in the upper right corner to close the div. You can use this or not. The example also includes a text link at the end of the HTML content to do the same thing.
- the main content ("divPulsateContent" in the example file) div sits in the middle. that content can be static or can be changed with a function of your own prior to calling the pulsate open div function.


there are 2 function calls. 

One for the open called wbiDivPulsateOpen(). it expects 4 parameters to be passed in:
1. the ID of the outermost holding div (string)
2. the ID of the div inside of that that holds the HTML content and fades in as the outer div is pulsing (string)
3. the final height of the outer div when its done appearing (numeric)
4. the final width of the outer div when its done appearing (numeric)

example:  onclick="wbiDivPulsateOpen('divPulsateOuter','divPulsateContent',600,800)"



One for pulsing the div closed called  bounceOutDiv(). It expects the 2 names of the outer and main content divs, both strings.


example:  onclick="bounceOutDiv('divPulsateOuter','divPulsateContent')"


LICENSE:
No license for any of this. Its just a thing that I built because I thought it would be cool and I couldn't find it already built anywhere else. change it however you want.