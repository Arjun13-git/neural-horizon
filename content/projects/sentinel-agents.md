---
slug: sentinel-agents
title: "Sentinel Agents"
description: "Autonomous AI-powered vulnerability scanning engine with multi-agent orchestration — built at Vexstorm '26 Hackathon."
longDescription: "Sentinel Agents is an autonomous security platform that coordinates multiple intelligent agents to perform comprehensive vulnerability scanning. Built at the Vexstorm '26 Hackathon, it demonstrates the power of agentic AI in security automation — from discovery to analysis to reporting."
tech: ["Python", "AI Agents", "FastAPI", "LangChain", "Security APIs"]
category: ai
status: completed
featured: true
date: "2026-02-01"
github: "https://github.com/Arjun13-git"
highlights:
  - "Built end-to-end in hackathon timeframe"
  - "Multi-agent orchestration for distributed task execution"
  - "Autonomous vulnerability scanning across multiple attack surfaces"
  - "Intelligent analysis and automated report generation"
  - "Modular architecture allowing agent specialization"
---

## Context

Built at the **Vexstorm '26 Hackathon** — Sentinel Agents demonstrates rapid prototyping of production-grade AI systems under time constraints.

## Architecture

The system deploys a coordinator agent that spawns specialized scanner agents:
- **Network Scanner Agent** — port scanning and service enumeration
- **Web Vulnerability Agent** — OWASP-based web scanning
- **Analysis Agent** — correlates findings across agents
- **Report Agent** — generates structured vulnerability reports

## Outcome

Successfully built a working multi-agent security scanning system within the hackathon timeframe, showcasing autonomous AI coordination for cybersecurity workflows.
