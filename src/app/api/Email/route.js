import { message } from "antd";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";









  export async function POST(req) {

const {Email,Firstname,text} = await req.json()
console.log("req=>",req)
    const transporter = nodemailer.createTransport({
      host:"smtp.gmail.com" ,
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user:process.env.NEXT_PUBLIC_API_USER ,
        pass:process.env.NEXT_PUBLIC_API_PASS ,
      },
    });
    
     const info = await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_API_USER, // sender address
        to: process.env.NEXT_PUBLIC_API_RECEVER, // list of receivers
        subject: "MAil from Catepiller", // Subject line
        text: "", // plain text body
         html: `<ul>
         <li>Email : ${Email}</li>
         <li>Name : ${Firstname}</li>
          <li>Review : ${text}</li>


         
         </ul>`
      });
    
      console.log("Message sent: %s", info.messageId);
   
      return NextResponse.json({message:"sent success fuly "},{status:"201"})
}