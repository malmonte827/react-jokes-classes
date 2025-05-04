# 🤣 React Jokes (Classes)

> A cheesy-joke viewer & voting app built with React class components and the ICanHazDadJoke API. Browse, upvote, and downvote dad jokes!

[![React](https://img.shields.io/badge/react-17%2B-blue)](https://reactjs.org/) [![API](https://img.shields.io/badge/ICanHazDadJoke-API-yellow)](https://icanhazdadjoke.com/)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [Contact](#contact)  

---

## 🌟 About

This assignment builds a React app using **class components** that:

- Fetches random dad jokes from the [ICanHazDadJoke API](https://icanhazdadjoke.com/)  
- Displays a list of jokes with voting controls  
- Persists votes in component state (session-only)

Perfect for practicing React lifecycle methods, state management, and API integration.

---

## ✨ Features

- **Fetch Jokes:** Load 10 unique jokes on mount  
- **Upvote & Downvote:** Click buttons to vote each joke up or down  
- **Vote Sorting:** Jokes re-order automatically based on vote count  
- **Loading State:** Shows a spinner while fetching jokes  
- **Error Handling:** Alerts user on API or network errors  

---

## 🛠 Tech Stack

- **Frontend:** React (class components), JavaScript (ES6+)  
- **API:** [ICanHazDadJoke](https://icanhazdadjoke.com/) (no API key required)  
- **Styling:** CSS Modules or plain CSS  
- **Build Tooling:** Create React App  
- **Icons:** react-icons  

---

## 🏁 Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm (bundled with Node.js)  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/react-jokes-classes.git
cd react-jokes-classes

# 2. Install dependencies
npm install

# 3. Start the app
npm start
```
### 📖 Usage


On load, 10 random jokes are fetched and displayed.

Click the 👍 Upvote or 👎 Downvote buttons on any joke.

Jokes automatically sort by highest vote count at the top.

---
## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com


