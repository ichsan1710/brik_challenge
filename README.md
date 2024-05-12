# Brik_Challenge

## Introduction

This project is an example of "Toko Kelontong" to support the owner in order to
maintain their shop digitally.

## Getting Started

To get a full experience of this project, you need to initialize it locally.
Follow the steps below:

1. Clone this GitHub repository to your local machine.

```bash
git clone https://github.com/ichsan1710/brik_challenge.git
```

2. Navigate to the project directory.

```bash
cd server-side
cd client-side
```

3. Install dependencies using npm.

```bash
npm install
```

4. Initialize the project database.

```bash
npx sequelize-cli db:create
```

5. Run database migrations.

```bash
npx sequelize-cli db:migrate
```

6. Seed the database with initial data.

```bash
npx sequelize-cli db:seed:all
```

#### Note:

This project contains 50 products, 10 categories, and 1 user that have been
seeded. Ensure that you have followed the instructions above to initialize the
project correctly. For more information on migrations, refer to the Sequelize
documentation.

## Project Images

To view pictures of this project, please visit the following Google Drive
folder:
https://drive.google.com/drive/folders/1uiCS25CRdjNuWV10aO2_BJBH7IwexvmD?usp=sharing

## Tech Stack

### Front End

- React JS
- Redux
- Bootstrap

### Back End

- Express
- Node.js
- PostgreSQL
- Sequelize ORM
