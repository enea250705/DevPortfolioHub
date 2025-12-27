# 📧 Guida Completa: Come Usare EmailJS

## 🎯 Cosa fa EmailJS?

EmailJS ti permette di inviare email direttamente dal browser senza bisogno di un server backend. Quando un utente compila il form di contatto, EmailJS invia:
1. **Email a te** → `info@codewithenea.it` (con il messaggio del cliente)
2. **Email automatica al cliente** → dalla loro email (conferma in italiano)

---

## 📋 Passo 1: Crea Account EmailJS

1. Vai su **https://www.emailjs.com/**
2. Clicca su **"Sign Up"** (Registrati)
3. Crea un account gratuito (200 email/mese gratis)
4. Verifica la tua email

---

## 📋 Passo 2: Configura Email Service

1. Nel dashboard EmailJS, vai su **"Email Services"**
2. Clicca su **"Add New Service"**
3. Scegli il provider email:
   - **Gmail** (se usi Gmail)
   - **Outlook** (se usi Outlook)
   - **Custom SMTP** (per altri provider)
4. Collega il tuo account email
5. **Copia il Service ID** (es: `service_ics6mwd`) - lo userai dopo

---

## 📋 Passo 3: Crea Template per Email Admin (a te)

1. Vai su **"Email Templates"**
2. Clicca su **"Create New Template"**
3. Configura così:

   **Template Name:** `Admin Notification`
   
   **Service:** Seleziona il service che hai creato
   
   **To Email:** `info@codewithenea.it`
   
   **From Name:** `{{name}}`
   
   **From Email:** `{{email}}`
   
   **Subject:** `Nuovo Messaggio dal Form di Contatto da {{name}}`
   
   **Content (HTML):**
   ```html
   <h2>Nuovo messaggio ricevuto dal form di contatto</h2>
   
   <p><strong>Nome:</strong> {{name}}</p>
   <p><strong>Email:</strong> {{email}}</p>
   
   <p><strong>Messaggio:</strong></p>
   <p>{{message}}</p>
   
   <hr>
   <p style="color: #666; font-size: 12px;">Inviato il: {{date}}</p>
   ```
   
   **Content (Testo Semplice):**
   ```
   Nuovo messaggio ricevuto dal form di contatto:
   
   Nome: {{name}}
   Email: {{email}}
   
   Messaggio:
   {{message}}
   
   ---
   Inviato il: {{date}}
   ```

4. **Copia il Template ID** (es: `template_558hej9`) - lo userai nel codice

---

## 📋 Passo 4: Crea Template per Auto-Reply Cliente (in italiano)

