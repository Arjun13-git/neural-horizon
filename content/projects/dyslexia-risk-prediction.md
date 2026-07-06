---
slug: dyslexia-risk-prediction
title: "Dyslexia Risk Prediction System"
description: "A deep learning based screening tool using LSTM neural networks to analyze handwriting sequences and detect dyslexia risk with early intervention recommendations."
longDescription: "A deep learning screening tool designed to assist educators in early dyslexia risk detection. Analyzes handwriting sequences using LSTM networks, with an image preprocessing pipeline to improve model accuracy. Provides a real-time risk assessment interface accessible to non-technical educators."
tech: ["Python", "TensorFlow", "Keras", "LSTM", "OpenCV", "NumPy"]
category: ai
status: completed
featured: true
date: "2025-11-01"
highlights:
  - "Developed a predictive model using LSTM networks to analyze handwriting sequences for dyslexia risk detection"
  - "Improved model accuracy by 15% using image preprocessing pipelines (scaling, binarization) to reduce noise in samples"
  - "Designed an intuitive interface for educators to facilitate real-time risk assessment and early intervention"
  - "Built end-to-end pipeline from raw handwriting images to structured risk scores"
---

## Overview

The Dyslexia Risk Prediction System is a deep learning-powered screening tool that assists educators in early identification of dyslexia risk. By analyzing handwriting sequences through LSTM networks, it surfaces risk indicators before traditional diagnostic processes begin — enabling timely educational interventions.

## Model Architecture

**LSTM Network** — Long Short-Term Memory networks capture temporal dependencies in handwriting stroke sequences, learning patterns associated with dyslexic writing characteristics: letter reversals, inconsistent spacing, and atypical stroke ordering.

**Image Preprocessing Pipeline** — A preprocessing stage applies scaling, binarization, and noise reduction to raw handwriting samples, improving input quality and boosting model accuracy by 15% compared to unprocessed inputs.

## Interface

The educator-facing dashboard presents risk scores in plain language with recommended intervention tiers, making the tool actionable for non-technical users without any machine learning background.
