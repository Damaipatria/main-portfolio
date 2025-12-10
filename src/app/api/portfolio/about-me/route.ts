import { AboutMeSection } from "@/app/(main)/_types";
import clientPromise from "@/lib/mongodb";
import {
  ApiResponse,
  errorResponse,
  HttpStatus,
  successResponse,
} from "@/types/api";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<ApiResponse<AboutMeSection>>
> {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio_db");
    const aboutMe = await db
      .collection<AboutMeSection>("about_me_section")
      .findOne();

    if (!aboutMe) {
      throw new Error("Data tidak ditemukan");
    }
    return NextResponse.json(successResponse(aboutMe, "Data ditemukan"), {
      status: HttpStatus.OK,
    });
  } catch (error) {
    return NextResponse.json(
      errorResponse("INTERNAL ERROR", "Server error", {
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
