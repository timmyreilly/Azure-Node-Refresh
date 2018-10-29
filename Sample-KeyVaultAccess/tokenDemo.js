var request = require('request'); 
var adal = require('adal-node').AuthenticationContext;

var endpoint = "https://.azurewebsites.net/contacts";

var clientId = "123-123-123";
var clientSecret = "1sdfr"; 
var tenant = "AuthorizationEndpoint: login.microsoft.com/yourdirectory/oauth2/token"; 
var resource = "https://ps.azurewebsites.net/.auth/login/aad/callback"; 

var context = new adal(tenant); 

context.acquireTokenWithClientCredentials(resource, clientId, clientSecret, function(err, tokenResponse) {
    if(err) {
        // oh no!
        console.log("Error! " + err.stack); 
    } else {
        // we got a token:
        console.log(tokenResponse['accesToken']); 
        requires({
            url: endpoint,
            auth: {
                'bearer': tokenResponse['accessToken']
            }
        }, function(err, res) {
            if(err) {
                console.log("Error with request: " + err.stack); 
            } else {
                console.log(res.statusCode); 
                console.log(res.body); 
            }
        })
    }
})
