# Ultimatives Tic-Tac-Toe

[English](README.md) | [中文](README_zh.md) | [日本語](README_jp.md) | [한국어](README_kr.md) | [Русский](README_ru.md) | [Español](README_es.md) | [Français](README_fr.md)

🌐 Ein modernes, mehrsprachiges und funktionsreiches webbasiertes Tic-Tac-Toe-Spiel 🌐

<div align="center">
  <img width="128px" src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/logo/UT.png" alt="Ultimatives Tic-Tac-Toe Logo">
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/releases">
    <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/blob/main/LICENSE">
    <img alt="Lizenz: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="https://html.spec.whatwg.org/">
    <img alt="Erstellt mit: HTML5" src="https://img.shields.io/badge/Built%20with-HTML5-E34F26?logo=html5&logoColor=white">
  </a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html">
    <img alt="Gestylt mit: CSS3" src="https://img.shields.io/badge/Styled%20with-CSS3-1572B6?logo=css3&logoColor=white">
  </a>
  <a href="https://javascript.info/">
    <img alt="Angetrieben von: JavaScript" src="https://img.shields.io/badge/Powered%20by-JavaScript-F7DF1E?logo=javascript&logoColor=black">
  </a>
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/stargazers">
    <img alt="GitHub Sterne" src="https://img.shields.io/github/stars/VoxDroid/Ultimate-Tic-Tac-Toe?color=gold">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/network/members">
    <img alt="GitHub Forks" src="https://img.shields.io/github/forks/VoxDroid/Ultimate-Tic-Tac-Toe?color=silver">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues">
    <img alt="GitHub Issues" src="https://img.shields.io/github/issues/VoxDroid/Ultimate-Tic-Tac-Toe?color=orange">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/commits/main">
    <img alt="GitHub Commits" src="https://img.shields.io/github/commit-activity/m/VoxDroid/Ultimate-Tic-Tac-Toe">
  </a>
</div>

<div align="center">
  <a href="https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/" target="_blank">
    <img src="https://img.shields.io/badge/Jetzt%20spielen-Ultimatives%20Tic%20Tac%20Toe-brightgreen?style=for-the-badge" alt="Ultimatives Tic-Tac-Toe spielen">
  </a>
</div>

## Inhaltsverzeichnis

