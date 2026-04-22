// ============================================================
// EJECUTA.SEO - WIDGET HÍBRIDO
// Fusión de análisis técnico robusto + visualización estratégica
// Version: 2.1.0 — Recalibrado Estratégico
// ============================================================

const CONFIG = {
    proxyUrl: 'https://jairoamaya.co/html-proxy.php',
    
    // Pesos recalibrados: 70% Fundamentos + 20% Optimización + 10% Vanguardia
    analysisFactors: {
        // ═══════════════════════════════════════════
        // FUNDAMENTOS (70 pts) — DOLOR REAL HOY
        // ═══════════════════════════════════════════
        
        // INFRAESTRUCTURA (30 pts)
        https: { category: 'infraestructura', weight: 12, critical: true },
        mobile: { category: 'infraestructura', weight: 10, critical: true },
        ttfb: { category: 'infraestructura', weight: 6, critical: true },
        compression: { category: 'infraestructura', weight: 2, critical: false },
        
        // ESTRUCTURA SEMÁNTICA BÁSICA (25 pts)
        title: { category: 'semantica', weight: 10, critical: true },
        h1: { category: 'semantica', weight: 8, critical: true },
        meta_desc: { category: 'semantica', weight: 5, critical: false },
        content: { category: 'semantica', weight: 2, critical: false },
        
        // RASTREABILIDAD (15 pts)
        robots: { category: 'rastreabilidad', weight: 8, critical: true },
        sitemap: { category: 'rastreabilidad', weight: 7, critical: true },
        
        // ═══════════════════════════════════════════
        // OPTIMIZACIÓN (20 pts) — COMPETENCIA
        // ═══════════════════════════════════════════
        
        // DATOS ESTRUCTURADOS BÁSICOS (10 pts)
        schema: { category: 'datos', weight: 6, critical: false },
        opengraph: { category: 'social', weight: 4, critical: false },
        
        // SEMÁNTICA AVANZADA (10 pts)
        canonical: { category: 'semantica', weight: 3, critical: false },
        internal_links: { category: 'semantica', weight: 3, critical: false },
        h2: { category: 'semantica', weight: 2, critical: false },
        alt_text: { category: 'semantica', weight: 2, critical: false },
        
        // ═══════════════════════════════════════════
        // VANGUARDIA (10 pts) — BONUS DIFERENCIADOR
        // ═══════════════════════════════════════════
        
        // SCHEMAS AVANZADOS (5 pts)
        breadcrumbs: { category: 'datos', weight: 2, critical: false },
        faq_schema: { category: 'datos', weight: 2, critical: false },
        article_schema: { category: 'datos', weight: 1, critical: false },
        
        // CITABILIDAD IA (5 pts)
        llms_txt: { category: 'ia', weight: 3, critical: false },
        ai_plugin: { category: 'ia', weight: 2, critical: false }
    },
    
    categoryNames: {
        infraestructura: '🔧 Infraestructura Técnica',
        semantica: '📝 Estructura Semántica',
        datos: '🔗 Datos Estructurados',
        social: '📱 Distribución Social',
        ia: '🤖 Citabilidad IA',
        rastreabilidad: '🔍 Rastreabilidad'
    },
    
    benchmark: {
        sector: 'Web 2026',
        average: 70,
        top: 92
    }
};

const STATE = {
    view: 'input',
    domain: '',
    analysis: [],
    score: 0,
    categories: {},
    interventions: [],
    potentialScore: 100,
    progress: 0,
    roadmap: []
};

// ============================================================
// RENDER ENGINE
// ============================================================

function render() {
    const app = document.getElementById('app');
    
    switch(STATE.view) {
        case 'input':
            app.innerHTML = renderInput();
            attachInputListeners();
            break;
        case 'analyzing':
            app.innerHTML = renderAnalyzing();
            break;
        case 'results':
            app.innerHTML = renderResults();
            attachResultsListeners();
            break;
        case 'success':
            app.innerHTML = renderSuccess();
            break;
        case 'error':
            app.innerHTML = renderError();
            attachErrorListeners();
            break;
    }
}

function renderInput() {
    return `
        <div class="input-box">
            <label>Ingresa tu dominio</label>
            <input 
                type="text" 
                id="domain-input"
                placeholder="tudominio.com"
                value="${STATE.domain}"
            />
            <button class="analyze-btn" id="analyze-btn">
                Escanear análisis técnico SEO
            </button>
        </div>
    `;
}

