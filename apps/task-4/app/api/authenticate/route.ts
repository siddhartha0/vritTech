import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { UserData } from "@/constant/user-data";

const SECRET_KEY = "Secret123";

export async function POST(req: NextRequest) {
  const { userName, password } = await req.json();
  let matched = false;
  console.log(userName, password);

  UserData.map((user) => {
    if (
      user.password.toLowerCase() === password.toLowerCase() &&
      user.username.toLowerCase() === userName.toLowerCase()
    ) {
      matched = true;
    }
  });

  if (matched) {
    const token = jwt.sign({ userName }, SECRET_KEY, { expiresIn: "1h" });
    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 3600, // 1 hour
    });

    return response;
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
