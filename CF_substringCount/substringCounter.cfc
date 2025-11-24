<!--- processing only cfc ------------>
<cfcomponent output="yes" hint="contians methods that help in parsing/stripping page elmenets from a code block">

<cffunction name="countSubString" hint="counts occurance of a substring within a string" access="public" output="true">
	<cfargument name="sSubString" hint="the sub string" required="yes" type="string">
	<cfargument name="sMainString" hint="the main string that is being searched" required="yes" type="string">
	<cfargument name="bAllowOverlaps" hint="boolean to say wether to allow for overlaps in the case of redundant character substrings" required="no" type="boolean" default="true">
	<cfargument name="bBindLastPositionFound" hint="boolean to pass back the last postion found" required="no" default="false" type="boolean">

		<!--- init some vars --->
		<cfset iCurrentPosition = 1>
		<cfset iStartPosition = 0>
		<cfset iTotalcount = 0>
		<cfset iSearchStretch = 1>
		

		<cfif #arguments.bAllowOverlaps# eq false>
		<cfset iSearchStretch = len(sSubstring)>
		</cfif>

		<cfloop condition="iCurrentPosition GT 0">
			
			<!--- try and find one ---->
			<cfset iCurrentPosition = findnocase(sSubString, sMainString, iStartPosition)>
						
			<cfif iCurrentPosition gt 0>
			<!--- found one ---->
			<cfset iTotalCount = iTotalcount + 1 >
			<cfset iStartPosition = iCurrentPosition + iSearchStretch>
			</cfif>
			
		</cfloop>
		<!--- decide wether to pass back the last position bound to the total or not --->
		
		<cfif arguments.bBindLastPositionFound>
		<cfset iTotalCount = toString(itotalCount) & "|" & toString(iStartPosition)>
		</cfif>
	
	<cfreturn iTotalcount>
</cffunction>

</cfcomponent>