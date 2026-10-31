/**
 * All portfolio content lives in this file.
 * Edit text, links and project details here — components read from it.
 *
 * Links:  set a URL string to show a button, or `null` to show a disabled
 *         "coming soon" placeholder instead (never a fake link).
 * Status: 'completed' | 'in-progress' | 'research'
 */

export const profile = {
  name: 'Aakifah Minhaj',
  roles: ['AI/ML Developer', 'Software Engineer', 'Computer Science Undergraduate'],
  tagline:
    'I build intelligent applications at the intersection of AI, machine learning, and software engineering.',
  email: 'aakifahminhaj05@gmail.com',
  github: 'https://github.com/Aakifah09',
  linkedin: 'https://www.linkedin.com/in/aakifah-minhaj/',
  // File inside /public. Replace public/resume.pdf to update it.
  resume: 'resume.pdf',
  resumeDownloadName: 'Aakifah_Minhaj_Resume.pdf',
};

export const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at BITS Pilani, Dubai Campus, with a strong interest in AI/ML and full-stack development. Most of what I build sits where models meet real software — LLM-powered applications, retrieval pipelines, and agentic workflows connected to actual APIs, databases, and interfaces.",
    "I've built AI-powered applications with Python, LangGraph, and Retrieval-Augmented Generation, and I've studied the foundations underneath them: machine learning, deep learning, and generative models such as GANs, VAEs, and diffusion models. I enjoy taking a practical problem, experimenting until something works, and turning it into an application people can use.",
    "I also do research in computational biology: I benchmarked 20 dimensionality-reduction methods across 38 single-cell RNA-seq datasets for a review paper, and designed my own single-cell clustering method, scCoRGI.",
  ],
  interests: [
    { label: 'Artificial Intelligence' },
    { label: 'Machine Learning & Deep Learning' },
    { label: 'Generative AI & LLMs' },
    { label: 'Agentic AI' },
    { label: 'Cloud' },
    { label: 'Data Analysis' },
    { label: 'Full-stack Development' },
    { label: 'Research & Experimentation' },
    { label: 'Computational Biology (scRNA-seq)' },
  ],
};

export const skills = [
  {
    category: 'Programming',
    icon: 'Code',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  },
  {
    category: 'AI / ML',
    icon: 'Brain',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'GANs', 'VAEs', 'Diffusion Models', 'Deep Learning', 'NLP', 'Scanpy (scRNA-seq)'],
  },
  {
    category: 'Generative AI',
    icon: 'Sparkles',
    items: ['LLMs', 'RAG', 'Prompt Engineering', 'LangGraph', 'Agentic AI'],
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Jupyter Notebook', 'Postman'],
  },
];

