# Endpoints

## <span style="background-color:lightblue; padding: 10px">Users</span>

### / 
  - it should return this documentation, or some kind of document

### /categories
  - `GET` request
  - returns an array with the categories and their id in `JSON` format (code: 200)
  ```json
  [
    {
      "id": "1",
      "name": "Category 1",
      "links": 0
    },
    {
      "id": "2",
      "name": "Category 2",
      "links": 2
    },
    ...
  ]
  ```

### /category/:id
  - `GET` request
  - returns an array with all the approved links that belong to the received category id in `JSON` format (code: 200)
  ```json  
  [
    {
      "id": "1",
      "url": "https://www.bestfor.dev",
      "title": "Best resources around the world",
      "votes": "929" //should be calculated from the database,
      "creation_date": "2019-01-27 12:20:10"
    },
    ...
  ]  
  ```
- returns error message if the category id is not valid `404 NOT FOUND`

### /add
  - `POST` request
  - takes the following information in `JSON` format:
    - url
    - title
    - category
    - the id of the submitter (is the id provided by Twitter after the login process)
  ```JSON
  {
    "url": "https://nota.scam",
    "title": "Totally not a scam",
    "Category": "JavaScript",
    "id": "25456"
  }
  ```
  - it will add the link to the database as a nonapproved link. The system will set a `creation_date` field to `current time` 
  - If everything is fine and create dnew link code `201 CREATED`
  - If missing parameters returns `400 BAD REQUEST` -> I have to check this one. I'm not sure.
  - If the user is not logged in return a `401 UNAUTHORIZED`
  - If the link already exists `409 CONFLICT` 

### /request-token
  - `GET` request
  - used for the Twitter login process
  - it's using the `getRequestToken` function from the [node-twitter-api](https://www.npmjs.com/package/node-twitter-api) package
  - redirects the user to the Twitter login page
  - after a successful log in, Twitter will redirect the user to the provided callback url

### /access-token
  - `GET` request
  - used for the Twitter login process
  - it's using the `getAccessToken` and `verifyCredentials` functions from the [node-twitter-api](https://www.npmjs.com/package/node-twitter-api) package
  - redirects the user to the frontend, sending also the `id` and the `screen_name` both provided by Twitter
  - for an additional example of using the [node-twitter-api](https://www.npmjs.com/package/node-twitter-api) package you can check this [article](https://www.codementor.io/chrisharrington/how-to-implement-twitter-sign-expressjs-oauth-du107vbhy)
  
## <span style="background-color:lightgreen; padding: 10px">Admins/Moderators</span>

### /mod
  - `GET` request
  - takes an `id` parameter
  - if the `id` belongs to an admin/moderator it will log them into the dashboard

### /proposed-links
  - `GET` request
  - returns an array with all of the nonapproved links in `JSON` format (code: 200)
  ```json
  [
    {
      "id": "45",
      "url": "https://www.bestfor.dev",
      "title": "Best resources around the world",
      "category": "Awesome category"
    },
    ...
  ]
  ```
  - returns 0 if all links are approved. 
  - If the API returns an empty array ```[]``` -> Code `200 SUCCESS` or If the API returns empty body -> Code `204 NO CONTENT`
  - If missing parameters returns `400 BAD REQUEST`
  - If the user is not logged returns a `401 UNAUTHORIZED`
  - If the user is not allowed (it's not a moderator) returns a `403 FORBIDDEN` 

### /approve
  - `POST` request
  - takes the `id` of the link that will be approved in `JSON`
  - returns 200 if the database was updated with success
  - If missing parameters returns `400 BAD REQUEST`
  - If the user is not logged returns a `401 UNAUTHORIZED`
  - If the user is not allowed (it's not a moderator) returns a `403 FORBIDDEN` 

### /delete
  - `POST` request
  - takes the `id` of the link that will be deleted in `JSON`
  - returns 200 if the database was updated with success
  - If missing parameters returns `400 BAD REQUEST`
  - If the user is not logged returns a `401 UNAUTHORIZED`
  - If the user is not allowed (it's not a moderator) returns a `403 FORBIDDEN`