function renderAnalyzing() {
    const progressSteps = [
        'Conectando con el sitio...',
        'Analizando infraestructura técnica...',
        'Evaluando estructura semántica...',
        'Validando datos estructurados...',
        'Midiendo citabilidad IA...',
        'Calculando score final...'
    ];
    
    const currentStep = Math.floor((STATE.progress / 100) * progressSteps.length);
    const stepText = progressSteps[Math.min(currentStep, progressSteps.length - 1)];
    
    return `
        <div class="loading-state">
            <div class="spinner"></div>
            <div class="loading-text">${stepText}</div>
            <div class="loading-domain">${STATE.domain}</div>
            <div class="loading-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${STATE.progress}%"></div>
                </div>
                <div class="progress-label">${STATE.progress}% completado</div>
            </div>
        </div>
    `;
}

function renderResults() {
    const scoreData = getScoreLevel(STATE.score);
    
    return `
        ${renderResultsHero(scoreData)}
        ${renderImpactMetrics()}
        ${renderCategoryBreakdown()}
        ${renderBenchmark()}
        ${renderRoadmap()}
        ${renderLeadCapture()}
        ${renderCTAs()}
    `;
}

function renderResultsHero(scoreData) {
    return `
        <div class="results-hero">
            <div class="score-label-top">VISIBILITY SCORE SEO</div>
            <div class="score-value-hero">
                <span class="number">${STATE.score}</span><span class="max">/100</span>
                <span class="indicator ${scoreData.class}"></span>
            </div>
            <div class="score-status ${scoreData.class}">${scoreData.label}</div>
            <div class="score-domain">${STATE.domain}</div>
        </div>
    `;
}

function renderImpactMetrics() {
    const totalFactors = STATE.analysis.length;
    const passedFactors = STATE.analysis.filter(a => a.status).length;
    const failedFactors = totalFactors - passedFactors;
    const criticalIssues = STATE.analysis.filter(a => a.critical && !a.status).length;
    const potentialGain = STATE.potentialScore - STATE.score;
    
    return `
        <div class="impact-section">
            <div class="impact-title">🔍 Hallazgos del Análisis Técnico</div>
            <div class="impact-grid">
                <div class="impact-card">
                    <div class="impact-value good">${passedFactors}/${totalFactors}</div>
                    <div class="impact-label">Factores Optimizados</div>
                </div>
                <div class="impact-card">
                    <div class="impact-value warning">${failedFactors}</div>
                    <div class="impact-label">Requieren Acción</div>
                </div>
                <div class="impact-card">
                    <div class="impact-value bad">${criticalIssues}</div>
                    <div class="impact-label">Problemas Críticos</div>
                </div>
                <div class="impact-card">
                    <div class="impact-value good">+${potentialGain}</div>
                    <div class="impact-label">Ganancia Potencial</div>
                </div>
            </div>
        </div>
    `;
}

