/* ──────────────────────────────────────────────
   projects.js — Project data + card renderer

   To add a new project, append an object to PROJECTS.
   A new card on index.html requires no other changes.

   Object fields:
     id         — URL slug, matches the detail page filename
     title      — full project title
     domain     — domain tag (e.g. "Healthcare · RL")
     mediaType  — "image" or "placeholder"
     mediaFile  — path from site root (e.g. "assets/images/rag.jpg")
                  set to null when mediaType is "placeholder"
     imageFit   — (optional) "contain" to show the full image without cropping
                  omit or set to "cover" for the default fill behaviour
     snippet    — 1-2 sentence card description
     stats      — array of { label, value } shown as chips; empty [] to omit
     codeUrl    — GitHub URL; null to hide the Code button
     demoUrl    — live demo URL; null to hide the Demo button
     detailPage — relative path to the HTML detail page
   ────────────────────────────────────────────── */

var PROJECTS = [
  {
    id: 'icu-intervention',
    title: 'Reinforcement Learning for Early ICU Intervention',
    domain: 'Healthcare · Reinforcement Learning',
    mediaType: 'video',
    mediaFile: 'assets/images/capstone_animation.mp4',
    snippet: 'Exploring whether an RL agent can surface ICU deterioration signals earlier than a human provider, reducing cognitive load without replacing clinical judgment.',
    stats: [
      { label: 'F1', value: '0.93' },
      { label: 'PR-AUC', value: '0.98' },
      { label: 'Events Earlier', value: '4' }
    ],
    codeUrl: 'https://github.com/tkbarb10/ADS599-Capstone',
    demoUrl: 'https://huggingface.co/spaces/ADS599-Capstone/Clinical_Support_Decision_Tool',
    detailPage: 'projects/icu-intervention.html'
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis for Political Discourse',
    domain: 'NLP · Classification',
    mediaType: 'image',
    mediaFile: 'assets/images/sentiment.png',
    snippet: 'Fine-tuning BERTweet-large to classify political social media posts into 5 discourse types beyond simple positive/negative sentiment.',
    stats: [
      { label: 'F1 Macro', value: '78.17%' }
    ],
    codeUrl: 'https://github.com/aprilchia/ADS-509_LLM',
    demoUrl: 'https://huggingface.co/datasets/ADS509/full_experiment_labels',
    detailPage: 'projects/sentiment-analysis.html'
  },
  {
    id: 'whats-in-a-review',
    title: "What's in a Review?",
    domain: 'NLP · Topic Modeling',
    mediaType: 'placeholder',
    mediaFile: null,
    snippet: 'Identifying what makes an Amazon product review helpful using predictive modeling and topic modeling across categories and ratings.',
    stats: [],
    codeUrl: 'https://github.com/tkbarb10/ADS_505_Project.git',
    demoUrl: 'https://tkbarb10-ads505-app.hf.space',
    detailPage: 'projects/whats-in-a-review.html'
  },
  {
    id: 'global-warming',
    title: 'Global Warming Trajectories',
    domain: 'Time Series · Climate',
    mediaType: 'video',
    mediaFile: 'assets/images/earth_spinning.mp4',
    snippet: 'Linking anthropogenic CO₂ emissions to global temperature change with ARIMA models and an interactive emissions scenario simulator.',
    stats: [
      { label: 'RMSE', value: '0.1356' },
      { label: 'Ljung-Box p', value: '0.513' }
    ],
    codeUrl: 'https://github.com/tkbarb10/ADS506-Final-Project.git',
    demoUrl: 'https://019cb702-576a-aa8a-89c2-63d369a2fbc2.share.connect.posit.cloud/',
    detailPage: 'projects/global-warming.html'
  },
  {
    id: 'vision-turing-test',
    title: 'The Vision Turing Test',
    domain: 'Computer Vision · Classification',
    mediaType: 'placeholder',
    mediaFile: null,
    snippet: 'Distinguishing AI-generated from human-generated images using traditional ML and CNN models across 15k images.',
    stats: [
      { label: 'Accuracy', value: '92.3%' },
      { label: 'AUC', value: '~97%' }
    ],
    codeUrl: 'https://github.com/tkbarb10/Image-Classification-504.git',
    demoUrl: 'https://image-classification-504.streamlit.app/',
    detailPage: 'projects/vision-turing-test.html'
  },
  {
    id: 'byo-rag',
    title: 'BYO RAG',
    domain: 'NLP · RAG Pipeline',
    mediaType: 'image',
    mediaFile: 'assets/images/rag.jpg',
    snippet: 'A fully modular RAG pipeline with web scraping, Chroma DB vector store, and Gradio interface — swap in your own sources and prompts.',
    stats: [],
    codeUrl: 'https://github.com/tkbarb10/ai_essentials_rag',
    demoUrl: 'https://app.readytensor.ai/publications/nlp-tutor-rag-assistant-fmuQRFYCeAg0',
    detailPage: 'projects/byo-rag.html'
  }
];

