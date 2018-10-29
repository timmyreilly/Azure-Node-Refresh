var KeyVault = require("azure-keyvault"); 
var AuthenticationContext = require("adal-node").AuthenticationContext; 

var clientId = " 123 -123 -123"; 
var clientSecret = "c2123"; 
var vaultUri = "https://valut.auzre.net/secrets/guid";


var authenticator = function (challenge, callback) {
    var context = new AuthenticationContext(challenge.authorization); 
    return context.acquireTokenWithClientCredentials(challenge.resource, clientId, clientSecret, function(tokenResponse) {
        if(err) throw err; 
        var authorizationValue = tokenResponse.tokenType + " " + tokenResponse.accessToken; 
        return callback(null, authorizationValue); 
    })
};

var credentials = new KeyValue.KeyVaultCredentials(authenticator); 
var client = new KeyValue.KeyVaultClient(credentials); 

client.getSecret(vaultUri, (err, result) => {
    if(!err) {
        console.log(result); 
    } else {
        throw err; 
    }
}); 

