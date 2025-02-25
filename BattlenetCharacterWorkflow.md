# 🔥 Battle.net OAuth Workflow für den Discord Bot

Dieser Guide beschreibt, wie Nutzer ihre **World of Warcraft Charaktere** mit dem Discord Bot verknüpfen können, ohne sich ständig neu anmelden zu müssen.  
Daten werden **nur aktualisiert**, wenn der User es explizit will! ✅

---

## **📌 Ablauf: Einmaliges Einloggen & Manuelle Aktualisierung**
1️⃣ Der User benutzt `/wow load characters`
2️⃣ **User klickt auf den OAuth-Link, um sich bei Blizzard anzumelden.**  
3️⃣ **Bot speichert die Charakterdaten.**  
4️⃣ Daten bleiben **so lange bestehen**, bis der User sie neu abrufen will.  
5️⃣ Falls neue Charaktere geladen werden sollen, muss der User sich **erneut anmelden**.
 
---

## **📜 1. OAuth-Login starten**
Um sich mit Blizzard zu verbinden, muss der User auf folgenden Link klicken:

```
https://oauth.battle.net/oauth/authorize?client_id=DEIN_CLIENT_ID&redirect_uri=https://sde.wlankabl.de/battlenet/oauth&response_type=code&scope=openid%20wow.profile&state=SPEZIFISCHER_CLIENT_HASH
```

🔹 **DEIN_CLIENT_ID** → Dein Blizzard API Client ID  
🔹 **DEIN_URL** → Deine Redirect URL (z. B. `https://sde.wlankabl.de/battlenet/oauth`)  
🔹 **SPEZIFISCHER_CLIENT_HASH** → Sicherheitstoken, wird aus bestimmten Daten berechnet. 

💡 Der User wird dann auf **Blizzard's Login-Seite** weitergeleitet und muss sich dort **einloggen & den Zugriff erlauben**.

---

## **📜 2. Code gegen Access Token tauschen**
Nachdem der User sich angemeldet hat, wird er zur Redirect-URL (`https://sde.wlankabl.de/battlenet/oauth`) weitergeleitet.  
Dabei bekommt dein Server einen `code`, den du für den Access Token benötigst.

### **📍 Beispiel: Token-Anfrage**
Sobald du den `code` hast, kannst du den **Access Token** so abrufen:

```bash
curl --location --request POST 'https://oauth.battle.net/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'client_id=DEIN_CLIENT_ID' \
--data-urlencode 'client_secret=DEIN_CLIENT_SECRET' \
--data-urlencode 'redirect_uri=https://DEIN_URL/battlenet/oauth' \
--data-urlencode 'code=EINGESETZTER_CODE'
```

**⚡ Beispiel-Response:**
```json
{
    "access_token": "EUI8Y7FkunhHyEkdwLBcqkjVOETPny6fjV",
    "token_type": "bearer",
    "expires_in": 86399,
    "scope": "wow.profile openid",
    "sub": "467018164",
    "id_token": "<jwt-token>"
}
```

📌 **Dieser Token bleibt für 24h gültig!** Danach ist ein neuer Login erforderlich.

---

## **📜 3. Charaktere abrufen**
Mit dem Access Token kannst du nun die **Charaktere des Users** abrufen:

```bash
curl --location --request GET 'https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=de_DE' \
--header 'Authorization: Bearer EUI8Y7FkunhHyEkdwLBcqkjVOETPny6fjV'
```

**⚡ Beispiel-Response:**
```json
{
    "wow_accounts": [
        {
            "id": 12345678,
            "characters": [
                {
                    "id": 87654321,
                    "name": "Zyvarion",
                    "realm": {
                        "id": 1301,
                        "name": "Antonidas",
                        "slug": "antonidas"
                    },
                    "level": 70,
                    "playable_class": {
                        "id": 13,
                        "name": "Rufer"
                    }
                }
            ]
        }
    ]
}
```

💡 Der Bot speichert diese Daten jetzt für den User, bis er erneut die **Aktualisierung anfordert**.

---

## **📜 4. Charaktere aktualisieren**
Falls ein User neue Charaktere abrufen will, muss er **den Login erneut durchlaufen**.  
Es gibt keine Möglichkeit, den Token automatisch zu erneuern.  

**📍 Ablauf für den User:**
1️⃣ `/wow update` im Discord-Bot eingeben  
2️⃣ Neuer **OAuth-Link** wird generiert  
3️⃣ User loggt sich erneut ein  
4️⃣ Charaktere werden **neu geladen** und im Bot gespeichert  

---

## **📜 Fazit**
✅ **User müssen sich nur anmelden, wenn sie neue Daten wollen**  
✅ **Kein tägliches Einloggen erforderlich**  
✅ **Charaktere bleiben so lange gespeichert, bis sie neu geladen werden**  
✅ **Schonender Umgang mit API-Limits**  

---

### **💡 Nächster Schritt: Warcraft Logs Integration**
Nachdem die Charakterdaten gespeichert sind, können wir jetzt **Kampflogs & Statistiken** über die Warcraft Logs API abrufen.  

➡️ **Siehe nächsten Guide: Warcraft Logs Setup**
