import { NextResponse } from "next/server";

export function GET(request,content){ 
    console.log(content.params.id)
    return NextResponse.json({name:"marmik"})
}