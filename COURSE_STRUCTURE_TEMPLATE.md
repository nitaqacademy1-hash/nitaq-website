# Course Page Standardization Template
# Based on SAT Preparation Page Structure

## Standard Course Page Structure:

### 1. Hero Section (Already done ✓)
- Enhanced gradient background
- Course category badge
- Main heading
- Tagline/description

### 2. Course Detail Section

#### Section 2.1: Course Overview
```html
<div class="content-section">
  <h2>Course <span class="text-gradient">Overview</span></h2>
  <p style="font-size: 1.05rem; line-height: 1.8;">
    [Brief introduction about the course - 2-3 sentences explaining what it is and who needs it]
  </p>
</div>
```

#### Section 2.2: Our [Course] Programs
```html
<div class="content-section">
  <h2>Our [COURSE] <span class="text-gradient">Programs</span></h2>
  
  <!-- Intensive/Complete Program -->
  <div style="background: linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(102, 187, 106, 0.05)); padding: 30px; border-radius: 16px; border-left: 4px solid var(--primary-color); margin-bottom: 25px;">
    <h3 style="color: var(--primary-color); margin-bottom: 15px; font-size: 1.5rem;">[Program Name] – [Duration]</h3>
    <p style="color: var(--text-gray); margin-bottom: 15px; font-style: italic;">Online | Offline</p>
    <ul class="styled-list">
      <li>[Feature 1]</li>
      <li>[Feature 2]</li>
      <li>[Feature 3]</li>
    </ul>
  </div>
  
  <!-- Standard Program -->
  <div style="background: linear-gradient(135deg, rgba(43, 187, 173, 0.05), rgba(38, 166, 154, 0.05)); padding: 30px; border-radius: 16px; border-left: 4px solid var(--accent-color); margin-bottom: 25px;">
    <h3 style="color: var(--accent-color); margin-bottom: 15px; font-size: 1.5rem;">[Program Name] – [Duration]</h3>
    <p style="color: var(--text-gray); margin-bottom: 15px; font-style: italic;">Online | Offline</p>
    <ul class="styled-list">
      <li>[Feature 1]</li>
      <li>[Feature 2]</li>
      <li>[Feature 3]</li>
    </ul>
  </div>
  
  <!-- Express/Quick Program (if applicable) -->
  <div style="background: linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(102, 187, 106, 0.05)); padding: 30px; border-radius: 16px; border-left: 4px solid var(--primary-color); margin-bottom: 25px;">
    <h3 style="color: var(--primary-color); margin-bottom: 15px; font-size: 1.5rem;">[Program Name] – [Duration]</h3>
    <p style="color: var(--text-gray); margin-bottom: 15px; font-style: italic;">Online | Offline</p>
    <ul class="styled-list">
      <li>[Feature 1]</li>
      <li>[Feature 2]</li>
      <li>[Feature 3]</li>
    </ul>
  </div>
</div>
```

#### Section 2.3: Why Choose Nitaq for [Course]?
```html
<div class="content-section">
  <h2>Why Choose <span class="text-gradient">Nitaq for [COURSE]?</span></h2>
  <ul class="styled-list">
    <li><strong>[Feature Title]:</strong> [Description]</li>
    <li><strong>[Feature Title]:</strong> [Description]</li>
    <li><strong>[Feature Title]:</strong> [Description]</li>
    <li><strong>[Feature Title]:</strong> [Description]</li>
    <li><strong>[Feature Title]:</strong> [Description]</li>
  </ul>
  <p style="font-size: 1.1rem; color: var(--primary-color); font-weight: 600; margin-top: 25px; padding: 20px; background: rgba(46, 125, 50, 0.05); border-radius: 12px; text-align: center;">
    "[Motivational quote related to the course]"
  </p>
</div>
```

