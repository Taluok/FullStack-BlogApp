import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await ConnectDB()
}
loadDB();

export async function POST(request){
    const formData = await request.formData();
    const emailData = {
        email:`${formData.get('email')}`
    }
    await EmailModel.create(emailData);
    return NextResponse.json({success:true,msg:"Email Subscripto"})
}