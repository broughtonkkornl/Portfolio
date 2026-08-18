# Full-Stack Developer Interview Preparation

## 1. How do you approach full-stack work?

I start with the user workflow and the business or research outcome, then work through the interface, service behavior, data model, integrations, and operational needs. My current NASA work spans React and Vue interfaces, Python applications, REST APIs, GraphQL, SQLAlchemy, SQL, automation, and testing. That breadth helps me make tradeoffs without losing sight of the user.

## 2. Describe a project where you had broad ownership.

I am the sole architect and lead developer of NASA Earthdata Pub Overview and Forms. The applications are used by all 12 NASA DAACs and their Data Producers. I own architecture and delivery decisions across the applications and collaborate with stakeholders and other developers to evolve them responsibly.

## 3. How do you connect front-end needs to backend design?

I make the user task the common reference point. The UI needs data that is timely, understandable, and actionable; the backend needs a clear contract and realistic failure behavior. I have co-developed the Earthdata Pub REST API while delivering user-facing applications, so I focus on making those boundaries explicit rather than treating them as separate concerns.

## 4. How do you balance new features with technical quality?

I look for the smallest useful change that improves the user outcome and leaves the codebase in better shape. Automated tests, incremental modernization, documented decisions, and CI/CD practices help the team move quickly without repeatedly paying for the same defects. I have used this approach while modernizing legacy Perl work into Python and evolving active NASA applications.

## 5. Give an example of an outcome you improved.

At ORNL DAAC, I automated processing workflows, reducing manual processing time by 80%. I have also built publishing automation that moved hours of manual work to a single-button process. I measure improvement in time, error reduction, maintainability, and whether the people doing the work are better supported.

## Questions to ask the interviewer

- Which product areas would this role own across the front end, services, and data?
- Where does the team see the biggest friction between user needs and system constraints?
- How are architecture and technical-debt decisions made?
