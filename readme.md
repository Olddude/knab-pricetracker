- Readme as PDF Markdown Export
- • The code / instructions to create the infrastructure should be part of the repository.
- Write the tests
- -Evaluation We will evaluate if your code: • Solves the problem • Is clean • Is secure • Has quality • Has tests • Is cost efficient
- Add deployment scripts


## Code Assignment KNAB

Pieter Boerboom - 21-05-2023 -
[LinkedIn](https://www.linkedin.com/in/pieterboerboom/) -
[Email](mailto:info@pieterboerboom.nl)

# Setup and run Instructions
Configure the .env file with the correct environment variables such as the API key and email server settings. To make it easy to see a working version of the application I've included my .env file. Normally this file would be excluded from the repository. 


```
    npm install
    npm run start
```
The server is now running on port 3000. 
Send a POST request to http://localhost:3000/ with the following body to receive price notifications for the given crypto currency code:

```json
{
    "email": "example@example.com",
    "cryptoCurrencyCode": "BTC"
}
```
Per requirements the currency code is locked to BTC only.


You can paste this cURL command in your terminal to try it out:

```
curl --location 'http://localhost:3000/api/crypto' \
--header 'Content-Type: application/json' \
--data-raw '{ "email": "info@pieterboerboom.nl", "cryptocurrency": "BTC" }'
```

# Test Instructions

```
    npx jest
```

# Deployment instructions
- You can deploy this application to any cloud provider that supports Node.JS. You can also dockerize it and deploy it to a container platform or write Terraform scripts to deploy it to AWS, Azure or Google Cloud.

- As an example we'll use Render.com

- There are all kinds of ways to do it 
