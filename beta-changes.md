---
layout: tf-doc
title: Recent changes in TotalFinder pre-releases
subtitle: Recent changes in pre-releases
---

<script src="changelog.js" type="text/javascript" charset="utf-8"></script>

<div class="changelog-info">
<a href="javascript:showBetaHint(this);">How to switch to pre-releases in TotalFinder?</a>
<div class="betahint" style="display:none">
  Please enable the "Include pre-releases" checkbox in the System->Updates section of the TotalFinder preferences tab:<br/>
  <img src="/images/pref-about.png" style="width:300px" class="doc-image add-shadow">
</div>
</div>

<div class="changelogx">
  <div id="page" class="changelog"></div>
</div>

<script type="text/coffeescript" charset="utf-8">
  nonce = -> (Math.random() + "").substring(2)
  source = "changelog-beta.txt"
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
      , 2000
    
  @showBetaHint = -> $(".betahint").toggle()
</script>
