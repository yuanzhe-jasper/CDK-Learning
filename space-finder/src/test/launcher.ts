import { handler } from "../services/spaces/handler";

process.env.AWS_REGION = 'us-west-2'
process.env.TABLE_NAME = "SpaceStack-028f42c86af1"


handler({
    httpMethod: 'POST',
    body:JSON.stringify({
        location:'Dublin'
    })
} as any,{} as any);