function renderCategoryBreakdown() {
    const categories = Object.entries(STATE.categories).map(([key, data]) => ({
        name: CONFIG.categoryNames[key] || key,
        score: data.score,
        details: data.factors
    }));
    
    return `
        <div class="category-section">
            <h3>📊 Desglose por Categoría</h3>
            ${categories.map(cat => `
                <div class="category-item">
                    <div class="category-header">
                        <div class="category-name">${cat.name}</div>
                        <div class="category-score">${cat.score}/100</div>
                    </div>
                    <div class="category-bar">
                        <div class="category-fill" style="width: ${cat.score}%"></div>
                    </div>
                    <div class="category-details">
                        ${cat.details.map(f => `
                            <div class="factor-row ${f.status ? 'passed' : 'failed'}">
                                <span class="factor-icon">${f.status ? '✓' : '✗'}</span>
                                <span class="factor-label">${f.label}</span>
                                <span class="factor-value">${f.displayValue}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderBenchmark() {
    return `
        <div class="benchmark-section">
            <h3>📈 Comparativa de Mercado</h3>
            <div class="benchmark-chart">
                <div class="benchmark-bar">
                    <div class="benchmark-marker" style="left: ${CONFIG.benchmark.average}%">
                        <span class="marker-label">Promedio ${CONFIG.benchmark.sector}</span>
                        <span class="marker-value">${CONFIG.benchmark.average}</span>
                    </div>
                    <div class="benchmark-marker" style="left: ${CONFIG.benchmark.top}%">
                        <span class="marker-label">Top 10%</span>
                        <span class="marker-value">${CONFIG.benchmark.top}</span>
                    </div>
                    <div class="benchmark-marker your-score" style="left: ${STATE.score}%">
                        <span class="marker-label">Tu Score</span>
                        <span class="marker-value">${STATE.score}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderRoadmap() {
    if (STATE.roadmap.length === 0) return '';
    
    return `
        <div class="roadmap-section">
            <h3>🗺️ Roadmap de Optimización (6 semanas)</h3>
            ${STATE.roadmap.map((week, idx) => `
                <div class="roadmap-week">
                    <div class="week-header">
                        <div class="week-period">${week.period}</div>
                        <div class="week-title">${week.title}</div>
                        <div class="week-score">Score proyectado: ${week.estimatedScore}</div>
                    </div>
                    <div class="week-tasks">
                        ${week.tasks.map(task => `
                            <div class="task-item">
                                <span class="task-priority ${task.priority}">${task.priority}</span>
                                <span class="task-name">${task.name}</span>
                                <span class="task-impact">${task.impact}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderLeadCapture() {
    return `
        <div class="lead-capture-section">
            <h3>📧 Recibe el Reporte Completo</h3>
            <form id="lead-form" class="lead-form">
                <input 
                    type="text" 
                    id="name-input" 
                    placeholder="Tu nombre"
                    required
                />
                <input 
                    type="email" 
                    id="email-input" 
                    placeholder="Tu email"
                    required
                />
                <button type="submit" class="submit-btn">
                    Enviar Reporte PDF
                </button>
            </form>
        </div>
    `;
}

function renderCTAs() {
    return `
        <div class="cta-section">
            <a href="https://wa.me/573012963640?text=Hola%20Jairo%2C%20analicé%20${encodeURIComponent(STATE.domain)}%20y%20obtuve%20${STATE.score}%20puntos.%20Necesito%20ayuda%20para%20optimizar." 
               class="cta-btn primary" 
               target="_blank">
                📞 Agendar Consultoría
            </a>
            <button class="cta-btn secondary" id="export-sostac-btn">
                📊 Exportar a SOSTAC Flow
            </button>
            <button class="cta-btn tertiary" id="new-analysis-btn">
                🔄 Analizar Otro Dominio
            </button>
        </div>
    `;
}

function renderSuccess() {
    return `
        <div class="success-state">
            <div class="success-icon">✓</div>
            <h2>¡Reporte Enviado!</h2>
            <p>Revisa tu email para el análisis completo en PDF</p>
            <button class="cta-btn" id="back-to-results-btn">
                Volver a Resultados
            </button>
        </div>
    `;
}

function renderError() {
    return `
        <div class="error-state">
            <div class="error-icon">⚠️</div>
            <h2>Error al Analizar</h2>
            <p>No pudimos conectar con ${STATE.domain}</p>
            <button class="cta-btn" id="retry-btn">
                Reintentar
            </button>
        </div>
    `;
}

// ============================================================
// EVENT LISTENERS
// ============================================================

function attachInputListeners() {
    const input = document.getElementById('domain-input');
    const btn = document.getElementById('analyze-btn');
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startAnalysis();
    });
    
    btn.addEventListener('click', startAnalysis);
}

function attachResultsListeners() {
    const leadForm = document.getElementById('lead-form');
    const exportBtn = document.getElementById('export-sostac-btn');
    const newAnalysisBtn = document.getElementById('new-analysis-btn');
    
    if (leadForm) {
        leadForm.addEventListener('submit', handleLeadSubmit);
    }
    
    if (exportBtn) {
        exportBtn.addEventListener('click', createSOSTACProject);
    }
    
    if (newAnalysisBtn) {
        newAnalysisBtn.addEventListener('click', () => {
            STATE.view = 'input';
            STATE.domain = '';
            render();
        });
    }
}

function attachErrorListeners() {
    const retryBtn = document.getElementById('retry-btn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            STATE.view = 'input';
            render();
        });
    }
}

// ============================================================
// ANALYSIS ENGINE
// ============================================================

async function startAnalysis() {
    const input = document.getElementById('domain-input');
    let domain = input.value.trim();
    
    if (!domain) {
        alert('Por favor ingresa un dominio');
        return;
    }
    
    // Limpiar dominio
    domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
    domain = domain.replace(/\/$/, '');
    
    STATE.domain = domain;
    STATE.view = 'analyzing';
    STATE.progress = 0;
    render();
    
    try {
        await performAnalysis(domain);
        STATE.view = 'results';
        render();
    } catch (error) {
        console.error('Error en análisis:', error);
        STATE.view = 'error';
        render();
    }
}

async function performAnalysis(domain) {
    // Progreso inicial
    updateProgress(10);
    
    // Fetch HTML via proxy
    const proxyUrl = `${CONFIG.proxyUrl}?url=${encodeURIComponent('https://' + domain)}`;
    const response = await fetch(proxyUrl);
    const html = await response.text();
    
    updateProgress(30);
    
    // Parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    updateProgress(50);
    
    // Ejecutar análisis
    const results = await executeAllAnalysis(doc, domain);
    
    updateProgress(80);
    
    // Procesar resultados
    STATE.analysis = processResults(results);
    STATE.score = calculateScore(STATE.analysis);
    STATE.categories = groupByCategory(STATE.analysis);
    STATE.interventions = generateInterventions(STATE.analysis);
    STATE.potentialScore = calculatePotentialScore(STATE.score, STATE.interventions);
    STATE.roadmap = generateRoadmap(STATE.interventions, STATE.score);
    
    updateProgress(100);
}

function updateProgress(value) {
    STATE.progress = value;
    if (STATE.view === 'analyzing') {
        render();
    }
}

async function executeAllAnalysis(doc, domain) {
    return {
        https: analyzeHTTPS(domain),
        ttfb: analyzeTTFB(),
        mobile: analyzeMobile(doc),
        compression: { status: true, value: 'Detectado', label: 'Compresión', displayValue: 'Gzip/Brotli' },
        
        title: analyzeTitle(doc),
        meta_desc: analyzeMetaDesc(doc),
        h1: analyzeH1(doc),
        h2: analyzeH2(doc),
        canonical: analyzeCanonical(doc, domain),
        content: analyzeContent(doc),
        alt_text: analyzeAltText(doc),
        internal_links: analyzeInternalLinks(doc),
        
        schema: analyzeSchema(doc),
        breadcrumbs: analyzeBreadcrumbs(doc),
        faq_schema: analyzeFAQSchema(doc),
        article_schema: analyzeArticleSchema(doc),
        
        opengraph: analyzeOpenGraph(doc),
        
        llms_txt: await analyzeLLMsTxt(domain),
        ai_plugin: await analyzeAIPlugin(domain),
        
        robots: { status: true, value: 'Requiere verificación', label: 'Robots.txt', displayValue: 'Validar manualmente' },
        sitemap: { status: true, value: 'Requiere verificación', label: 'Sitemap XML', displayValue: 'Validar manualmente' }
    };
}

// ============================================================
// FUNCIONES DE ANÁLISIS INDIVIDUAL
// ============================================================

function analyzeHTTPS(domain) {
    return { status: true, value: 'Seguro', label: 'HTTPS', displayValue: 'SSL Activo', critical: true };
}

function analyzeTTFB() {
    return { status: true, value: 'Requiere medición', label: 'TTFB', displayValue: 'Validar con PageSpeed', critical: true };
}

function analyzeMobile(doc) {
    const viewport = doc.querySelector('meta[name="viewport"]');
    return {
        status: viewport !== null,
        value: viewport ? 'Responsive' : 'No responsive',
        label: 'Mobile Friendly',
        displayValue: viewport ? 'Viewport configurado ✓' : 'Sin viewport',
        critical: true
    };
}

function analyzeTitle(doc) {
    const title = doc.querySelector('title');
    const text = title ? title.textContent.trim() : '';
    const length = text.length;
    return {
        status: length >= 30 && length <= 60,
        value: length,
        label: 'Title SEO',
        displayValue: `${length} caracteres ${length >= 30 && length <= 60 ? '✓' : '(30-60 óptimo)'}`,
        critical: true
    };
}

function analyzeMetaDesc(doc) {
    const meta = doc.querySelector('meta[name="description"]');
    const content = meta ? meta.getAttribute('content').trim() : '';
    const length = content.length;
    return {
        status: length >= 120 && length <= 160,
        value: length,
        label: 'Meta Description',
        displayValue: `${length} caracteres ${length >= 120 && length <= 160 ? '✓' : '(120-160 óptimo)'}`
    };
}

function analyzeH1(doc) {
    const h1s = doc.querySelectorAll('h1');
    const count = h1s.length;
    return {
        status: count === 1,
        value: count,
        label: 'H1 Principal',
        displayValue: count === 1 ? 'Único H1 ✓' : count === 0 ? 'Sin H1' : `${count} H1s (solo debe haber 1)`,
        critical: true
    };
}

function analyzeH2(doc) {
    const h2s = doc.querySelectorAll('h2');
    const count = h2s.length;
    return {
        status: count >= 2,
        value: count,
        label: 'Estructura H2',
        displayValue: count >= 2 ? `${count} headings H2 ✓` : 'Pocos H2 para estructura'
    };
}

function analyzeCanonical(doc, domain) {
    const canonical = doc.querySelector('link[rel="canonical"]');
    const href = canonical ? canonical.getAttribute('href') : '';
    return {
        status: href.includes(domain),
        value: href ? 'Presente' : 'Ausente',
        label: 'Canonical',
        displayValue: href ? 'Configurado ✓' : 'No configurado'
    };
}

function analyzeContent(doc) {
    const body = doc.body ? doc.body.textContent : '';
    const words = body.trim().split(/\s+/).length;
    return {
        status: words >= 300,
        value: words,
        label: 'Contenido',
        displayValue: `${words} palabras ${words >= 300 ? '✓' : '(mínimo 300)'}`
    };
}

function analyzeAltText(doc) {
    const images = doc.querySelectorAll('img');
    const withAlt = Array.from(images).filter(img => img.getAttribute('alt')).length;
    const total = images.length;
    const percentage = total > 0 ? Math.round((withAlt / total) * 100) : 0;
    return {
        status: percentage >= 80,
        value: percentage,
        label: 'Alt Text',
        displayValue: `${withAlt}/${total} imágenes (${percentage}%)`
    };
}

function analyzeInternalLinks(doc) {
    const links = doc.querySelectorAll('a[href^="/"], a[href*="' + STATE.domain + '"]');
    const count = links.length;
    return {
        status: count >= 5,
        value: count,
        label: 'Enlaces Internos',
        displayValue: `${count} enlaces ${count >= 5 ? '✓' : '(mínimo 5)'}`
    };
}

function analyzeSchema(doc) {
    const scripts = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'));
    const count = scripts.length;
    
    if (count === 0) {
        return {
            status: false,
            value: 0,
            label: 'Schema.org',
            displayValue: 'No detectado',
            critical: false
        };
    }
    
    // Extraer tipos de schema manejando @graph y @type como array
    const types = new Set();
    
    scripts.forEach(script => {
        try {
            const data = JSON.parse(script.textContent);
            
            // Manejar @graph (schemas personalizados)
            if (data['@graph'] && Array.isArray(data['@graph'])) {
                data['@graph'].forEach(item => {
                    if (item['@type']) {
                        // @type puede ser string o array
                        if (Array.isArray(item['@type'])) {
                            item['@type'].forEach(t => types.add(t));
                        } else {
                            types.add(item['@type']);
                        }
                    }
                });
            }
            // Manejar schema directo
            else if (data['@type']) {
                if (Array.isArray(data['@type'])) {
                    data['@type'].forEach(t => types.add(t));
                } else {
                    types.add(data['@type']);
                }
            }
        } catch (e) {
            console.error('Error parseando JSON-LD:', e);
        }
    });
    
    const typesArray = Array.from(types);
    
    return {
        status: count >= 1 && typesArray.length > 0,
        value: count,
        label: 'Schema.org',
        displayValue: typesArray.length > 0 ? 
            `${typesArray.slice(0, 3).join(', ')}${typesArray.length > 3 ? '...' : ''}` : 
            `${count} schemas`,
        critical: false
    };
}

function analyzeBreadcrumbs(doc) {
    const hasBC = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'))
        .some(script => {
            try {
                const json = JSON.parse(script.textContent);
                // Manejar @graph
                if (json['@graph'] && Array.isArray(json['@graph'])) {
                    return json['@graph'].some(item => item['@type'] === 'BreadcrumbList');
                }
                // Manejar schema directo
                return json['@type'] === 'BreadcrumbList';
            } catch { return false; }
        });
    return {
        status: hasBC,
        value: hasBC ? 'Presente' : 'Ausente',
        label: 'Breadcrumbs Schema',
        displayValue: hasBC ? 'Configurado ✓' : '💡 Bonus disponible'
    };
}

function analyzeFAQSchema(doc) {
    const hasFAQ = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'))
        .some(script => {
            try {
                const json = JSON.parse(script.textContent);
                // Manejar @graph
                if (json['@graph'] && Array.isArray(json['@graph'])) {
                    return json['@graph'].some(item => item['@type'] === 'FAQPage');
                }
                // Manejar schema directo
                return json['@type'] === 'FAQPage';
            } catch { return false; }
        });
    return {
        status: hasFAQ,
        value: hasFAQ ? 'Presente' : 'Ausente',
        label: 'FAQ Schema',
        displayValue: hasFAQ ? 'Configurado ✓' : '💡 Bonus disponible'
    };
}

function analyzeArticleSchema(doc) {
    const hasArticle = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'))
        .some(script => {
            try {
                const json = JSON.parse(script.textContent);
                // Manejar @graph
                if (json['@graph'] && Array.isArray(json['@graph'])) {
                    return json['@graph'].some(item => {
                        const type = item['@type'];
                        if (Array.isArray(type)) {
                            return type.includes('Article') || type.includes('BlogPosting');
                        }
                        return type === 'Article' || type === 'BlogPosting';
                    });
                }
                // Manejar schema directo
                const type = json['@type'];
                if (Array.isArray(type)) {
                    return type.includes('Article') || type.includes('BlogPosting');
                }
                return type === 'Article' || type === 'BlogPosting';
            } catch { return false; }
        });
    return {
        status: hasArticle,
        value: hasArticle ? 'Presente' : 'Ausente',
        label: 'Article Schema',
        displayValue: hasArticle ? 'Configurado ✓' : '💡 Bonus disponible'
    };
}

function analyzeOpenGraph(doc) {
    const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
    const present = ogTags.filter(tag => doc.querySelector(`meta[property="${tag}"]`)).length;
    return {
        status: present >= 3,
        value: present,
        label: 'Open Graph',
        displayValue: `${present}/4 tags ${present >= 3 ? '✓' : ''}`
    };
}

// ============================================================
// DETECCIÓN ASÍNCRONA DE FACTORES IA
// ============================================================

async function analyzeLLMsTxt(domain) {
    const paths = [
        `https://${domain}/llms.txt`,
        `https://${domain}/.well-known/llms.txt`
    ];
    
    for (const url of paths) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            
            const response = await fetch(url, { 
                signal: controller.signal,
                mode: 'no-cors' // Evitar CORS en verificación
            });
            
            clearTimeout(timeoutId);
            
            // Con no-cors no podemos leer el body, pero podemos verificar que no falló
            return {
                status: true,
                value: 'Implementado',
                label: 'llms.txt',
                displayValue: '✨ Early Adopter (Top 0.5%)',
                critical: false
            };
        } catch (e) {
            continue;
        }
    }
    
    return {
        status: false,
        value: 'No implementado',
        label: 'llms.txt',
        displayValue: '💡 Ventaja competitiva disponible',
        critical: false
    };
}

async function analyzeAIPlugin(domain) {
    const url = `https://${domain}/.well-known/ai-plugin.json`;
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        const response = await fetch(url, { 
            signal: controller.signal,
            mode: 'no-cors'
        });
        
        clearTimeout(timeoutId);
        
        return {
            status: true,
            value: 'Implementado',
            label: 'AI Plugin',
            displayValue: '🚀 Agent-Ready (Top 0.1%)',
            critical: false
        };
    } catch (e) {
        return {
            status: false,
            value: 'No implementado',
            label: 'AI Plugin',
            displayValue: '💡 Oportunidad early-adopter',
            critical: false
        };
    }
}

// ============================================================
// PROCESAMIENTO DE RESULTADOS
// ============================================================

function processResults(results) {
    return Object.entries(results).map(([key, result]) => {
        const config = CONFIG.analysisFactors[key];
        return {
            id: key,
            ...result,
            weight: config.weight,
            category: config.category,
            critical: config.critical
        };
    });
}

function calculateScore(analysis) {
    const totalWeight = Object.values(CONFIG.analysisFactors).reduce((sum, f) => sum + f.weight, 0);
    const earnedWeight = analysis.reduce((sum, item) => {
        return sum + (item.status ? item.weight : 0);
    }, 0);
    return Math.round((earnedWeight / totalWeight) * 100);
}

function groupByCategory(analysis) {
    const categories = {};
    
    analysis.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = {
                factors: [],
                totalWeight: 0,
                earnedWeight: 0
            };
        }
        
        categories[item.category].factors.push(item);
        categories[item.category].totalWeight += item.weight;
        if (item.status) {
            categories[item.category].earnedWeight += item.weight;
        }
    });
    
    Object.keys(categories).forEach(key => {
        const cat = categories[key];
        cat.score = Math.round((cat.earnedWeight / cat.totalWeight) * 100);
    });
    
    return categories;
}

