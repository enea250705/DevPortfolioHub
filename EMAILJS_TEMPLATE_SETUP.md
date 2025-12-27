# 📧 EmailJS Template Setup - Auto-Reply Italiano

## Configurazione Template EmailJS per Auto-Reply

### Template per Admin (template_558hej9)
**Destinatario:** info@codewithenea.it  
**Oggetto:** Nuovo Messaggio dal Form di Contatto da {{name}}

**Contenuto:**
```
Nuovo messaggio ricevuto dal form di contatto:

Nome: {{name}}
Email: {{email}}
Messaggio:
{{message}}

---
Inviato il: {{date}}
```

---

### Template per Auto-Reply Cliente (template_vuiys3f) - **ITALIANO**
**Destinatario:** {{to_email}}  
**Mittente:** noreply@codewithenea.it  
**Oggetto:** Conferma Ricezione - CodeWithEnea

**Contenuto Email (HTML):**
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

**Contenuto Email (Testo Semplice):**
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

---

## Variabili Template EmailJS

### Template Admin (template_558hej9)
- `{{name}}` - Nome del cliente
- `{{email}}` - Email del cliente
- `{{message}}` - Messaggio del cliente
- `{{to_email}}` - Email destinatario (info@codewithenea.it)
- `{{from_name}}` - Nome mittente
- `{{from_email}}` - Email mittente

### Template Auto-Reply (template_vuiys3f)
- `{{to_name}}` - Nome del destinatario
- `{{to_email}}` - Email del destinatario
- `{{reply_time}}` - Tempo di risposta (24 ore)
- `{{company_name}}` - Nome azienda (CodeWithEnea)

---

## Configurazione EmailJS Dashboard

### Passo 1: Accedi a EmailJS
1. Vai su https://www.emailjs.com/
2. Accedi al tuo account
3. Vai su "Email Templates"

### Passo 2: Modifica Template Auto-Reply (template_vuiys3f)
1. Clicca su "template_vuiys3f"
2. **From Name:** CodeWithEnea
3. **From Email:** noreply@codewithenea.it (o usa il tuo dominio verificato)
4. **To Email:** {{to_email}}
5. **Subject:** Conferma Ricezione - CodeWithEnea
6. **Content:** Incolla il contenuto HTML o testo sopra
7. Salva il template

### Passo 3: Verifica Service ID
- **Service ID:** service_ics6mwd
- Assicurati che il servizio email sia configurato correttamente

---

## Note Importanti

⚠️ **Mittente noreply@codewithenea.it:**
- Se usi EmailJS gratuito, potresti dover usare un indirizzo email verificato
- Per usare noreply@codewithenea.it, devi verificare il dominio in EmailJS
- Alternativa: usa info@codewithenea.it come mittente e aggiungi "(Non rispondere)" nel nome

✅ **Test:**
- Testa sempre il template prima di metterlo in produzione
- Verifica che le variabili {{to_name}}, {{to_email}} funzionino correttamente
- Controlla che l'email arrivi correttamente

---

## Supporto

Se hai problemi con la configurazione:
1. Verifica che il Service ID sia corretto
2. Verifica che i Template ID siano corretti
3. Controlla la console del browser per errori
4. Verifica le credenziali EmailJS

