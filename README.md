# Clestiq Shield WebApp

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Datadog](https://img.shields.io/badge/Datadog-Observability-632CA6?style=for-the-badge&logo=datadog)](https://www.datadoghq.com/)

**The Ultimate GenAI Security Gateway.**

Clestiq Shield is a next-generation security platform designed to protect, monitor, and optimize Large Language Model (LLM) applications. This web application serves as the frontend and visualization layer for the Clestiq Shield ecosystem, providing users with deep insights into their AI traffic, security threats, and system performance.

---

## 🚀 Key Features

### 1. Interactive Architecture Visualization
Experience the flow of data through our security pipeline with our **Interactive Architecture Diagram**.
*   **Simulate Chat Flow**: Visualize exactly how a user request travels through **Gateway** -> **Sentinel** (Injection/Safety Checks) -> **LLM Platform** -> **Guardian** (Hallucination/Tone Checks).
*   **Simulate Management Flow**: See how API keys are created and managed via **Eagle-Eye** and **PostgreSQL**.
*   **See the Agents**: Watch how **Datadog Agents** and **Kube Agents** collect and stream telemetry in real-time.

### 2. Deep Observability with Datadog
We don't just secure; we observe. The platform is instrumented with:
*   **APM (Application Performance Monitoring)**: Full distributed tracing across all microservices (Gateway, Sentinel, Guardian).
*   **Custom Metrics**: Track Token Usage, Hallucination Rates, and Jailbreak Attempts.
*   **Infrastructure Monitoring**: Kube Agents monitoring cluster health.
*   **Alerting**: Automated pipelines from **Detection -> Monitor -> Email/Case Management**.

### 3. Comprehensive Management
*   **API Key Management**: create, revoke, and audit API keys.
*   **User & App Management**: Role-based access control and application isolation.
*   **Usage Analytics**: (Coming Soon) Detailed dashboards on cost and usage.

### 4. Developer-First Documentation
*   **API Reference**: Complete interactive documentation for our `/v1/chat/completions` and management endpoints.
*   **Integration Guides**: Snippets and SDK examples to get started in minutes.

---

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with Glassmorphism aesthetic.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex simulations.
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Deployment**: Vercel / Docker

---

## 🏃 Getting Started

To run the web application locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-org/ClestiqShield-WebApp.git
    cd ClestiqShield-WebApp
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🧩 Service Architecture Overview

The WebApp visualizes the interaction between these core backend services:

*   **Gateway**: The entry point for all traffic. Handles routing, rate limiting (Redis), and authentication.
*   **Sentinel**: The *Input Security* layer. Scans prompts for injections, jailbreaks, and PII leaks.
*   **Guardian**: The *Output Security* layer. Validates LLM responses for hallucinations, toxicity, and tone inconsistencies.
*   **Eagle-Eye**: The management plane. Handles policy enforcement, logging, and audit trails.
*   **LLM Platform**: Provider-agnostic interface (OpenAI, Gemini, Bedrock, etc.) acting as the central intelligence.

---


*Built with ❤️ by the Clestiq Shield Team.*
