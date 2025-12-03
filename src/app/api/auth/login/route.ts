import { errorResponse, HttpStatus, successResponse } from "@/types/api";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

const USERS = [
  { id: 1, username: "admin", password: "admin", name: "Administrator" },
  { id: 2, username: "user", password: "user123", name: "Regular User" },
];

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "secret-key-yang-sangat-rahasia-123"
);

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({
        message: "username dan password tidak boleh kosong",
        status: 400,
      });
    }

    const user = USERS.find(
      (item) => item?.username === username && item?.password === password
    );

    if (!user) {
      return NextResponse.json(
        errorResponse("NOT_FOUND", "Pengguna tidak ditemukan"),
        { status: HttpStatus.NOT_FOUND }
      );
    }

    const token = await new SignJWT({
      username: user.username,
      name: user.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(SECRET_KEY);

    const response = NextResponse.json(
      successResponse(
        {
          user: {
            username: user.username,
            name: user.name,
          },
          // token,
        },
        "Login berhasil"
      ),
      { status: HttpStatus.CREATED }
    );

    response.cookies.set("accessToken", token, {
      httpOnly: true, // Tidak bisa diakses JavaScript (lebih aman)
      secure: process.env.NODE_ENV === "production", // Hanya HTTPS di production
      sameSite: "lax", // Proteksi CSRF
      maxAge: 60 * 60 * 2, // 2 jam
      path: "/", // Cookie berlaku untuk semua path
    });

    return response;
  } catch (error) {
    console.error("Error saat login:", error);
    return NextResponse.json(errorResponse("INTERNAL_ERROR", "Server error"), {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