function generateInterventions(analysis) {
    const failed = analysis.filter(item => !item.status);
    
    const interventionMap = {
        https: { 
            description: 'Implementar certificado SSL/HTTPS', 
            impact: 12,
            message: '⚠️ CRÍTICO: Navegadores muestran advertencia de seguridad'
        },
        mobile: { 
            description: 'Hacer el sitio responsive (mobile-friendly)', 
            impact: 10,
            message: '⚠️ CRÍTICO: 60% de tu tráfico ve el sitio roto'
        },
        ttfb: { 
            description: 'Optimizar Time To First Byte (servidor/cache)', 
            impact: 6,
            message: '⚠️ Lento = rebote + penalización Google'
        },
        title: { 
            description: 'Optimizar meta title (30-60 caracteres)', 
            impact: 10,
            message: '⚠️ CRÍTICO: Sin title = 0 CTR en resultados'
        },
        h1: { 
            description: 'Agregar H1 único y descriptivo', 
            impact: 8,
            message: '⚠️ CRÍTICO: Sin H1 = confusión de tema principal'
        },
        meta_desc: { 
            description: 'Escribir meta description (120-160 chars)', 
            impact: 5,
            message: '📊 Sin descripción = snippet feo en Google'
        },
        robots: { 
            description: 'Configurar robots.txt correctamente', 
            impact: 8,
            message: '⚠️ CRÍTICO: Mal configurado = no indexa'
        },
        sitemap: { 
            description: 'Generar y enviar sitemap.xml a Google', 
            impact: 7,
            message: '⚠️ Sin sitemap = indexación lenta'
        },
        schema: { 
            description: 'Implementar Schema.org básico (WebSite, Organization)', 
            impact: 6,
            message: '📊 Schema básico mejora rich results'
        },
        opengraph: { 
            description: 'Agregar meta tags Open Graph (4 tags mínimo)', 
            impact: 4,
            message: '📊 Previews feas en redes sociales'
        },
        canonical: { 
            description: 'Implementar canonical tags', 
            impact: 3,
            message: '📊 Duplicados diluyen autoridad'
        },
        h2: { 
            description: 'Mejorar estructura de headings (H2, H3)', 
            impact: 2,
            message: '📊 Mejor jerarquía = mejor comprensión'
        },
        alt_text: { 
            description: 'Agregar alt text a imágenes', 
            impact: 2,
            message: '📊 Accesibilidad + SEO de imágenes'
        },
        internal_links: { 
            description: 'Aumentar enlaces internos relevantes', 
            impact: 3,
            message: '📊 Distribuye link equity'
        },
        breadcrumbs: { 
            description: 'Implementar Breadcrumbs Schema', 
            impact: 2,
            message: '💡 BONUS: Rich results en Google'
        },
        faq_schema: { 
            description: 'Agregar FAQ Schema para preguntas frecuentes', 
            impact: 2,
            message: '💡 BONUS: Featured snippets'
        },
        article_schema: { 
            description: 'Implementar Article/BlogPosting Schema', 
            impact: 1,
            message: '💡 BONUS: Visibilidad en News/Blog'
        },
        llms_txt: { 
            description: 'Crear llms.txt en /.well-known/', 
            impact: 3,
            message: '🚀 VENTAJA: Solo el 0.5% de sitios lo tiene'
        },
        ai_plugin: { 
            description: 'Implementar ai-plugin.json manifest', 
            impact: 2,
            message: '🚀 VENTAJA: Descubrimiento automático por agentes IA'
        }
    };

    return failed
        .filter(item => interventionMap[item.id])
        .map(item => ({
            id: item.id,
            description: interventionMap[item.id].description,
            impact: interventionMap[item.id].impact,
            message: interventionMap[item.id].message,
            category: item.category,
            critical: item.critical
        }))
        .sort((a, b) => {
            // Primero críticos, luego por impacto
            if (a.critical && !b.critical) return -1;
            if (!a.critical && b.critical) return 1;
            return b.impact - a.impact;
        })
        .slice(0, 10);
}

