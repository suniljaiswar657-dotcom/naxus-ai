# NAXUS AI — Application Architecture

**Status:** Phase 1 proposal  
**Scope:** Architecture baseline only; no runtime application or external integrations are introduced by this document.

## 1. Architecture Goals

NAXUS AI is designed as a modular AI business operations platform. The architecture must:
- Keep the project independent from all other repositories and systems.
- Support specialized agents coordinated by one orchestrator.
- Separate user interface, application services, AI providers, tools, and persistence.
- Require explicit human approval for consequential external actions.
- Make agent runs observable, testable, and auditable.
- Start with a small, free-tier-conscious deployment footprint.

## 2. Proposed Technology Baseline

| Layer | Proposed choice | Responsibility |
|---|---|---|
| Web application | Next.js App Router | Dashboard and server-rendered application |
| Language | TypeScript | Shared types and application logic |
| UI styling | Tailwind CSS | Responsive interface |
| Server API | Next.js Route Handlers | Authenticated application endpoints |
| Hosting | Vercel | Web and serverless deployment |
| Source control | GitHub | Version history and CI workflow |
| AI integration | Provider adapter interface | Keep model vendor replaceable |
| Persistence | Repository interface, implementation deferred | Avoid premature database lock-in |

This baseline avoids introducing Supabase. Persistent database selection is deliberately deferred until the product's data requirements and free-tier limits are validated.

## 3. Logical System

    User
     |
     v
    NAXUS Web Dashboard
     |
     v
    Application API (Route Handlers)
     |
     +--> Authentication & Authorization
     +--> AI Orchestrator
     |      +--> Research Agent
     |      +--> Business Intelligence Agent
     |      +--> Operations Agent
     |      +--> Customer Support Agent
     |      +--> Revenue Analytics Agent
     +--> Tool Gateway
     |      +--> Approved read-only tools
     |      +--> External service adapters
     +--> Approval Service
     |      +--> Pending action review
     |      +--> Approve / reject
     +--> Audit & Observability
     |
     v
    Provider / Storage Adapters

## 4. Application Modules

### 4.1 Dashboard
- Overview of agent activity and system health.
- Run history, task status, and approval queue.
- Business metrics only when backed by actual connected data.

### 4.2 AI Orchestrator
- Accepts a user task.
- Selects an eligible agent.
- Applies tool and permission policies.
- Tracks execution state, timeouts, and failures.
- Returns a structured result with provenance.

### 4.3 Specialized Agents
Each agent has a narrow responsibility, typed input/output, explicit tool allowlist, and testable instructions. Agents must not receive unrestricted access to all tools.

### 4.4 Tool Gateway
All external tools are called through server-side adapters. Secrets remain server-side and are never exposed to browser code. Tool calls are validated and logged.

### 4.5 Approval Service
Actions are classified before execution:
- **Read-only:** May run when authorized by the user and policy.
- **Low-risk internal:** May run within configured limits.
- **Consequential:** Requires explicit approval before execution.
- **Disallowed:** Blocked by policy.

Consequential actions include sending external messages, publishing content, spending money, making payments, changing account settings, or deleting user data.

### 4.6 Audit & Observability
Record task ID, agent, timestamps, status, tool name, approval decision, and safe error details. Never log secrets or unnecessary sensitive customer content.

## 5. Suggested Repository Structure

    naxus-ai/
    ├── app/
    │   ├── (dashboard)/
    │   ├── api/
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── dashboard/
    │   └── shared/
    ├── src/
    │   ├── agents/
    │   ├── orchestrator/
    │   ├── approvals/
    │   ├── tools/
    │   ├── providers/
    │   ├── security/
    │   ├── audit/
    │   └── shared/
    ├── docs/
    │   └── ARCHITECTURE.md
    ├── tests/
    ├── public/
    ├── .env.example
    ├── .gitignore
    ├── package.json
    └── tsconfig.json

This is a target structure, not a claim that these directories or application files already exist.

## 6. Security Boundaries
- AI model output is untrusted input; validate it before acting.
- API keys and tokens are server-only environment variables.
- Enforce authentication and authorization on protected routes.
- Validate request schemas and restrict tool arguments.
- Apply rate limits and execution timeouts.
- Use least-privilege tool permissions.
- Require approval for consequential actions.
- Keep audit logs free of credentials and sensitive payloads.

## 7. Reliability and Testing
- Unit tests for agent policies, routing, and validation.
- Integration tests for provider and tool adapters using mocks.
- Tests proving approval is required for consequential actions.
- Tests for malformed model output, tool failure, timeout, and retries.
- End-to-end tests for core dashboard and approval flows.
- CI checks for linting, type checking, and tests before deployment.

## 8. Deployment Model
GitHub is the source of truth. Vercel is the proposed hosting target. Preview deployments should be used to verify changes before production promotion. Environment variables must be configured in Vercel and must never be committed.

## 9. Deferred Decisions
The following are intentionally not selected or implemented in Phase 1:
- Authentication provider.
- Database and long-term memory store.
- AI model vendor and API credentials.
- Paid integrations and external business tools.
- Autonomous publishing, payments, or purchasing.
- Production monitoring vendor.

These decisions require concrete requirements and cost/security review before implementation.

## 10. Phase 1 Exit Criteria
- [x] Repository exists and is independent.
- [x] Baseline README, MIT license, and .gitignore are present.
- [x] Proposed application architecture is documented.
- [ ] Architecture review and approval.
- [ ] Framework scaffold and baseline tests.
- [ ] Vercel preview deployment and verification.

## 11. Important Product Boundary
NAXUS AI can assist with business work and automate approved workflows, but revenue is not guaranteed. Recommendations and model outputs require evaluation, and people retain control over consequential business decisions.
