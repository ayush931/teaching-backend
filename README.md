# Steps to Set Up the Project

1. Initialize the project:

   ```bash
   npm init -y
   ```bash

2. Install dependencies:

   ```bash
   npm install express nodemon mongoose dotenv
   ```bash

3. Update `package.json`:

   - Add the following script:
     ```json
     "scripts": {
       "dev": "nodemon index.js"
     }
     ```bash

   - Add `"type": "module"` to enable ES module support.

4. Create the main file (`index.js`).

5. Create a `.gitignore` file and add the following:

   ```
   .env
   node_modules
   ```

6. Create `.env` and `.env.example` files.

7. Learn the difference between `export { name }` and `export default name`.

8. Use `async/await` for database operations or other time-consuming tasks like hashing or saving data.

# Git Commands

- Add files to staging:

  ```bash
  git add <filename>  # Add specific file
  git add .           # Add all uncommitted files
  ```

- Commit changes:

  ```bash
  git commit -m "write your message"
  ```

- Push changes:

  ```bash
  git push origin main
  ```

- Clone a repository (use only the first time):

  ```bash
  git clone <repo link>
  ```

- Pull the latest changes:
  ```bash
  git pull
  ```
