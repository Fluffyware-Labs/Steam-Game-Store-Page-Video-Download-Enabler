// ==UserScript==
// @name         Steam Game Store Page Video Download Enabler
// @description  A TamperMonkey Script that enables you to download videos from a games store page on Steam
// @author       Ki77y666
// @namespace    https://github.com/Fluffyware-Labs/Steam-Game-Store-Page-Video-Download-Enabler/
// @icon         https://github.com/Ki77y666/SteamDevEmailEnabler/raw/1e00c5fe7affbeee6a165572a590822b38886cab/assets/favicons/favicon.ico
// @version      1.0
// @homepage     https://github.com/Fluffyware-Labs/Steam-Game-Store-Page-Video-Download-Enabler/
// @supportURL   https://github.com/Fluffyware-Labs/Steam-Game-Store-Page-Video-Download-Enabler/issues
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @match        https://store.steampowered.com/app/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var x = document.getElementsByClassName("apphub_OtherSiteInfo")[0];
    //var y = document.getElementsByClassName("highlight_movie");
    var y = $('div.highlight_movie');
    for (var i = 0; i < y.length; i++) {
        var copy = x.firstElementChild.cloneNode(true);
        var link = y[i].getAttribute("data-mp4-hd-source");
        copy.setAttribute("href", link);
        copy.innerHTML = "<span>Download Trailer</span>";
        x.appendChild(copy);
    }
})();