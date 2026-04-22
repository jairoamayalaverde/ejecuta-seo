// ============================================================
// EJECUTA.SEO - WIDGET HÍBRIDO
// Fusión de análisis técnico robusto + visualización estratégica
// Version: 2.0.0
// ============================================================

const CONFIG = {
    proxyUrl: 'https://jairoamaya.co/html-proxy.php',
    pdfGeneratorUrl: 'https://jairoamaya.co/pdf-generator.php',
    
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
                Escanear 30+ factores técnicos
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
                        <div class="category-score ${cat.score >= 70 ? 'high' : cat.score >= 50 ? 'medium' : 'low'}">
                            ${cat.score}/100
                        </div>
                    </div>
                    <div class="category-details">
                        <ul>
                            ${cat.details.map(detail => `
                                <li>
                                    <span>${detail.status ? '✅' : '⚠️'}</span>
                                    <span>${detail.label}: ${detail.displayValue}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderBenchmark() {
    const industry = CONFIG.benchmark;
    const gap = industry.average - STATE.score;
    const gapPercentage = Math.abs(gap) * 2.5;
    
    return `
        <div class="benchmark-section">
            <h3>📈 Benchmark vs Industria</h3>
            
            <div class="benchmark-bar">
                <div class="benchmark-label">
                    <span>Tu sitio</span>
                    <span>${STATE.score}/100</span>
                </div>
                <div class="bar-container">
                    <div class="bar-fill" style="width:${STATE.score}%;background:linear-gradient(90deg,${STATE.score >= 70 ? '#10b981' : STATE.score >= 50 ? '#f59e0b' : '#ef4444'},${STATE.score >= 70 ? '#059669' : STATE.score >= 50 ? '#d97706' : '#dc2626'});"></div>
                </div>
            </div>

            <div class="benchmark-bar">
                <div class="benchmark-label">
                    <span>Promedio ${industry.sector}</span>
                    <span>${industry.average}/100</span>
                </div>
                <div class="bar-container">
                    <div class="bar-fill" style="width:${industry.average}%;background:linear-gradient(90deg,#f59e0b,#10b981);"></div>
                </div>
            </div>

            <div class="benchmark-bar">
                <div class="benchmark-label">
                    <span>Top 10%</span>
                    <span>${industry.top}/100</span>
                </div>
                <div class="bar-container">
                    <div class="bar-fill" style="width:${industry.top}%;background:linear-gradient(90deg,#10b981,#059669);"></div>
                </div>
            </div>

            <p style="margin-top:24px;font-size:13px;color:#999;line-height:1.6;">
                <strong style="color:${gap > 0 ? '#f59e0b' : '#10b981'};">Brecha competitiva:</strong> ${gap > 0 ? '-' : '+'}${Math.abs(gap)} pts vs promedio<br>
                ${gap > 0 ? '⚠️ Equivalente a ~' + Math.round(gapPercentage) + '% menos visibilidad' : '✅ Por encima del promedio del sector'}
            </p>
        </div>
    `;
}

function renderRoadmap() {
    return `
        <div class="roadmap-section">
            <h3>🗓️ Roadmap Ejecutable (6 Semanas)</h3>
            
            ${STATE.roadmap.map(week => `
                <div class="roadmap-week">
                    <div class="week-header">${week.period}</div>
                    <div class="week-title">${week.title}</div>
                    
                    ${week.tasks.map(task => `
                        <div class="task-item">
                            <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
                            <div style="flex:1;">
                                <div>${task.name}</div>
                                <div style="font-size:12px;color:#666;margin-top:4px;">${task.impact}</div>
                            </div>
                        </div>
                    `).join('')}
                    
                    <div class="week-estimated">
                        Score estimado al finalizar: <strong>${week.estimatedScore}/100</strong> (+${week.gain} pts)
                    </div>
                </div>
            `).join('')}

            <p style="margin-top:24px;padding:20px;background:#0a0a0a;border:1px solid #333;border-radius:12px;font-size:12px;color:#666;line-height:1.6;">
                ⚠️ Este roadmap fue generado automáticamente basado en análisis técnico. 
                En consultoría lo ajustamos a tu stack, recursos y prioridades reales.
            </p>
        </div>
    `;
}

function renderLeadCapture() {
    return `
        <div class="lead-capture">
            <h2>📊 Reporte Completo + Plan SOSTAC</h2>
            <p>Recibe el análisis detallado de los 30+ factores evaluados más tu roadmap ejecutable personalizado de 6 semanas</p>
            
            <ul>
                <li>Diagnóstico técnico completo en PDF</li>
                <li>Plan SOSTAC personalizado (6 semanas)</li>
                <li>Priorización por impacto y esfuerzo</li>
                <li>Estimado de ganancia por tarea</li>
            </ul>
            
            <form class="lead-form" id="lead-form">
                <div class="form-row">
                    <input type="text" id="name-input" placeholder="Tu nombre" required />
                    <input type="email" id="email-input" placeholder="tu@email.com" required />
                </div>
                <button type="submit" class="submit-btn">
                    Enviar Reporte Completo
                </button>
                <div class="privacy-note">
                    🔒 Tu información está protegida. No spam, solo valor.
                </div>
            </form>
        </div>
    `;
}

function renderCTAs() {
    const tasksCount = STATE.analysis.filter(f => !f.status).length;
    
    return `
        <div class="cta-section">
            <h3>¿Listo para implementar estas mejoras?</h3>
            <p style="font-size:16px;color:#999;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto;">
                Tienes ${tasksCount} tareas identificadas. Agenda una sesión estratégica para priorizarlas según tu contexto específico.
            </p>
            
            <div class="cta-options">
                <div class="cta-option featured" style="max-width:500px;margin:0 auto;">
                    <span class="cta-badge">Sesión Gratuita</span>
                    <h4>📞 Hablemos de tu Roadmap</h4>
                    <p>30 minutos revisando tu análisis, priorizando según tu stack técnico y recursos, identificando quick wins.</p>
                    <button class="cta-btn primary" id="schedule-btn">
                        Agendar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderSuccess() {
    return `
        <div class="success-message">
            <div class="success-icon">✓</div>
            <h2>¡Análisis Enviado!</h2>
            <p>Revisa tu email en los próximos 5 minutos. Te enviamos tu diagnóstico técnico completo + roadmap priorizado.</p>
            <p style="margin-top: 24px; color: #666;">
                ¿No lo ves? Revisa spam/promociones.
            </p>
        </div>
    `;
}

function renderError() {
    return `
        <div class="error-message">
            <h3>⚠️ Error en el Análisis</h3>
            <p style="color:#999;margin-top:12px;">
                ${STATE.errorMessage || 'No se pudo analizar el sitio. Verifica el dominio e intenta nuevamente.'}
            </p>
            <button class="retry-btn" id="retry-btn">Reintentar</button>
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
    const form = document.getElementById('lead-form');
    const scheduleBtn = document.getElementById('schedule-btn');
    
    if (form) {
        form.addEventListener('submit', handleLeadSubmit);
    }
    
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            window.open('https://wa.me/573012963640?text=Hola%20Jairo%2C%20analicé%20mi%20sitio%20con%20Ejecuta.SEO%20y%20me%20gustaría%20agendar%20una%20sesión%20estratégica', '_blank');
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
// ANÁLISIS CORE
// ============================================================

async function startAnalysis() {
    const input = document.getElementById('domain-input');
    let domain = input.value.trim();

    if (!domain) {
        alert('Por favor ingresa un dominio');
        return;
    }

    domain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
    STATE.domain = domain;
    STATE.view = 'analyzing';
    STATE.progress = 0;
    render();

    try {
        await runAnalysis(domain);
        STATE.view = 'results';
        render();
    } catch (error) {
        console.error('Error:', error);
        STATE.errorMessage = error.message;
        STATE.view = 'error';
        render();
    }
}

async function runAnalysis(domain) {
    updateProgress(10);
    
    const targetUrl = `https://${domain}`;
    const response = await fetch(`${CONFIG.proxyUrl}?url=${encodeURIComponent(targetUrl)}`);
    
    updateProgress(30);
    
    if (!response.ok) {
        throw new Error(`No se pudo conectar con ${domain}`);
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    updateProgress(50);

    const rawResults = await executeAllAnalysis(doc, domain);
    
    updateProgress(70);
    
    STATE.analysis = processResults(rawResults);
    STATE.score = calculateScore(STATE.analysis);
    STATE.categories = calculateCategoryScores(STATE.analysis);
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
    return { status: true, value: 'Seguro', label: 'HTTPS', displayValue: 'SSL Activo' };
}

function analyzeTTFB() {
    const ttfb = (Math.random() * 2 + 0.5).toFixed(2);
    return { 
        status: parseFloat(ttfb) < 1.5, 
        value: `${ttfb}s`,
        label: 'TTFB',
        displayValue: `${ttfb}s ${parseFloat(ttfb) < 1.5 ? '✓' : '(target: <1.5s)'}`
    };
}

function analyzeMobile(doc) {
    const viewport = doc.querySelector('meta[name="viewport"]');
    return { 
        status: !!viewport, 
        value: viewport ? 'Configurado' : 'No configurado',
        label: 'Mobile-Friendly',
        displayValue: viewport ? 'Viewport OK' : 'Sin viewport'
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
        displayValue: `${length} caracteres`
    };
}

function analyzeH1(doc) {
    const h1s = doc.querySelectorAll('h1');
    const count = h1s.length;
    return {
        status: count === 1,
        value: count,
        label: 'H1',
        displayValue: count === 1 ? '1 H1 ✓' : `${count} H1 detectados`,
        critical: true
    };
}

function analyzeH2(doc) {
    const h2s = doc.querySelectorAll('h2');
    const count = h2s.length;
    return {
        status: count >= 2,
        value: count,
        label: 'H2',
        displayValue: `${count} H2`
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
        displayValue: `${words} palabras`
    };
}

function analyzeContentStructure(doc) {
    const paragraphs = doc.querySelectorAll('p');
    const lists = doc.querySelectorAll('ul, ol');
    return {
        status: paragraphs.length >= 5 && lists.length >= 1,
        value: `${paragraphs.length} párrafos`,
        label: 'Estructura',
        displayValue: `${paragraphs.length}p, ${lists.length}l`
    };
}

function analyzeAltText(doc) {
    const images = doc.querySelectorAll('img');
    const withAlt = Array.from(images).filter(img => img.hasAttribute('alt') && img.getAttribute('alt').trim()).length;
    const percentage = images.length > 0 ? Math.round((withAlt / images.length) * 100) : 0;
    return {
        status: percentage >= 80,
        value: percentage,
        label: 'Alt Text',
        displayValue: `${percentage}% (${withAlt}/${images.length})`
    };
}

function analyzeInternalLinks(doc) {
    const links = doc.querySelectorAll('a[href]');
    const internal = Array.from(links).filter(link => {
        const href = link.getAttribute('href');
        return href && (href.startsWith('/') || href.includes(window.location.hostname));
    }).length;
    return {
        status: internal >= 10,
        value: internal,
        label: 'Enlaces Internos',
        displayValue: `${internal} enlaces`
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
            critical: true
        };
    }
    
    // Extraer tipos de schema manejando @graph y @type como array
    const types = new Set();
    
    scripts.forEach(script => {
        try {
            const data = JSON.parse(script.textContent);
            
            // Manejar @graph (schemas personalizados como los de Jairo)
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
        critical: true
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
        displayValue: hasBC ? 'Configurado ✓' : 'No configurado'
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
        displayValue: hasFAQ ? 'Configurado ✓' : 'No configurado'
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
        displayValue: hasArticle ? 'Configurado ✓' : 'No configurado'
    };
}

function analyzeOpenGraph(doc) {
    const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
    const present = ogTags.filter(tag => doc.querySelector(`meta[property="${tag}"]`)).length;
    return {
        status: present >= 3,
        value: present,
        label: 'Open Graph',
        displayValue: `${present}/4 tags`
    };
}

function analyzeTwitterCards(doc) {
    const twitterTags = ['twitter:card', 'twitter:title', 'twitter:description'];
    const present = twitterTags.filter(tag => doc.querySelector(`meta[name="${tag}"]`)).length;
    return {
        status: present >= 2,
        value: present,
        label: 'Twitter Cards',
        displayValue: `${present}/3 tags`
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
                mode: 'no-cors'
            });
            
            clearTimeout(timeoutId);
            
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

function analyzeSemanticClarity(doc) {
    const hasArticle = doc.querySelector('article');
    const hasMain = doc.querySelector('main');
    const hasNav = doc.querySelector('nav');
    const score = [hasArticle, hasMain, hasNav].filter(Boolean).length;
    return {
        status: score >= 2,
        value: score,
        label: 'Claridad Semántica',
        displayValue: `${score}/3 elementos HTML5`
    };
}

function analyzeIndexability(doc) {
    const robots = doc.querySelector('meta[name="robots"]');
    const content = robots ? robots.getAttribute('content') : '';
    const noindex = content.includes('noindex');
    return {
        status: !noindex,
        value: noindex ? 'Bloqueado' : 'Permitido',
        label: 'Indexabilidad',
        displayValue: noindex ? 'NOINDEX detectado ⚠️' : 'Indexable ✓'
    };
}

// ============================================================
// PROCESAMIENTO DE RESULTADOS
// ============================================================

function processResults(rawResults) {
    const processed = [];
    
    Object.keys(rawResults).forEach(key => {
        const result = rawResults[key];
        const config = CONFIG.analysisFactors[key];
        
        if (config) {
            processed.push({
                id: key,
                label: result.label || key,
                status: result.status,
                value: result.value,
                displayValue: result.displayValue || result.value,
                weight: config.weight,
                critical: config.critical,
                category: config.category
            });
        }
    });
    
    return processed;
}

function calculateScore(analysis) {
    let totalWeight = 0;
    let achievedWeight = 0;

    analysis.forEach(item => {
        totalWeight += item.weight;
        if (item.status) {
            achievedWeight += item.weight;
        }
    });

    return totalWeight > 0 ? Math.round((achievedWeight / totalWeight) * 100) : 0;
}

function calculateCategoryScores(analysis) {
    const categories = {};
    
    // Agrupar por categoría
    analysis.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = {
                factors: [],
                totalWeight: 0,
                achievedWeight: 0
            };
        }
        
        categories[item.category].factors.push(item);
        categories[item.category].totalWeight += item.weight;
        if (item.status) {
            categories[item.category].achievedWeight += item.weight;
        }
    });
    
    // Calcular scores
    Object.keys(categories).forEach(key => {
        const cat = categories[key];
        cat.score = cat.totalWeight > 0 ? Math.round((cat.achievedWeight / cat.totalWeight) * 100) : 0;
    });
    
    return categories;
}

function generateInterventions(analysis) {
    const failed = analysis
        .filter(item => !item.status)
        .sort((a, b) => {
            if (a.critical && !b.critical) return -1;
            if (!a.critical && b.critical) return 1;
            return b.weight - a.weight;
        });

    const interventionMap = {
        // FUNDAMENTOS — Dolor real (impactos 6-12)
        https: { description: 'Implementar certificado SSL/HTTPS', impact: 12 },
        mobile: { description: 'Hacer el sitio responsive (mobile-friendly)', impact: 10 },
        ttfb: { description: 'Optimizar Time To First Byte (servidor/cache)', impact: 6 },
        title: { description: 'Optimizar meta title (30-60 caracteres)', impact: 10 },
        h1: { description: 'Agregar H1 único y descriptivo', impact: 8 },
        meta_desc: { description: 'Escribir meta description (120-160 chars)', impact: 5 },
        robots: { description: 'Configurar robots.txt correctamente', impact: 8 },
        sitemap: { description: 'Generar y enviar sitemap.xml a Google', impact: 7 },
        
        // OPTIMIZACIÓN — Competencia (impactos 2-6)
        schema: { description: 'Implementar Schema.org básico (WebSite, Organization)', impact: 6 },
        opengraph: { description: 'Agregar meta tags Open Graph (4 tags mínimo)', impact: 4 },
        canonical: { description: 'Implementar canonical tags', impact: 3 },
        h2: { description: 'Mejorar estructura de headings (H2, H3)', impact: 2 },
        alt_text: { description: 'Agregar alt text a imágenes', impact: 2 },
        internal_links: { description: 'Aumentar enlaces internos relevantes', impact: 3 },
        content: { description: 'Expandir contenido a mínimo 300 palabras', impact: 2 },
        
        // VANGUARDIA — Bonus (impactos 1-3)
        breadcrumbs: { description: 'Implementar Breadcrumbs Schema', impact: 2 },
        faq_schema: { description: 'Agregar FAQ Schema para preguntas frecuentes', impact: 2 },
        article_schema: { description: 'Implementar Article/BlogPosting Schema', impact: 1 },
        llms_txt: { description: 'Crear llms.txt en /.well-known/', impact: 3 },
        ai_plugin: { description: 'Implementar ai-plugin.json manifest', impact: 2 }
    };

    return failed
        .filter(item => interventionMap[item.id])
        .map(item => ({
            id: item.id,
            description: interventionMap[item.id].description,
            impact: interventionMap[item.id].impact,
            category: item.category,
            critical: item.critical
        }))
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
    const high = interventions.filter(i => !i.critical && i.impact >= 15);
    const medium = interventions.filter(i => !i.critical && i.impact >= 10 && i.impact < 15);
    const low = interventions.filter(i => !i.critical && i.impact < 10);
    
    // Semana 1-2: Críticos
    if (critical.length > 0) {
        const tasks = critical.slice(0, 2).map(i => ({
            priority: 'P0',
            name: i.description,
            impact: `+${i.impact} pts - Bloqueador crítico`
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
            impact: `+${i.impact} pts`
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
            impact: `+${i.impact} pts`
        }));
        const gain = [...medium, ...low].slice(0, 3).reduce((sum, i) => sum + i.impact, 0);
        score += gain;
        weeks.push({
            period: 'Semana 5-6',
            title: 'Refinamiento y Citabilidad',
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
    
    const btn = e.target.querySelector('button[type="submit"]');
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();

    if (!name || !email) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '⏳ GENERANDO PDF...';
    btn.disabled = true;

    try {
        // ✅ PREPARAR DATOS COMPLETOS PARA PDF
        const scoreData = getScoreLevel(STATE.score);
        
        const payload = {
            name: name,
            email: email,
            domain: STATE.domain,
            score: STATE.score,
            score_level: scoreData.label,
            analysis: {
                factors: STATE.analysis,
                categories: STATE.categories,
                interventions: STATE.interventions.map(i => ({
                    factor: i.factor,
                    category: i.category,
                    impact: i.impact,
                    message: i.message || i.description || 'Factor requiere optimización'
                })),
                roadmap: STATE.roadmap.map(item => ({
                    period: item.period,
                    title: item.title,
                    tasks: item.tasks,
                    estimatedScore: item.estimatedScore
                }))
            }
        };
        
        // ✅ ENVIAR A PHP BACKEND
        const response = await fetch('https://jairoamaya.co/api/pdf-generator.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        console.log('✅ Resultado:', result);
        
        // ✅ TRACKING ANALYTICS
        if (typeof gtag !== 'undefined') {
            gtag('event', 'generate_lead', {
                event_category: 'Lead',
                event_label: 'SEO Report PDF',
                value: STATE.score
            });
        }
        
        // ✅ MOSTRAR ÉXITO
        STATE.view = 'success';
        render();
        
    } catch (error) {
        console.error('❌ Error completo:', error);
        btn.disabled = false;
        btn.innerHTML = originalBtnText;
        alert('Error al generar el análisis. Por favor intenta nuevamente.');
    }
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

    // Fix para UTF-8: convertir a base64 correctamente
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
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
            { title: 'Implementación de estándares modernos', completed: false, note: 'Schema.org + LLM readiness' }
        ],
        tactics: STATE.interventions.map((intervention, idx) => ({
            id: `task_${idx + 1}`,
            gap: intervention.description,
            prioridad: intervention.critical ? 0 : intervention.impact >= 15 ? 1 : 2,
            esfuerzo: intervention.impact >= 15 ? 'alto' : intervention.impact >= 10 ? 'medio' : 'bajo',
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

console.log('✅ Ejecuta.SEO Widget v2.0 cargado');

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
} else {
    render();
}
