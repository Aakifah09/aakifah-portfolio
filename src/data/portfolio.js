/**
 * All portfolio content lives in this file.
 * Edit text, links and project details here — components read from it.
 *
 * Links:  set a URL string to show a button, or `null` to show a disabled
 *         "coming soon" placeholder instead (never a fake link).
 * Video:  a YouTube link (unlisted is fine) or a file in /public such as
 *         'videos/disaster-responder.mp4'. `null` hides the demo button.
 *         `videoLabel` optionally renames the button (e.g. for a narrated demo).
 * Status: 'completed' | 'in-progress'
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
    "I also do research in computational biology: I'm writing a comparative evaluation of 20 dimensionality-reduction methods across 38 single-cell RNA-seq datasets, and a paper on scCoRGI, my own deep-learning method for single-cell clustering.",
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
    title: 'DisasterResponder',
    subtitle: 'Automated Incident Triage & Emergency Response System',
    description:
      'An AI-powered emergency incident triage platform built using FastAPI, SQLite, and Ollama. Includes incident classification, emergency response workflows, an interactive map, real-time updates, analytics, and incident management.',
    tech: ['Python', 'FastAPI', 'SQLite', 'Ollama', 'LLMs', 'JavaScript', 'Leaflet'],
    pipeline: ['Incident report', 'LLM triage', 'Response workflow', 'Live map'],
    status: 'completed',
    github: 'https://github.com/Aakifah09/disaster-responder',
    demo: null,
    video: 'videos/disaster-responder.mp4',
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
    video: 'videos/enterprise-rag-assistant.mp4',
    videoLabel: 'narrated demo',
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
    video: 'videos/genai-solution-lab.mp4',
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
    video: 'videos/agentic-ai-recruiter.mp4',
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
    video: 'videos/ml-testing-framework.mp4',
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
    video: null,
  },
];

export const experience = [
  {
    role: 'ERP Systems Developer Intern',
    company: 'SmartLife Foundation',
    // Company logo inside /public (shown in place of initials). Omit to show initials.
    logo: 'logos/smartlife.svg',
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
    logo: 'logos/codelattice.png',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Automated invoice processing and barcode-based product labelling by integrating Zoho Creator with Zoho Books through Deluge scripting and APIs.',
      'Developed workflows to retrieve invoice and line-item details — including MPN, size, MRP, and quantity — and automatically populate print-ready HTML/CSS barcode label templates.',
      'Built and configured Zoho Creator forms and workflows while debugging API responses, field mapping, and barcode rendering.',
    ],
    tech: ['Zoho Creator', 'Zoho Books', 'Deluge', 'APIs', 'HTML', 'CSS'],
  },
];

// Papers currently being written. Shown in the "Ongoing Research" section.
export const ongoingResearch = [
  {
    title: 'Comparative Evaluation of Dimensionality Reduction Methods for Single-Cell RNA Sequencing Data',
    kind: 'Review paper',
    status: 'In progress',
    description:
      'A benchmark of 20 dimensionality-reduction methods — autoencoder, VAE, GAN and graph-based deep-learning models alongside classical approaches — on 38 single-cell RNA-seq datasets under identical preprocessing, comparing clustering quality, runtime and memory.',
    highlights: [
      { value: '20', label: 'Methods' },
      { value: '38', label: 'Datasets' },
      { value: '6', label: 'Metrics' },
    ],
    tags: ['Autoencoders', 'VAEs', 'GANs', 'GNNs', 'ARI · NMI · Purity'],
  },
  {
    title: 'scCoRGI: Deep Learning for Single-Cell Clustering',
    kind: 'Method paper',
    status: 'In progress',
    description:
      "My own unsupervised clustering method. A zero-inflated negative binomial (ZINB) autoencoder weights each cell's training loss by a learned confidence score, and a graph autoencoder refines the cell–cell neighbour graph before Leiden clustering. Against 10 published methods on 38 datasets it ranks 3rd of 11 on ARI and NMI and 2nd on purity, beating the VAE baselines scPhere (+10.6 ARI) and DREAM (+15.9 ARI).",
    highlights: [
      { value: '56.5%', label: 'Mean ARI' },
      { value: '83.6%', label: 'Purity' },
      { value: '38/38', label: 'Datasets run' },
    ],
    tags: ['PyTorch', 'ZINB Autoencoder', 'Graph Neural Networks', 'Scanpy', 'Leiden'],
  },
];

export const publications = [
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