#### Section 2.4: Who Is This Course For?
```html
<div class="content-section">
  <h3>Who Is This <span class="text-gradient">Course For?</span></h3>
  <p>This [COURSE] program is ideal for:</p>
  <ul class="styled-list">
    <li><strong>[Audience Type]:</strong> [Description]</li>
    <li><strong>[Audience Type]:</strong> [Description]</li>
    <li><strong>[Audience Type]:</strong> [Description]</li>
    <li><strong>[Audience Type]:</strong> [Description]</li>
  </ul>
</div>
```

#### Section 2.5: What You'll Master
```html
<div class="content-section">
  <h3>What You'll <span class="text-gradient">Master</span></h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
    <div style="background: var(--bg-light); padding: 25px; border-radius: 12px; text-align: center;">
      <div style="font-size: 2.5rem; margin-bottom: 10px;">[ICON]</div>
      <h4 style="color: var(--primary-color); margin-bottom: 10px;">[Skill/Subject Name]</h4>
    </div>
    <!-- Repeat for each skill -->
  </div>
</div>
```

#### Section 2.6: Career Opportunities
```html
<div class="content-section">
  <h3>Career Opportunities <span class=" text-gradient">[or custom subtitle]</span></h3>
  <p>[Intro sentence about opportunities]</p>
  <ul class="styled-list">
    <li>[Opportunity 1]</li>
    <li>[Opportunity 2]</li>
    <li>[Opportunity 3]</li>
  </ul>
  <p style="font-size: 1.1rem; color: var(--accent-color); font-weight: 600; margin-top: 20px; font-style: italic;">
    "[Motivational closing quote]"
  </p>
</div>
```

#### Section 2.7: Why Nitaq? (Final Highlight Box)
```html
<div class="content-section" style="background: linear-gradient(135deg, rgba(46, 125, 50, 0.03), rgba(102, 187, 106, 0.03)); padding: 40px; border-radius: 20px; border: 2px solid rgba(46, 125, 50, 0.1);">
  <h2 style="text-align: center; margin-bottom: 30px;">Why <span class="text-gradient">Nitaq?</span></h2>
  <p style="font-size: 1.2rem; color: var(--primary-color); font-weight: 600; text-align: center; margin-bottom: 30px;">
    "[Main tagline]"
  </p>
  <ul class="styled-list" style="max-width: 800px; margin: 0 auto;">
    <li>[Benefit 1]</li>
    <li>[Benefit 2]</li>
    <li>[Benefit 3]</li>
    <li>[Benefit 4]</li>
    <li>[Benefit 5]</li>
  </ul>
  <p style="font-size: 1.15rem; color: var(--text-dark); font-weight: 600; text-align: center; margin-top: 35px; padding-top: 30px; border-top: 2px solid rgba(46, 125, 50, 0.15);">
    "[Final powerful statement]"
  </p>
</div>
```

---

## Courses to Update (Priority Order):

### Test Preparations:
1. ✅ SAT Preparation (Already done - template)
2. ✅ GRE Preparation (Already has programs)
3. ✅ GMAT Preparation (Already has programs)
4. ⏳ TOEFL Course
5. ⏳ PTE Course
6. ✅ IELTS Course (Already has programs)
7. ⏳ Academic Excellence
8. ⏳ Foundation JEE/NEET
9. ⏳ AI & Robotics for Kids

### Professional Certifications:
10. ✅ ACCA (Already done)
11. ✅ CMA (Already done)
12. ✅ CPA (Already done)
13. ⏳ AI Course
14. ⏳ Power BI & Excel
15. ⏳ UAE VAT & Tax
16. ⏳ CHRM
17. ⏳ HRM Courses
18. ⏳ Marketing Training
19. ⏳ Sales & Negotiations
20. ⏳ Soft Skills
21. ⏳ Data Management
22. ⏳ CPCD Courses

### Language Trainings:
23. ⏳ Spoken English
24. ⏳ Spoken Arabic
25. ⏳ French
26. ⏳ German
27. ⏳ Spanish

---

## Notes:
- Each course needs custom content appropriate to its subject
- "What You'll Master" section should have 3-4 relevant items
- Program boxes should reflect actual course offerings
- Career opportunities should be specific to each field
