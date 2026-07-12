# 📊 Rastreamento - Cetose Consciente

> Eventos, pixels e analytics para rastreamento completo.

---

## 🎯 Eventos Rastreados

### Eventos de Página
```javascript
// Page View
gtag('event', 'page_view', {
  page_title: 'Cetose Consciente',
  page_location: window.location.href
});

// Scroll Depth
gtag('event', 'scroll', {
  percent_scrolled: 25 | 50 | 75 | 100
});
```

### Eventos de Vídeo
```javascript
// Video Start
gtag('event', 'video_start', {
  video_title: 'Cetose Consciente - Vídeo Principal'
});

// Video Progress
gtag('event', 'video_progress', {
  video_percent: 25 | 50 | 75
});

// Video Complete
gtag('event', 'video_complete', {
  video_duration: 600
});
```

### Eventos de Conversão
```javascript
// CTA Click
gtag('event', 'cta_click', {
  cta_location: 'hero' | 'middle' | 'footer'
});

// Lead Capture
gtag('event', 'generate_lead', {
  currency: 'BRL',
  value: 27.90
});

// Purchase
gtag('event', 'purchase', {
  transaction_id: 'TXN_123',
  value: 27.90,
  currency: 'BRL',
  items: [{
    item_id: 'ebook_cetose',
    item_name: 'E-book Cetose Consciente',
    price: 27.90
  }]
});
```

---

## 📱 Facebook Pixel

### Eventos Padrão
```javascript
// PageView
fbq('track', 'PageView');

// ViewContent
fbq('track', 'ViewContent', {
  content_name: 'Cetose Consciente',
  value: 27.90,
  currency: 'BRL'
});

// AddToCart
fbq('track', 'AddToCart', {
  content_name: 'E-book Cetose Consciente',
  value: 27.90,
  currency: 'BRL'
});

// Purchase
fbq('track', 'Purchase', {
  value: 27.90,
  currency: 'BRL'
});
```

---

## 🔧 Google Tag Manager

### Tags Configuradas
1. Google Analytics 4
2. Facebook Pixel
3. Google Ads Conversion
4. Custom Events API

### Triggers
- Page View
- Scroll Depth (25%, 50%, 75%, 100%)
- Video Play
- CTA Click
- Form Submit

---

## 📊 Conversions API (Server-Side)

### Meta Conversions API
```typescript
// Track Purchase Server-Side
await metaConversionsAPI.trackPurchase({
  email: 'user@example.com',
  value: 27.90,
  currency: 'BRL',
  event_source_url: 'https://cetoseconsciente.com'
});
```

---

## 📈 Métricas Principais

- **Taxa de rastreamento:** 100%
- **Precisão de dados:** > 95%
- **Latência:** < 100ms
- **Taxa de erro:** < 1%

---

**Última Atualização:** 2026-07-11  
**Versão:** 1.0
