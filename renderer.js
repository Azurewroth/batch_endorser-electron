const { ipcRenderer } = window.ipcRenderer;

const browseModsBtn = document.getElementById('browseModsBtn');
const browseProfilesBtn = document.getElementById('browseProfilesBtn');
const browseInstallBtn = document.getElementById('browseInstallBtn');

const modsFolderInput = document.getElementById('modsFolder');
const profilesFolderInput = document.getElementById('profilesFolder');
const mo2InstallInput = document.getElementById('mo2InstallPath');

const startBtn = document.getElementById('startBtn');
const outputBox = document.getElementById('outputBox');
const progressBar = document.getElementById('progressBar');
const statusLabel = document.getElementById('statusLabel');

browseModsBtn.addEventListener('click', async () => {
  const paths = await ipcRenderer.invoke('open-folder-dialog');
  if (paths && paths.length > 0) modsFolderInput.value = paths[0];
});

browseProfilesBtn.addEventListener('click', async () => {
  const paths = await ipcRenderer.invoke('open-folder-dialog');
  if (paths && paths.length > 0) profilesFolderInput.value = paths[0];
});

browseInstallBtn.addEventListener('click', async () => {
  const paths = await ipcRenderer.invoke('open-folder-dialog');
  if (paths && paths.length > 0) mo2InstallInput.value = paths[0];
});

startBtn.addEventListener('click', async () => {
  const apiKey = document.getElementById('apiKey').value.trim();
  const gameDomain = document.getElementById('gameSelect').value;
  const modsFolder = modsFolderInput.value.trim();
  const profilesFolder = profilesFolderInput.value.trim();
  const mo2InstallPath = mo2InstallInput.value.trim();

  if (!apiKey || !modsFolder || !profilesFolder || !mo2InstallPath) {
    alert('Please fill out all fields.');
    return;
  }

  outputBox.textContent = "Starting batch endorsement...\n";
  progressBar.value = 0;
  statusLabel.textContent = "Initializing...";

  // Placeholder: Replace with actual mod list scan and endorsement calls
  const modsList = [
    { name: 'Mod 1', id: 1 },
    { name: 'Mod 2', id: 2 },
    { name: 'Mod 3', id: 3 }
  ];

  for (let i = 0; i < modsList.length; i++) {
    const mod = modsList[i];
    statusLabel.textContent = `Processing mod ${i + 1} of ${modsList.length}: ${mod.name}`;
    outputBox.textContent += `Endorsing ${mod.name} (ID: ${mod.id})...\n`;

    try {
      // Simulate async API call (replace with real logic)
      await fakeEndorseMod(apiKey, gameDomain, mod.id);
      outputBox.textContent += `✅ Endorsed ${mod.name}\n`;
    } catch (err) {
      outputBox.textContent += `❌ Failed to endorse ${mod.name}: ${err.message}\n`;
    }

    progressBar.value = ((i + 1) / modsList.length) * 100;
  }

  statusLabel.textContent = "Done.";
});

// Dummy async function to simulate API delay
function fakeEndorseMod(apiKey, gameDomain, modId) {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}


