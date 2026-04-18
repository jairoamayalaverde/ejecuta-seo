# ejecuta.seo

Herramienta de análisis SEO + AI Readiness con integración directa a SOSTAC Flow.

## 🎯 Características

- Análisis SEO técnico completo (9 factores)
- AI Readiness Score dual
- Stack de Visibilidad gamificado (4 capas)
- Execution Engine con roadmap ejecutable
- Integración directa con SOSTAC Flow

## 🚀 Deploy

Desplegado automáticamente en Vercel:
- **Production:** https://ejecuta.jairoamaya.co

## 🛠️ Stack Técnico

- Vanilla JavaScript
- HTML5/CSS3
- Jina.ai Proxy para análisis
- Supabase (vía SOSTAC Flow)

## 📊 Flujo de conversión
```
Análisis FREE → Score + Gaps → Plan SOSTAC
    ↓
Opción 1: PDF ($19) 
Opción 2: SOSTAC Flow Dashboard ($49/mo) ← RECOMENDADO
    ↓
Consultoría Transparente ($499/mo)
```

## 🔗 Integración

- **SOSTAC Flow:** https://sostacflow.jairoamaya.co
- **Backend:** Supabase (importación automática)
- **Proxy:** https://jairoamaya.co/html-proxy.php

## 📝 Notas

Widget standalone. No requiere build. Deploy directo desde `/public/index.html`.
```

4. **Commit:** "Update README with project details"

---

## **📋 PASO 3: Conectar con Vercel**

1. **Ve a:** https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. En "Import Git Repository", busca **"ejecuta-seo"**
4. Click **"Import"**

5. **Configuración del proyecto:**
```
   Framework Preset: Other
   Root Directory: ./
   Build Command: (dejar vacío)
   Output Directory: public
   Install Command: (dejar vacío)
```

6. Click **"Deploy"**

7. **Espera 1-2 minutos** mientras Vercel hace el deploy

---

## **📋 PASO 4: Configurar dominio personalizado**

1. Una vez que termine el deploy, ve a **"Settings"** del proyecto
2. Click en **"Domains"**
3. Click **"Add Domain"**
4. Ingresa: `ejecuta.jairoamaya.co`
5. Vercel te dará instrucciones para configurar el DNS

---

### **4A: Configurar DNS (en tu proveedor de dominio)**

Ve al panel de tu proveedor de dominio (donde está jairoamaya.co) y agrega:
```
Type: CNAME
Name: ejecuta
Value: cname.vercel-dns.com
TTL: 3600 (o automático)