1. Vai su **"Email Templates"**
2. Clicca su **"Create New Template"**
3. Configura così:

   **Template Name:** `Auto-Reply Cliente Italiano`
   
   **Service:** Seleziona il service che hai creato
   
   **To Email:** `{{to_email}}`
   
   **From Name:** `CodeWithEnea`
   
   **From Email:** `noreply@codewithenea.it` (o `info@codewithenea.it` se non puoi usare noreply)
   
   **Subject:** `Conferma Ricezione - CodeWithEnea`
   
   **Content (HTML):**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
   </head>
   <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
     <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px;">
       <h2 style="color: #2563eb; margin-top: 0;">Gentile {{to_name}},</h2>
       
       <p>Grazie per aver contattato <strong>CodeWithEnea</strong>.</p>
       
       <p>Abbiamo ricevuto il tuo messaggio e lo abbiamo inoltrato al nostro team. Ti risponderemo il prima possibile, entro <strong>24 ore</strong> lavorative.</p>
       
       <p>Nel frattempo, se hai domande urgenti, puoi contattarci direttamente:</p>
       
       <ul style="list-style: none; padding: 0;">
         <li style="margin: 10px 0;">📧 Email: <a href="mailto:info@codewithenea.it" style="color: #2563eb;">info@codewithenea.it</a></li>
         <li style="margin: 10px 0;">📱 Telefono: <a href="tel:+393761024080" style="color: #2563eb;">+39 376 102 4080</a></li>
       </ul>
       
       <p>Apprezziamo la tua pazienza e ci scusiamo per eventuali ritardi.</p>
       
       <p style="margin-top: 30px;">Cordiali saluti,<br>
       <strong>Il Team di CodeWithEnea</strong></p>
       
       <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
       
       <p style="font-size: 12px; color: #6b7280; margin: 0;">
         Questa è un'email automatica. Si prega di non rispondere a questo messaggio.<br>
         Per qualsiasi domanda, contattaci all'indirizzo info@codewithenea.it
       </p>
     </div>
   </body>
   </html>
   ```
   
   **Content (Testo Semplice):**
   ```
   Gentile {{to_name}},

   Grazie per aver contattato CodeWithEnea.

   Abbiamo ricevuto il tuo messaggio e lo abbiamo inoltrato al nostro team. Ti risponderemo il prima possibile, entro 24 ore lavorative.

   Nel frattempo, se hai domande urgenti, puoi contattarci direttamente:
   📧 Email: info@codewithenea.it
   📱 Telefono: +39 376 102 4080

   Apprezziamo la tua pazienza e ci scusiamo per eventuali ritardi.

   Cordiali saluti,
   Il Team di CodeWithEnea

   ---
   Questa è un'email automatica. Si prega di non rispondere a questo messaggio.
   Per qualsiasi domanda, contattaci all'indirizzo info@codewithenea.it
   ```

4. **Copia il Template ID** (es: `template_vuiys3f`) - lo userai nel codice

---

## 📋 Passo 5: Ottieni Public Key

1. Vai su **"Account"** → **"General"**
2. Trova **"Public Key"**
3. **Copia la Public Key** (es: `9AowZHld3jYv6HZOx`)

---

## 📋 Passo 6: Aggiorna il Codice (se necessario)

Il codice è già configurato, ma verifica che questi valori siano corretti:

### In `client/index.html` (riga 39):
```javascript
emailjs.init("9AowZHld3jYv6HZOx"); // ← La tua Public Key
```

### In `client/src/pages/contact.tsx` (righe 77-87):
```javascript
// Service ID
'service_ics6mwd'  // ← Il tuo Service ID

// Template Admin
'template_558hej9'  // ← Il tuo Template ID per admin

// Template Auto-Reply
'template_vuiys3f'  // ← Il tuo Template ID per auto-reply
```

**Sostituisci questi valori con i tuoi ID reali!**

---

## 🧪 Passo 7: Testa il Form

1. Apri il sito in sviluppo
2. Vai alla pagina `/contact`
3. Compila il form
4. Clicca "Send Message"
5. Controlla:
   - ✅ Ricevi email a `info@codewithenea.it`?
   - ✅ Il cliente riceve email automatica?
   - ✅ L'email è in italiano?
   - ✅ Console browser senza errori?

---

## 🔧 Risoluzione Problemi

### ❌ "EmailJS is not loaded"
- **Soluzione:** Ricarica la pagina
- Verifica che lo script EmailJS sia caricato (controlla Network tab)

### ❌ Email non arrivano
- **Soluzione:** 
  1. Verifica Service ID e Template ID nel codice
  2. Controlla che il service email sia collegato correttamente
  3. Verifica che i template abbiano le variabili corrette ({{name}}, {{email}}, ecc.)

### ❌ "Invalid template"
- **Soluzione:** 
  1. Verifica che il Template ID sia corretto
  2. Controlla che tutte le variabili nel template esistano nei parametri

### ❌ Email va in spam
- **Soluzione:**
  1. Usa un indirizzo email verificato come mittente
  2. Aggiungi il tuo dominio a EmailJS (versione a pagamento)

---

## 📊 Limiti Piano Gratuito

- ✅ **200 email/mese** gratis
- ✅ Fino a 2 email services
- ✅ Fino a 50 email templates
- ✅ Supporto base

**Se superi 200 email/mese:** considera il piano a pagamento ($15/mese per 1000 email)

---

## ✅ Checklist Finale

- [ ] Account EmailJS creato
- [ ] Email Service configurato
- [ ] Template Admin creato (per te)
- [ ] Template Auto-Reply creato (per cliente, in italiano)
- [ ] Public Key copiata e inserita in `index.html`
- [ ] Service ID e Template ID aggiornati in `contact.tsx`
- [ ] Form testato e funzionante
- [ ] Email ricevute correttamente

---

## 🆘 Supporto

Se hai problemi:
1. Controlla la console del browser (F12) per errori
2. Verifica i log in EmailJS Dashboard → "Logs"
3. Testa i template singolarmente in EmailJS Dashboard
4. Consulta la documentazione: https://www.emailjs.com/docs/