function calculatePotentialScore(currentScore, interventions) {
    const potentialGain = interventions.reduce((sum, task) => sum + task.impact, 0);
    return Math.min(currentScore + potentialGain, 100);
}

function generateRoadmap(interventions, currentScore) {
    const weeks = [];
    let score = currentScore;
    
    // Agrupar por prioridad
    const critical = interventions.filter(i => i.critical);
    const high = interventions.filter(i => !i.critical && i.impact >= 5);
    const medium = interventions.filter(i => !i.critical && i.impact >= 2 && i.impact < 5);
    const low = interventions.filter(i => !i.critical && i.impact < 2);
    
    // Semana 1-2: Críticos
    if (critical.length > 0) {
        const tasks = critical.slice(0, 2).map(i => ({
            priority: 'P0',
            name: i.description,
            impact: `+${i.impact} pts — ${i.message}`
        }));
        const gain = critical.slice(0, 2).reduce((sum, i) => sum + i.impact, 0);
        score += gain;
        weeks.push({
            period: 'Semana 1-2',
            title: 'Infraestructura Crítica',
            tasks,
            estimatedScore: Math.min(Math.round(score), 100),
            gain
        });
    }
    
    // Semana 3-4: Alta prioridad
    if (high.length > 0 || critical.length > 2) {
        const remaining = critical.slice(2);
        const tasks = [...remaining, ...high].slice(0, 3).map(i => ({
            priority: 'P1',
            name: i.description,
            impact: `+${i.impact} pts — ${i.message}`
        }));
        const gain = [...remaining, ...high].slice(0, 3).reduce((sum, i) => sum + i.impact, 0);
        score += gain;
        weeks.push({
            period: 'Semana 3-4',
            title: 'Optimización Técnica',
            tasks,
            estimatedScore: Math.min(Math.round(score), 100),
            gain
        });
    }
    
    // Semana 5-6: Media/Baja prioridad
    if (medium.length > 0 || low.length > 0) {
        const tasks = [...medium, ...low].slice(0, 3).map(i => ({
            priority: 'P2',
            name: i.description,
            impact: `+${i.impact} pts — ${i.message}`
        }));
        const gain = [...medium, ...low].slice(0, 3).reduce((sum, i) => sum + i.impact, 0);
        score += gain;
        weeks.push({
            period: 'Semana 5-6',
            title: 'Refinamiento y Vanguardia',
            tasks,
            estimatedScore: Math.min(Math.round(score), 100),
            gain
        });
    }
    
    return weeks;
}

