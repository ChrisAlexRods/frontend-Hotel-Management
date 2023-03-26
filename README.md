#Project Hotel_Resort
A brief description of your project.

## Prerequisites

- Make sure you have the following installed on your system:
  - Node.js
  - npm (usually bundled with Node.js)

## Installation

Follow these steps to set up the project on your local machine:

- Clone the repository:git clone `https://github.com/your-username/your-repo.git`
  Replace your-username and your-repo with the appropriate information.

Change to the project directory:`cd your-repo`

- Replace your-repo with the appropriate directory name.
- Install the required dependencies:`npm install`

## Running the Project

- To start the development server, run the following command:`npm start`
  This will open the project in your default web browser at `http://localhost:3000.`

On the backend

- Ideally you want run this in a virtual environment such with this command `virtualenv venv`
- If on windows run this command `venv\Scripts\activate`
- Initialize the migrations`python manage.py makemigrations`
- Migrate the files `python manage.py migrate`
- Now run the server `python manage.py runserver`

## Building the Project

To create a production build, run the following command:

- `npm run build`
  This will create a build folder containing the optimized production-ready files.