function renderProjectCards(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  PROJECTS.forEach(function (project, i) {
    var card = document.createElement('article');
    card.className = 'project-card fade-in-up';
    card.style.transitionDelay = (i * 0.07) + 's';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', project.title);

    // Media slot
    var mediaHtml;
    if (project.mediaType === 'image' && project.mediaFile) {
      var fitStyle = project.imageFit === 'contain' ? ' style="object-fit:contain"' : '';
      mediaHtml = '<div class="card-media">' +
        '<img src="' + project.mediaFile + '" alt="' + escHtml(project.title) + '" loading="lazy"' + fitStyle + '>' +
        '</div>';
    } else if (project.mediaType === 'video' && project.mediaFile) {
      mediaHtml = '<div class="card-media">' +
        '<video autoplay loop muted playsinline>' +
        '<source src="' + project.mediaFile + '" type="video/mp4">' +
        '</video>' +
        '</div>';
    } else {
      mediaHtml = '<div class="card-media">' +
        '<div class="media-placeholder">' + escHtml(project.domain) + '</div>' +
        '</div>';
    }

    // Stat chips
    var statsHtml = '';
    if (project.stats.length > 0) {
      statsHtml = '<div class="card-stats">' +
        project.stats.map(function (s) {
          return '<span class="stat-chip">' + escHtml(s.label) + ': ' + escHtml(s.value) + '</span>';
        }).join('') +
        '</div>';
    }

    // Link buttons — stopPropagation so card click doesn't also fire
    var linksHtml = '';
    if (project.codeUrl || project.demoUrl) {
      linksHtml = '<div class="card-links">';
      if (project.codeUrl) {
        linksHtml += '<a href="' + project.codeUrl + '" class="btn btn-secondary btn-sm" ' +
          'target="_blank" rel="noopener noreferrer" ' +
          'onclick="event.stopPropagation()">Code</a>';
      }
      if (project.demoUrl) {
        linksHtml += '<a href="' + project.demoUrl + '" class="btn btn-primary btn-sm" ' +
          'target="_blank" rel="noopener noreferrer" ' +
          'onclick="event.stopPropagation()">Demo</a>';
      }
      linksHtml += '</div>';
    }

    card.innerHTML =
      mediaHtml +
      '<div class="card-body">' +
        '<div class="card-domain">' + escHtml(project.domain) + '</div>' +
        '<h3 class="card-title">' + escHtml(project.title) + '</h3>' +
        '<p class="card-snippet">' + escHtml(project.snippet) + '</p>' +
        statsHtml +
        linksHtml +
      '</div>';

    // Navigate to detail page on card click
    card.addEventListener('click', function () {
      window.location.href = project.detailPage;
    });

    // Keyboard accessibility
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = project.detailPage;
      }
    });

    container.appendChild(card);
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
