import { works } from "./works";

export async function GET() {
    return Response.json(works);
}