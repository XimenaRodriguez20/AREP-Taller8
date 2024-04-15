import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handler = async (event, context) => {
    try {
        const post = JSON.parse(event.body);
        
        const newPost = {
            ...post,
            id: randomUUID(),
        };
        await ddbDocClient.send(new PutCommand({
            TableName: "Posts",
            Item: newPost,
        }));

        return {
            statusCode: 200,
            body: JSON.stringify(newPost),
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