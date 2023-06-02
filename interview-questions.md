# ASSESSMENT 6: Interview Practice Questions

## 1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?
 
Your answer: 
- `rails g migration`
- `belongs_to: cohort` will need to be added to the Student model
- `rails db:migrate`

Researched answer:
- `rails g migration AddCohortToStudents cohort:references`
- check the generated migration file to make sure it contains the `def change`
    `add_reference :students, :cohort, foreign_key: true`
- `rails db:migrate` to apply the foreign key `cohort_id` to represent the association between a cohort and a student

## 2. Which RESTful routes must always be passed params? Why?

Your answer: 
- create, update, delete or show?

Researched answer:
- `GET` requires an `:id` to specify which item you'd like to retrieve
- `PUT/PATCH` also requires an `:id` to specify which item that is needed to send data with the request to change that particular item
- `DELETE` needs an `:id` to speficy which item needs to be deleted

## 3. Name three rails generator commands. What is created by each?

Your answer: 
- `g model` creates the table
- `g controller` creates the keys
- `g resources` creates both

Researched answer:
- model generator `g model ModelName`
    - creates a new model file in `app/models` and a migration file `db/migrate` which defines the database schema

- controller generator `g controller ControllerName`
    - creates a new controller file in the `app/controllers` and generates a corresponding view file in `app/views`

- migration generator `g migration MigrationName`
    - creates a new migration file in `db/migrate`
    - can modify database schema (adding/removing columns, creating/modifying tables)

## 4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
- ~~show~~
---
- controller method: `index`
- retrieves a list of all students from the database and displays it

action: "POST" location: /students 
- create
---
- controller method: `create`
- creates a new student in the database

action: "GET" location: /students/new
- ~~show~~
---
- controller method: `new`
- renders a form to create a new student record

action: "GET" location: /students/2
- show
---
- controller method: `show`
- retrieves the specific student with the "ID = 2" from the database and displays it


action: "GET" location: /students/2/edit
- edit
---
- controller method: `edit`
- shows the student record with the "ID = 2" and shows the existing data to allow editing

action: "PATCH" location: /students/2
- update
---
- controller method: `update`
- updates the student record with the "ID = 2" with the new data

action: "DELETE" location: /students/2
- ~~delete~~
---
- controller method: `destroy`
- deletes the specific student with the "ID = 2" from the database


## 5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
- As a user: 
    1. I'd like to create a new list that I can add a task to do
    2. delete a to-do item so it no longer shows in my list
    3. mark an item completed to track my progress
    4. edit an existing to-do task to correct any errors or update them
    5. create new categories to organize different types of tasks
    6. set due dates for tasks to plan ahead
    7. add notes to a task to add comments or reminders
    8. add tags to a task to add keywords to describe the task
    9. add images to a task to add pictures or videos
    10. sync to-do list across different devices