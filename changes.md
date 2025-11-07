---
layout: tf-doc
title: Recent changes in TotalFinder
subtitle: Recent changes in TotalFinder
---

<script src="/shared/js/changelog.js" type="text/javascript" charset="utf-8"></script>

<div class="changelog-info">
<a href="/beta-changes">Looking for pre-release versions?</a>
</div>

<div class="changelogx">
  <div id="page" class="changelog"></div>
</div>

<script type="text/javascript" charset="utf-8">
  (function() {
    defer$(function() {
      var hashToSelector, nonce, source;
      nonce = function() {
        return (Math.random() + "").substring(2);
      };
      source = "changelog.txt";
      hashToSelector = function(h) {
        return h.replace(/\./g, "\\.");
      };
      return $.get(source + "?x=" + (nonce()), function(data) {
        var changelog, getDownloadLinkForVersion, getReleaseDateText;
        changelog = parsePlaintextChangelog(data);
        getDownloadLinkForVersion = function(version) {
          return "https://downloads.binaryage.com/TotalFinder-" + version + ".dmg";
        };
        getReleaseDateText = function(date) {
          return "released on " + date;
        };
        generateChangelogHTML("#page", changelog, getDownloadLinkForVersion, getReleaseDateText);
        return $(window).trigger("changelog-rendered");
      });
    });

  }).call(this);
</script>
