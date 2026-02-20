# My Data Science Portfolio

Welcome to my portfolio! A mantra that has guided my life (implicitly for most of it, explicitly within the last couple years) is **"leverage your curiosity."** I realized my job at the time wasn't cutting it, so I left, hoping that a life immersed in data and technology might scratch the itch. I'm finishing my Masters in Applied Data Science now and so far I'd say it's lived up to the hype! This portfolio hosts a combination of school and personal projects that I've enjoyed most. I'd welcome any collaboration, feedback or ideas for future projects.  

[View my Resume](./Main%20Resume.pdf) | [LinkedIn](https://www.linkedin.com/in/taylor-kirk-61879435)  

---

## Featured Projects

### What's in a Review?  
**[Project Code](https://github.com/tkbarb10/ADS_505_Project.git) | [Link to App](https://tkbarb10-ads505-app.hf.space)**  

The primary problem addressed in this project is: "What characteristics make an Amazon product review helpful?" By leveraging large-scale review datasets, the project seeks to identify linguistic, structural, and contextual features that correlate with helpfulness votes. We had two goals with this project: 

* **1)** Develop predictive models to identify reviews most likely to be found helpful  
* **2)** Use topic modeling to understand how helpful review characteristics differ by category and rating.  

We hope this helps users write better reviews and enables companies to highlight valuable feedback and gain insights for product or system improvements. I've linked to the project code and the app above. The app walks through the highlights of the project and allows you to upload your own data to explore and use our model on as well.  

### Global Warming Trajectories
**[Project Code](https://github.com/tkbarb10/ADS506-Final-Project.git)**  

This project explores the link between anthropogenic CO₂ emissions and global temperature change. It combines historical climate data, statistical time-series models, and an interactive Shiny application that lets users test emission scenarios and see their projected temperature impacts. The `code_notebook.qmd` document outlines the exploratory data analysis (EDA) and modeling workflow, and our final report with key findings and limitations is in the final report pdf file.  

**Key Findings**  

- `Lagged CO`₂ concentration and an `ENSO` variable emerged as the strongest predictors of temperature change
- The optimal **ARIMA(1, 0, 1)(0, 1, 2)** model achieved strong predictive accuracy (**RMSE** = 0.1356) with minimal residual autocorrelation (**Ljung-Box** p = 0.513)
- Scenario forecasts used a simplified **ARIMA(1, 1, 1)(0, 1, 1)** model with `1-year lagged emissions` and `4-month lagged ENSO index` for improved stability

### The Vision Turing Test
**[Project Code](https://github.com/tkbarb10/Image-Classification-504.git)**  
**[Dataset Path](https://huggingface.co/datasets/tkbarb10/ADS504-Image-Arrays)**

Given the rapid adoption of Generative AI, we thought it prudent to explore methods for distinguishing AI generated images from human generated images.  This project sourced images from 2 **Hugging Face Repositories** and the open source **Open Images** dataset from Google Research.  A total of **15k** images were used, evenly split between human and AI generated.  Three traditional machine learning models were pit against the **EfficientNetB0** CNN model available on Tensorflow in a series of experiments to determine the best methods for Gen AI detection.  The paper on our findings is found inside the repository as well as the notebook containing the full code used in this project.  The CNN model training notebook has been separated into it's own notebook for an easier switch to a GPU kernel

**Key Findings**

- Best performing model was a tuned Random Forest model trained on engineered features from image data (such as edge density, edge entropy, height, width, etc).  **Accuracy was 92.3%** and an **AUC of ~97%**
- AI images showed a **wider range across the RGB channels** suggesting they might be more vibrant than human generated images
- AI images showed **lower contrast**, meaning their edges often appeared flatter and more pronounced

Check out the app to classify your own images!
**[Image Classifier](https://image-classification-504.streamlit.app/)**