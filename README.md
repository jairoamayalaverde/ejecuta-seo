# Ejecuta.SEO - Widget Híbrido v2.0

Widget de diagnóstico técnico SEO + IA que combina análisis robusto de 30+ factores con visualización estratégica SOSTAC.

## 🎯 CARACTERÍSTICAS

### Análisis Técnico
- **30+ factores evaluados** organizados en 6 categorías
- **Scoring ponderado** por importancia e impacto
- **Detección de problemas críticos** que bloquean visibilidad

### Visualización Estratégica
- **Desglose por categorías** (Infraestructura, Semántica, Datos, Social, IA, Rastreabilidad)
- **Benchmark vs industria** (Tu sitio vs Promedio vs Top 10%)
- **Roadmap ejecutable de 6 semanas** con tareas priorizadas (P0, P1, P2)

### Monetización
- **Lead capture** con email + nombre
- **CTAs duales:** Consultoría gratis + SOSTAC Flow ($49/mo)
- **Integración directa** con SOSTAC Flow vía payload

---

## ⚙️ SETUP

### 1. Proxy PHP (REQUERIDO)

Sube `html-proxy-widget.php` a tu servidor:
```
https://jairoamaya.co/html-proxy-widget.php
```

Verifica que funciona:
```
https://jairoamaya.co/html-proxy-widget.php?url=https://jairoamaya.co
```

### 2. Deploy a Vercel

```bash
# Si es la primera vez
git init
git add .
git commit -m "Widget híbrido v2.0"
git branch -M main
git remote add origin https://github.com/jairoamayalaverde/ejecuta-seo.git
git push -u origin main

# Para actualizaciones
git add .
git commit -m "Actualización widget"
git push
```

Vercel auto-deploys a:
```
https://ejecuta.seo
```

---

## 📊 ESTRUCTURA DE ANÁLISIS

### Categorías (6)

1. **🔧 Infraestructura** (20% peso)
   - HTTPS, TTFB, Mobile, Compression

2. **📝 Semántica** (30% peso)
   - Title, Meta Desc, H1, H2, Canonical, Content, Alt Text, Links

3. **🔗 Datos Estructurados** (20% peso)
   - Schema.org, Breadcrumbs, FAQ, Article

4. **📱 Distribución Social** (10% peso)
   - Open Graph, Twitter Cards

5. **🤖 Citabilidad IA** (20% peso)
   - llms.txt, AI Plugin, Semantic Clarity

6. **🔍 Rastreabilidad** (10% peso)
   - Robots.txt, Sitemap, Indexability

### Pesos por Factor

- **Critical (P0):** HTTPS, TTFB, Mobile, Title, H1, Schema, llms.txt, Robots, Sitemap
- **High (P1):** Meta Desc, Canonical, Content, Breadcrumbs, Open Graph
- **Medium (P2):** H2, Structure, Alt Text, Links, FAQ Schema, Twitter Cards

---

## 🎨 VISUALIZACIÓN

### Score Hero
- Número grande (96-160px) con gradiente magenta
- Indicador visual (verde/amarillo/rojo)
- Badge de estado (EXCELENTE/MEJORABLE/CRÍTICO)

### Métricas Técnicas
- Factores optimizados (18/30)
- Requieren acción (12)
- Problemas críticos (6)
- Ganancia potencial (+27)

### Benchmark
- Tu sitio vs Promedio sector vs Top 10%
- Barras con gradientes visuales
- Gap competitivo calculado

### Roadmap
- 6 semanas divididas en 3 fases
- Tareas con prioridad (P0/P1/P2)
- Score estimado por semana
- Ganancia incremental visible

---

## 🚀 INTEGRACIÓN SOSTAC FLOW

El botón "Abrir en SOSTAC Flow" genera un payload con:

```javascript
{
  source: 'ejecuta.seo',
  domain: 'ejemplo.com',
  seoScore: 73,
  categories: {...},
  interventions: [...],
  roadmap: [...],
  sostacData: {
    situation: [...],
    objectives: [...],
    strategy: [...],
    tactics: [...],
    action: [...],
    control: [...]
  }
}
```

Encodea en base64 y redirige a:
```
https://sostacflow.jairoamaya.co/importar?payload=...
```

---

## 🔧 PRÓXIMOS PASOS

### Backend (Pendiente)
- [ ] Webhook `/api/leads` para captura
- [ ] Email automation (5-day nurturing)
- [ ] Stripe integration ($297 Visibility Accelerator)

### Optimizaciones
- [ ] Cache de resultados en localStorage
- [ ] Modo offline para demo
- [ ] Export PDF del reporte

---

## 📝 NOTAS TÉCNICAS

- **Proxy:** Usa `html-proxy-widget.php` dedicado (CORS configurado)
- **DOMContentLoaded:** Widget espera DOM ready antes de render
- **30+ factores:** Análisis real sin datos simulados
- **Progressive enhancement:** Funciona sin JS (muestra error)

---

## 🎯 URLs

- **Producción:** https://ejecuta.seo
- **Calendly:** https://calendly.com/jairoamaya
- **SOSTAC Flow:** https://sostacflow.jairoamaya.co

---

**Autor:** Jairo Amaya   
**Version:** 2.0.0  
**Última actualización:** Abril 2026
