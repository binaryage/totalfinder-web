---
layout: tf-doc
title: TotalFinder Compatibility
subtitle: Compatibility
oses: [{
  version: "10.9",
  label: "Mavericks",
  logo: "logo-mavericks.png",
  wiki: "OS_X_Mavericks",
  note: "Use <a href=\"/changes\">the latest version</a>"
},{
  version: "10.8",
  label: "Mountain Lion",
  logo: "logo-mountain-lion.png",
  wiki: "OS_X_Mountain_Lion",
  note: "Use <a href=\"/changes\">the latest version</a>"
},{
  version: "10.7",
  label: "Lion",
  logo: "logo-lion.png",
  wiki: "OS_X_Lion",
  note: "Use <a href=\"/changes#1.5.38\">version 1.5.38</a>"
},{
  version: "10.6",
  label: "Snow Leopard",
  logo: "logo-snow-leopard.png",
  wiki: "OS_X_Snow_Leopard",
  note: "Use <a href=\"/changes#1.3.4\">version 1.3.4</a>"
}]
betas: [{
  version: "10.10",
  label: "Yosemite",
  logo: "logo-yosemite.png",
  wiki: "OS_X_Yosemite",
  note: "Use <a href=\"/beta-changes\">the latest beta version</a>",
  more: "Please help us test TotalFinder under Yosemite. More details in <a href=\"http://discuss.binaryage.com/t/totalfinder-yosemite-status/2144\">this forum post</a>."
}]
---

Here you can find latest TotalFinder releases compatible with individual OS versions.

{% contentfor inline_styles %}
.custom-os-box { margin-left:20px; clear:both; margin-top:30px; }
.custom-os-box img { width:64px; float:left; margin-right:10px; }
.custom-os-box .title { color:#999; font-size:20px; font-weight:bold; line-height:24px; padding-top:6px; }
.custom-os-box .title a { color:#999 }
.custom-os-box .note { font-size:16px; font-weight:bold; line-height:26px; }
.sep { clear:both; margin-top: 40px; margin-bottom: 20px }
{% endcontentfor %}

{% for item in page.oses %}
<div class="custom-os-box">
  <img src="/images/{{item.logo}}">
  <div class="title">OS X {{item.version}} - <a href="http://en.wikipedia.org/wiki/{{item.wiki}}">{{item.label}}</a></div>
  <div class="note">{{item.note}}</div>
  {% if item.more %}<div class="more">{{item.more}}</div>{% endif %}
</div>
{% endfor %}
{% if page.betas %}<div class="sep generic-separator"></div>{% endif %}

Using upcoming OS X (developer preview)?

{% for item in page.betas %}
<div class="custom-os-box">
  <img src="/images/{{item.logo}}">
  <div class="title">OS X {{item.version}} - <a href="http://en.wikipedia.org/wiki/{{item.wiki}}">{{item.label}}</a></div>
  <div class="note">{{item.note}}</div>
  {% if item.more %}<div class="more">{{item.more}}</div>{% endif %}
</div>
{% endfor %}