export const projects = [
  {
    title: 'scCoRGI',
    subtitle: 'My Own Single-Cell Clustering Method (Research)',
    description:
      "An unsupervised clustering method I designed for single-cell RNA-seq data. A zero-inflated negative binomial (ZINB) autoencoder weights each cell's training loss by a learned confidence score, and a graph autoencoder refines the cell–cell neighbour graph before Leiden clustering. Benchmarked against 10 published methods on 38 datasets: mean ARI 56.5%, NMI 72.8% and purity 83.6% (3rd of 11 on ARI and NMI, 2nd on purity), +10.6 ARI points over scPhere and +15.9 over DREAM, and it completed all 38 datasets without failure.",
    tech: ['Python', 'PyTorch', 'ZINB Autoencoder', 'Graph Neural Networks', 'Scanpy', 'Leiden'],
    pipeline: ['Raw counts', 'ZINB autoencoder', 'GNN graph refinement', 'Leiden clusters'],
    status: 'research',
    github: null,
    demo: null,
  },
  {
    title: 'DisasterResponder',
    subtitle: 'Automated Incident Triage & Emergency Response System',
    description:
      'An AI-powered emergency incident triage platform built using FastAPI, SQLite, and Ollama. Includes incident classification, emergency response workflows, an interactive map, real-time updates, analytics, and incident management.',
    tech: ['Python', 'FastAPI', 'SQLite', 'Ollama', 'LLMs', 'JavaScript', 'Leaflet'],
    pipeline: ['Incident report', 'LLM triage', 'Response workflow', 'Live map'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/disaster-responder',
    demo: null,
  },
  {
    title: 'Enterprise Knowledge Assistant',
    subtitle: 'Retrieval-Augmented Generation System',
    description:
      'A Retrieval-Augmented Generation application that enables users to query enterprise documents using vector-based retrieval and locally hosted language models. Uses FAISS, Ollama, and SQLite to support document processing and question answering.',
    tech: ['Python', 'RAG', 'FAISS', 'Ollama', 'SQLite', 'LLMs'],
    pipeline: ['Documents', 'FAISS index', 'Retrieval', 'Local LLM'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/enterprise-rag-assistant',
    demo: null,
  },
  {
    title: 'Generative AI Solution Lab',
    subtitle: 'GANs & VAEs on MNIST',
    description:
      'An interactive Generative AI project exploring GANs and Variational Autoencoders (VAEs) using the MNIST handwritten-digit dataset. Includes model experimentation, image generation, and an interactive Streamlit interface.',
    tech: ['Python', 'PyTorch', 'GANs', 'VAEs', 'Streamlit', 'PyTest'],
    pipeline: ['MNIST', 'GAN / VAE', 'Sampling', 'Streamlit UI'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/genai-solution-lab',
    demo: null,
  },
  {
    title: 'Agentic AI Recruiter',
    subtitle: 'Agentic Workflows for Candidate Screening',
    description:
      'An AI-powered recruitment application using agentic workflows and LLM-based reasoning to support candidate screening and recruitment processes. Demonstrates prompt engineering, workflow orchestration, and application integration.',
    tech: ['Python', 'Agentic AI', 'LLMs', 'Prompt Engineering', 'Streamlit'],
    pipeline: ['Candidate data', 'Agent workflow', 'LLM reasoning', 'Screening'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/agentic-ai-recruiter',
    demo: null,
  },
  {
    title: 'mltest',
    subtitle: 'Design Patterns for ML in Automated Software Testing',
    description:
      'A Python research prototype with three ML-driven testing modules — test case generation, defect prediction, and a test oracle — run through one pipeline. Seven design patterns (Singleton, Factory, Strategy, Decorator, Observer, Adapter, Ensemble) organise the framework, which outputs runnable pytest files, prediction reports, and PASS/FAIL results.',
    tech: ['Python', 'Scikit-learn', 'PyTorch', 'Pytest', 'Design Patterns'],
    pipeline: ['Load', 'Preprocess', 'Execute', 'Evaluate & report'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/ml-testing-framework',
    demo: null,
  },
  {
    title: 'University Course Assistant',
    subtitle: 'RAG over Custom Course Data',
    description:
      'A Retrieval-Augmented Generation system that answers questions about university courses. Course information is stored as Sentence Transformer embeddings in a Qdrant vector database; the most relevant entries are retrieved and passed as context to Llama 3.2 running through Ollama.',
    tech: ['Python', 'RAG', 'Sentence Transformers', 'Qdrant', 'Ollama', 'Llama 3.2'],
    pipeline: ['Question', 'Embedding', 'Qdrant search', 'Llama 3.2 answer'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/rag',
    demo: null,
  },
  {
    title: 'Semantic Text Retrieval',
    subtitle: 'Search by Meaning with Sentence Embeddings',
    description:
      'A semantic search system that returns the top-k most similar sentences for a query using Sentence-BERT (all-MiniLM-L6-v2) embeddings and cosine similarity, so results match on meaning rather than keywords. Evaluated with manual relevance checks on 20 queries.',
    tech: ['Python', 'Sentence-BERT', 'NLP', 'Cosine Similarity', 'Jupyter Notebook'],
    pipeline: ['Sentences', 'SBERT embeddings', 'Cosine similarity', 'Top-k results'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/Semantic-Text-Retrieval-using-Sentence-Embeddings',
    demo: null,
  },
  {
    title: 'Encryption & Decryption System',
    subtitle: 'AES, DES & Triple DES in Object-Oriented Java',
    description:
      'A Java application that encrypts and decrypts text with AES, DES, and Triple DES via the Java Cryptography Architecture. Each algorithm lives in its own class behind a common interface, demonstrating encapsulation, abstraction, and polymorphism.',
    tech: ['Java', 'JCA', 'OOP', 'Cryptography'],
    pipeline: ['Plaintext', 'Choose cipher', 'AES / DES / 3DES', 'Ciphertext'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/InnoXCode-Oops-project',
    demo: null,
  },
  {
    title: 'Invoice & Barcode Automation',
    subtitle: 'Zoho Creator + Zoho Books Integration (Internship)',
    description:
      'Automates invoice data retrieval from Zoho Books and generates print-ready 50mm × 25mm barcode stickers in Zoho Creator. Invoice line items are fetched through APIs, parsed with Deluge workflows, and rendered into HTML/CSS label templates with barcodes generated from each MPN.',
    tech: ['Zoho Creator', 'Zoho Books API', 'Deluge', 'HTML', 'CSS', 'BWIP-JS'],
    pipeline: ['Invoice', 'API fetch', 'Deluge workflow', 'Barcode labels'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/Zoho-Invoice-Barcode-Automation',
    demo: null,
  },
];

export const experience = [
  {
    role: 'ERP Systems Developer Intern',
    company: 'SmartLife Foundation',
    period: 'Sep 2025 – Feb 2026',
    points: [
      'Worked on an ERP-integrated chatbot, focusing on inventory data preprocessing, backend development, and conversational workflow management.',
      'Cleaned and validated inventory records through deduplication, null-value and format checks, and unit normalization.',
      'Developed a real-time chatbot backend using Node.js and Express.js with WebSocket communication, integrated with an HTML, CSS, and JavaScript frontend.',
      'Designed a JSON-driven finite-state machine to manage conversation states, transitions, and responses.',
    ],
    tech: ['Node.js', 'Express.js', 'WebSockets', 'JavaScript', 'HTML', 'CSS', 'JSON'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Codelattice',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Automated invoice processing and barcode-based product labelling by integrating Zoho Creator with Zoho Books through Deluge scripting and APIs.',
      'Developed workflows to retrieve invoice and line-item details — including MPN, size, MRP, and quantity — and automatically populate print-ready HTML/CSS barcode label templates.',
      'Built and configured Zoho Creator forms and workflows while debugging API responses, field mapping, and barcode rendering.',
    ],
    tech: ['Zoho Creator', 'Zoho Books', 'Deluge', 'APIs', 'HTML', 'CSS'],
  },
];

export const publications = [
  {
    title: 'Benchmarking Dimensionality Reduction for Single-Cell RNA-seq: 20 Methods Across 38 Datasets',
    journal: 'Single-cell RNA-seq benchmark',
    publisher: null,
    date: '2026',
    type: 'Review paper · in preparation',
    doi: null,
    contribution:
      'Benchmarked 20 dimensionality-reduction methods — autoencoder, VAE, GAN and graph-based models alongside classical approaches — on 38 single-cell RNA-seq datasets under identical preprocessing, comparing ARI, NMI, accuracy, purity, runtime and memory.',
  },
  {
    title:
      'Next-Generation Wearable, Ingestible and Implantable Bioelectronics for Health Monitoring, Therapy and Human–Machine Interaction',
    journal: 'Biomedical Microdevices',
    publisher: 'Springer Nature',
    date: 'March 2026',
    type: 'Peer-reviewed review article',
    doi: '10.1007/s10544-026-00809-x',
    contribution: 'Contributed Blender-created 3D visuals for this peer-reviewed review article.',
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'BITS Pilani, Dubai Campus',
    period: '2023 – 2027',
  },
];
