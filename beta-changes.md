---
layout: tf-doc
title: Recent changes in TotalFinder (pre-release)
subtitle: Recent changes in TotalFinder (pre-release)
---

<script src="/shared/js/changelog.js" type="text/javascript" charset="utf-8"></script>

<div class="changelog-info info-box">
  <a href="javascript:showBetaHint(this);">How do I opt into pre-release updates in TotalFinder?</a>
  <div class="betahint" style="display:none">
    <p>Simply enable the "Include pre-releases" option in the System → Updates section of the TotalFinder preferences tab, as shown below.</p>
    <img src="/images/pref-include-preleases.png" style="width:600px" class="doc-image add-shadow">
  </div>
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
      source = "changelog-beta.txt";
      hashToSelector = function(h) {
        return h.replace(/\./g, "\\.");
      };
      $.get(source + "?x=" + (nonce()), function(data) {
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
      return this.showBetaHint = function() {
        return $(".betahint").toggle();
      };
    });

  }).call(this);
</script>
