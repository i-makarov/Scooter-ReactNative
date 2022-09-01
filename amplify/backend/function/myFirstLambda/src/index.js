/* Amplify Params - DO NOT EDIT
	API_AMPLIFYDATASOURCE_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYDATASOURCE_USERSTABLE_ARN
	API_AMPLIFYDATASOURCE_USERSTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var aws = require('aws-sdk');
var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});

var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();
//{apiVersion: '2012-10-08'}
exports.handler = async (event, context) => {
    console.log(event);

    let date = new Date();

    // const tableName = "UsersTable";
    // const region = "eu-north-1";
    const tableName = process.env.API_AMPLIFYDATASOURCE_USERSTABLE_NAME;    
    const region = process.env.REGION;   
    
    console.log("table=" + tableName + " -- region=" + region);

    aws.config.update({region: region});

    // If the required parameters are present, proceed
    if (event.request.userAttributes.sub) {

        // -- Write data to DDB
        let ddbParams = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                // '__typename': {S: 'Users'},
                'email': {S: event.request.userAttributes.email},
                // 'createdAt': {S: date.toISOString()},
                'bonuses': {S: '0'}
            },
            TableName: tableName
        };

        // Call DynamoDB
        try {
            await ddb.putItem(ddbParams).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DDB or SQS");
        context.done(null, event);
    }
};