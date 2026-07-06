---
slug: galaxy-classification
title: "Morphological Classification of Galaxies using Hybrid Quantum-Classical Models"
abstract: "Experimental investigation comparing classical convolutional neural networks with variational quantum circuits for the task of galaxy morphology classification. Uses the Galaxy Zoo dataset and implements quantum feature maps in PennyLane to evaluate potential quantum advantage in astronomical image analysis."
domain: "Quantum Machine Learning"
status: active
tech: ["PennyLane", "Qiskit", "Python", "TensorFlow", "Galaxy Zoo Dataset"]
date: "2026-04-15"
collaborators: ["Sahyadri College of Engineering & Management"]
---

## Overview

This project implements and evaluates hybrid quantum-classical neural networks for galaxy morphology classification, testing the hypothesis that quantum feature encoding can improve classification accuracy on structured astronomical data.

## Dataset

Galaxy Zoo Dataset — ~60,000 labelled galaxy images with morphological classifications from citizen scientists.

## Architecture

- **Classical branch:** ResNet-based feature extractor
- **Quantum branch:** Variational Quantum Circuit (VQC) as a feature map
- **Hybrid fusion:** Classical + quantum features combined for final classification

## Expected Contributions

- Empirical comparison of QML vs classical ML on astronomical classification
- Analysis of NISQ device limitations for real-world image tasks
- Open-source implementation for future research
