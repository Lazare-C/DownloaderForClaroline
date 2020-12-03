Simple script to add a buton download on all documents

## Script Version

### Installation

1. Install [Tampermonkey](https://tampermonkey.net/)
1. Just [click here](https://github.com/Lazare-C/DownloaderForClaroline/raw/main/downloader_for_claroline.user.js) and install or if this dosen't work [click here and copy all ](https://github.com/Lazare-C/DownloaderForClaroline/raw/main/downloader_for_claroline.user.js)  
1. Open Tampermonkey in your browser and click the Add Script tab (icon with a plus symbol)
1. Paste the source into the script window and hit save
1. Done!

## Bookmark Version
### Installation
1. Add a bookmark to your browser 
2. In url put this  `javascript:(function() {location.href='/clarolinepdfplayerbundle/pdf/' + window.location.pathname.split('/')[4]+'#downloaded';})();`
