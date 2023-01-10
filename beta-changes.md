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

<script type="text/coffeescript" charset="utf-8">
  defer$ ->
    nonce = -> (Math.random() + "").substring(2)
    source = "changelog-beta.txt"
    hashToSelector = (h) -> h.replace /\./g, "\\." # http://stackoverflow.com/a/9930611/84283
  
    $.get "#{source}?x=#{nonce()}", (data) ->
      changelog = parsePlaintextChangelog(data)
  
      getDownloadLinkForVersion = (version) -> "https://downloads.binaryage.com/TotalFinder-#{version}.dmg"
      getReleaseDateText = (date) -> "released on " + date
      generateChangelogHTML "#page", changelog, getDownloadLinkForVersion, getReleaseDateText
      $(window).trigger "changelog-rendered"
      
    @showBetaHint = -> $(".betahint").toggle()
</script>
