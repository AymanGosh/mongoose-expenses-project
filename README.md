# mongoose-expenses-project

## Note: After running the server for the first time, please go ahead and comment lines 11-18 in 'api.js' so the data will not be save more than once, and this way we avoid duplicates in the database collection.

### 1. intro
Now that you are one with the Mongeese, you’ll be building a back-end only expense tracker. This project will use Express, Mongoose, CRUD operations, and a whole lot of pazzaz.
You’ll be able to add new expenses to your tracker, see how much money you’ve spent on a given category or between certain dates. Let’s get started.
This is a back-end only project, so everything you make will be server-side, and you will interact with the server through Postman.

### 2. Project Setup
You should set up your project to have a server.js file and a server folder, which includes a routes folder with an api.js, and a model folder, with an Expense.js file in it.
Make sure to add npm and git to your project. You’ll need express, mongoose, body-parser, and moment.js
Set up your express server and your api.js file. Once you’re all ready to go, create a new mongoose schema for your expenses in your Expense.js file, call it "expenseSchema". Your schema should have the following:
item, a string
amount, a number
date, a date
group, a string
Make a model of your schema and export the model for use!
Start by adding some data to your db. You can download this json of data. Save it into the root of your project directory
In order to add this JSON to your DB, you can save the JSON in a .json file, then simply require it. Next, you can write a simple loop that goes over each item in the JSON and saves it using Mongoose.
Check your DB to make sure the data saved.
Note:
You should do this only once!
Make sure to write this code in a separate file and run it only once.

### 3. Getting Expenses 
Set up your first get route to /expenses. To start, this route should simply respond with all of the expenses currently in your DB.
Once you have this as a response in postman, sort your results by the most recent date.

### 4. Add New Expenses 
Create a post route called /expense:
The body sent to the route should have 3-4 fields:
item
amount
group
the previously used groups are "fun", "food", "rent", "bills", and “misc”
and optionally a date, written in RFC2822 compliant format of “YYYY-MM-DD”
You should create a new Expense (using the expense model), from data given in the body of the post request.
The Expense should be created with each field filling in it’s respective spot in the schema - name to name, amount to amount, and group to group
For the date you can use a ternary operator to determine if you were given a date in your body.
If you were given a date, use moment.js to format the date given to the “LLLL” format.
If you were not given a date, then use moment.js to create a new date, also in the “LLLL” format
You can also define the date outside of your instance creation, if you don’t like ternaries
Make sure to save the new Expense to your DB. then use a promise to console.log a string that says the amount of the expense and what you spent your money on.

### 5. Update Expenses
Create a put route called /update that receives two variables: group1 and group2
In a full-stack app, if you wanted to update an expense you would likely click on it, and pass the server the id of the expense you would like to change. Since we’re only building back-end right now, you’ll simply find the first expense for a certain group and change it to another group.
There are a couple different ways to do this, mongoose has some nice built in methods to help us out with it.
You should be able to do this with one method, without using promises
res.send a message back with the name of the expense changed, and what the group was changed to.

### 6. Expenses By Group
GET EXPENSES BY GROUP
Create a get route called /expenses/ that takes a parameter group
Here you should find all expenses per a specific category
GET TOTAL EXPENSES BY GROUP
Add a query parameter to your /expenses/:group called total. If total is true, then instead of returning all results from the category you should aggregate them and return the total amount of money spent in that category. $match will come in handy here.

### 7. Get All Expenses For A Date Range
Since we already have an /expenses path, let’s add some optional query parameters to it, d1 and d2. Make it so that when we add in specific dates, we see only the expenses during those dates. The logic is as follows:
If two dates are provided (d1 and d2) you should return only expenses expended between those dates
If there is one date query parameter (just d1), you should return expenses between that date and now
If no dates are provided, return all expenses as the route did previously
Remember, dates should be written in “YYYY-MM-DD” fashion, and you should use moment.js for date formatting.
Hint: in JS, Dates can be used like numbers, in terms of comparative operations . 

