on client side do => document.cookie="cookie1=wow";

or do document.cookie="cookie1=wow;omain=example.com"  for setting cookies for all paths

Remember cookies stay you have to delete it manually or it will remain whenever you login to that site

for setting ccokie for specific path use document.cookie="wow=1;path=/path1"

res.setHeader("set-cookie",["wow=1","wow2=2"]) is kind of serever side cookie but it still gets executed on client side though so we can say its kind of server side cookie

for max age or letting the cookie stay even after you close the browser use document.cookie="cookie1=1;Max-Age=1000"

for like safe guarding cookies so it wont get sent to other sites document.cookie="wow=1 samesite=strict" the samesite=strict will share cookie if the sites are same if not then will not send it

use "SameSite=lax" (which is also kind of default) or use "SameSite=strict" to restrict access to different site or "SameSite=None" for no restrictions at all

use "httponly" with cookie properties .eg: res.setHeader("set-cookie",["cookie1=1;httponly","normal_cookie=1"]).You cannot acces cookie1 on browser when you do document.cookie; but normal_cookie will show up

for stealing cookies send it to ?v={document.cookie} attached to site and then use req.query.v on server side to send it back again