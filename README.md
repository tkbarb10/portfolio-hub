---
layout: default
title: My Third Oath
description: Data Scientist | Masters in Applied Data Science
resume: ./Main%20Resume.pdf
linkedin: https://www.linkedin.com/in/taylor-kirk-61879435
permalink: /
---

Welcome to my portfolio! A mantra that has guided my life (implicitly for most of it, explicitly within the last couple years) is **"leverage your curiosity."** I realized my job at the time wasn't cutting it, so I left, hoping that a life immersed in data and technology might scratch the itch. I'm finishing my Masters in Applied Data Science now and so far I'd say it's lived up to the hype! This portfolio hosts a combination of school and personal projects that I've enjoyed most. I'd welcome any collaboration, feedback or ideas for future projects.

---

# Featured Projects

## Sentiment Analysis for Political Discourse
**[Project Code](https://github.com/aprilchia/ADS-509_LLM)**  
**[HuggingFace Dataset](https://huggingface.co/datasets/ADS509/full_experiment_labels)**  
**[HuggingFace Model](https://huggingface.co/ADS509/BERTweet-large-self-labeling)**  

In this project, we set out to see if we could understand social media commentary on a deeper level.  Typically, sentiment classifiers are trained to classify text as either `positive` or `negative`.  We attempted to expand this with a schema consisting of 5 labels: `Argumentative`, `Informational`, `Opinion`, `Expressive` or `Neutral`.  Full definitions for each can be found in the repo or on the HF Datacard.  We fine-tuned **BERTweet-large**, a BERT variant pre-trained on Twitter data, and evaluated using `f1_macro` to account for our multi-class and imbalanced data.

### Key Findings

- Final **f1_macro** score on the holdout set was **78.17%**
- The `Opinion` label was most commonly misclassified — predicted as `Argumentative` **15%** of the time and `Expressive` **11%** of the time, suggesting these boundaries could be more cleanly defined in the labeling schema

## What's in a Review?  
**[Project Code](https://github.com/tkbarb10/ADS_505_Project.git) | [Link to App](https://tkbarb10-ads505-app.hf.space)**  

The primary problem addressed in this project is: "What characteristics make an Amazon product review helpful?" By leveraging large-scale review datasets, the project seeks to identify linguistic, structural, and contextual features that correlate with helpfulness votes. We had two goals with this project: 

- Develop predictive models to identify reviews most likely to be found helpful
- Use topic modeling to understand how helpful review characteristics differ by category and rating.  

We hope this helps users write better reviews and enables companies to highlight valuable feedback and gain insights for product or system improvements. I've linked to the project code and the app above. The app walks through the highlights of the project and allows you to upload your own data to explore and use our model on as well.  

## BYO RAG
**[Publication Link](https://app.readytensor.ai/publications/nlp-tutor-rag-assistant-fmuQRFYCeAg0)**
**[Project Code](https://github.com/tkbarb10/ai_essentials_rag)**

I built this RAG pipeline for a certification through [Ready Tensor](https://app.readytensor.ai/). The `Gradio` interface lets users chat with a bot connected to a vector store built from a textbook I had for school, but the repository is designed to be fully modular.  Users can upload their own sources and modify prompts, or use the built-in web scraping module to pull content from any site they have access to.

### Tech Stack

**Web Scraping**
- `Tavily Web API` builds a URL map and pulls content from target links
- `Groq` LLM cleans stray HTML, removes duplicates, and organizes content into Markdown sections

**RAG Pipeline**
- LangChain Markdown splitter for automatic metadata extraction; Recursive splitter for chunking remaining sections
- `Chroma DB` vector store with `Gemma-300m` embeddings
- `Groq` service provider for chat, defaulting to `GPT-oss-20b`

## Global Warming Trajectories
**[Project Code](https://github.com/tkbarb10/ADS506-Final-Project.git)**  

This project explores the link between anthropogenic CO₂ emissions and global temperature change. It combines historical climate data, statistical time-series models, and an interactive Shiny application that lets users test emission scenarios and see their projected temperature impacts. The `code_notebook.qmd` document outlines the exploratory data analysis (EDA) and modeling workflow, and our final report with key findings and limitations is in the final report pdf file.  

### Key Findings

- `Lagged CO`₂ concentration and an `ENSO` variable emerged as the strongest predictors of temperature change
- The optimal ARIMA(1, 0, 1)(0, 1, 2) model achieved strong predictive accuracy (**RMSE** = 0.1356) with minimal residual autocorrelation (**Ljung-Box** p = 0.513)
- Scenario forecasts used a simplified ARIMA(1, 1, 1)(0, 1, 1) model with `1-year lagged emissions` and `4-month lagged ENSO index` for improved stability

## The Vision Turing Test
**[Project Code](https://github.com/tkbarb10/Image-Classification-504.git)**  
**[Dataset Path](https://huggingface.co/datasets/tkbarb10/ADS504-Image-Arrays)**

Given the rapid adoption of Generative AI, we thought it prudent to explore methods for distinguishing AI generated images from human generated images.  This project sourced images from 2 Hugging Face Repositories and the open source **Open Images** dataset from Google Research.  A total of **15k** images were used, evenly split between human and AI generated.  Three traditional machine learning models were pit against the **EfficientNetB0** CNN model available on Tensorflow in a series of experiments to determine the best methods for Gen AI detection.  The paper on our findings is found inside the repository as well as the notebook containing the full code used in this project.  The CNN model training notebook has been separated into it's own notebook for an easier switch to a GPU kernel

### Key Findings

- Best performing model was a tuned Random Forest model trained on engineered features from image data (such as edge density, edge entropy, height, width, etc). Accuracy was **92.3%** with an AUC of **~97%**
- AI images showed a wider range across the RGB channels suggesting they might be more vibrant than human generated images
- AI images showed lower contrast, meaning their edges often appeared flatter and more pronounced

Check out the app to classify your own images!
**[Image Classifier](https://image-classification-504.streamlit.app/)**