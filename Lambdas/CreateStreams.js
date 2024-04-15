import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handler = async (event, context) => {
    try {
        const stream = JSON.parse(event.body);
        
        const newStream = {
            ...stream,
            id: randomUUID(),
        };
        await ddbDocClient.send(new PutCommand({
            TableName: "Streams",
            Item: newStream,
        }));

        return {
            statusCode: 200,
            body: JSON.stringify(newStream),
        };
    }
    catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};