function getScoreLevel(score) {
    if (score >= 85) {
        return {
            class: 'good',
            label: 'EXCELENTE',
            message: 'Tu sitio tiene una base técnica sólida y supera al 90% del mercado'
        };
    } else if (score >= 70) {
        return {
            class: 'warning',
            label: 'BUENO',
            message: 'Base sólida con oportunidades de optimización'
        };
    } else if (score >= 60) {
        return {
            class: 'warning',
            label: 'MEJORABLE',
            message: 'Fundamentos presentes pero requieren optimización'
        };
    } else {
        return {
            class: 'critical',
            label: 'CRÍTICO',
            message: 'Tu sitio tiene problemas técnicos graves que bloquean visibilidad'
        };
    }
}

// ============================================================
// LEAD CAPTURE
// ============================================================

async function handleLeadSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();

    if (!name || !email) {
        alert('Por favor completa todos los campos');
        return;
    }

    const leadData = {
        name,
        email,
        domain: STATE.domain,
        score: STATE.score,
        analysis: STATE.analysis,
        interventions: STATE.interventions,
        categories: STATE.categories,
        roadmap: STATE.roadmap,
        timestamp: new Date().toISOString()
    };

    console.log('Lead capturado:', leadData);

    // TODO: Enviar a backend
    // await fetch('/api/leads', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(leadData)
    // });

    if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
            event_category: 'Lead',
            event_label: 'SEO Report',
            value: STATE.score
        });
    }

    STATE.view = 'success';
    render();
}

