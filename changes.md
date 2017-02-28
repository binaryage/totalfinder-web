---
layout: tf-doc
title: Recent changes in TotalFinder
subtitle: Recent changes
---

<script src="/shared/js/changelog.js" type="text/javascript" charset="utf-8"></script>

<div class="changelog-info">
<a href="/beta-changes">Interested in pre-releases?</a>
</div>

<div class="changelogx">
  <div id="page" class="changelog"></div>
</div>

<script type="text/coffeescript" charset="utf-8">
  defer$ ->
    nonce = -> (Math.random() + "").substring(2)
    source = "changelog.txt"
    hashToSelector = (h) -> h.replace /\./g, "\\." # http://stackoverflow.com/a/9930611/84283
    
    $.get "#{source}?x=#{nonce()}", (data) ->
      changelog = parsePlaintextChangelog(data)
  
      getDownloadLinkForVersion = (version) -> "https://downloads.binaryage.com/TotalFinder-#{version}.dmg"
      getReleaseDateText = (date) -> "released on " + date
      generateChangelogHTML "#page", changelog, getDownloadLinkForVersion, getReleaseDateText
      $(window).trigger "changelog-rendered"
</script>
