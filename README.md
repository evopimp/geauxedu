# Geaux Academy Website Development Plan

## Front-End Design
- **WordPress** for static pages (Home, About Us, Sign-Up, Login).
- Custom pages for the User Dashboard (dynamic and interactive content).

## Back-End
- **MongoDB** database to store user data, learning styles, and progress.
- Integration with **Azure** for the LLM-based learning style assessment.
- API to connect the dashboard with the Azure LLM and MongoDB.

## Core Functionalities
- User authentication and account management.
- LLM integration for learning style determination.
- Dashboard to track progress and dynamically adjust content.
- Integration of CrewAI agents for personalized content delivery.

## Tech Stack
- **Front-End**: WordPress (HTML, CSS, PHP).
- **Back-End**: Node.js/Express with MongoDB for APIs.
- **Integration**: Azure LLM (REST API or SDK).
- **Hosting**: WordPress hosting for static pages and cloud server for backend APIs.

## Step-by-Step Development Plan

### Phase 1: Static Pages (WordPress)
#### Home Page
- Outline mission, vision, and core features of Geaux Academy.
- Include clear navigation links to other pages.

#### About Us
- Provide details about the academy and team.
- Include images and a section for FAQs.

#### Sign-Up and Login Pages
- Use WordPress plugins (e.g., User Registration, WooCommerce Memberships) to create sign-up/login forms.
- Enable secure authentication using backend APIs.

### Phase 2: User Dashboard
- Create a custom dashboard integrated with MongoDB and Azure LLM. Use REST APIs to fetch and display dynamic content.

#### Features
- Show learning style analysis and insights.
- Display CrewAI-generated content tailored to the user.
- Track and graph user progress.

#### Implementation
- **Front-end**: Create a WordPress custom template for the dashboard.
- **Back-end**: Build an Express.js API to fetch and send data between the dashboard, MongoDB, and Azure.

### Phase 3: Backend Development
#### MongoDB Setup
- Create collections for Users, LearningStyles, Progress, and GeneratedContent.

Example structure:
```json
{
  "_id": "12345",
  "username": "JohnDoe",
  "learningStyle": "Visual",
  "progress": {
    "completedModules": 5,
    "performanceScore": 85
  },
  "generatedContent": [
    {
      "date": "2024-12-18",
      "content": "Introduction to Algebra tailored for Visual learners."
    }
  ]
}
```

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/evopimp/geauxedu)