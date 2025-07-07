 Nexus Batch Endorser (Electron)

A desktop application built with [Electron](https://www.electronjs.org/) to batch endorse mods for Nexus Mods users with Mod Organizer 2 (MO2).

---

## Features

### Completed in Milestone 1

- Clean and intuitive UI with:
  - Nexus API key entry
  - Game selection (Skyrim, Fallout, Witcher 3, etc.)
  - MO2 Mods folder path (with folder browse dialog)
  - MO2 Profiles folder path (with folder browse dialog)
  - MO2 Install path (with folder browse dialog)
- Start Endorsement button
- Progress bar and status label for process feedback
- Output console area showing logs and messages
- Folder browsing implemented using Electron dialogs
- Basic structure ready for future integration of endorsement logic

### Planned for Future Releases

- Folder scanning and `.ini` file parsing to detect mods automatically
- Real Nexus Mods API calls to endorse mods programmatically
- Configuration saving and loading (including encrypted API keys)
- Error handling and detailed log output
- Multi-threaded/background processing for responsive UI
- UI/UX refinements and customizable themes

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (tested with v22.x+)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/nexus-batch-endorser-electron.git
   cd nexus-batch-endorser-electron
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm start
Usage
Enter your Nexus Mods API key.

Select the game you want to batch endorse mods for.

Set your Mod Organizer 2 Mods folder.

Set your MO2 Profiles folder.

Set your MO2 installation path.

Click Start Endorsement to begin.

Note: The endorsement logic is currently stubbed for testing. Full functionality is coming soon.

Contributing
Contributions welcome! Please open issues or submit pull requests.

License
This project is licensed under the GNU General Public License v3.0 (GPLv3).
See the LICENSE file for details.

Developed by [Harry King/Azurewroth]