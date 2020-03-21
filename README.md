# RESTful Task Manager API

This application was built by Eyal Roman to demonstrate RESTful Task Manger API server.

The interface allows the developer to preform CRUD operations with users and tasks include authentication, files upload & email sender.

Live demo: https://node-poc-task-manager-api.herokuapp.com/

Feel free to fork & contribute :)

Contact me: eyal.roman@gmail.com



# Requirements

Node.js & npm



# Usage

#### <u>**Create User**</u>

Creates a user and signing in

- **URL**

  /users

- **Method**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  - `name: String `
  - `email: String`
  - `password: String`

  **Optional:**

  - `age: Integer`

- **Sample Call**

  ```json
  {
  	"name": "John Smith",
  	"email": "john.smith@gmail.com",
  	"password": "johnSmithTheKing"
  }
  ```

- **Success Response**

  - **Code:** 201

    **Content:**

    ```json
     {
    	"user": {
    		"age": 0,
    		"_id": "123456789sdas",
    		"name": "John Smith",
    		"email": "john.smith@gmail.com",
    		"createdAt": "2020-03-21T12:49:52.300Z",
    		"updatedAt":"2020-03-21T12:49:52.300Z" ,
    		"__v": 0
    	},
    	"token": "eyHsSuiuhSHU56546546546546as84as1233125135153"
     }
    ```

- **Error Response**
  - **Code:** 400



#### <u>**Logging-in a User**</u>

Login a user with credentials

- **URL**

  /users/login

- **Method**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  - `email: String`
  - `password: String`

- **Sample Call**

  ```json
  {
  	"email": "john.smith@gmail.com",
  	"password": "johnSmithTheKing"
  }
  ```

- **Success Response**

  - **Code:** 200

    **Content:**

    ```json
     {
    	"user": {
    		"age": 0,
    		"_id": "123456789sdas",
    		"name": "John Smith",
    		"email": "john.smith@gmail.com",
    		"createdAt": "2020-03-21T12:49:52.300Z",
    		"updatedAt":"2020-03-21T12:49:52.300Z" ,
    		"__v": 0
    	},
    	"token": "eyHsSuiuhSHU56546546546546as84as1233125135153"
     }
    ```

- **Error Response**
  - **Code:** 400



#### <u>**Logging-out a User**</u>

Logging-out a user

- **URL**

  /users/logout

- **Method**

  `POST`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  - **Code:** 200

- **Error Response**
  - **Code:** 500



#### <u>**Get my User**</u>

Get my user details

- **URL**

  /users/me

- **Method**

  `GET`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  - **Code:** 200

    **Content:**

    ```json
     {
    	"user": {
    		"age": 0,
    		"_id": "123456789sdas",
    		"name": "John Smith",
    		"email": "john.smith@gmail.com",
    		"createdAt": "2020-03-21T12:49:52.300Z",
    		"updatedAt":"2020-03-21T12:49:52.300Z" ,
    		"__v": 0
    	}
     }
    ```

- **Error Response**

  - **Code:** 401

    **Content:**

    ```json
    { "error": "Please authenticate" }
    ```



#### <u>**Update My User**</u>

Creates a user and signing in

- **URL**

  /users

- **Method**

  `PATCH`

- **URL Params**

  None

- **Data Params**

  **Optional:**

  - `name: String `
  - `email: String`
  - `password: String`

  - `age: Integer`

- **Sample Call**

  ```json
  {
  	"name": "John Do",
      "password": "newPass"
  }
  ```

- **Success Response**

  - **Code:** 200

    **Content:**

    ```json
     {
    	"user": {
    		"age": 0,
    		"_id": "123456789sdas",
    		"name": "John Do",
    		"email": "john.smith@gmail.com",
    		"createdAt": "2020-03-21T12:49:52.300Z",
    		"updatedAt":"2020-03-21T12:49:52.300Z" ,
    		"__v": 0
    	}
     }
    ```

- **Error Response**
  - **Code:** 400



#### <u>**Delete my User**</u>

Deletes avatar profile picture

- **URL**

  /users/me

- **Method**

  `DELETE`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  - **Code:** 200

- **Error Response**

  - **Code:** 400



#### <u>**Upload Avatar**</u>