- [Einführung](#einführung)
- [Funktionen](#funktionen)
- [Systemanforderungen](#systemanforderungen)
- [Installation](#installation)
- [Erste Schritte](#erste-schritte)
- [Nutzung](#nutzung)
- [Demo](#demo)
- [Mitwirken](#mitwirken)
- [Sicherheit](#sicherheit)
- [Verhaltenskodex](#verhaltenskodex)
- [Unterstützung](#unterstützung)
- [Lizenz](#lizenz)
- [Danksagung](#danksagung)

## Einführung

**Ultimatives Tic-Tac-Toe** ist eine Open-Source, webbasierte Implementierung des klassischen Tic-Tac-Toe-Spiels, erweitert mit modernen Funktionen und einer optimierten Benutzererfahrung. Entwickelt mit HTML5, CSS3 und JavaScript, bietet es mehrsprachige Unterstützung, anpassbare Themen, einen KI-Gegner und Gameplay-Verbesserungen wie Timer, Punkteverfolgung und Rückgängig-Funktion. Es ist für Spieler aller Altersgruppen konzipiert und bietet eine unterhaltsame und zugängliche Möglichkeit, Tic-Tac-Toe auf jedem Gerät zu spielen.

Das Spiel ist auf GitHub Pages gehostet und online ohne Installation verfügbar, kann aber auch lokal ausgeführt werden. Als Open-Source-Projekt begrüßt es Beiträge zur Verbesserung von Funktionen, Fehlerbehebung oder zur Steigerung der Barrierefreiheit.

> **Hinweis**: Dieses Projekt wird aktiv gepflegt. Einige Funktionen, wie die KI-Strategie oder die Leistung von Animationen, können Einschränkungen haben. Ihr Feedback wird geschätzt!

## Funktionen

- **Klassisches Tic-Tac-Toe-Spiel** : 3x3-Raster mit X- und O-Symbolen, Ziel ist es, drei in einer Reihe zu erzielen (horizontal, vertikal oder diagonal).
- **Spielmodi** :
  - Mensch gegen Mensch (lokales Spiel auf demselben Gerät).
  - Mensch gegen KI (einfache KI mit zufälligen Zügen).
- **Mehrsprachige Unterstützung** : Verfügbar in 8 Sprachen:
  - Englisch, Chinesisch (中文), Japanisch (日本語), Koreanisch (한국어), Russisch (Русский), Spanisch (Español), Französisch (Français), Deutsch (Deutsch).
- **Anpassbare Benutzeroberfläche** :
  - **Farbschemata** : Wählen Sie zwischen Standard, Dunkel, Hell oder Bunt.
  - **Schriftarten** : Wählen Sie zwischen Poppins, Roboto oder Open Sans.
- **Spielmerkmale** :
  - **Timer** : Verfolgt die Spieldauer mit Start-, Stopp- und Reset-Steuerung.
  - **Punkteverfolgung** : Zeigt Siege für Spieler X, Spieler O und Unentschieden an.
  - **Zug rückgängig machen** : Ermöglicht das Zurücknehmen des letzten Zuges während eines aktiven Spiels.
  - **Spielernamen** : Passen Sie die Namen für Spieler X und Spieler O an.
  - **Siegfeier** : Konfetti-Animation bei einem Sieg.
- **Einstellungen** :
  - Ändern Sie Sprache, Farbschema oder Schriftart über ein Einstellungsfenster.
  - Speichern Sie Einstellungen im lokalen Speicher für die Beibehaltung zwischen Sitzungen.
- **Responsives Design** : Optimiert für Desktop, Tablet und Mobilgeräte.
- **Visuelle Effekte** :
  - Animierte Startseite mit Ladeeffekt und Blubbelhintergrund.
  - Hervorgehobene Gewinnerzellen zur klaren Anzeige des Sieges.
- **Barrierefreiheit** : Enthält `data-i18n`-Attribute für Übersetzungen und grundlegende Tastaturunterstützung.
- **Keine Werbung** : Ein ablenkungsfreies Spielerlebnis.

## Systemanforderungen

Um Ultimatives Tic-Tac-Toe auszuführen, benötigen Sie:

- **Webbrowser** : Ein moderner Browser (z. B. Chrome, Firefox, Edge, Safari) mit aktiviertem JavaScript.
- **Betriebssystem** : Beliebig (Windows, macOS, Linux, iOS, Android) mit einem kompatiblen Browser.
- **Speicherplatz** : Minimal (~5 MB für Anwendungsdateien, einschließlich Assets).
- **Internetverbindung** : Erforderlich für das initiale Laden von Assets (z. B. Google Fonts), außer bei lokaler Ausführung.
- **Abhängigkeiten** : Keine (alle Assets werden über CDNs oder lokale Dateien geladen).

## Installation

Folgen Sie diesen Schritten, um Ultimatives Tic-Tac-Toe lokal einzurichten:

1. **Repository klonen** :
   ```bash
   git clone https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe.git
   ```

2. **Zum Projektverzeichnis navigieren** :
   ```bash
   cd Ultimate-Tic-Tac-Toe
   ```

3. **Anwendung öffnen** :
   - Doppelklicken Sie auf `index.html`, um es in Ihrem Standard-Webbrowser zu öffnen.
   - Alternativ können Sie die Dateien mit einem lokalen Server bereitstellen (empfohlen für korrektes Laden von Assets):
     ```bash
     python -m http.server 8000
     ```
     Greifen Sie dann in Ihrem Browser auf `http://localhost:8000` zu.

4. **Funktionalität überprüfen** :
   - Stellen Sie sicher, dass die Startseite mit Logo, Titel und „Spiel starten“-Button geladen wird.
   - Klicken Sie auf „Spiel starten“, um zur Spieloberfläche zu wechseln, und testen Sie einen Zug (z. B. ein X in eine Zelle setzen).
   - Überprüfen Sie, ob das Einstellungsfenster, der Sprachwähler und die Spielsteuerungen (z. B. Timer, Rückgängig) funktionieren.

> **Hinweis** : Stellen Sie sicher, dass über CDN geladene Assets (z. B. Google Fonts) zugänglich sind. Für die Offline-Nutzung sollten Sie die Schriftarten herunterladen und lokal hosten.

## Erste Schritte

Um mit Ultimatives Tic-Tac-Toe zu spielen:

1. **Spiel aufrufen** :
   - Spielen Sie online unter [voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/).
   - Oder öffnen Sie `index.html` lokal wie in [Installation](#installation) beschrieben.

2. **Startseite navigieren** :
   - Wählen Sie eine Sprache aus dem Dropdown-Menü (Deutsch standardmäßig).
   - Klicken Sie auf „Spiel starten“, um mit einer Ladeanimation zur Spieloberfläche zu wechseln.

3. **Oberfläche erkunden** :
   - **Spielfeld** : Ein 3x3-Raster zum Platzieren von X- oder O-Symbolen.
   - **Infopanel** : Enthält Eingabefelder für Spielernamen, Timer, Punkteanzeige und Steuerungen (Rückgängig, Neues Spiel, KI-Zug, Punkte zurücksetzen).
   - **Einstellungen** : Über die Einstellungsschaltfläche zugänglich, um Sprache, Farbschema oder Schriftart anzupassen.
   - **Statusleiste** : Zeigt den aktuellen Spielerzug oder das Spielergebnis an.

4. **Spiel starten** :
   - Klicken Sie auf „Spiel starten“, um das Spielfeld zu initialisieren.
   - Klicken Sie auf eine Zelle, um Ihr Symbol zu platzieren (X beginnt zuerst).
   - Verwenden Sie die „KI-Zug“-Schaltfläche, um die KI als Gegner spielen zu lassen.

5. **Einstellungen anpassen** :
   - Öffnen Sie das Einstellungsfenster, um Farbschema, Schriftart oder Sprache zu ändern.
   - Geben Sie Spielernamen in die Eingabefelder ein.
   - Einstellungen werden automatisch im lokalen Speicher gespeichert.

## Nutzung

### Ein Spiel spielen
- **Mensch gegen Mensch** :
  - Spieler setzen abwechselnd X oder O in leere Zellen (X beginnt).
  - Klicken Sie auf eine Zelle, um einen Zug zu machen.
  - Ziel ist es, drei Symbole in einer Reihe zu platzieren (horizontal, vertikal oder diagonal).
- **Mensch gegen KI** :
  - Spielen Sie als X oder O; klicken Sie auf „KI-Zug“, um die KI einen zufälligen Zug machen zu lassen.
  - Die KI wählt eine zufällige leere Zelle.
- **Steuerungen** :
  - **Neues Spiel** : Setzt das Spielfeld und den Timer zurück.
  - **Rückgängig** : Macht den letzten Zug rückgängig (wenn das Spiel aktiv ist).
  - **KI-Zug** : Lässt die KI einen Zug für den Gegner machen.
  - **Timer Start/Stopp/Reset** : Verwaltet den Spiel-Timer.
  - **Punkte zurücksetzen** : Löscht die Zähler für Siege/Unentschieden.

### Anpassung
- **Sprache** : Wählen Sie aus 8 Sprachen über das Dropdown-Menü auf der Startseite oder Spieloberfläche.
- **Farbschema** : Wählen Sie Standard, Dunkel, Hell oder Bunt im Einstellungsfenster.
- **Schriftart** : Wechseln Sie zwischen Poppins, Roboto oder Open Sans.
- **Spielernamen** : Geben Sie benutzerdefinierte Namen für Spieler X und Spieler O in die Eingabefelder ein.

### Spielmerkmale
- **Timer** : Zeigt die vergangene Zeit im Format MM:SS an, mit Steuerungen zum Starten, Stoppen oder Zurücksetzen.
- **Punkteverfolgung** : Verfolgt Siege für X, O und Unentschieden, angezeigt im Infopanel.
- **Zug rückgängig machen** : Ermöglicht das Zurücknehmen des letzten Zuges und bewahrt den Spielstatus.
- **Siegfeier** : Löst eine Konfetti-Animation aus, wenn ein Spieler gewinnt.
- **Benachrichtigungen** : Zeigt Zuganzeigen, Siegmeldungen oder Unentschieden-/Spielende-Warnungen in der gewählten Sprache an.

## Demo

<div align="center">
  <img src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/img/preview.png" alt="Ultimatives Tic-Tac-Toe Gameplay" width="800">
</div>

Testen Sie Ultimatives Tic-Tac-Toe live unter [voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/).

## Mitwirken

Wir freuen uns über Beiträge zu Ultimatives Tic-Tac-Toe! Um mitzumachen:

- Lesen Sie die [Beitragsrichtlinien](../CONTRIBUTING.md) für Details zur Einreichung von Problemen, Feature-Anfragen oder Pull-Requests.
- Forken Sie das Repository, nehmen Sie Änderungen vor und reichen Sie einen Pull-Request ein.
- Halten Sie sich an den [Verhaltenskodex](../CODE_OF_CONDUCT.md), um eine respektvolle Gemeinschaft zu gewährleisten.

Beispiele für Beiträge:
- Verbessern Sie die KI mit einem intelligenteren Algorithmus (z. B. Minimax).
- Fügen Sie neue Farbschemata oder Schriftarten hinzu.
- Verbessern Sie die Barrierefreiheit (z. B. ARIA-Attribute, Tastaturnavigation).
- Implementieren Sie die Regeln für ultimatives Tic-Tac-Toe (9x9-Raster mit Unterfeldern).

## Sicherheit

Sicherheit hat bei Ultimatives Tic-Tac-Toe Priorität. Wenn Sie eine Sicherheitslücke entdecken:

- Melden Sie sie vertraulich gemäß der [Sicherheitsrichtlinie](../SECURITY.md).
- Vermeiden Sie eine öffentliche Offenlegung, bis das Problem behoben ist.

## Verhaltenskodex

Alle Mitwirkenden und Nutzer werden gebeten, den [Verhaltenskodex](../CODE_OF_CONDUCT.md) einzuhalten, um eine einladende und inklusive Umgebung zu gewährleisten.

## Unterstützung

Benötigen Sie Hilfe mit Ultimatives Tic-Tac-Toe? Besuchen Sie die [Support-Seite](../SUPPORT.md) für Ressourcen, einschließlich:

- Einreichen von Fehlerberichten oder Feature-Anfragen.
- Community-Diskussionen und Kontaktinformationen.
- FAQs zu häufigen Problemen (z. B. KI-Verhalten, Timer-Probleme).

## Lizenz

Ultimatives Tic-Tac-Toe ist unter der [MIT-Lizenz](../LICENSE) lizenziert. Einzelheiten finden Sie in der [LICENSE](../LICENSE)-Datei.

## Danksagung

- **Google Fonts** : Für die Bereitstellung der Schriftarten Poppins, Roboto und Open Sans.
- **VoxDroid** : Für die Erstellung und Pflege des Projekts.
- **Mitwirkende** : Danke an alle, die Probleme melden, Funktionen vorschlagen oder Code beitragen.
- **Tic-Tac-Toe-Community** : Für die Inspiration dieses Projekts mit Ressourcen und Ideen.

---

<div align="center">
  <p><strong>Entwickelt von <a href="https://github.com/VoxDroid">VoxDroid</a></strong></p>
  <p>Gefällt Ihnen Ultimatives Tic-Tac-Toe? Geben Sie dem Projekt einen Stern auf <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe">GitHub</a>!</p>
</div>