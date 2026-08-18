# Back-End Developer Interview Preparation

## 1. What kinds of backend systems have you built?

My work includes Python applications, REST APIs, GraphQL, SQLAlchemy, relational databases, metadata pipelines, and automation. At NASA / ORNL DAAC, I co-developed the Earthdata Pub REST API and lead Earthdata Pub applications used across all 12 NASA DAACs and their Data Producers. The work is a mix of application behavior, data movement, integration, and operational support.

## 2. How do you design an API for maintainability?

I start by understanding the consumers and the data they need, then define stable inputs, outputs, validation, and failure behavior. I prefer clear contracts and documentation over cleverness. Because APIs become dependencies for other teams, I also think about versioning, observability, tests, and how a consumer will troubleshoot a bad request.

## 3. How have you handled data-processing workflows?

I have built metadata import/export pipelines across multiple formats and standards, as well as daily jobs and import/export routines in previous roles. I identify validation points, isolate transformations, make failure cases visible, and automate repeatable work. At ORNL DAAC, workflow automation reduced manual processing time by 80%.

## 4. How do you work in an existing or legacy system?

I learn its business rules and operational constraints before proposing broad changes. I have modernized Perl sites and scripts to Python and supported broader platform modernization while keeping systems in use. I look for safe seams where a test, interface improvement, or contained replacement can lower risk without disrupting users.

## 5. How do you collaborate with frontend developers and stakeholders?

I make API behavior, data assumptions, and error states explicit early. My background includes front-end development as well, so I understand how backend choices affect user workflows. I have worked directly with research teams, agency users, doctors, and technical colleagues to turn requirements into maintainable systems.

## Questions to ask the interviewer

- What are the most important services and data integrations for this role?
- How does the team define and document API contracts?
- What production reliability or operational problems are highest priority?
