
# AyameNoises for FireFox
[![Firefox Status](https://img.shields.io/badge/FireFox%20Status-Published-03C03C?logo=firefox&style=for-the-badge&logoColor=white&labelColor=333333)](https://addons.mozilla.org/en-US/firefox/addon/ayame-noises/)
<br>
![Manifest version](https://img.shields.io/badge/FireFox%20Manifest%20Version-v3-F0B6D5?logo=firefox&style=for-the-badge&logoColor=white&labelColor=333333)
<br>
![Version](https://img.shields.io/badge/Version-v1.0-ef0000?style=for-the-badge&labelColor=333333) ![Cups of coffee](https://img.shields.io/badge/Cups%20of%20coffee%20wasted-55-900c3f?logo=ko-fi&style=for-the-badge&logoColor=white&labelColor=333333)
<br>
Plays a random Nakiri Ayame sound in your browser tab
<br>
Current voice count: **58 unique voices**
<br>
# Special thanks
- [**@NakiriAyame**](https://twitter.com/NakiriAyame) for providing her amazing content. お嬢様、素晴らしいクリップをありがとう。(Sorry I'm not Japanese, so Google Translate it is)
- [**@Hololamp**](https://www.youtube.com/channel/UCTl2VUuIQ60jHUdHCHz7ZDA)
- [**@Nikerium**](https://www.youtube.com/c/Nikerium)

Did I miss someone? Please let me know by opening an issue or a pull request. <3

# How to use
## Method 1: Firefox Addons
1. Currently in the works. Stay tuned for updates
2. Click on the Puzzle piece in the toolbar
3. Click on Ayame's face
4. Enjoy

## Method 2: Manual installation (Advanced)
1. Download the latest release from the [releases page](https://github.com/DGNVMusic/AyameNoises-Firefox/releases)
2. Go to `about:addons` in your browser and click on the cogwheel
3. Click "Debug Add-ons" and click on "Load Temporary Add-on..."
4. Select the "manifest.json" file and open it
5. Follow steps 2-4 from Method 1
6. Profit

# How to contribute
Contributing to this project is really easy. Just follow these steps:
1. Fork [this repository](https://github.com/DGNVMusic/AyameNoises/)
2. Clone your fork
3. Make your changes
   ### Adding a new voice
    1. Add the voice to the `media/sound` folder and name it `ayamenoise<number>.mp3` where `<number>` is the next available number (Look into the `media/sound` folder to see what I mean) - **Make sure the file is an MP3 file** You don't need to remove any metadata from the file, but you can if you want to.
    2. Give a small description of the voice in the `popup.js` file in the `text` array (ADD IT TO THE END OF THE ARRAY. PLEASE DO NOT CHANGE THE ORDER OF THE EXISTING VOICES)
4. Commit your changes
5. Push your changes
6. Open a pull request
7. Wait for me to review your changes

You'll be credited in the README.md file if your changes are accepted and you want to be credited (Please state in the pull request if you do NOT want to be credited. Your name will be stated as a random number).

# License
This project is licensed under the MIT License. See the LICENSE.md file for more information.

# Disclaimer
This project is not affiliated with Cover Corporation and any of it subsidaries (such as Hololive, Hololive English and Hololive Indonesia). All content used in this project is owned by their respective owners. This project is for entertainment purposes only. This project falls under fair use, since the project is remixing the original content provided by the talents of Hololive. If you are a representative of Cover Corp. or any of it's subsidaires and you want this project to be removed, please contact me and I will remove it as soon as possible.
