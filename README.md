1. **Install Python:**

   - Download Python from the [official website](https://www.python.org/downloads/).
   - Follow the installation instructions for your operating system.

2. **Install pip:**

   - Python versions 3.4 and above come with pip installed by default.
   - To check if pip is installed, open a terminal or command prompt and run:
     ```
     pip --version
     ```
   - If pip is not installed or you have an older version, you can upgrade it using:
     ```
     python -m pip install --upgrade pip
     ```

3. **Install Flask and psycopg2:**

   - Use pip to install Flask and psycopg2. Run the following commands in your terminal or command prompt:
     ```
     pip install Flask
     pip install psycopg2
     ```

4. **Install Flask-CORS:**

   - Install Flask-CORS using pip:
     ```
     pip install flask-cors
     ```

Make sure you run these commands in your terminal or command prompt with administrative privileges if you're using Windows or with sudo if you're using Linux or macOS.

Create a neonDB Database from here: [neon.tech](https://neon.tech/)

Paste your connection string inside `backend/app.py` inside the `DATABASE_URL = "{your connection string}"`

Go to the frontend folder: For installing all dependencies, make sure you have Node.js installed on your PC. If not, download it from here: [nodejs.org](https://nodejs.org/en)

Run the following commands:(Inside the frontend folder)

```
npm install
```

```
npm run dev
```

This application uses:

-  Frontend: React, TypeScript, TailwindCSS, and axios
-  Backend: Flask, PostgreSQL (Database) hosted on NeonDB
