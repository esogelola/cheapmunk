> Original writeup for Cheapmunk, as presented on DevPost for VTHacks 2022. Edited for clarity.

## Inspiration

Managing finances is a tedious and tiresome affair. We developed this personal budget app to make it easy to acquire the good habit of keeping accounts. Start with tracking expenses and income, then build up to setting and managing budgets. Whether you want to save money, pay off debts more easily, or just improve your financial habits Cheapmunk will help you get there!

## What It Does

### GET USED TO BEING LAZY

Cheapmunk is good at remembering and approximating expenses that are regularly entered. Entering accounts will become a simple tap-and-go process as the software learns your financial patterns.

### TAILORED TO YOUR NEEDS

Cheapmunk allows you to manage your money on your own terms, with rolling budgets that track monthly costs and split temporary budgets that account for what you spent while on vacation.

### ENJOY ACCOUNTING

Cheapmunk will make you feel rewarded while keeping track of your finances. Game-like prompts, configurable icon packs, and a simple, easy-to-use interface takes the stress out of money management—and even make it fun.

## How We Built It

Our Software is designed with a micro-service architecture with a frontend built entirely on React.jsx, our router (or API Gateway) built on a Python Server, and 2 microservices built to meet our application's requirements. The microservice architecture enables greater modularity and a long-term, scalable solution to build out the features of our application. Although it was our first time implementing this model, it enabled a great amount of collaboration.

The front end is built upon a solid foundation of the React-Redux-Javascript project.

Overall, our current iteration is a designed and functional application that is built for the web, accessible using any modern device.

The API Gateway is built on Python with FastAPI conducting the routing. The routing redirects requests to 2 other microservices. Our API Gateway also conducts important authentication with Google Firebase.

Our first microservice is also on Python built for the Machine-Learning component of our application. We utilize user-created data and utilize Natural Language Processing to understand and provide feedback to users.

Our second microservice is built on Golang. This microservice acts as our database connector, conducting all the relevant SQL queries with our external database (PostGreSQL).

---

### Technologies Used (Our Stack)

---

![WadleStack](https://i.imgur.com/sfcE9BK.png)

In only 24 hours, we were tasked with creating a **web application** to **support** individual mental or physical health.

| Stack         | Technology Used                                 |
| ------------- | ----------------------------------------------- |
| Front-End     | React, Figma, Javascript, SCSS                  |
| Back-End      | Google Firebase, Golang, Python, Fibre, FastAPI |
| Cloud/Hosting | OAuth, Google Cloud, Google NLP, Heroku         |
| Database      | Google Firestore, PostgresQL                    |
| Querying      | SQL                                             |

## Challenges We Ran Into

When developing Wadle we opted to utilize a more complex backend which included

- Designing a complex data model
- First time implementing a Software Architecture (Microservices) in a hackathon
- Developing a full-stack application with ML, data analysis, consideration of accessibility in the design, and modularity of a software.

## Accomplishments We're Proud Of

- Creating an Accessible Design
- Implementing most designs into code through styling
- Building a functioning Microservices architecture
- Building an app that affects us directly as students struggling with Mental Health!
- Conducting user interviews and necessary research through our rigorous planning

## What We Learned

Through the process of developing Wadle for CalgaryHacks 2022 we learned many skills that will help our team as we work on other projects in the future.

- Prioritization of features
- Git and project management skills in a fast-paced team environment
- Greater collaboration for data analysis and modelling
- Importance of planning and user research prior to developing an application

# Business Viability

## Revenue Streams

- Integrating Wadle into professional services within the health industry.
- Sponsored Health datasets, API's and other resources

## Obtaining Users

- Working with Health Professionals
- Target certain demographics & adapt to environments such as universities, workplaces and other communities

## Lowering Expenses

- Deploying & building a web app allows for extensive A/B testing of users with respect to new features
- Scalable backend technologies provide throughput to scale the technology needed.
- Minimalizing on "additional features" by having the goal set to peer-relationship building

## Competitive Advantage

- Less monetization, no mandatory costs or insurance
- Rather than receiving "anonymous" support, we help you build your relationship with the people around you
- Not presenting an overwhelming amount of data like other applications
- Ability to export and share data with healthcare professionals and parties (not questionnaire results).
- Changing privacy settings per peer

## What's next for Wadle

As we further develop Wadle we hope to improve on some **current implementations** and **develop additional features**:

- Integrate all backend functions into a single database with redundancy
- Identify a growth target and plan
- Dockerize and Grow
- Utilize applications like voice flow to answer questionnaires orally
