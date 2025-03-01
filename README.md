
Angular Project

This project is built using Angular, featuring Dark Mode, PrimeNG components, and Tailwind CSS for styling.

🚀 Features

Dark Mode Support – Toggle between light and dark themes.

PrimeNG Components – Rich UI components for an enhanced user experience.

Tailwind CSS – Utility-first styling for flexibility and responsiveness.


🛠 Technologies Used

Angular – Frontend framework

PrimeNG – UI component library

Tailwind CSS – Utility-first CSS framework


📦 Installation

1. Clone the repository:

git clone <repo-url>
cd <project-folder>


2. Install dependencies:

npm install


3. Start the development server:

ng serve


📂 Project Structure

src/
│-- app/
│   ├── layout/  # Layout and Dark Mode
│   ├── pages/    # user management
│-- assets/          # Static assets
│-- environments/    # Environment settings

🔧 Customization

To build the project:

ng build --prod

Deploy the dist/ folder to your preferred hosting service.

📌 Notes

Ensure Tailwind CSS is properly configured in postcss.config.js.

Add PrimeNG modules to app.module.ts before use.

Use Angular services for managing Dark Mode state.


