import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const headerList = headers();
  const type = headerList.get("Content-Type");

  const cookiesList = cookies();
  const cookie = cookiesList.get("next-auth.session-token");
  //   redirect("/blog");
  return NextResponse.json({ id, type });
}
