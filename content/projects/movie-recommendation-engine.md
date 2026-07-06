---
slug: movie-recommendation-engine
title: "Movie Recommendation Engine"
description: "A content-based and collaborative filtering recommendation system that suggests movies based on user preferences, viewing history, and similarity metrics."
longDescription: "A full-featured movie recommendation engine combining content-based filtering and collaborative filtering approaches. Uses cosine similarity on TF-IDF vectorized metadata alongside user-item matrix factorization to deliver personalized movie suggestions. Includes a clean web interface for exploring recommendations."
tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "TMDB API"]
category: ai
status: completed
featured: false
date: "2025-12-01"
github: "https://github.com/Arjun13-git"
highlights:
  - "Hybrid recommendation approach: content-based + collaborative filtering"
  - "TF-IDF vectorization on movie metadata (genres, cast, crew, plot)"
  - "Cosine similarity matrix for nearest-neighbor recommendations"
  - "User-item interaction matrix with matrix factorization (SVD)"
  - "TMDB API integration for live movie metadata and poster fetching"
  - "Flask web interface for interactive recommendation exploration"
---

## Overview

The Movie Recommendation Engine demonstrates core machine learning concepts applied to a real-world recommendation problem. Rather than relying on a single approach, it combines two complementary techniques to improve recommendation quality.

## Recommendation Approaches

**Content-Based Filtering** analyzes movie attributes — genres, director, cast, and plot keywords — converting them into TF-IDF feature vectors. Cosine similarity determines how alike two movies are based on their content signature.

**Collaborative Filtering** leverages user viewing patterns. By factorizing the user-item rating matrix using Singular Value Decomposition (SVD), latent factors reveal hidden preferences that transcend simple content similarity.

## Technical Stack

- **Feature Engineering**: TF-IDF on textual metadata, one-hot encoding for genres
- **Similarity Computation**: Cosine similarity on dense feature vectors
- **Matrix Factorization**: SVD via Scikit-learn's TruncatedSVD
- **Data Pipeline**: Pandas for preprocessing, NumPy for matrix operations
- **API Layer**: TMDB API for enriched movie metadata
