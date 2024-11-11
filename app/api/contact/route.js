import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
export async function POST(request) {
  const payload = await request.json();
  let isError = null;

  try {
    const { name, email, message } = payload;
    const body = `From: ${name},
    Message: ${message}
    email: ${email}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.SEND_TO,
      subject: email,
      text: body,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        isError = true;
      } else {
        isError = false;
      }
    });

    if (isError) {
      NextResponse.json(
        {
          message: "Message sending failed!",
          success: false,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          success: true,
          message: "Message sent successfully!",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Message sending failed!",
        success: false,
      },
      { status: 500 }
    );
  }
}
