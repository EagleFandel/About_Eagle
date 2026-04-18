import { NextResponse } from "next/server";
import { resumeData } from "@/content/resume";
import { ResumePDF } from "@/components/resume/pdf/resume-pdf";
import { renderToBuffer } from "@react-pdf/renderer";

export const runtime = "nodejs";

export async function GET() {
  const locale = "zh";

  const pdfBuffer = await renderToBuffer(
    <ResumePDF data={resumeData} locale={locale} />
  );

  return new NextResponse(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=\"resume.pdf\"",
    },
  });
}
