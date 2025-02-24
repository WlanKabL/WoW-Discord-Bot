# 📌 Setup Guide für Warcraft Logs & Discord-Bot Integration

Damit der **Discord-Bot** die **Raid-, Dungeon- & Performance-Daten** eines Gildenmitglieds auswerten kann, muss jedes Mitglied ein paar einfache Schritte durchführen.

---

## **🛠️ 1. WoW Combat Logging aktivieren**
1. **Öffne World of Warcraft** und logge dich in deinen Charakter ein.
2. Öffne die **Einstellungen** (`Esc` → `System`).
3. Gehe zu **Netzwerk** und **aktiviere**:
   ✅ **Kampfprotokoll automatisch führen**  
   ✅ **Erweiterte Kampfprotokolle aktivieren** *(empfohlen für detaillierte Logs)*
4. Speichere die Einstellungen und verlasse das Menü.

> **💡 Tipp:** Wenn du nur Raids & Dungeons tracken willst, reicht das.  
> Falls du **auch Open-World, PvP oder Dummies loggen willst**, musst du **manuell** `/combatlog` eingeben.
>
> _Dazu gleich aber mehr._

---

## **📥 2. Warcraft Logs Uploader installieren & einrichten**
Damit die Daten auf **Warcraft Logs** hochgeladen und vom Discord-Bot genutzt werden können, musst du den **Warcraft Logs Uploader** installieren.

### **🔹 Installation**
1. Lade den Warcraft Logs Uploader hier herunter:  
   🔗 **[Download-Link](https://www.warcraftlogs.com/client/download)**
2. Installiere den Uploader und starte das Programm.

### **🔹 Einrichtung**
1. Logge dich mit deinem **Battle.net Account** ein.
2. Wähle **"Live Logging"**, um Logs direkt hochzuladen.
3. Setze den **Speicherort für Logs** auf den WoW CombatLog-Ordner:
   📂 **Pfad (Windows)**: `C:\Program Files (x86)\World of Warcraft\_retail_\Logs\WoWCombatLog.txt`  
   📂 **Pfad (Mac)**: `/Applications/World of Warcraft/_retail_/Logs/WoWCombatLog.txt`
4. Falls du die Logs **manuell hochladen** möchtest:
   - Klicke auf **"Choose File"** und wähle die **neueste CombatLog-Datei** aus.
   - Drücke auf **"Upload"**, um die Daten auf Warcraft Logs zu speichern.
5. Fertig! Deine Logs sollten nun unter **Warcraft Logs → Charaktere** sichtbar sein.

> **💡 Wichtig:** Ohne den **Warcraft Logs Uploader** kann der Bot keine Daten abrufen!  
> Stelle sicher, dass du entweder **Live Logging aktivierst** oder **nach jeder Session manuell hochlädst**.

---

## **📦 3. CurseForge & Auto-Logging Addons installieren**
Damit das **Combat Logging automatisch** funktioniert, kannst du eines dieser **CurseForge-Addons** nutzen.

### **🔹 CurseForge installieren**
1. Lade CurseForge herunter:  
   🔗 **[Download-Link](https://download.curseforge.com/)**
2. Installiere und starte die Anwendung.
3. Wähle **World of Warcraft** aus und stelle sicher, dass der richtige WoW-Ordner ausgewählt ist.

### **🔹 AutoCombatLogger (Empfohlen)**
✅ Automatisches Logging für **Raids, M+, PvP, Open-World**  
✅ Einmal aktivieren → Kein `/combatlog` mehr nötig!  
🔗 **[CurseForge-Link](https://www.curseforge.com/wow/addons/autocombatlogger)**  

📌 **Installation:**
1. Öffne CurseForge und suche nach `AutoCombatLogger`.
2. Klicke auf **"Installieren"** und starte WoW neu.
3. Ingame mit `/acl` die Einstellungen anpassen.

---

### **🔹 Loggerhead (Alternative)**
✅ Automatisches Combat Logging **nur für ausgewählte Instanzen**  
✅ Ermöglicht eine detaillierte Kontrolle über das Logging.  
🔗 **[CurseForge-Link](https://www.curseforge.com/wow/addons/loggerhead-continued)**  

📌 **Installation:**
1. Öffne CurseForge und suche nach `Loggerhead`.
2. Klicke auf **"Installieren"** und starte WoW neu.
3. Ingame mit `/loggerhead` das Konfigurationsmenü öffnen.
4. Aktiviere das Combat Logging für spezifische Instanzen.

---

## **🎯 4. Testen, ob alles funktioniert**
### **Überprüfen, ob Combat Logging aktiv ist**
1. **Im Spiel:** Schreibe `/combatlog` in den Chat – falls aktiv, sollte sich nichts ändern.
2. **Nach einer Dungeon- oder Raid-Session:**  
   - Öffne deinen WoW `Logs`-Ordner und prüfe, ob eine neue **WoWCombatLog.txt** Datei existiert.
   - Falls nicht → Stelle sicher, dass das Logging in den **Netzwerkeinstellungen** aktiv ist.

### **Überprüfen, ob Warcraft Logs funktioniert**
1. Öffne den **Warcraft Logs Uploader** und wähle `Live Logging`.
2. Schaue auf **[Warcraft Logs](https://www.warcraftlogs.com/)**, ob dein Charakter erfasst wurde.

---

## **❓ FAQ – Häufige Fragen**
### **„Ich sehe keine Logs auf Warcraft Logs“**
✅ Prüfe, ob das **Combat Logging** in den WoW-Einstellungen aktiv ist.  
✅ Stelle sicher, dass du den **Warcraft Logs Uploader** nutzt und die Logs richtig hochlädst.  
✅ Falls du **nur Dummies oder Open-World Kämpfe** gemacht hast, musst du `/combatlog` manuell aktivieren.

### **„Mein CombatLog wird nach jedem WoW-Start gelöscht“**
⚠️ In den WoW-Einstellungen gibt es keine Option, um das zu verhindern.  
💡 **Lösung:** Starte **Warcraft Logs Uploader**, bevor du WoW beendest, und lade die Logs direkt hoch.

### **„Soll ich AutoCombatLogger oder Loggerhead verwenden?“**
- **AutoCombatLogger** ist einfacher → Loggt **automatisch** alles Relevante.  
- **Loggerhead** gibt dir **mehr Kontrolle**, falls du nur bestimmte Instanzen loggen willst.

---

## **✅ Fazit**
✅ Combat Logging **in WoW aktivieren**  
✅ **Warcraft Logs Uploader** installieren & einrichten  
✅ **CurseForge + AutoCombatLogger oder Loggerhead** installieren  
✅ **Testen, ob Logs hochgeladen werden**  
✅ **Discord-Bot kann jetzt Gilden-Logs abrufen!** 🎉  

---

Falls du Fragen hast, melde dich in unserem **Gilden-Discord**! 🎯🔥
