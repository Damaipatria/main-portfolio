import { AboutMeSection } from "@/app/(main)/_types";
import clientPromise from "@/lib/mongodb";
import { ApiResponse } from "@/types/api";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<ApiResponse<AboutMeSection>>
> {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio_db");
    const hero = await db
      .collection<AboutMeSection>("about_me_section")
      .findOne();

    if (!hero) {
      throw new Error("Data not found");
    }

    return NextResponse.json({
      success: true,
      data: hero,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Data not found",
    });
  }
}
