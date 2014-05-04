---
layout: tf-doc
title: Recent changes in TotalFinder
subtitle: Recent changes
---

<script src="changelog.js" type="text/javascript" charset="utf-8"></script>

<div class="changelog-info">
<a href="/beta-changes">Interested in pre-releases?</a>
</div>

<div class="changelogx">
  <div id="page" class="changelog"></div>
</div>

<script type="text/javascript" charset="utf-8">
  $.get('changelog.txt?x='+((Math.random()+"").substring(2)), function(data) {
    var changelog = parsePlaintextChangelog(data);
    var getDownloadLinkForVersion = function(version) {
      return "http://downloads.binaryage.com/TotalFinder-"+version+".dmg"
    };
    var getReleaseDateText = function(date) {
      return "released on " + date;
    };
    generateChangelogHTML("#page", changelog, getDownloadLinkForVersion, getReleaseDateText);
  });
</script>
