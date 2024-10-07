# Solution

## Explanation

My solution is based on a Max Heap. The reason for this is that getting the top 5 elements from a list is computationally expensive but with a max heap this is instead performed in O(1). The only downside of this is that inserting to the list is performed in O(log(n)), but since both insertion and getting top items are used in the same page, the frequency of usage of both of these endponts will also be the same, making a max heap the most optimised way of storing our scores.

I decided to only allow for alpha-numeric words and phrases to be a definition of palindrome. Therefore the API has a middleware that checks for usage of illegal characters and returns a bad request error if the user submit such characters. Furthermore scores are calculated by the length of the string excluding spaces.

### Valid palindromes:

- Anna --> 4 points
- A man a plan a canal Panama --> 21

### Non palindromes

- rat --> 0 points
- hello world --> 0 points

### Invalid Characters:

- %Anna% --> Bad Request
- A man, a plan, a canal, Panama! --> Bad Request

## Folder Structure

I changed the folder structure to have a src root folder with all the API functionality stored in there. Inside the src folder we can find the following folders:

- **controllers**: Folder that stores the logic to handle incoming request to a specific route.
- **middlewares**: Folder that stores validation middlewares used to secure the application routes.
- **routes**: Folder that stores the route logic of the application.
- **services**: Folder that stores the main business logic of the application.
- **types**: Folder that stores typescript custom types.
- **utils**: Folder that stores utility functions that are abstracted and used throughout the application.

## Template Improvements

### Template

1. I changed the template to use typescript.
2. I installed **"jest"** and **"supertest"** to write **unit** and **integration tests**

### index.js file

1. I deprecated the usage of **function** keyword in **"index.ts"** in favor of **arrow functions**.
2. I deprecated the use of **var** in **"index.ts"** in favor of **let** and **const**
3. I moved the routing logic out of this file because the index.js file should focus solely on Express app settings. The routing logic has been relocated to "/src/routes", which enhances the application's scalability for future additions.
4. I have created a function that closes the server listening to PORT used in integration testing to avoid memory leakage.

## Further Improvements (Not Implemented)

The following improvements have not been implemented in this exercise because modifications to the frontend are required to accommodate these changes:

1. change the GET API route **"/api/getScores"** with **"/api/scores"** to better follow RESTful API guidelines.
2. change the POST API route **"/api/submitEntry"** with **"/api/scores"** to better follow RESTful API guidelines.