Uploads an avatar profile picture

- **URL**

  /users/me/avatar

- **Method**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  ​	form-data:  

  ​		key: "avatar"

  ​		value: jpg, jpeg or png image <1MB 

- **Success Response**

  - **Code:** 200

- **Error Response**

  - **Code:** 400



#### <u>**Delete Avatar**</u>

Deletes avatar profile picture

- **URL**

  /users/me/avatar

- **Method**

  `DELETE`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  - **Code:** 200

- **Error Response**

  - **Code:** 400



#### <u>**Create Task**</u>

Creates a new task for the connected user

- **URL**

  /tasks

- **Method**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  - `description: String `

  **Optional:**

  - `completed: Boolean`

- **Sample Call**

  ```json
  {
  	"description": "First task",
  	"completed": false
  }
  ```

- **Success Response**

  - **Code:** 201

    **Content:**

    ```json
     {
        "completed": false,
        "_id": "5e764f96e25c433a087d6458",
        "description": "First task",
        "owner": "5e74f3fbbd8a9000e4000759",
        "createdAt": "2020-03-21T17:32:06.057Z",
        "updatedAt": "2020-03-21T17:32:06.057Z",
        "__v": 0
    }
    ```

- **Error Response**
  - **Code:** 400



#### <u>**Get Task**</u>

Gets a task for logged in user by a given id

- **URL**

  /tasks/:id

- **Method**

  `GET`

- **URL Params**

  - `id` - Task id

- **Data Params**

  None

- **Sample Call**

  `tasks/5e7243e63ca541325894c40b`

- **Success Response**
  - **Code:** 201

- **Error Response**
  - **Code:** 400



#### <u>**Get all Tasks**</u>

Get all tasks for logged in user by a given parameters

- **URL**

  /tasks

- **Method**

  `GET`

- **URL Params**

  - `completed` - true or false
  - `limit` - how many tasks to include on the response
  - `skip` - how many tasks to exclude on the response
  - `sortBy` - sort by a given parameter ascending or descending order

- **Data Params**

  None

- **Sample Call**

  `/tasks?completed=false&limit=2&skip=0&sortBy=createdAt_desc`
  
- **Success Response**

  - **Code:** 201

    **Content:**

    ```json
     [
        {
            "completed": false,
            "_id": "5e764f96e25c433a087d6458",
            "description": "Forth",
            "owner": "5e74f3fbbd8a9000e4000759",
            "createdAt": "2020-03-22T17:00:00.000Z",
            "updatedAt": "2020-03-22T00:00:00.000Z",
            "__v": 0
        },
        {
           "completed": false,
           "_id": "3sd764f96e256489sadas87d6468",
           "description": "Third",
           "owner": "5e74f3fbbd8a9000e4000759",
           "createdAt": "2020-03-21T17:32:06.057Z",
           "updatedAt": "2020-03-21T17:32:06.057Z",
           "__v": 0
        }
    ]
    ```

- **Error Response**
  
  - **Code:** 400



#### <u>**Delete Task**</u>

Deletes a task for logged in user by a given id

- **URL**

  /tasks/:id

- **Method**

  `DELETE`

- **URL Params**

  `id` - Task id

- **Data Params**

  None

- **Success Response**

  - **Code:** 200

- **Error Response**

  - **Code:** 400



#### <u>**Update Task**</u>

Updates a task for logged in user by a given id

- **URL**

  /tasks/:id

- **Method**

  `PATCH`

- **URL Params**

  - `id` - Task id

- **Data Params**

  **Optional:**

  - `description: String`
  - `completed: Boolean`

- **Success Response**

  - **Code:** 200

- **Error Response**

  - **Code:** 400



# Installation

1. Clone it: `git clone https://github.com/eyal666/node-poc-task-manager-api.git`
2. Install dependencies: `npm i`
3. Create a `dev.env ` file to configure environment variables:
   1. PORT=3000
   2. SENDGRID_API_KEY=APIkey (mailer agent)
   3. JWT_SECRET=somesecretkey (secret token for passwords)
   4. MONGODB_URL=mongodb://127.0.0.1:27017/task-manger-api (run a local mongodb server)
4. Run development server: `npm run dev`
5. Enjoy !