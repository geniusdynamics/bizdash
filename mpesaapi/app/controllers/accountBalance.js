'user strict';
var request = require('request');
var credentials = require('../helpers/credentials');

var accountBalanceApi = function(req,res,next){
    var initiator = req.body.initiator;
    var partya = req.body.partya;

    let url = "https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query";
    let auth = "Bearer "+req.access_token;
    
    request(
        {
            url : url,
            method:"POST",
            headers:{
              Authorization : auth
            },
            json:{
                "Initiator":"Emilio",
                "SecurityCredential": credentials.securityCredential,
                "CommandID":"AccountBalance",
                "PartyA":600383,
                "IdentifierType":"4",
                "Remarks":"Account balance",
                "QueueTimeOutURL": "https://www.emiliomaingi.rf.gd/payments/callbackurl.php",
                "ResultURL": "https://www.emiliomaingi.rf.gd/payments/callbackurl.php",
            }
        },
        function(error,response,body){
            if(error){
                console.log(error);
            }
            else{
              req.accountBalanceResult = res.status(200).json(body); 
            }
        }
    )
}
module.exports = accountBalanceApi;
