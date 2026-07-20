/* ============================================
   RUTA MATEMÁTICAS ITM — Data & Engine
   Ingeniería en Ciencia de Datos · ITM
   ============================================ */

(function () {
  'use strict';

  /* ===========================================
     PENSUM DATA — 9 Niveles
     =========================================== */

  var PENSUM = [
    /* ── NIVEL 1 ── */
    {
      level: 1, code: 'XRGV03', name: 'Geometría Vectorial y Analítica',
      desc: 'Vectores, planos, rectas y coordenadas en el espacio. Base para álgebra lineal y cálculo multivariable.',
      topics: ['Vectores en R2 y R3', 'Producto punto y cruz', 'Rectas y planos en el espacio', 'Coordenadas cilíndricas y esféricas', 'Secciones cónicas', 'Transformaciones lineales'],
      resources: [
        { title: 'Geometría Analytica — OpenStax (español)', url: 'https://espanol.libretexts.org/' }
      ]
    },
    {
      level: 1, code: 'XRHC02', name: 'Habilidades Comunicativas',
      desc: 'Desarrollo de competencias de lectura crítica, escritura académica y argumentación oral.',
      topics: ['Lectura comprensiva', 'Redacción de ensayos', 'Argumentación y retórica', 'Presentaciones orales', 'Pensamiento crítico'],
      resources: []
    },
    {
      level: 1, code: '810202001', name: 'Introducción a la Formación Profesional',
      desc: 'Orientación vocacional, ética profesional y primeros pasos en la carrera de ciencia de datos.',
      topics: ['Ética e ingeniería', 'Habilidades blandas', 'Trabajo en equipo', 'Gestión del tiempo', 'Intro a la carrera'],
      resources: []
    },
    {
      level: 1, code: 'XRII03', name: 'Introducción a la Informática',
      desc: 'Fundamentos de hardware, software, redes y sistemas operativos. Primera toma de contacto con la tecnología.',
      topics: ['Componentes de hardware', 'Sistemas operativos', 'Redes e internet', 'Seguridad informática básica', 'Ofimática'],
      resources: [
        { title: 'Intro to CS — CS50 Harvard (gratis)', url: 'https://cs50.harvard.edu/x/' }
      ]
    },
    {
      level: 1, code: 'XRMB03', name: 'Matemáticas Básicas',
      desc: 'Aritmética, álgebra elemental, funciones básicas y trigonometría. Fundamento para todo el pensum matemático.',
      topics: ['Operaciones con números reales', 'Fracciones y porcentajes', 'Ecuaciones e inecuaciones', 'Funciones elementales', 'Trigonometría básica', 'Logaritmos'],
      resources: [
        { title: 'Prealgebra 2e — OpenStax', url: 'https://openstax.org/details/books/prealgebra-2e' },
        { title: 'Algebra and Trigonometry — OpenStax', url: 'https://openstax.org/details/books/algebra-and-trigonometry-2e' }
      ]
    },

    /* ── NIVEL 2 ── */
    {
      level: 2, code: '810202004', name: 'Adquisición e Integración de Datos',
      desc: 'Métodos para recolectar, limpiar y integrar datos de múltiples fuentes. Primer contacto con datos reales.',
      topics: ['Fuentes de datos', 'Web scraping', 'APIs y endpoints', 'Limpieza de datos', 'Integración de fuentes', 'Formatos: CSV, JSON, XML'],
      resources: [
        { title: 'Python for Data Analysis — Wes McKinney', url: 'https://wesmckinney.com/book/' }
      ]
    },
    {
      level: 2, code: 'XRAL03', name: 'Álgebra Lineal',
      desc: 'Matrices, determinantes, espacios vectoriales y transformaciones lineales. El lenguaje matemático del machine learning.',
      topics: ['Sistemas de ecuaciones', 'Matrices y operaciones', 'Determinantes', 'Espacios vectoriales', 'Independencia lineal', 'Valores propios y vectores propios'],
      resources: [
        { title: 'Introduction to Linear Algebra — Gilbert Strang', url: 'https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/' },
        { title: 'Álgebra Lineal — Juan Rada (ULA)', url: 'https://www.ciencias.ula.ve/matematica/publicaciones/libros/por_profesor/juan_rada/AlgebraLineal_JuanRada.pdf' }
      ]
    },
    {
      level: 2, code: 'XRCD03', name: 'Cálculo Diferencial',
      desc: 'Límites, derivadas, reglas de derivación y aplicaciones. La base del análisis matemático.',
      topics: ['Límites y continuidad', 'Definición de derivada', 'Reglas de derivación', 'Derivación implícita', 'Optimización', 'Teorema del valor medio'],
      resources: [
        { title: 'Cálculo — OpenStax (español)', url: 'https://espanol.libretexts.org/Matematicas/Libro:_Calculo_(OpenStax)' }
      ]
    },
    {
      level: 2, code: '810506003', name: 'Fundamentos de Programación',
      desc: 'Lógica de programación, estructuras de control y algoritmos básicos en Python.',
      topics: ['Variables y tipos', 'Condicionales', 'Ciclos', 'Funciones', 'Arreglos', 'POO básica', 'Python sintaxis'],
      resources: [
        { title: 'CS50 Python — Harvard (gratis)', url: 'https://cs50.harvard.edu/python/' },
        { title: 'Automate the Boring Stuff — Python', url: 'https://automatetheboringstuff.com/' }
      ]
    },
    {
      level: 2, code: 'XREN102', name: 'Inglés I',
      desc: 'Inglés básico para lectura técnica y comprensión de documentación.',
      topics: ['Reading comprehension', 'Technical vocabulary', 'Basic grammar', 'Writing emails', 'Listening practice'],
      resources: []
    },

    /* ── NIVEL 3 ── */
    {
      level: 3, code: 'XRCI03', name: 'Cálculo Integral',
      desc: 'Integrales definidas e indefinidas, técnicas de integración y teorema fundamental del cálculo.',
      topics: ['Antiderivadas', 'Técnicas de integración', 'Integrales definidas', 'Áreas y volúmenes', 'Teorema fundamental del cálculo', 'Integrales impropias'],
      resources: [
        { title: 'Cálculo — OpenStax (español)', url: 'https://espanol.libretexts.org/Matematicas/Libro:_Calculo_(OpenStax)' }
      ]
    },
    {
      level: 3, code: 'XREG03', name: 'Estadística General',
      desc: 'Estadística descriptiva, probabilidad básica y distribuciones. Fundamento para inferencia y machine learning.',
      topics: ['Media, mediana, moda', 'Varianza y desviación', 'Probabilidad clásica', 'Distribución binomial', 'Distribución normal', 'Muestreo'],
      resources: [
        { title: 'Intro to Statistics — OpenStax (español)', url: 'https://openstax.org/details/books/introduccion-la-estadistica' }
      ]
    },
    {
      level: 3, code: '810506005', name: 'Estructura de Datos',
      desc: 'Listas, pilas, colas, árboles y grafos. Eficiencia algorítmica y complejidad temporal.',
      topics: ['Listas enlazadas', 'Pilas y colas', 'Árboles binarios', 'Grafos', 'Ordenamiento', 'Complejidad Big-O'],
      resources: [
        { title: 'Structy — Algo & Data Structures (gratis)', url: 'https://www.structy.net/' }
      ]
    },
    {
      level: 3, code: 'XRFA02', name: 'Fundamentación Ambiental',
      desc: 'Conciencia ambiental, sostenibilidad y su relación con la tecnología y los datos.',
      topics: ['Cambio climático', 'Sostenibilidad', 'Datos ambientales', 'Impacto tecnológico', 'Economía circular'],
      resources: []
    },
    {
      level: 3, code: 'XREN202', name: 'Inglés II',
      desc: 'Inglés intermedio con foco en documentación técnica y papers científicos.',
      topics: ['Academic writing', 'Paper reading', 'Technical documentation', 'Presentation skills'],
      resources: []
    },

    /* ── NIVEL 4 ── */
    {
      level: 4, code: '810304006', name: 'Bases de Datos',
      desc: 'Diseño relacional, SQL, normalización y gestión de bases de datos.',
      topics: ['Modelo relacional', 'SQL DDL y DML', 'Normalización', 'Índices y optimización', 'Transacciones', 'PostgreSQL / MySQL'],
      resources: [
        { title: 'SQLBolt — Ejercicios interactivos', url: 'https://sqlbolt.com/' },
        { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' }
      ]
    },
    {
      level: 4, code: 'XRED03', name: 'Ecuaciones Diferenciales',
      desc: 'EDOs, métodos de solución y aplicaciones en modelado de sistemas dinámicos.',
      topics: ['EDO de primer orden', 'EDO de segundo orden', 'Transformada de Laplace', 'Series de Fourier', 'Sistemas de EDO', 'Aplicaciones'],
      resources: [
        { title: 'Differential Equations — MIT OCW', url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/' }
      ]
    },
    {
      level: 4, code: 'XREI03', name: 'Estadística Inferencial',
      desc: 'Pruebas de hipótesis, intervalos de confianza y regresión. De datos a conclusiones.',
      topics: ['Intervalos de confianza', 'Pruebas de hipótesis', 'Chi-cuadrado', 'ANOVA', 'Regresión lineal simple y múltiple', 'Correlación'],
      resources: [
        { title: 'Intro to Statistical Learning — ISLR (gratis PDF)', url: 'https://www.statlearning.com/' }
      ]
    },
    {
      level: 4, code: 'XREN302', name: 'Inglés III',
      desc: 'Inglés técnico para ciencia de datos: papers, documentación de APIs y conferencias.',
      topics: ['Research paper language', 'API documentation', 'Conference talks', 'Technical blog writing'],
      resources: []
    },
    {
      level: 4, code: '810202007', name: 'Visualización de Datos',
      desc: 'Principios de visualización, storytelling con datos y herramientas como Matplotlib, Seaborn y Tableau.',
      topics: ['Tipos de gráficos', 'Principios de Tufte', 'Matplotlib y Seaborn', 'Plotly interactivo', 'Tableau', 'Storytelling'],
      resources: [
        { title: 'Python Graph Gallery', url: 'https://www.python-graph-gallery.com/' },
        { title: 'From Data to Viz', url: 'https://www.data-to-viz.com/' }
      ]
    },

    /* ── NIVEL 5 ── */
    {
      level: 5, code: 'XRCVV03', name: 'Cálculo de Varias Variables',
      desc: 'Derivadas parciales, integrales múltiples, campos vectoriales y teoremas de Green, Stokes y Gauss.',
      topics: ['Derivadas parciales', 'Gradiente y directional derivative', 'Integrales dobles y triples', 'Campos vectoriales', 'Teorema de Green', 'Teoremas de Stokes y Gauss'],
      resources: [
        { title: 'Multivariable Calculus — MIT OCW', url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/' }
      ]
    },
    {
      level: 5, code: '810202010', name: 'Introducción a Inteligencia Artificial',
      desc: 'Conceptos fundamentales de IA: búsqueda, lógica, aprendizaje y agentes inteligentes.',
      topics: ['Agentes inteligentes', 'Búsqueda y optimización', 'Lógica y razonamiento', 'Aprendizaje automático intro', 'Redes neuronales básicas', 'Ética en IA'],
      resources: [
        { title: 'AI — Harvard CS50 (gratis)', url: 'https://cs50.harvard.edu/ai/' },
        { title: 'Intro to AI — Andrew Ng (Coursera)', url: 'https://www.coursera.org/learn/machine-learning' }
      ]
    },
    {
      level: 5, code: 'XRMN03', name: 'Métodos Numéricos',
      desc: 'Algoritmos numéricos para resolver ecuaciones, integrales y sistemas de ecuaciones.',
      topics: ['Bisección y Newton-Raphson', 'Interpolación', 'Integración numérica', 'Ecuaciones diferenciales numéricas', 'Mínimos cuadrados', 'Eigenvectores numéricos'],
      resources: [
        { title: 'Numerical Methods — MIT OCW', url: 'https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/' }
      ]
    },
    {
      level: 5, code: '810304009', name: 'Minería de Datos',
      desc: 'Técnicas para descubrir patrones en datos masivos: clustering, asociación y clasificación.',
      topics: ['Preprocesamiento', 'Clustering (K-means, DBSCAN)', 'Reglas de asociación', 'Clasificación', 'Evaluación de modelos', 'Weka y RapidMiner'],
      resources: [
        { title: 'Data Mining — NPTEL (gratis)', url: 'https://nptel.ac.in/courses/106102032/' }
      ]
    },
    {
      level: 5, code: '810304008', name: 'Tópicos Avanzados de Bases de Datos',
      desc: 'Bases NoSQL, sistemas distribuidos, data warehousing y modelos avanzados.',
      topics: ['NoSQL: MongoDB, Redis', 'Bases de grafos (Neo4j)', 'Data warehousing', 'ETL pipelines', 'Big Data overview', 'Data lakes'],
      resources: [
        { title: 'MongoDB University (gratis)', url: 'https://university.mongodb.com/' }
      ]
    },

    /* ── NIVEL 6 ── */
    {
      level: 6, code: '810304012', name: 'Análisis de Algoritmos',
      desc: 'Complejidad algorítmica, técnicas de diseño (divide y vencerás, programación dinámica, greedy).',
      topics: ['Big-O, Big-Θ, Big-Ω', 'Divide y vencerás', 'Programación dinámica', 'Algoritmos greedy', 'Backtracking', 'NP-completitud'],
      resources: [
        { title: 'Algorithms — Sedgewick (Coursera)', url: 'https://www.coursera.org/learn/algorithms-part1' },
        { title: 'VisuAlgo — Visualización de algoritmos', url: 'https://visualgo.net/' }
      ]
    },
    {
      level: 6, code: '810304011', name: 'Aprendizaje de Máquina Supervisado',
      desc: 'Regresión, clasificación, árboles de decisión, SVM y evaluación de modelos.',
      topics: ['Linear & Logistic Regression', 'Árboles de decisión y Random Forest', 'SVM', 'KNN', 'Naive Bayes', 'Cross-validation', 'Feature engineering'],
      resources: [
        { title: 'Intro to Statistical Learning — ISLR', url: 'https://www.statlearning.com/' },
        { title: 'Scikit-learn docs', url: 'https://scikit-learn.org/stable/' }
      ]
    },
    {
      level: 6, code: 'CTX02', name: 'Ciencia, Tecnología y Sociedad',
      desc: 'Relación entre desarrollo tecnológico, sociedad y responsabilidad ética del ingeniero.',
      topics: ['Impacto social de la tecnología', 'Ética en datos', 'Privacidad', 'Regulación', 'Innovación responsable'],
      resources: []
    },
    {
      level: 6, code: '810202013', name: 'Gobierno de Datos',
      desc: 'Calidad de datos, linaje, catálogos, políticas y marcos de gobernanza.',
      topics: ['Calidad de datos', 'Data lineage', 'Catálogos de datos', 'Políticas de acceso', 'GDPR y regulación', 'Data catalogs'],
      resources: [
        { title: 'Data Governance — DataCamp', url: 'https://www.datacamp.com/courses/data-governance' }
      ]
    },
    {
      level: 6, code: 'XREN402', name: 'Inglés IV',
      desc: 'Inglés avanzado para presentaciones, publicación y liderazgo técnico.',
      topics: ['Technical presentations', 'Publication writing', 'Leadership communication', 'Negotiation'],
      resources: []
    },
    {
      level: 6, code: 'OPI73', name: 'Optimización',
      desc: 'Programación lineal, no lineal y métodos de optimización para ciencia de datos.',
      topics: ['Programación lineal', 'Simplex', 'Optimización convexa', 'Gradiente descendente', 'Optimización combinatoria', 'Hiperparámetros'],
      resources: [
        { title: 'Convex Optimization — Boyd (gratis)', url: 'https://web.stanford.edu/~boyd/cvxbook/' }
      ]
    },

    /* ── NIVEL 7 ── */
    {
      level: 7, code: '810304014', name: 'Computación de Alto Desempeño',
      desc: 'Paralelismo, GPU computing, distribución de cómputo y frameworks como Spark y Dask.',
      topics: ['Parallel computing', 'GPU con CUDA', 'Apache Spark', 'Dask', 'MapReduce', 'Optimización de cómputo'],
      resources: [
        { title: 'Spark — Databricks Academy (gratis)', url: 'https://www.databricks.com/learn/training/apache-spark-essentials' }
      ]
    },
    {
      level: 7, code: '810202019', name: 'Electiva I',
      desc: 'Materia electiva de libre elección según interés del estudiante.',
      topics: ['Electiva'],
      resources: []
    },
    {
      level: 7, code: '810304016', name: 'Ingeniería de Software',
      desc: 'Metodologías ágiles, diseño de software, testing y buenas prácticas de desarrollo.',
      topics: ['Scrum y Kanban', 'UML y diseño', 'Patrones de diseño', 'Testing', 'CI/CD', 'Code review'],
      resources: [
        { title: 'CS50 Web — Harvard (gratis)', url: 'https://cs50.harvard.edu/web/' }
      ]
    },
    {
      level: 7, code: '810202018', name: 'Optativa I',
      desc: 'Materia optativa de libre elección.',
      topics: ['Optativa'],
      resources: []
    },
    {
      level: 7, code: '810202017', name: 'Seminario de Investigación',
      desc: 'Metodología de investigación científica, revisión bibliográfica y redacción de papers.',
      topics: ['Metodología científica', 'Revisión de literatura', 'Diseño de experimentos', 'Redacción académica', 'Presentación de resultados'],
      resources: []
    },
    {
      level: 7, code: '810304015', name: 'Tópicos Avanzados de Aprendizaje de Máquina',
      desc: 'Ensemble methods, series de tiempo, selección de modelos y optimización avanzada.',
      topics: ['Gradient Boosting (XGBoost)', 'Series de tiempo', 'Feature selection', 'Ensemble methods', 'AutoML', 'Model interpretability'],
      resources: [
        { title: 'XGBoost docs', url: 'https://xgboost.readthedocs.io/' },
        { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' }
      ]
    },

    /* ── NIVEL 8 ── */
    {
      level: 8, code: '810304020', name: 'Computación en la Nube',
      desc: 'AWS, GCP, Azure: servicios de datos, ML y deployment en la nube.',
      topics: ['AWS / GCP / Azure basics', 'S3, EC2, BigQuery', 'ML platforms', 'Containerización', 'Serverless', 'Cost optimization'],
      resources: [
        { title: 'AWS Cloud Practitioner (gratis)', url: 'https://aws.amazon.com/training/learn-about-cloud-practitioner/' },
        { title: 'Google Cloud Skills Boost', url: 'https://cloudskillsboost.google/' }
      ]
    },
    {
      level: 8, code: '810304021', name: 'Desarrollo de Aplicaciones Web',
      desc: 'Frontend, backend, APIs REST y despliegue de aplicaciones web con datos.',
      topics: ['HTML/CSS/JS', 'React o Vue', 'Node.js o Python Flask', 'APIs REST', 'Despliegue', 'Docker básico'],
      resources: [
        { title: 'CS50 Web — Harvard (gratis)', url: 'https://cs50.harvard.edu/web/' },
        { title: 'The Odin Project', url: 'https://www.theodinproject.com/' }
      ]
    },
    {
      level: 8, code: '810202024', name: 'Formulación y Evaluación de Proyectos',
      desc: 'Planeación, presupuesto, evaluación financiera y viabilidad de proyectos de ingeniería.',
      topics: ['Estudio de mercado', 'Análisis financiero', 'VPN y TIR', 'Presupuestos', 'Gestión de riesgos', 'Proyecto de grado'],
      resources: []
    },
    {
      level: 8, code: '810202023', name: 'Optativa II',
      desc: 'Materia optativa de libre elección.',
      topics: ['Optativa'],
      resources: []
    },
    {
      level: 8, code: '810402022', name: 'Trabajo de Grado',
      desc: 'Desarrollo del proyecto de investigación o aplicado que cierra la carrera.',
      topics: ['Proyecto de grado'],
      resources: []
    },

    /* ── NIVEL 9 ── */
    {
      level: 9, code: '810304026', name: 'Deep Learning',
      desc: 'Redes neuronales profundas, CNN, RNN, transformers y sus aplicaciones en ciencia de datos.',
      topics: ['Neural networks basics', 'CNN (imágenes)', 'RNN y LSTM (secuencias)', 'Transformers', 'Transfer learning', 'TensorFlow / PyTorch'],
      resources: [
        { title: 'Deep Learning Specialization — Andrew Ng', url: 'https://www.coursera.org/specializations/deep-learning' },
        { title: 'fast.ai — Practical Deep Learning', url: 'https://course.fast.ai/' }
      ]
    },
    {
      level: 9, code: '810304027', name: 'Desarrollo de Aplicaciones Móviles',
      desc: 'Diseño y desarrollo de apps móviles para visualización y recolección de datos.',
      topics: ['React Native o Flutter', 'UI/UX móvil', 'APIs en móvil', 'Base de datos local', 'Deploy en Play Store'],
      resources: [
        { title: 'Flutter — Google Codelabs', url: 'https://codelabs.developers.google.com/?cat=Flutter' }
      ]
    },
    {
      level: 9, code: '810202029', name: 'Electiva II',
      desc: 'Materia electiva de libre elección.',
      topics: ['Electiva'],
      resources: []
    },
    {
      level: 9, code: '810202028', name: 'Optativa III',
      desc: 'Materia optativa de libre elección.',
      topics: ['Optativa'],
      resources: []
    },
    {
      level: 9, code: '810304025', name: 'Sistemas para Big Data',
      desc: 'Arquitecturas de datos a gran escala: Hadoop, Spark, Kafka, data lakes y data mesh.',
      topics: ['Hadoop Ecosystem', 'Apache Kafka', 'Data Lakes', 'Data Mesh', 'Streaming', 'Lakehouse architecture'],
      resources: [
        { title: 'Big Data — UC Berkeley (gratis)', url: 'https://data.berkeley.edu/education/courses/cs-209' }
      ]
    }
  ];

  /* ===========================================
     LEVEL COLORS & NAMES
     =========================================== */

  var LEVEL_COLORS = {
    1: '#E8A33D',
    2: '#E2604F',
    3: '#4F8FE2',
    4: '#8A6FDF',
    5: '#3FA796',
    6: '#6FB756',
    7: '#D6598C',
    8: '#00d2ef',
    9: '#f472b6'
  };

  var LEVEL_NAMES = {
    1: 'Nivel 1 — Fundamentos',
    2: 'Nivel 2 — Bases',
    3: 'Nivel 3 — Construcción',
    4: 'Nivel 4 — Análisis',
    5: 'Nivel 5 — Avanzado',
    6: 'Nivel 6 — Especialización',
    7: 'Nivel 7 — Profundización',
    8: 'Nivel 8 — Integración',
    9: 'Nivel 9 — Cierre'
  };

  /* ===========================================
     ANIMATED COUNTERS
     =========================================== */

  function animateCounters() {
    var nums = document.querySelectorAll('.hero-stat-num[data-count]');
    nums.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1500;
      var start = performance.now();

      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  setTimeout(animateCounters, 600);

  /* ===========================================
     SCROLL PROGRESS BAR
     =========================================== */

  var scrollBar = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    if (!scrollBar) return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollBar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ===========================================
     CONSTELLATION PARTICLES (Canvas)
     =========================================== */

  var canvas = document.getElementById('constellationCanvas');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var stars = [];
    var STAR_COUNT = 80;
    var CONNECTION_DIST = 120;
    var mouse = { x: -1000, y: -1000 };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    for (var i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5
      });
    }

    function drawConstellation() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var a = 0; a < stars.length; a++) {
        var s = stars[a];
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 210, 239, 0.3)';
        ctx.fill();

        for (var b = a + 1; b < stars.length; b++) {
          var s2 = stars[b];
          var dx = s.x - s2.x;
          var dy = s.y - s2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = 'rgba(0, 210, 239, ' + (0.08 * (1 - dist / CONNECTION_DIST)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        var mdx = s.x - mouse.x;
        var mdy = s.y - mouse.y;
        var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(0, 210, 239, ' + (0.15 * (1 - mdist / 150)) + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      requestAnimationFrame(drawConstellation);
    }

    drawConstellation();
  }

  /* ===========================================
     RENDER ENGINE
     =========================================== */

  var activeFilter = 'all';
  var searchQuery = '';

  function getLevelSubjects(level) {
    return PENSUM.filter(function (s) { return s.level === level; });
  }

  function matchesSearch(subject, query) {
    if (!query) return true;
    var q = query.toLowerCase();
    return subject.name.toLowerCase().indexOf(q) !== -1 ||
           subject.code.toLowerCase().indexOf(q) !== -1 ||
           subject.desc.toLowerCase().indexOf(q) !== -1 ||
           subject.topics.some(function (t) { return t.toLowerCase().indexOf(q) !== -1; });
  }

  function getFilteredSubjects() {
    return PENSUM.filter(function (s) {
      var matchesLevel = activeFilter === 'all' || s.level === parseInt(activeFilter, 10);
      var matchesQ = matchesSearch(s, searchQuery);
      return matchesLevel && matchesQ;
    });
  }

  function renderSubjectCard(subject, index) {
    var c = LEVEL_COLORS[subject.level];
    var topicsHtml = subject.topics.map(function (t) {
      return '<li>' + t + '</li>';
    }).join('');

    var resourcesHtml = '';
    if (subject.resources && subject.resources.length > 0) {
      var ticketsHtml = subject.resources.map(function (r) {
        return '<a class="ticket" href="' + r.url + '" target="_blank" rel="noopener" style="--c:' + c + '" onclick="event.stopPropagation()">' +
          '<span class="tag">Link</span>' +
          '<span class="ticket-body">' +
          '<p class="ticket-title">' + r.title + '</p>' +
          '</span>' +
          '<span class="arrow">&#8599;</span>' +
        '</a>';
      }).join('');
      resourcesHtml = '<div class="card-details-inner"><p class="topics-label">Recursos</p>' + ticketsHtml + '</div>';
    }

    var fullTopicsHtml = subject.topics.map(function (t) {
      return '<li>' + t + '</li>';
    }).join('');

    var hasDetails = subject.resources.length > 0;

    return '<div class="subject-card reveal" style="--delay:' + (index * 0.06) + 's" data-level="' + subject.level + '">' +
      '<div class="subject-header">' +
        '<span class="subject-code" style="color:' + c + '">' + subject.code + '</span>' +
        '<h3 class="subject-name">' + subject.name + '</h3>' +
      '</div>' +
      '<p class="subject-desc">' + subject.desc + '</p>' +
      '<p class="topics-label">Temas principales</p>' +
      '<ul class="topics">' + topicsHtml + '</ul>' +
      (hasDetails ? '<div class="card-details"><div class="card-details-inner"><p class="topics-label">Todos los temas</p><ul class="full-topics">' + fullTopicsHtml + '</ul>' + resourcesHtml + '</div></div>' +
      '<div class="card-expand-indicator"><span class="expand-arrow">&#9662;</span> Expandir detalles</div>' : '') +
    '</div>';
  }

  function renderLevelSection(level, filteredSubjects) {
    var subjects = filteredSubjects.filter(function (s) { return s.level === level; });
    if (subjects.length === 0) return '';

    var c = LEVEL_COLORS[level];
    var name = LEVEL_NAMES[level];

    var subjectsHtml = subjects.map(function (s, i) {
      return renderSubjectCard(s, i);
    }).join('');

    return '<section class="level-section" id="nivel-' + level + '">' +
      '<div class="level-header reveal">' +
        '<div class="level-badge" style="background:' + c + '">' + level + '</div>' +
        '<div>' +
          '<div class="section-label" style="color:' + c + '"><span class="line" style="background:' + c + '"></span>' + name + '</div>' +
          '<p class="level-subject-count">' + subjects.length + ' asignatura' + (subjects.length !== 1 ? 's' : '') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="subjects-grid">' + subjectsHtml + '</div>' +
    '</section>';
  }

  function renderAll() {
    var app = document.getElementById('app');
    if (!app) return;

    var filtered = getFilteredSubjects();
    var levelsHtml = '';
    var hasResults = false;

    for (var lvl = 1; lvl <= 9; lvl++) {
      var section = renderLevelSection(lvl, filtered);
      if (section) {
        levelsHtml += section;
        hasResults = true;
      }
    }

    if (!hasResults) {
      levelsHtml = '<div class="no-results">' +
        '<div class="no-results-icon">&#8734;</div>' +
        '<h3>No encontramos resultados</h3>' +
        '<p>Intenta con otro término o limpia los filtros.</p>' +
      '</div>';
    }

    app.innerHTML = levelsHtml;

    var countEl = document.getElementById('searchCount');
    if (countEl) {
      countEl.textContent = filtered.length + ' de ' + PENSUM.length + ' asignaturas';
    }

    initObservers();
  }

  function renderNav() {
    var html = '';
    for (var i = 1; i <= 9; i++) {
      var c = LEVEL_COLORS[i];
      html += '<a href="#nivel-' + i + '" class="level-nav-item" data-level="' + i + '" style="--c:' + c + '">' +
        '<span class="level-nav-dot" style="background:' + c + '"></span>' +
        '<span class="level-nav-label">N' + i + '</span>' +
      '</a>';
    }
    return html;
  }

  function renderFilterChips() {
    var chips = document.getElementById('filterChips');
    if (!chips) return;

    var html = '<button class="filter-chip active" data-filter="all">Todos <span class="chip-count">(' + PENSUM.length + ')</span></button>';
    for (var i = 1; i <= 9; i++) {
      var c = LEVEL_COLORS[i];
      var count = getLevelSubjects(i).length;
      html += '<button class="filter-chip" data-filter="' + i + '" style="--chip-color:' + c + '">' +
        '<span class="chip-dot" style="background:' + c + '"></span>N' + i +
        ' <span class="chip-count">(' + count + ')</span>' +
      '</button>';
    }
    chips.innerHTML = html;

    chips.addEventListener('click', function (e) {
      var chip = e.target.closest('.filter-chip');
      if (!chip) return;
      var filter = chip.getAttribute('data-filter');
      activeFilter = filter;
      chips.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      renderAll();
    });
  }

  /* ===========================================
     INIT
     =========================================== */

  var navInner = document.getElementById('linenav-inner');
  if (navInner) {
    navInner.innerHTML = '<span class="linenav-label">ITM · Ciencia de Datos</span>' + renderNav();
  }

  renderFilterChips();
  renderAll();

  /* ===========================================
     SEARCH
     =========================================== */

  var searchInput = document.getElementById('searchInput');
  var searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        searchQuery = searchInput.value.trim();
        renderAll();
      }, 200);
    });
  }

  /* ===========================================
     OBSERVERS & INTERACTIONS
     =========================================== */

  function initObservers() {
    var stops = document.querySelectorAll('.level-nav-item');
    var sections = Array.from(stops).map(function (s) {
      return document.getElementById('nivel-' + s.dataset.level);
    });

    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.id;
        var level = id.replace('nivel-', '');
        var stop = document.querySelector('.level-nav-item[data-level="' + level + '"]');
        if (!stop) return;
        if (entry.isIntersecting) {
          stops.forEach(function (s) { s.classList.remove('active'); });
          stop.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (sec) {
      if (sec) navObserver.observe(sec);
    });

    var reveals = document.querySelectorAll('.reveal');
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = getComputedStyle(entry.target).getPropertyValue('--delay');
          if (delay && delay !== '0s') {
            entry.target.style.transitionDelay = delay;
          }
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });

    var cards = document.querySelectorAll('.subject-card');
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--y', (e.clientY - rect.top) + 'px');
      });

      card.addEventListener('click', function () {
        var details = card.querySelector('.card-details');
        if (!details) return;
        card.classList.toggle('expanded');
      });
    });

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        if (!card.classList.contains('expanded')) {
          card.style.transform =
            'perspective(800px) rotateX(' + (-y * 3) + 'deg) rotateY(' + (x * 3) + 'deg) scale(1.01)';
        }
      });
      card.addEventListener('mouseleave', function () {
        if (!card.classList.contains('expanded')) {
          card.style.transform = '';
        }
      });
    });

    var scene = document.getElementById('scene3d');
    var sceneInner = document.getElementById('scene3dInner');
    var hero = document.querySelector('.hero');
    if (scene && sceneInner && hero) {
      hero.addEventListener('mousemove', function (e) {
        var rect = hero.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        sceneInner.style.transform =
          'rotateX(' + (-y * 8) + 'deg) rotateY(' + (x * 12) + 'deg)';
      });
      hero.addEventListener('mouseleave', function () {
        sceneInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    }
  }

})();
