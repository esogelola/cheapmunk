> Original writeup for Cheapmunk, as presented on DevPost for VTHacks 2022. Edited for clarity.

## Inspiration

Managing finances is a tedious and tiresome affair. We developed this personal budget app to make it easy to acquire the good habit of keeping accounts. Start with tracking expenses and income, then build up to setting and managing budgets. Whether you want to save money, pay off debts more easily, or just improve your financial habits Cheapmunk will help you get there!

## What It Does

### GET USED TO BEING LAZY

> Cheapmunk is good at remembering and approximating expenses that are regularly entered. Entering accounts will become a simple tap-and-go process as the software learns your financial patterns.

### TAILORED TO YOUR NEEDS

> Cheapmunk allows you to manage your money on your own terms, with rolling budgets that track monthly costs and split temporary budgets that account for what you spent while on vacation.

### ENJOY ACCOUNTING

> Cheapmunk will make you feel rewarded while keeping track of your finances. Game-like prompts, configurable icon packs, and a simple, easy-to-use interface takes the stress out of money management—and even make it fun.

## How We Built It

Our Software is designed with a micro-service architecture with a frontend built entirely with React Native,Our API is built on a Python Server, that utilizes Flask & the Capital One Nessie API. We attempted to build this as a micro-service architecture to support various different backend languages.

The front end is built upon a solid foundation of the ReactNative-Redux-Javascript project.

Overall, our current iteration is a designed and semi-functional application that is built for mobile devices, accessible using any modern device.

The API Gateway is built on Python with Flask conducting the routing. Our API Gateway also conducts important authentication with Google Firebase.

---

### Technologies Used (Our Stack)

---

![CheapmunkStack](https://i.imgur.com/2UL9laY.png)

In only 34 hours, we were tasked with creating a **mobile application** to **support** help young adults budget their money.

| Stack         | Technology Used                            |
| ------------- | ------------------------------------------ |
| Front-End     | React Native, Figma, Javascript,Redux, CSS |
| Back-End      | Google Firebase, Flask, Python             |
| Cloud/Hosting | OAuth, Google Cloud, Google NLP, Heroku    |
| Database      | MongoDB                                    |
| Querying      | MongoEngine                                |

## Challenges We Ran Into

When developing Wadle we opted to utilize a more complex backend which included

- Designing a modular frontend with support
- Second time working as a team at a Hackathon
- Developing a full-stack application that involves querying a database and displaying

## Accomplishments We're Proud Of

- Creating an Accessible Design
- Implementing most designs into code through styling
- Building a functioning Flask Backend
- Building an app that affects us directly as young adults struggling with Student loans!
- Comparing current budgeting apps and realizing that flaws and over complications

## What We Learned

Through the process of developing Cheapmunk for VTHacks 2022 we learned many skills that will help our team as we work on other projects in the future.

- Prioritization of features
- Git and project management skills in a fast-paced team environment
- Greater collaboration for data analysis and modelling
- Importance of planning and user research prior to developing an application

# Business Viability

## Revenue Streams

- Integrating a point system, where the user can earn points through proper budgeting.
- Google ads, monthly subscription to get rid of ads.
- Premium Accounts with more users to one account (family plan)

## Obtaining Users

- Working with Banks and trading platforms.
- Target certain demographics & adapt to environments such as universities, highschool and other communities

## Lowering Expenses

- Deploying & building a web app allows for extensive A/B testing of users with respect to new features
- Scalable backend technologies provide throughput to scale the technology needed.
- Minimalizing on "additional features" by having the goal set to peer-relationship building

## Competitive Advantage

- Less monetization, no mandatory costs or insurance
- Rather than over complicating the entire budgeting process
- Not presenting an overwhelming amount of data like other applications
- Ability to export and share data with family members and accountants (not questionnaire results).

## What's next for Wadle

As we further develop Wadle we hope to improve on some **current implementations** and **develop additional features**:

- Web application for Desktop users
- Identify a growth target and plan
- Dockerize and Grow
- Implement a family plan
