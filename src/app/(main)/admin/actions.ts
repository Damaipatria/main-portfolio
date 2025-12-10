import clientPromise from "@/lib/mongodb";
import { ApiResponse, errorResponse, successResponse } from "@/types/api";
import { HeroSection } from "../_types";

export async function getHero(): Promise<ApiResponse<HeroSection>> {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio_db");
    const hero = await db.collection<HeroSection>("hero_section").findOne();

    if (!hero) {
      throw new Error("Data tidak ditemukan");
    }

    return successResponse(hero, "data ditemukan");
  } catch (error) {
    return errorResponse("INTERNAL ERROR", "Server error", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
