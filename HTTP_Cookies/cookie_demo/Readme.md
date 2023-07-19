on client side do => document.cookie="cookie1=wow";

or do document.cookie="cookie1=wow;omain=example.com"  for setting cookies for all paths

Remember cookies stay you have to delete it manually or it will remain whenever you login to that site

for setting ccokie for specific path use document.cookie="wow=1;path=/path1"

res.setHeader("set-cookie",["wow=1","wow2=2"]) is kind of serever side cookie but it still gets executed on client side though so we can say its kind of server side cookie

for max age or letting the cookie stay even after you close the browser use document.cookie="cookie1=1;Max-Age=1000"