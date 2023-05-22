# Knab

## Technical questions

## How long did you spend on the coding assignment? What would you add to your solution if you had more time?

I've spend about 6 hours on this assignment. If I had more time I would add the following:

- A Frontend to manage user settings, accounts, notification interval, billing, a marketing page etc...
- Move the cron jobs to a queue system like RabbitMQ or Redis or store them in a database. Cron jobs are not scalable, persistent and hard to debug.
- Improve accuracy of conversion, rounding errors can occur with simple multiplication and conversion in Javascript. Especially when dealing with money.
- Implement secutity features like improved validation, rate limiting, prevent duplicate notificaties, email confirmation etc...
- Think about devops, CI/CD, logging, monitoring, alerting, backups, etc...to make it a production ready application instead of a proof of concept.
- Make the notification emails with a better templating system to make it look nicer.
- I'd improve the REST API to be more RESTful and include clearer API error/status messages and HTTP codes.

## What was the most useful feature that was added to the latest version of your language of choice? Please include a snippet of code that shows how you've used it.

- I'm looking forward to the Temporal date library that is currently in stage 3 of the TC39 process. It will make working with dates and times a lot easier natively but I've decided not to use it in this project because it's not production ready yet.
- The latest Javascript features I use a a lot are the optional chaining operator and object destructuring.
  Example of Object Destructuring:

```javascript
cryptoPrices.forEach(({ currency, price }) => {
  emailContent += `<li>${currency}: ${price.toFixed(2)}</li>`;
});
```

## How would you track down a performance issue in production? Have you ever had to do this?

Yes I've fixed various kinds of performance issues in production ranging from bugs in the code, to performance issues in database queries, to performance issues due to the way the infrastructure was setup.

E.g. on localhost everything was fast, but in production it was slow. This was due to the fact that the database was on a different server and the connection was slow due to various network / firewall jumps.

How I would track down a performance issue in production:

1. See if I can replicate the issue on production
2. See if I can replicate the issue on a staging environment / localhost
3. See if the issue is consistent or intermittent
4. Try to isolate issue. E.g. is it a specific user, is it a specific action, is it a specific page, is it a specific database query.
5. Poke around in the code, database, infrastructure, logs, etc...
6. Create an action plan to resolve the issue
7. Solve the issue, or if it's a bigger issue, create a temporary fix to make sure the application is stable and then create a long term solution.
8. Talk with the team to see if they have any ideas or if they have seen similar issues in the past.
9. If the issue is resolved, create a test to make sure it doesn't happen again in the future.

## What was the latest technical book you have read or tech conference you have been to? What did you learn?

I'm currently reading 'Designing Data Intensive Applications' by Martin Kleppmann. It's a great book about how to design and build scalable, reliable and maintainable applications. It gives me a good overview of the different types of systems and patterns that are used in modern applications.

I'm also re-reading the Pragmatic Programmer and Advanced Javascript.

Furthermore I've been to various conferences in the past and like to go at least to 1 or 2 a year to keep my knowledge up to date and to meet other developers.

If you'd like to know more about this I'd be happy to elaborate in a follow up interview.

## What do you think about this technical assessment?

I think it's a fair assignment that mimics real-world situations. It gives you the freedomn to choose your own tools and approach. I think you can learn more about a developers skills and personality with an assignment like this instead of algo questions or long technical interviews.

## Please, describe yourself using JSON.

```json
{
  "name": "Pieter Boerboom",
  "city": "Amsterdam",
  "age": 29,
  "occupation": "Software Engineer",
  "interests": ["programming", "reading", "traveling"],
  "skills": {
    "frontend": {
      "languages": ["JavaScript", "TypeScript", "ES6+", "HTML5", "CSS", "SASS"],
      "frameworks": ["React", "Next.JS", "Angular"],
      "testing": ["Jest", "Karma", "Jasmine"],
      "design": ["Figma"],
      "methodologies": ["Scrum", "Agile"],
      "tools": ["Jira"]
    },
    "devops": {
      "cloudPlatforms": ["AWS", "Azure"],
      "deploymentTools": ["Azure DevOps", "Jenkins", "Netlify", "Nginx"],
      "versionControl": ["Git"],
      "cicd": ["CI/CD", "GitHub Actions"],
      "containers": ["Docker", "Kubernetes"]
    },
    "backend": {
      "languages": ["Node.js", "Express", "Python"],
      "databases": ["MongoDB", "PostgreSQL", "Firebase", "Supabase"],
      "apis": ["REST APIs"]
    }
  },
  "languages": ["Dutch", "English"]
}
```
