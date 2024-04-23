import { NextResponse } from "next/server";

export function GET(request,content){ 
    console.log(content.params.id)
    return NextResponse.json({name:"marmik"})
}

export async function PUT(request,content){ 
    let payload = await  request.json()
        payload.id = content.params.id
        if(!payload.id || payload.name || payload.email ){
            return NextResponse.json({result:payload,success:true},{status:200})
        }
        console.log(payload ,"payload")
    return NextResponse.json({result:payload,success:true},{status:200})
}