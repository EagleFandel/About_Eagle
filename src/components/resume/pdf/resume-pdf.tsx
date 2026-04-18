import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import type { ResumeData, ResumeLocale, ResumeText } from "@/types/resume";

Font.register({
  family: "NotoSansSC",
  fonts: [
    { src: "C:/Windows/Fonts/Noto Sans SC (TrueType).otf", fontWeight: 400 },
    { src: "C:/Windows/Fonts/Noto Sans SC Bold (TrueType).otf", fontWeight: 700 },
  ],
});

const C = {
  bg: "#0B1929",
  accent: "#5EEAD4",
  accentSoft: "#94A3B8",
  ink: "#F1F5F9",
  inkSoft: "#94A3B8",
  line: "#1E3A4D",
  white: "#FFFFFF",
  cardBg: "#0F2439",
};

const s = StyleSheet.create({
  page: {
    backgroundColor: C.bg,
    padding: "40 48",
    fontFamily: "NotoSansSC",
    fontSize: 9,
    color: C.ink,
  },
  // Header
  header: { marginBottom: 28 },
  name: { fontSize: 28, fontWeight: 700, color: C.white, letterSpacing: 1 },
  headline: { fontSize: 11, color: C.accent, marginTop: 4, fontWeight: 500 },
  contactLine: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 4,
  },
  contactItem: { fontSize: 8, color: C.inkSoft },
  contactSep: { fontSize: 8, color: C.inkSoft, marginHorizontal: 4 },
  // Section
  section: { marginBottom: 22 },
  sectionHeading: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: `1 solid ${C.line}`,
  },
  sectionIndex: { fontSize: 8, color: C.accentSoft, marginRight: 8, fontWeight: 500 },
  sectionTitle: { fontSize: 14, color: C.white, fontWeight: 700 },
  // Summary
  summaryText: { fontSize: 9, color: C.inkSoft, lineHeight: 1.7 },
  // Experience
  expCard: { marginBottom: 14 },
  expCardHead: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  expOrg: { fontSize: 10, fontWeight: 600, color: C.white },
  expPeriod: { fontSize: 8, color: C.inkSoft },
  expTitle: { fontSize: 9, color: C.accent, marginBottom: 5 },
  expBullets: { paddingLeft: 0 },
  expBullet: { fontSize: 8.5, color: C.inkSoft, lineHeight: 1.6, marginBottom: 2 },
  // Projects
  projSectionHeading: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 16,
    marginBottom: 8,
    paddingTop: 10,
    borderTop: `1 solid ${C.line}`,
  },
  projCard: { marginBottom: 14 },
  projCardHead: { flexDirection: "row", justifyContent: "space-between", marginBottom: 3 },
  projEvent: { fontSize: 8, color: C.inkSoft },
  projPeriod: { fontSize: 8, color: C.inkSoft },
  projName: { fontSize: 10, fontWeight: 600, color: C.white, marginBottom: 2 },
  projRole: { fontSize: 8, color: C.accent, marginBottom: 4 },
  projBullet: { fontSize: 8.5, color: C.inkSoft, lineHeight: 1.6, marginBottom: 2 },
  stackLine: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginTop: 4 },
  stackTag: { fontSize: 7, color: C.accentSoft, backgroundColor: C.cardBg, padding: "2 6", borderRadius: 3 },
  projOutcome: { fontSize: 8, color: C.accent, marginTop: 4 },
  // Awards
  awardsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 14 },
  metricCard: { backgroundColor: C.cardBg, padding: "10 14", borderRadius: 6, minWidth: 80, alignItems: "center" },
  metricValue: { fontSize: 22, fontWeight: 700, color: C.white },
  metricLabel: { fontSize: 7.5, color: C.inkSoft, marginTop: 3, textAlign: "center" },
  timeline: {},
  timelineItem: { marginBottom: 10 },
  timelineYear: { fontSize: 8, color: C.accent, fontWeight: 600, marginBottom: 2 },
  timelineTitle: { fontSize: 9, fontWeight: 600, color: C.white },
  timelineDetail: { fontSize: 8, color: C.inkSoft, marginTop: 1 },
  // Skills
  skillsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  skillGroup: { marginBottom: 8, minWidth: "45%" },
  skillLabel: { fontSize: 8.5, fontWeight: 600, color: C.accent, marginBottom: 4 },
  skillTags: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  skillTag: { fontSize: 7.5, color: C.inkSoft, backgroundColor: C.cardBg, padding: "2 6", borderRadius: 3 },
  // Education
  eduCard: { marginBottom: 8 },
  eduSchool: { fontSize: 9.5, fontWeight: 600, color: C.white },
  eduProgram: { fontSize: 8.5, color: C.accent, marginTop: 2 },
  eduPeriod: { fontSize: 8, color: C.inkSoft, marginTop: 2 },
  eduDetail: { fontSize: 8, color: C.inkSoft, marginTop: 3, lineHeight: 1.5 },
  // Footer
  footer: { position: "absolute", bottom: 30, left: 48, right: 48 },
  footerLine: { borderTop: `1 solid ${C.line}`, paddingTop: 6, flexDirection: "row", justifyContent: "space-between" },
  footerText: { fontSize: 7.5, color: C.inkSoft },
});

