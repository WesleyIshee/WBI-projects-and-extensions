<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SubStringCFC Usage Example</title>
</head>

<body>
<cfoutput>
<cfinvoke component="substringCounter" returnvariable="howManyTimes" method="countSubString">
<cfinvokeargument name="sMainString" value="I like to move it, move it. I like to move it, move it. We like to move it.">
<cfinvokeargument name="sSubString" value="move it">
<cfinvokeargument name="bBindLastPositionFound" value="1">
</cfinvoke>

rsult: #howManyTimes#


<cfset thisArray  = listToArray(howManyTimes,"|")>
<br />
<br />
times: #thisArray[1]#
<br />
last: #thisArray[2]#
<br />
<br />


</cfoutput>
</body>
</html>