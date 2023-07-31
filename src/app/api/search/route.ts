import {NextResponse} from "next/server"

import product from "@/db.json"

export async function GET(request: Request){
    const {searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    console.log(product)

return NextResponse.json(product)

}