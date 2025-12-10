import { HeroSection } from "@/app/(main)/_types";
import clientPromise from "@/lib/mongodb";
import {
  ApiResponse,
  errorResponse,
  HttpStatus,
  successResponse,
} from "@/types/api";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ApiResponse<HeroSection>>> {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio_db");
    const hero = await db.collection<HeroSection>("hero_section").findOne();

    if (!hero) {
      throw new Error("Data tidak ditemukan");
    }

    return NextResponse.json(successResponse(hero, "Data ditemukan"), {
      status: HttpStatus.OK,
    });
  } catch (error) {
    return NextResponse.json(
      errorResponse("INTERNAL ERROR", "Server error", {
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: HttpStatus.OK,
      }
    );
  }
}
