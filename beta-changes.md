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

<script type="text/javascript" charset="utf-8">
  $.get('changelog-beta.txt?x='+((Math.random()+"").substring(2)), function(data) {
    var changelog = parsePlaintextChangelog(data);
    var getDownloadLinkForVersion = function(version) {
      return "http://downloads.binaryage.com/TotalFinder-"+version+".dmg"
    };
    var getReleaseDateText = function(date) {
      return "released on " + date;
    };
    generateChangelogHTML("#page", changelog, getDownloadLinkForVersion, getReleaseDateText);
  });
  
  function showBetaHint() {
    $('.betahint').toggle();
  }
</script>
