// ==UserScript==
// @name         Downloader for Claroline
// @version      1.0.3
// @description  Add button to download all pdf on Claroline.
// @iconURL      https://i.imgur.com/1Cplnzw.png
// @icon64URL    https://i.imgur.com/1Cplnzw.png
// @author       LazareC
// @website      https://lazarec.fr
// @match        http*://clarolineconnect.univ-lyon1.fr/resource/open/file/*
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-body
// @downloadURL  https://github.com/Lazare-C/DownloaderForClaroline/raw/main/downloader_for_claroline.user.js
// @updateURL    https://github.com/Lazare-C/DownloaderForClaroline/raw/main/downloader_for_claroline.user.js
// ==/UserScript==


(function () {
    'use strict';

    window.addEventListener('load', function () {



    if (document.getElementsByClassName('fa-download').length == 0)
    {
        let download = window.location.pathname.split('/')[4];
        document.getElementsByClassName('page-header')[0].innerHTML += '        <nav class="page-actions">\n' +
            '        <a class="btn page-action-btn" id="downbutton" href="/clarolinepdfplayerbundle/pdf/' + download + '#downloaded">\n' +
            '        <span class="action-icon fa fa-download"></span>\n' +
            '    <span class="sr-only">Télécharger</span>\n' +
            '</a>\n' +
            '<a id="copy-permalink-to-clipboard" class="btn page-action-btn" href="/clarolinepdfplayerbundle/pdf/' + download + '#downloaded">\n' +
            '<span class="action-icon fa fa-clipboard"></span>\n' +
            '<span class="sr-only">Copier le permalien dans le presse-papiers</span>\n' +
            '</a>\n' +
            '</nav>'

    }

    }, false);


})();
