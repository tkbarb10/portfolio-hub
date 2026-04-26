---
layout: default
title: Taylor Kirk's Portfolio
description: Highlights from my learning journey
resume: ./Main%20Resume.pdf
linkedin: https://www.linkedin.com/in/taylor-kirk-61879435
permalink: /
---

Welcome to my portfolio! A mantra that has guided my life (implicitly for most of it, explicitly within the last couple years) is **"leverage your curiosity."** I realized my job at the time wasn't cutting it, so I left, hoping that a life immersed in data and technology might scratch the itch. I'm finishing my Masters in Applied Data Science at University of San Diego (USD) now and so far I'd say it's lived up to the hype! This portfolio hosts a combination of school and personal projects that I've enjoyed most, and reflect the skill set I've had the opportunity to develop as USD.  I'd welcome any collaboration, feedback or ideas for future projects.

---

# Featured Projects

## Reinforcement Learning for Early ICU Intervention
**[Project Code](https://github.com/tkbarb10/ADS599-Capstone)**  
**[Live Dashboard](https://huggingface.co/spaces/ADS599-Capstone/Clinical_Support_Decision_Tool)**

Every year, thousands of hospitalized patients deteriorate from complications that were either missed or caught too late, a phenomenon known as *failure to rescue*. The problem is compounded by an overburdened system: staffing shortages, limited bed capacity, and rising ED volume leave clinical staff with less time and attention for each patient. This project explores whether a reinforcement learning agent can learn to surface deterioration signals earlier than a human provider, reducing cognitive load without replacing clinical judgment.

Using the [MIMIC-IV](https://mimic.mit.edu/docs/about/) dataset (~396K ED stays), we built a two-stage pipeline:

1. **Sequence modeling** — An LSTM trained on the full temporal sequence of each ED stay predicts ICU transfer vs. discharge, producing calibrated transfer-likelihood estimates at each clinical event.
2. **Offline RL policy** — Those event-level estimates feed a reward function for a Conservative Q-Learning (CQL) agent, trained on historical data to recommend appropriate care escalation and earlier ICU transfer

The result is framed as a *clinical decision support* tool: it surfaces a signal, not a verdict. Any deployment would require prospective validation and clinical oversight.

### Key Findings

- The LSTM achieved an **F1 of 0.93** on ICU transfer prediction and a **PR-AUC of 0.98**, establishing a strong and reliable foundation for the downstream reward signal
- On held-out stays where the policy reached a terminal recommendation, it achieved an **F1 macro of 0.85** and flagged ICU transfer a median of **4 clinical events earlier** than the treating provider
- Terminal recommendation coverage remains an open challenge.  The current reward function leads to conservative behavior in ambiguous trajectories, and improving coverage without sacrificing precision is the primary direction for future work

## Sentiment Analysis for Political Discourse
**[Project Code](https://github.com/aprilchia/ADS-509_LLM)**  
**[HuggingFace Dataset](https://huggingface.co/datasets/ADS509/full_experiment_labels)**  
**[HuggingFace Model](https://huggingface.co/ADS509/BERTweet-large-self-labeling)**  

In this project, we set out to see if we could understand social media commentary on a deeper level.  Typically, sentiment classifiers are trained to classify text as either `positive` or `negative`.  We attempted to expand this with a schema consisting of 5 labels: `Argumentative`, `Informational`, `Opinion`, `Expressive` or `Neutral`.  Full definitions for each can be found in the repo or on the HF Datacard.  We fine-tuned **BERTweet-large**, a BERT variant pre-trained on Twitter data, and evaluated using `f1_macro` to account for our multi-class and imbalanced data.

### Key Findings

- Final **f1_macro** score on the holdout set was **78.17%**
- The `Opinion` label was most commonly misclassified — predicted as `Argumentative` **15%** of the time and `Expressive` **11%** of the time, suggesting these boundaries could be more cleanly defined in the labeling schema

### Use Cases

- Political campaigns can use this model to better understand the dominant discourse style of a platform and match the tone of their messaging to how people on that platform actually communicate
- Political media and journalists can track how discourse type around a politician or news event shifts over time, informing the stories they write and encouraging follow-up on past headlines
- Social media platforms can use this model to monitor how their design choices affect the discourse on their platform, and adjust recommendation systems, add and/or remove features in response

## What's in a Review?  
**[Project Code](https://github.com/tkbarb10/ADS_505_Project.git)**  
**[Link to App](https://tkbarb10-ads505-app.hf.space)**  

The primary problem addressed in this project is: "What characteristics make an Amazon product review helpful?" By leveraging large-scale review datasets, the project seeks to identify linguistic, structural, and contextual features that correlate with helpfulness votes. We had two goals with this project: 

- Develop predictive models to identify reviews most likely to be found helpful
- Use topic modeling to understand how helpful review characteristics differ by category and rating.  

We hope this helps users write better reviews and enables companies to highlight valuable feedback and gain insights for product or system improvements. I've linked to the project code and the app above. The app walks through the highlights of the project and allows you to upload your own data to explore and use our model on as well.  

### Use Cases

- Retail companies that feature products on Amazon can use this to identify comments with a high helpfulness score and elevate them to the top of product pages
- Sellers and product teams can use the topic modeling component to identify what customers consistently highlight in the most helpful reviews by category, revealing what actually matters to buyers in that space and where product descriptions may be falling short
- Reviewers can use this to enhance their reviews by revealing the features that predict helpfulness (length, structure, specific wording), giving writers concrete feedback for improving their reviews rather than a simple score

## Global Warming Trajectories
**[Project Code](https://github.com/tkbarb10/ADS506-Final-Project.git)**  
**[Simulator App](https://019cb702-576a-aa8a-89c2-63d369a2fbc2.share.connect.posit.cloud/)**

This project explores the link between anthropogenic CO₂ emissions and global temperature change. It combines historical climate data, statistical time-series models, and an interactive Shiny application that lets users test emission scenarios and see their projected temperature impacts. The `code_notebook.qmd` document outlines the exploratory data analysis (EDA) and modeling workflow, and our final report with key findings and limitations is in the final report pdf file.  

### Key Findings

- `Lagged CO`₂ concentration and an `ENSO` variable emerged as the strongest predictors of temperature change
- The optimal ARIMA(1, 0, 1)(0, 1, 2) model achieved strong predictive accuracy (**RMSE** = 0.1356) with minimal residual autocorrelation (**Ljung-Box** p = 0.513)
- Scenario forecasts used a simplified ARIMA(1, 1, 1)(0, 1, 1) model with `1-year lagged emissions` and `4-month lagged ENSO index` for improved stability

### Use Cases

- Policymakers can use the emissions app to decide on emission standards 
- Climate educators can use the emissions app to run live "what if" scenarios in the classroom, letting students test out "what if" scenarios and see how they play out
- Journalists and science communicators can use the scenario forecasts to ground climate reporting in quantitative projections

## The Vision Turing Test
**[Project Code](https://github.com/tkbarb10/Image-Classification-504.git)**  
**[Dataset Path](https://huggingface.co/datasets/tkbarb10/ADS504-Image-Arrays)**  
**[Image Classifier App](https://image-classification-504.streamlit.app/)**

Given the rapid adoption of Generative AI, we thought it prudent to explore methods for distinguishing AI generated images from human generated images.  This project sourced images from 2 Hugging Face Repositories and the open source **Open Images** dataset from Google Research.  A total of **15k** images were used, evenly split between human and AI generated.  Three traditional machine learning models were pit against the **EfficientNetB0** CNN model available on Tensorflow in a series of experiments to determine the best methods for Gen AI detection.  The paper on our findings is found inside the repository as well as the notebook containing the full code used in this project.  The CNN model training notebook has been separated into it's own notebook for an easier switch to a GPU kernel  

### Key Findings

- Best performing model was a tuned Random Forest model trained on engineered features from image data (such as edge density, edge entropy, height, width, etc). Accuracy was **92.3%** with an AUC of **~97%**
- AI images showed a wider range across the RGB channels suggesting they might be more vibrant than human generated images
- AI images showed lower contrast, meaning their edges often appeared flatter and more pronounced  

### Use Cases

- Social media platforms can use this model to flag AI-generated images, helping maintain content authenticity and reduce the spread of synthetic misinformation
- Fact-checkers and investigative journalists can run suspect images through the classifier as one signal in verifying whether visual evidence in a story has been manipulated or fabricated
- Digital forensics and legal teams can use the model's feature-based approach to establish a basis for challenging image authenticity in court

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

### Use Cases

- Students can upload textbooks or course material to ask questions, particularly ones that seek to connect concepts across chapters, which are hard to surface by searching or skimming
- Companies can combine the scraping modules and web access with their own source material to implement a chatbot that can interact with customers answer their questions with grounding in the companies own documentation