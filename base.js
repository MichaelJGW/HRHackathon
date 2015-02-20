

var createArticle(){

}
var 
var dataTemplate = {
	title: "",
	link: "",
	points: "",
	auther: "",
	time: ""
}
var data = [];
var parse = function (){
	var rawDataProcessed = rawData.split("*");
	for (var index = 0; index < rawDataProcessed.length; index++) {
		var obj = {};
		obj.title = rawDataProcessed[index].split();
	};
	textarea.value = "\n"; 
}
var rawData = "The Data Driven Life (2010) (nytimes.com)\n \
1 point by sonabinu 0 minutes ago | discuss\
*\
Las Vegas 'Road Rage' Shooting Arrest: Family Knew Suspect (go.com)\n \
1 point by Kevinlipta 0 minutes ago | discuss\
*\
Ask HN: Security camera system recommendations?\n \
1 point by tdfx 1 minute ago | discuss\
*\
Charity: Water – Wanna Build Your Own Sensor? (charitywater.org)\n \
1 point by novos 4 minutes ago | discuss\
*\
State Dept. has yet to clear its computer network of hackers (reuters.com)\n \
1 point by chermanowicz 4 minutes ago | discuss\
*\
Go-gl: Massive Overhaul (docs.google.com)\n \
1 point by slimsag 9 minutes ago | discuss\
*\
Strongest Natural Material Discovered in Snail Teeth (royalsocietypublishing.org)\n \
1 point by pje 10 minutes ago | discuss\
*\
NSA and UK spies hacked world's largest SIM card manufacturer, report says (mashable.com)\n \
1 point by hrasyid 12 minutes ago | discuss\
*\
Twitter bot tweets when someone on a campus edits another schools Wikipedia page (twitter.com)\n \
1 point by w-ll 14 minutes ago | discuss\
*\
How Oregon's Second Largest City Vanished in a Day (smithsonianmag.com)\n \
1 point by testrun 16 minutes ago | discuss\
*\
The Secrets Behind the Design of the Apple Watch (medium.com)\n \
1 point by smartwatchr 25 minutes ago | discuss\
*\
How to Become Batman (npr.org)\n \
1 point by juanplusjuan 34 minutes ago | discuss\
*\
Russian Researchers Uncover Sophisticated NSA Malware (mnch.tk)\n \
2 points by cedwardsmedia 35 minutes ago | discuss\
*\
Barn converted into storytale wonderroom (dezeen.com)\n \
1 point by gandy 36 minutes ago | discuss\
*\
Lenovo Laptops Shipping with Superfish (eff.org)\n \
1 point by cedwardsmedia 36 minutes ago | discuss\
*\
NASA Systems Engineering Processes and Requirements [pdf] (spacegrant.org)\n \
1 point by kylerpalmer 41 minutes ago | discuss\
*\
TURN Your BEAGLEBONEBLACK IN TO a 14-CHANNEL, 100MSPS LOGIC ANALYZER (hackaday.com)\n \
1 point by 2510c39011c5 51 minutes ago | discuss\
*\
MT GOX trading bots manipulated the Bitcoin price (cryptocoinsnews.com)\n \
1 point by giis 56 minutes ago | discuss\
*\
This Week in 'The NSA Knows Fucking Everything' (techdirt.com)\n \
2 points by peter123 57 minutes ago | discuss\
*\
Man Ordered by Judge to Pay $30,000 in Support for Child That Isn’t His (reason.com)\n \
3 points by jseliger 57 minutes ago | discuss\
*\
The Great Innovation Hoax in StartUp Land (medium.com)\n \
1 point by hollaur 58 minutes ago | discuss\
*\
A ZDI analyst’s perspective on ZDI-15-030 (hp.com)\n \
2 points by 2510c39011c5 1 hour ago | discuss\
*\
Does the Internet Make Us Stupid? Yes, but this may not be as bad as it sounds [pdf] (acm.org)\n \
1 point by vferreira 1 hour ago | discuss\
*\
Which workstations should a startup buy?\n \
2 points by mdonahoe 1 hour ago | 7 comments\
*\
3D printing a perfect replica of a sixth-century sword (cnet.com)\n \
3 points by benbreen 1 hour ago | discuss\
*\
The Time Everyone “Corrected” the World’s Smartest Woman (priceonomics.com)\n \
38 points by ryan_j_naughton 1 hour ago | 36 comments\
*\
This Snail’s Teeth Could Stop Bullets If They Weren’t So Small (vice.com)\n \
2 points by DiabloD3 1 hour ago | discuss\
*\
Technology Isn't Magic–It's Haunted (vice.com)\n \
1 point by DiabloD3 1 hour ago | discuss\
*\
When Disaster Strikes (signalvnoise.com)\n \
2 points by wglb 1 hour ago | 1 comment\
*\
Spawning Windows Commands in Wasp Lisp and MOSREF (bluishcoder.co.nz)\n \
2 points by wglb 1 hour ago | discuss";