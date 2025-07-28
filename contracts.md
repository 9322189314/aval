# AVAL Platform API Contracts

## Overview
This document outlines the API contracts for seamless integration between the AVAL frontend and backend systems.

## Authentication System
- JWT-based authentication
- Google OAuth integration ready
- Session management for dashboard access

## Database Models

### 1. User Model
```python
{
  "_id": ObjectId,
  "name": str,
  "email": str,
  "password_hash": str,
  "avatar": str (base64 or URL),
  "role": str ["freelancer", "researcher", "startup", "student"],
  "skills": [str],
  "bio": str,
  "location": str,
  "website": str,
  "social_links": {
    "github": str,
    "linkedin": str,
    "twitter": str
  },
  "rating": float,
  "total_projects": int,
  "is_verified": bool,
  "created_at": datetime,
  "updated_at": datetime
}
```

### 2. Project Model (Tech Showcase)
```python
{
  "_id": ObjectId,
  "title": str,
  "description": str,
  "category": str,
  "author_id": ObjectId,
  "images": [str], # base64 encoded
  "tags": [str],
  "github_url": str,
  "demo_url": str,
  "likes": int,
  "views": int,
  "status": str ["draft", "published"],
  "created_at": datetime,
  "updated_at": datetime
}
```

### 3. Research Paper Model
```python
{
  "_id": ObjectId,
  "title": str,
  "authors": [str],
  "abstract": str,
  "category": str,
  "keywords": [str],
  "pdf_content": str, # base64 encoded PDF
  "pages": int,
  "downloads": int,
  "citations": int,
  "doi": str,
  "journal": str,
  "published_date": datetime,
  "status": str ["draft", "peer_review", "published"],
  "created_at": datetime
}
```

### 4. Collaboration Model
```python
{
  "_id": ObjectId,
  "title": str,
  "type": str ["startup_partnership", "open_source", "business_collab", "innovation_challenge"],
  "company": str,
  "description": str,
  "requirements": [str],
  "skills_needed": [str],
  "location": str,
  "equity_offered": str,
  "funding_stage": str,
  "time_commitment": str,
  "applicants": int,
  "urgent": bool,
  "posted_by": ObjectId,
  "status": str ["active", "closed", "draft"],
  "created_at": datetime,
  "expires_at": datetime
}
```

### 5. Freelance Job Model
```python
{
  "_id": ObjectId,
  "title": str,
  "company": str,
  "description": str,
  "category": str,
  "budget_min": int,
  "budget_max": int,
  "duration": str,
  "location": str,
  "skills_required": [str],
  "requirements": [str],
  "proposals": int,
  "urgent": bool,
  "posted_by": ObjectId,
  "status": str ["active", "closed", "draft"],
  "created_at": datetime,
  "expires_at": datetime
}
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (JWT required)
- `PUT /api/auth/profile` - Update user profile (JWT required)
- `POST /api/auth/logout` - User logout

### Projects (Tech Showcase)
- `GET /api/projects` - Get all published projects
- `GET /api/projects/{id}` - Get specific project
- `POST /api/projects` - Create new project (JWT required)
- `PUT /api/projects/{id}` - Update project (JWT required)
- `DELETE /api/projects/{id}` - Delete project (JWT required)
- `POST /api/projects/{id}/like` - Like/unlike project (JWT required)

### Research Papers
- `GET /api/research` - Get all published papers
- `GET /api/research/{id}` - Get specific paper
- `POST /api/research` - Submit new paper (JWT required)
- `PUT /api/research/{id}` - Update paper (JWT required)
- `GET /api/research/{id}/download` - Download paper PDF

### Collaborations
- `GET /api/collaborations` - Get active collaborations
- `GET /api/collaborations/{id}` - Get specific collaboration
- `POST /api/collaborations` - Post new collaboration (JWT required)
- `PUT /api/collaborations/{id}` - Update collaboration (JWT required)
- `POST /api/collaborations/{id}/apply` - Apply to collaboration (JWT required)

### Freelance Jobs
- `GET /api/freelance` - Get active jobs
- `GET /api/freelance/categories` - Get job categories
- `GET /api/freelance/{id}` - Get specific job
- `POST /api/freelance` - Post new job (JWT required)
- `POST /api/freelance/{id}/apply` - Apply to job (JWT required)

### Users
- `GET /api/users/{id}` - Get user public profile
- `GET /api/users/{id}/projects` - Get user's projects
- `GET /api/users/{id}/research` - Get user's research papers

## Frontend Integration Plan

### 1. Replace Mock Data
- Remove `mockData.js` imports
- Replace with API service calls
- Add loading states and error handling

### 2. Authentication Context
- Create React Context for auth state
- Store JWT token in localStorage
- Handle auth redirects and protected routes

### 3. API Service Layer
- Create `api.js` service with axios
- Handle authentication headers
- Implement error handling and retries

### 4. Form Integration
- Connect login/signup forms to auth APIs
- Add project submission forms
- Implement file upload handling

### 5. Real-time Updates
- Add proper state management
- Implement optimistic updates
- Handle success/error notifications

## File Upload Strategy
- Images stored as base64 in MongoDB
- PDF files for research papers as base64
- Client-side image compression before upload
- File size limits and validation

## Security Considerations
- JWT token expiration handling
- Input validation and sanitization
- Rate limiting on sensitive endpoints
- CORS configuration for production