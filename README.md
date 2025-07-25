# AI Chat Application with FastAPI + Next.js

![Chat Application Screenshot](https://github.com/user-attachments/assets/4f0c4e34-1d53-4059-b261-4b50df777cfa)

A full-stack application featuring:
- 🚀 FastAPI backend with OpenAI integration
- ⚡ Next.js 15 frontend with real-time chat
- 🎨 TailwindCSS styling
- 📝 Conversation history

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Guide](#setup-guide)
- [Frontend Details](#frontend-setup)

## Features
- **Real-time AI responses** with streaming
- **Conversation history** with local storage
- **Model selection** (GPT-3.5, GPT-4)
- **Adjustable creativity** (temperature control)
- **Responsive design** for all devices

## Tech Stack
| Component | Technology |
|-----------|------------|
| Backend | FastAPI, Python 3.10+ |
| Frontend | Next.js 14, TypeScript |
| Styling | TailwindCSS |
| LLM | OpenAI GPT-3.5/4 |
| Deployment | Vercel (Frontend), Render (Backend) |

## Setup Guide

### Prerequisites
- Python 3.10+
- Node.js 18+
- OpenAI API key

### Backend Setup
# Clone repository
git clone https://github.com/shiekiragu12/user_questionare.git
cd user_questionare_backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your OpenAI API key

# Run development server
uvicorn app.main:app --reload

## Frontend Setup
``bash
cd user_questionare_frontend
npm install
npm run dev