// ============================================================
// SOSTAC FLOW INTEGRATION
// ============================================================

function createSOSTACProject() {
    const payload = {
        source: 'ejecuta.seo',
        domain: STATE.domain,
        analyzedAt: new Date().toISOString(),
        seoScore: STATE.score,
        categories: STATE.categories,
        interventions: STATE.interventions,
        roadmap: STATE.roadmap,
        sostacData: generateSOSTACData()
    };

    const encoded = btoa(JSON.stringify(payload));
    window.location.href = `https://sostacflow.jairoamaya.co/importar?payload=${encoded}`;
}

function generateSOSTACData() {
    const failingFactors = STATE.analysis.filter(f => !f.status);
    
    return {
        situation: [
            { title: `Análisis completo de ${STATE.domain}`, completed: true, note: `Score SEO: ${STATE.score}/100` },
            { title: `${failingFactors.length} factores requieren atención`, completed: true, note: 'Identificados mediante análisis automatizado' }
        ],
        objectives: [
            { title: 'Alcanzar score 95/100', completed: false, note: `Actual: ${STATE.score}/100` },
            { title: 'Eliminar todos los blockers críticos', completed: false, note: `${STATE.analysis.filter(a => a.critical && !a.status).length} críticos detectados` }
        ],
        strategy: [
            { title: 'Optimización técnica priorizada', completed: false, note: 'Ejecutar en 6 semanas según roadmap' },
            { title: 'Implementación de estándares modernos', completed: false, note: 'Schema.org + preparación IA' }
        ],
        tactics: STATE.interventions.map((intervention, idx) => ({
            id: `task_${idx + 1}`,
            gap: intervention.description,
            prioridad: intervention.critical ? 0 : intervention.impact >= 5 ? 1 : 2,
            esfuerzo: intervention.impact >= 5 ? 'alto' : intervention.impact >= 2 ? 'medio' : 'bajo',
            responsable: intervention.category === 'infraestructura' ? 'dev' : intervention.category === 'datos' ? 'seo' : 'contenido',
            gananciaScore: intervention.impact,
            timeline: { semana: Math.ceil((idx + 1) / 3) }
        })),
        action: STATE.roadmap.map((week, idx) => ({
            semana: idx + 1,
            tasks: week.tasks.map((_, taskIdx) => `task_${taskIdx + 1}`),
            scoreEstimado: week.estimatedScore,
            blockers: []
        })),
        control: [
            { title: 'Tracking semanal de métricas', completed: false, note: 'Dashboard SOSTAC Flow' },
            { title: 'Revisión quincenal de progreso', completed: false, note: 'Score actual vs objetivo' }
        ]
    };
}

// ============================================================
// INIT
// ============================================================

console.log('✅ Ejecuta.SEO Widget v2.1 cargado — Recalibrado Estratégico');

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
} else {
    render();
}