const T = {
  sectionTitles: {
    zh: ["职业摘要", "核心经历", "代表项目", "开源项目", "奖项与影响力", "技能矩阵", "教育与语言"],
    en: ["Professional Summary", "Core Experience", "Featured Projects", "Open Source", "Awards & Impact", "Skills", "Education"],
  },
};

function rt(text: ResumeText, locale: ResumeLocale) {
  return text[locale];
}

interface Props {
  data: ResumeData;
  locale: ResumeLocale;
}

export function ResumePDF({ data, locale }: Props) {
  const { basics: b, impactMetrics, experiences, projects, awards, skillGroups, education } = data;

  const st = T.sectionTitles[locale];
  const now = new Date(data.updatedAt);
  const updatedStr = locale === "zh"
    ? now.toLocaleDateString("zh-CN")
    : now.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

  // Group projects by section
  const projectGroups: Record<string, typeof projects> = {};
  for (const p of projects) {
    const sec = p.section || "";
    if (!projectGroups[sec]) projectGroups[sec] = [];
    projectGroups[sec].push(p);
  }

  return (
    <Document>
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <Text style={s.name}>{rt(b.name, locale)}</Text>
          <Text style={s.headline}>{rt(b.headline, locale)}</Text>
          <View style={s.contactLine}>
            <Text style={s.contactItem}>{b.email}</Text>
            <Text style={s.contactSep}>|</Text>
            <Text style={s.contactItem}>{b.phone}</Text>
            <Text style={s.contactSep}>|</Text>
            <Text style={s.contactItem}>{b.github}</Text>
            <Text style={s.contactSep}>|</Text>
            <Text style={s.contactItem}>{rt(b.location, locale)}</Text>
          </View>
        </View>

        {/* 00 Summary */}
        <View style={s.section}>
          <View style={s.sectionHeading}>
            <Text style={s.sectionIndex}>00</Text>
            <Text style={s.sectionTitle}>{st[0]}</Text>
          </View>
          <Text style={s.summaryText}>{rt(b.summary, locale)}</Text>
        </View>

        {/* 01 Experience */}
        <View style={s.section}>
          <View style={s.sectionHeading}>
            <Text style={s.sectionIndex}>01</Text>
            <Text style={s.sectionTitle}>{st[1]}</Text>
          </View>
          {experiences.map((exp) => (
            <View key={exp.id} style={s.expCard}>
              <View style={s.expCardHead}>
                <Text style={s.expOrg}>{rt(exp.org, locale)}</Text>
                <Text style={s.expPeriod}>{rt(exp.period, locale)}</Text>
              </View>
              <Text style={s.expTitle}>{rt(exp.title, locale)}</Text>
              {exp.highlights.map((h, i) => (
                <Text key={i} style={s.expBullet}>• {rt(h, locale)}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* 02+ Projects */}
        {(["代表项目", "开源项目"] as const).map((secKey) => {
          const group = projectGroups[secKey];
          if (!group || group.length === 0) return null;
          const secIndex = secKey === "代表项目" ? "02" : "03";
          const secLabel = secKey === "代表项目" ? st[2] : st[3];
          return (
            <View key={secKey} style={s.section}>
              <View style={s.projSectionHeading}>
                <Text style={s.sectionIndex}>{secIndex}</Text>
                <Text style={s.sectionTitle}>{secLabel}</Text>
              </View>
              {group.map((proj) => (
                <View key={proj.id} style={s.projCard}>
                  <View style={s.projCardHead}>
                    <Text style={s.projEvent}>{rt(proj.event, locale)}</Text>
                    <Text style={s.projPeriod}>{rt(proj.period, locale)}</Text>
                  </View>
                  <Text style={s.projName}>{rt(proj.name, locale)}</Text>
                  <Text style={s.projRole}>{rt(proj.role, locale)}</Text>
                  {proj.highlights.map((h, i) => (
                    <Text key={i} style={s.projBullet}>• {rt(h, locale)}</Text>
                  ))}
                  <View style={s.stackLine}>
                    {proj.stack.map((tag) => (
                      <Text key={tag} style={s.stackTag}>{tag}</Text>
                    ))}
                  </View>
                  {proj.outcome && (
                    <Text style={s.projOutcome}>{rt(proj.outcome, locale)}</Text>
                  )}
                </View>
              ))}
            </View>
          );
        })}

        {/* 04 Awards */}
        <View style={s.section}>
          <View style={s.sectionHeading}>
            <Text style={s.sectionIndex}>04</Text>
            <Text style={s.sectionTitle}>{st[4]}</Text>
          </View>
          <View style={s.awardsGrid}>
            {impactMetrics.map((m) => (
              <View key={m.id} style={s.metricCard}>
                <Text style={s.metricValue}>{m.value.toLocaleString()}</Text>
                <Text style={s.metricLabel}>{rt(m.label, locale)}</Text>
              </View>
            ))}
          </View>
          {awards.map((award) => (
            <View key={award.id} style={s.timelineItem}>
              <Text style={s.timelineYear}>{award.year}</Text>
              <Text style={s.timelineTitle}>{rt(award.title, locale)}</Text>
              <Text style={s.timelineDetail}>{rt(award.detail, locale)}</Text>
            </View>
          ))}
        </View>

        {/* 05 Skills */}
        <View style={s.section}>
          <View style={s.sectionHeading}>
            <Text style={s.sectionIndex}>05</Text>
            <Text style={s.sectionTitle}>{st[5]}</Text>
          </View>
          <View style={s.skillsGrid}>
            {skillGroups.map((g) => (
              <View key={g.id} style={s.skillGroup}>
                <Text style={s.skillLabel}>{rt(g.label, locale)}</Text>
                <View style={s.skillTags}>
                  {g.skills.map((sk) => (
                    <Text key={sk} style={s.skillTag}>{sk}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* 06 Education */}
        <View style={s.section}>
          <View style={s.sectionHeading}>
            <Text style={s.sectionIndex}>06</Text>
            <Text style={s.sectionTitle}>{st[6]}</Text>
          </View>
          {education.map((edu) => (
            <View key={edu.id} style={s.eduCard}>
              <Text style={s.eduSchool}>{rt(edu.school, locale)}</Text>
              <Text style={s.eduProgram}>{rt(edu.program, locale)}</Text>
              <Text style={s.eduPeriod}>{rt(edu.period, locale)}</Text>
              <Text style={s.eduDetail}>{rt(edu.detail, locale)}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={s.footer} fixed>
          <View style={s.footerLine}>
            <Text style={s.footerText}>
              {locale === "zh" ? "更新于" : "Updated"}: {updatedStr}
            </Text>
            <Text style={s.footerText}>{data.version}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
