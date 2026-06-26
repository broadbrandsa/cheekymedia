"""
Generates the Statement of Work PDF for the Cheeky Media website rebuild.
Output: public/cheeky-media-statement-of-work.pdf

Run: python3 scripts/generate-sow.py
Reproducible: edit the content below and re-run to regenerate the PDF.
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    ListFlowable, ListItem, HRFlowable, KeepTogether, Image,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

# Brand
CORAL = colors.HexColor("#E77975")
INK = colors.HexColor("#1A1A1A")
MUTED = colors.HexColor("#6B6B6B")
LINE = colors.HexColor("#E5E5E5")
SOFT = colors.HexColor("#FBF1F0")  # coral-tinted soft background

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, "public", "cheeky-media-statement-of-work.pdf")
LOGO = os.path.join(HERE, "public", "images", "broadbrand-black.png")

styles = getSampleStyleSheet()

def S(name, **kw):
    return ParagraphStyle(name, parent=styles["Normal"], **kw)

body = S("body", fontName="Helvetica", fontSize=9.5, leading=14, textColor=INK)
muted = S("muted", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED)
h1 = S("h1", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=INK)
eyebrow = S("eyebrow", fontName="Helvetica-Bold", fontSize=8, leading=11,
            textColor=CORAL, spaceAfter=2)
h2 = S("h2", fontName="Helvetica-Bold", fontSize=12.5, leading=16, textColor=INK,
       spaceBefore=12, spaceAfter=5)
li = S("li", fontName="Helvetica", fontSize=9.5, leading=14, textColor=INK)
small = S("small", fontName="Helvetica", fontSize=8, leading=11, textColor=MUTED)
wordmark = S("wordmark", fontName="Helvetica-Bold", fontSize=15, leading=18, textColor=INK)
right = S("right", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED,
          alignment=2)


def bullets(items, color_check=False):
    rows = [
        ListItem(Paragraph(t, li), leftIndent=4, value="•")
        for t in items
    ]
    return ListFlowable(rows, bulletType="bullet", bulletColor=CORAL,
                        bulletFontSize=8, leftIndent=10, spaceBefore=2)


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    # top coral rule
    canvas.setStrokeColor(CORAL)
    canvas.setLineWidth(3)
    canvas.line(20 * mm, h - 16 * mm, w - 20 * mm, h - 16 * mm)
    # footer
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(20 * mm, 12 * mm,
                      "Broadbrand  ·  Shakier  ·  Shakierg@broadbrand.co.za  ·  +27 73 388 8810")
    canvas.drawRightString(w - 20 * mm, 12 * mm, f"Page {doc.page}")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(20 * mm, 15 * mm, w - 20 * mm, 15 * mm)
    canvas.restoreState()


def build():
    doc = BaseDocTemplate(
        OUT, pagesize=A4,
        leftMargin=20 * mm, rightMargin=20 * mm,
        topMargin=22 * mm, bottomMargin=20 * mm,
        title="Statement of Work — Cheeky Media Website Rebuild",
        author="Broadbrand",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin,
                  doc.width, doc.height, id="main")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame],
                                       onPage=header_footer)])

    e = []  # story

    # Masthead — Broadbrand logo + document meta
    logo = Image(LOGO, width=44 * mm, height=11 * mm, hAlign="LEFT")
    masthead = Table([[
        logo,
        Paragraph("Statement of Work<br/>Prepared June 2026 · Valid 30 days", right),
    ]], colWidths=[doc.width * 0.5, doc.width * 0.5])
    masthead.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    e.append(masthead)

    e.append(Paragraph("WEBSITE REBUILD PROPOSAL", eyebrow))
    e.append(Paragraph("Cheeky Media website rebuild", h1))
    e.append(Spacer(1, 3))
    e.append(Paragraph("Prepared for Cheeky Media by Broadbrand.", muted))
    e.append(Spacer(1, 8))
    e.append(HRFlowable(width="100%", thickness=0.6, color=LINE))

    # 1. Overview
    e.append(Paragraph("1. Project overview", h2))
    e.append(Paragraph(
        "Broadbrand will design, build and launch a new website for Cheeky Media to "
        "replace the current WordPress and Elementor site. The new site is a fast, "
        "responsive, SEO-ready build on Next.js, deployed to Vercel and tuned for the "
        "Johannesburg market. The goal is a site as bold as the work Cheeky Media makes, "
        "built to turn visitors into enquiries.", body))

    # 2. Scope
    e.append(Paragraph("2. Scope of work (included in the fixed fee)", h2))
    e.append(bullets([
        "Custom responsive design, mobile-first",
        "Up to 15 core page templates, such as Home, About, Services, Portfolio and Contact",
        "Reusable component library for consistent, on-brand pages",
        "On-page SEO basics: meta tags, Open Graph, sitemap, clean URLs",
        "Contact form with validation and email / lead routing",
        "Tap-to-call and tap-to-email links for mobile visitors",
        "GA4 and Vercel Analytics setup",
        "Vercel deployment and domain connection",
        "One revision round per page",
    ]))

    # 3 + 4 side by side
    e.append(Paragraph("3. Optional extras and 4. What Cheeky Media provides", h2))
    opt = [Paragraph("<b>Broadbrand can take care of (if needed)</b>", body), Spacer(1, 3)]
    opt += [bullets([
        "Copywriting, if you would rather not supply the words",
        "Stock photography sourcing and licensing where you have no imagery",
    ])]
    prov = [Paragraph("<b>Provided by Cheeky Media</b>", body), Spacer(1, 3)]
    prov += [bullets([
        "CI / brand guidelines (colours, typography, tone)",
        "Logo files in all formats (vector preferred)",
        "Work-done (portfolio) assets: stills, video, client names",
    ])]
    twocol = Table([[opt, prov]], colWidths=[doc.width * 0.5, doc.width * 0.5])
    twocol.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (0, 0), 0),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("LEFTPADDING", (1, 0), (1, 0), 10),
    ]))
    e.append(twocol)

    # 5. Out of scope
    e.append(Paragraph("5. Out of scope (quoted separately)", h2))
    e.append(bullets([
        "E-commerce / payments",
        "Custom or headless CMS build",
        "Original photo / video shoots (stock sourcing is covered above)",
        "Bespoke third-party / API integrations",
        "Ongoing maintenance or retainer support",
        "Brand identity / logo redesign",
    ]))

    # 6. Timeline
    e.append(Paragraph("6. Timeline (approximately 4 weeks)", h2))
    tl = [["Stage", "Milestone", "Timing"]]
    for n, title, timing in [
        ("01", "Discovery and sign-off", "Week 1"),
        ("02", "Design direction", "Week 1 to 2"),
        ("03", "Build", "Week 2 to 3"),
        ("04", "Content and review", "Week 4"),
        ("05", "QA and launch", "Week 4"),
    ]:
        tl.append([n, title, timing])
    t = Table(tl, colWidths=[doc.width * 0.12, doc.width * 0.6, doc.width * 0.28])
    t.setStyle(TableStyle([
        ("FONT", (0, 0), (-1, 0), "Helvetica-Bold", 8.5),
        ("FONT", (0, 1), (-1, -1), "Helvetica", 9.5),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("BACKGROUND", (0, 0), (-1, 0), INK),
        ("TEXTCOLOR", (0, 1), (0, -1), CORAL),
        ("FONT", (0, 1), (0, -1), "Helvetica-Bold", 9.5),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#FAFAFA")]),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, LINE),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ]))
    e.append(t)

    # 7. Investment
    e.append(Paragraph("7. Investment", h2))
    inv = Table([[
        Paragraph("Once-off fixed fee", small),
        Paragraph("R30,000", S("price", fontName="Helvetica-Bold", fontSize=20,
                               textColor=INK, alignment=2)),
    ]], colWidths=[doc.width * 0.5, doc.width * 0.5])
    inv.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BACKGROUND", (0, 0), (-1, -1), SOFT),
        ("BOX", (0, 0), (-1, -1), 1, CORAL),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("LEFTPADDING", (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
    ]))
    e.append(inv)
    e.append(Spacer(1, 5))
    e.append(bullets([
        "50% to begin, 50% on launch",
        "Fixed scope, fixed price, no hourly surprises",
        "Quote valid for 30 days",
    ]))

    # 8. Hosting
    e.append(Paragraph("8. Hosting and running costs", h2))
    e.append(Paragraph(
        "The site is hosted on Vercel and billed monthly. The recommended plan for a live "
        "client site is Vercel Pro at $20 per month (read as an approximate ZAR equivalent "
        "at the current exchange rate: [ZAR PLACEHOLDER]). For a marketing site of this "
        "size, normal traffic sits inside the included Pro allowances, so the realistic "
        "ongoing cost is the $20 per month base, and a spend cap can be set.", body))
    e.append(Spacer(1, 5))
    note = Table([[Paragraph(
        "<b>Paid directly to Vercel, not to Broadbrand.</b> This monthly hosting cost is "
        "paid by Cheeky Media directly to Vercel on your own Vercel account. It is not paid "
        "to Broadbrand and is separate from the once-off build fee. Broadbrand sets up the "
        "account and connects your domain, then you keep full ownership and control.", body)]],
        colWidths=[doc.width])
    note.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), SOFT),
        ("BOX", (0, 0), (-1, -1), 1, CORAL),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
    ]))
    e.append(note)

    # 9. Acceptance
    sign = []
    sign.append(Paragraph("9. Acceptance", h2))
    sign.append(Paragraph(
        "By signing below, both parties agree to the scope, timeline and investment set out "
        "in this Statement of Work.", body))
    sign.append(Spacer(1, 18))
    sig = Table([
        ["", ""],
        [Paragraph("Cheeky Media", small), Paragraph("Broadbrand", small)],
        [Paragraph("Name, signature and date", muted), Paragraph("Name, signature and date", muted)],
    ], colWidths=[doc.width * 0.46, doc.width * 0.46], hAlign="LEFT")
    sig.setStyle(TableStyle([
        ("LINEABOVE", (0, 1), (0, 1), 0.8, INK),
        ("LINEABOVE", (1, 1), (1, 1), 0.8, INK),
        ("TOPPADDING", (0, 1), (-1, 1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, -1), 30),
    ]))
    sign.append(sig)
    e.append(KeepTogether(sign))

    doc.build(e)
    print("Wrote", OUT)


if __name__ == "__main__":
    build()
