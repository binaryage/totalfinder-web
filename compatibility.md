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
---

Using outdated OS X? Here you can find last TotalFinder release compatible with your OS.

{% contentfor inline_styles %}
.custom-os-box { margin-left:20px; clear:both; margin-top:30px; }
.custom-os-box img { width:64px; float:left; margin-right:10px; }
.custom-os-box .title { color:#999; font-size:20px; font-weight:bold; line-height:24px; padding-top:6px; }
.custom-os-box .title a { color:#999 }
.custom-os-box .note { font-size:16px; font-weight:bold; line-height:26px; }
{% endcontentfor %}

{% for item in page.oses %}
<div class="custom-os-box">
  <img src="/images/{{item.logo}}">
  <div class="title">OS X {{item.version}} - <a href="http://en.wikipedia.org/wiki/{{item.wiki}}">{{item.label}}</a></div>
  <div class="note">{{item.note}}</div>
</div>
{% endfor %}