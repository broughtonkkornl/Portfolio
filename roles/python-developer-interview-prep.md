# Python Developer Interview Preparation

Use these as concise starting answers; adjust the opening sentence to the employer's mission and job description.

## 1. Tell me about your Python experience.

I have used Python across scientific research, government, publishing, and healthcare-adjacent environments. At NASA / ORNL DAAC, I use it for applications, services, automation, data workflows, and modernization work. A good example is moving legacy Perl sites and scripts to Python with an efficient templating approach while improving maintainability and supporting ongoing delivery.

## 2. Describe a Python system you owned end to end.

I am the sole architect and lead developer of NASA Earthdata Pub Overview and Forms, which are used by all 12 NASA DAACs and their Data Producers. My work spans application design, API and database integration, user workflows, ongoing modernization, testing, and support. The important lesson is that ownership means making thoughtful technical decisions while staying close to the people who use the system.

## 3. How do you approach an API or data-integration problem?

I begin by clarifying the data contract: the source, consumers, formats, validation rules, failure paths, and operational ownership. I co-developed the Earthdata Pub REST API and built metadata import/export pipelines across multiple formats and standards. I favor clear interfaces, useful errors, and tests around the transformations that would be costly to get wrong.

## 4. Give an example of automation with measurable impact.

At ORNL DAAC, I automated processing workflows that reduced manual processing time by 80%. Earlier, at a publishing company, I automated workflows that changed hours of manual work into a single-button process. In both cases, the value was not just speed; it reduced opportunities for repeated human error and made the work easier to support.

## 5. How do you improve reliability in an existing codebase?

I first understand the current behavior and the highest-risk user paths before changing anything. I have added automated unit and end-to-end testing to improve deployment confidence and reduce regressions, and I use Git and CI/CD practices to make change reviewable and repeatable. I prefer incremental modernization that keeps the application useful while lowering long-term maintenance cost.

## Questions to ask the interviewer

- What Python services or data workflows would this role own in the first six months?
- How are API contracts, testing, and production support handled today?
- Which recurring manual processes would the team most like to automate?
