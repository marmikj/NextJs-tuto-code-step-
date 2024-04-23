import { NextResponse } from "next/server";

export function GET(request){ 
    return NextResponse.json({name:"marmik"})
}

export async function POST(request){ 
    let payload = await request.json();
    console.log(payload,"sadsa")
    if(!payload.title){
        return NextResponse.json({result:"required name "})
    }
    return NextResponse.json({result:"hello"})
}


export async function DELETE(request,content){ 
    let id = content.params.id
    if(id){
        return NextResponse.json({result:"user deleted",success:true},{status:200})
    }
    else{
        return NextResponse.json({result:"user not deleted",success:false},{status:200})
    }
}