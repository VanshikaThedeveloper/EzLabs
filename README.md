
🎬 Varman Films – Creative Studio Website

A modern, fully responsive React + TailwindCSS website built for Varman Films, showcasing their craft in Film Production, Branding, and Art Curation.
The website focuses on storytelling through visual design, clean navigation, and interactive UI animations.



**🚀 Tech Stack**
Category	Technologies Used
Frontend	React.js, TailwindCSS
Routing	React Router DOM
HTTP Client	Axios
Icons & Assets	Custom Images & SVGs
Form Validation	React Hooks (Frontend validation)
**📂 Folder Structure**
src/
│
├── assets/               # All images and design assets
├── components/           # Reusable UI components (Navbar, etc.)
├── pages/                # Individual page sections
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── FilmProduction.jsx
│   ├── Branding.jsx
│   ├── ArtCuration.jsx
│   ├── Contact.jsx
|   └── AboutTeam.jsx
│   └── AboutUs.jsx
│
├── App.jsx               # Main app with routing
├── index.jsx             # Entry point
└── styles.css            # Tailwind base styles (if used)

**✨ Key Features**
🎨 Beautiful UI & Responsive Design

Fully responsive for all screen sizes.

Custom artistic tape and border elements to match Varman Films’ brand identity.

**🧭 Smooth Navigation**

Built using React Router DOM for seamless page transitions.

Dynamic navigation from cards and menu links.

“Services” → /services

“Film Production” → /film-production

“Branding” → /branding

“Art Curation” → /art-curation

“Let’s Talk ✉️” → /contact

**📬 Contact Form with Validation & Axios**

Frontend validation: Prevents empty fields and invalid emails.

Axios Integration: Sends data to backend API securely.

Displays success/error messages accordingly.

**💡 Components Breakdown**
Component	Description
Navbar.jsx	Responsive navigation bar with toggle menu and routing links.
Hero.jsx	Landing section for introduction.
Services.jsx	Interactive section showcasing major services with animated cards.
Contact.jsx	Contact form with validation and API integration using Axios.
FilmProduction.jsx, Branding.jsx, ArtCuration.jsx	Detailed pages for each service category.

**⚙️ Installation**
Follow these steps to set up the project locally:

# Clone this repository
git clone https://github.com/<your-username>/<repo-name>.git

# Move into the project folder
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev


Once the server starts, visit:
👉 http://localhost:5173/
 (or the port shown in your terminal)


**🧠 Frontend Validations**

Contact Form Rules:

All required fields (name, email, message) must be filled.

Email must be in a valid format (checked via regex).

Prevents empty or invalid submissions before sending to API.

**📱 Responsive Design**

Built with TailwindCSS utility classes to ensure:

Smooth layout across all devices (desktop, tablet, mobile).

Adaptive typography and spacing.

Optimized image scaling.

**🧭 Routes Summary**
Route	Page
/ - 	Hero Section
/services	- Services Page
/film-production	- Film Production Page
/branding	- Branding Page
/art-curation - 	Art Curation Page
/contact	- Contact Page
/about-us	- About Us Page
/about-team	- About Team Page


**💻 Scripts**
Command	Description
npm run dev	Starts development server
npm run build	Builds production-ready files
npm run preview	Previews production build locally

**🌈 UI Inspiration**
This project blends modern web design with handcrafted artistic touches to represent creativity, storytelling, and visual elegance — core values of Varman Films.

**🙌 Author**
Developed by Vanshika
Frontend Developer | React Enthusiast | Creative Designer

**🪄 License**
This project is licensed under the MIT License — feel free to use and modify with attribution.

**⭐ How to Support**

If you like this project:

🌟 Star this repo on GitHub

🐦 Share it with your friends

💬 Give feedback and suggestions
>>>>>>> e1a88e3a0b46b14d80b5c204b3e1c3da11cc2dfc
