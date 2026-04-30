# Business Listing & Discovery App

A simple mobile application built with React Native (Expo) that allows users to create and view small business listings. This project was completed with a focus on MVP design, usability, and clean state management.

---

## 💻 Technologies Used

This project is a frontend-only mobile application built with React Native (Expo). It focuses on MVP functionality and client-side state management.

### Frontend
- React Native (Expo)
- React Navigation
- JavaScript 

### State Management
- React useState (in-memory state for storing business listings)

### Development Tools
- Expo CLI
- Node.js
- npm
- Git & GitHub
  
## 📷 Pictures
Below are some sample screenshots of the mobile application.

### Create a Business Listing Page
<p align="center" style="margin: 0;">
  <img 
    src="https://github.com/Jp-s24/Business-Listing-App/blob/main/assets/images/create-a-business-listing-page.jpg" 
    alt="Create Business Page" 
    height="600"
    style="border: 2px solid #ddd; border-radius: 10px; padding: 5px; display: block; margin: 0 auto;"
  />
</p>

### View All Listings Page
Displays a list of all business listings created locally.

<p align="center" style="margin-top: 0;">
  <img 
    src="https://github.com/Jp-s24/Business-Listing-App/blob/main/assets/images/view-all-listings-page.jpg" 
    alt="Listings Page" 
    height="600"
    style="border: 2px solid #ddd; border-radius: 10px; padding: 5px; display: block; margin: 0 auto;"
  />
</p>

## How to Run the App

### Node Version Requirement

This project requires Node.js **v20.0.0 or higher**.

If you do not have NVM installed, ensure you are running Node.js version 20 or above before installing dependencies.

If you are using NVM (Node Version Manager), you can install and switch to the correct version using:

```sh
nvm install 20.20.0
nvm use 20.20.0
```


1. Clone the repository
```sh
git clone https://github.com/your-username/business-listing-app.git](https://github.com/Jp-s24/Business-Listing-App.git
```

2. Navigate to the appropriate directory in the terminal
```sh
cd Business-Listing-App
```

3. Install dependencies
```sh
npm install
```

4. Start the development server

```sh
npx expo start
```

5. Download the Expo Go App and ensure it is installed on your mobile device.

6. Scan the QR code and open the Expo Go App to view the app

## Design Decisions 
- Built using React Native with Expo for fast cross-platform development for IOS AND Android
- Used React Navigation (stack navigator) to handle navigation between screens
- Managed state using React useState in the root App component to keep the MVP simple and lightweight
- Created a reusable BusinessCard component to keep UI modular and clean
- Focused on a minimal UI to prioritize functionality and user flow

## Trade-offs (Due to Time) 
- Minimal validation (only required business name field enforced)
- Used in-memory state only, meaning data resets on refresh
- No backend or database integration to stay within the 3–4 hour time constraint
- No persistent storage (AsyncStorage) implemented
- Limited UI enhancements such as animations, sorting, or advanced styling

## What I Would Do in v2
- Add persistent storage using AsyncStorage or a backend API
- Implement edit and delete functionality for business listings and improve UI and UX with advanced validation. 

