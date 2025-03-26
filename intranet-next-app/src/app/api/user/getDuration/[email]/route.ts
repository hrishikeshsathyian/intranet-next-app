import { NextResponse } from "next/server";
import { supabase } from "../../../../../../lib/supabase";

const USER_TABLE_NAME = "Users";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ email: string }> }
) {
  const { email } = await params;
  const { data, error } = await supabase
    .from(USER_TABLE_NAME)
    .select("duration")
    .eq("email", email);

  if (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { error: "Error fetching user data" },
      { status: 500 }
    );
  }

  const residentDuration = data[0].duration;
  console.log(residentDuration);
  return new Response(JSON.stringify({ residentDuration }), {
    headers: { "content-type": "application/json" },
  });
}
