import { NextRequest, NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/blog-api";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const page = Math.max(0, Number(request.nextUrl.searchParams.get("page")) || 0);
  const size = Math.min(20, Math.max(1, Number(request.nextUrl.searchParams.get("size")) || 6));

  try {
    return NextResponse.json(await getBlogPosts(page, size));
  } catch {
    return NextResponse.json(
      { message: "The blog service is temporarily unavailable." },
      { status: 502 },
    );
  }
}
