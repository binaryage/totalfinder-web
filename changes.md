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
  nonce = -> (Math.random() + "").substring(2)
  source = "changelog.txt"
  hashToSelector = (h) -> h.replace /\./g, "\\." # http://stackoverflow.com/a/9930611/84283
  
  $.get "#{source}?x=#{nonce()}", (data) ->
    changelog = parsePlaintextChangelog(data)

    getDownloadLinkForVersion = (version) -> "http://downloads.binaryage.com/TotalFinder-#{version}.dmg"
    getReleaseDateText = (date) -> "released on " + date
    generateChangelogHTML "#page", changelog, getDownloadLinkForVersion, getReleaseDateText

    # http://stackoverflow.com/a/13952352/84283
    if window.location.hash
      $(document.body).animate
        scrollTop: $(hashToSelector(window.location.hash)).offset().top
      , 1000
    
</script>
