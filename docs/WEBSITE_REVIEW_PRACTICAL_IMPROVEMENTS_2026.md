# NITAQ ACADEMY — WEBSITE REVIEW
## Practical Improvements & Examples
**Prepared for management, admissions and the website developer**  
*10 October 2026 | www.nitaqacademy.com*

---

### Executive Scope & Priorities
Nitaq has a strong visual direction. The priority is to improve credibility, course clarity and the enquiry journey so students and parents can confidently take the next step.

| Priority | Action |
| :--- | :--- |
| **1 — Credibility** | Verify relationship labels and student results; correct educational claims and package expectations. |
| **2 — Enquiries** | Show the hero message immediately and introduce clear, course-specific assessment and WhatsApp actions. |
| **3 — Course Clarity** | Standardize course facts, teacher profiles, learning evidence and navigation. |
| **4 — Verification** | Check mobile layouts, Arabic presentation, form delivery, performance and enquiry tracking. |

---

### 01 | Graphic Design: Readability & Aesthetics
- **Hero Background**: Keep deep green (`#2E7D32`) with one soft gradient. Reduce floating dots and mathematical symbols so the message leads. Teal accent: `#2BBBAD`.
- **Text Contrast**: White headings and near-white body text on green. Reserve light green for selected highlights.
- **Hero Spacing**: Place headline, short description, and two buttons together beside an authentic classroom photograph. Eliminate dead vertical space.
- **Animation Resilience**: Render headline and buttons immediately (no hydration delay or blocking animation). Animate only subtle decorative accents.
- **Program Cards**: Three equally readable cards on the homepage:
  1. **SAT Preparation**: *"Digital SAT Math and Reading & Writing, with targeted practice based on your starting level."* [Explore SAT Preparation]
  2. **Subject Tuition**: *"Focused support for your child's subjects, curriculum and upcoming assessments."* [Find Subject Support]
  3. **Language Training**: *"Build practical communication skills or prepare for your chosen language exam."* [Find Your Language Course]

---

### 02 | Website Strategy & Enquiry Journey
- **Homepage Hero**:
  > **SAT Preparation, Subject Tuition & Language Training in Sharjah**  
  > *Start with a clear understanding of your learning needs. Our team will help you choose a suitable course at Nitaq Academy in Al Majaz 3.*  
  > [Find My Course] [WhatsApp Admissions]
- **Consistent Navigation**:  
  `SAT Preparation | Subject Tuition | Languages | Other Courses | About | Contact`
- **Course-Specific Action Triggers**:
  - **SAT**: *Take the Free SAT Diagnostic* / *Discuss My SAT Goal*
  - **Subject Tuition**: *Book a Subject Assessment* / *Speak with Admissions*
  - **Languages**: *Book a Language Level Assessment* / *Explore Available Courses*
- **Parent Enquiry Journey**: Course-specific modal/page pre-populating chosen subject, student grade, curriculum, parent name, and WhatsApp number.
- **Context Retention**: When arriving from a course button, pre-select the course; do not dump the visitor onto a generic blank enquiry form.

---

### 03 | Education Credibility & Exact Claims
- **Partnership Wording**: Use *"British Council IELTS Registration Centre"* only if explicitly contracted in writing. Distinguish institute licensing (SPEA Sharjah) from test preparation offerings.
- **Digital SAT Calculator Policy**: Eliminate outdated *"No-Calculator"* claims. Clearly state: *"Math: Concepts, Problem Solving & Desmos. Graphing calculator permitted throughout all digital SAT Math modules."*
- **Diagnostic Disclaimer**: Explicitly state: *"Get an initial overview of strengths and areas for improvement. This screening is a diagnostic baseline, not an official College Board score."*
- **Results Card Framework**: Distinguish verified official SAT scores from mock test growth. Include test date, study duration, and baseline score.

---

### 04 | Course Pages Information Architecture
- **Digital SAT**: Exact breakdown of Reading & Writing + Math, confirmed hours, batch size (8–12), mock exams on Bluebook, fees with VAT transparency.
- **Subject Tuition**: Schoolwork-aligned support. Parent-friendly assessment request (Curriculum: CBSE, IGCSE, IB, American; Grade: 6–12).
- **Spanish**: Separate into two distinct tracks:
  1. *General Spanish* (Everyday conversation, travel, business; A1–C1).
  2. *Exam Preparation* (DELE / SIELE official certifications; timed exam simulation).

---

### 05 | Trust, Evidence & Teacher Profiles
- **Standardized Teacher Profiles**: Teacher Name, Subject Specialization, Verified Qualifications, Years of Experience, Curricula taught, and clear [Enquire About Classes] CTA.
- **Progress Report Transparency**: Sample progress report illustrating actionable student diagnostic feedback across Algebra, Geometry, and Time Management.
- **Real Photography**: Authentic Al Majaz 3 classroom photography with student consent.

---

### 06 | Homepage Restructuring (8 Sections)
1. **Hero**: Clear headline, immediate rendering, dual action buttons.
2. **Trust**: SPEA licensing, Al Majaz 3 location, verified credentials.
3. **Programs**: 3 equal, high-contrast cards (SAT, Tuition, Languages) + More Courses.
4. **Teachers**: Verified teacher profiles and academic leadership.
5. **Learning Process**: 4 clear steps: *Assess → Plan → Learn → Review*.
6. **Evidence**: Verified student score progression & parent reviews.
7. **Campus**: Al Majaz 3 photo, interactive location map, office hours.
8. **Enquiry**: Focused, lightweight lead-generation form.

---

### 07 | Technical Verification & Acceptance Checklist
- [ ] **Mobile Layout**: 360px viewport test (no horizontal overflow, readable buttons).
- [ ] **Hero Loading**: Core headline and CTA buttons render instantly even if GSAP/scripts fail.
- [ ] **Context-Aware WhatsApp**: SAT button opens pre-filled draft (*"Hello, I am interested in SAT preparation..."*).
- [ ] **Form Error Resilience**: Input fields persist on validation failure with clear retry toast.
- [ ] **RTL Arabic Support**: Complete Arabic parity across navigation, forms, and layouts.
- [ ] **Event Tracking**: Granular distinction between WhatsApp clicks and submitted enquiry leads.
