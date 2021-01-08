---
layout: tf-doc
title: TotalFinder Compatibility
subtitle: Compatibility
oses: [{
  version: "11.0",
  label: "Big Sur",
  logo: "logo-big-sur.png",
  wiki: "MacOS_Big_Sur",
  note: "<a href=\"/beta-changes#latest\">install the latest version</a>, but <a href=\"/sip\" class=\"red\">needs a permanent system tweak</a>",
},{
  version: "10.15",
  label: "Catalina",
  logo: "logo-catalina.png",
  wiki: "MacOS_Catalina",
  note: "<a href=\"/beta-changes#latest\">install the latest version</a>, but <a href=\"/sip\" class=\"red\">needs a permanent system tweak</a>",
},{
  version: "10.14",
  label: "Mojave",
  logo: "logo-mojave.png",
  wiki: "MacOS_Mojave",
  note: "<a href=\"/changes#1.12.3\">install version 1.12.3</a>, but <a href=\"/sip\" class=\"red\">needs a permanent system tweak</a>",
},{
  version: "10.13",
  label: "High Sierra",
  logo: "logo-sierra.png",
  wiki: "MacOS_High_Sierra",
  note: "<a href=\"/changes#1.12.3\">install version 1.12.3</a>, but <a href=\"/sip-sierra\" class=\"red\">needs a temporary system tweak</a>",
},{
  version: "10.12",
  label: "Sierra",
  logo: "logo-sierra.png",
  wiki: "MacOS_Sierra",
  note: "<a href=\"/changes#1.12.3\">install version 1.12.3</a>, but <a href=\"/sip-sierra\" class=\"red\">needs a temporary system tweak</a>",
},{
  version: "10.11",
  label: "El Capitan",
  logo: "logo-el-capitan.png",
  wiki: "OS_X_El_Capitan",
  note: "<a href=\"/changes#1.12.3\">install version 1.12.3</a>, but <a href=\"/sip-sierra\" class=\"red\">needs a temporary system tweak</a>",
},{
  version: "10.10",
  label: "Yosemite",
  logo: "logo-yosemite.png",
  wiki: "OS_X_Yosemite",
  note: "install <a href=\"/changes#1.9.3\">version 1.9.3</a>",
},{
  version: "10.9",
  label: "Mavericks",
  logo: "logo-mavericks.png",
  wiki: "OS_X_Mavericks",
  note: "install <a href=\"/changes#1.9.3\">version 1.9.3</a>",
},{
  version: "10.8",
  label: "Mountain Lion",
  logo: "logo-mountain-lion.png",
  wiki: "OS_X_Mountain_Lion",
  note: "install <a href=\"/changes#1.6.27\">version 1.6.27</a>",
},{
  version: "10.7",
  label: "Lion",
  logo: "logo-lion.png",
  wiki: "OS_X_Lion",
  note: "install <a href=\"/changes#1.5.38\">version 1.5.38</a>"
},{
  version: "10.6",
  label: "Snow Leopard",
  logo: "logo-snow-leopard.png",
  wiki: "OS_X_Snow_Leopard",
  note: "install <a href=\"/changes#1.3.4\">version 1.3.4</a>"
}]
---

<p class="info-box compatibility">
TotalFinder is not compatible with Apple's latest computers with 
<a href="https://en.wikipedia.org/wiki/Apple_M1">M1 chip</a>.
It fails by reporting <a href="/injection-troubles">that Apple events cannot be delivered</a>. Unfortunately there is no known solution at this point.
Please subscribe to <a href="https://discuss.binaryage.com/t/totalfinder-on-m1-macbook-air/7879">this forum thread</a>
for further updates.
</p>

Here you can find latest TotalFinder releases compatible with individual macOS versions:

{% contentfor inline_styles %}
.custom-os-box { margin-left:20px; font-size:14px; clear:both; margin-bottom:20px; line-height:32px; }
.custom-os-box img { height:32px; float:left; margin-right:12px; background-color: transparent; }
.custom-os-box .title { color:#666; font-weight:bold; display:inline-block; width: 220px }
.custom-os-box .title a { color:#666; }
.custom-os-box .note { color:#666; display:inline-block }
.custom-os-box a {font-weight: bold}
{% endcontentfor %}

{% for item in page.oses %}
<div class="custom-os-box">
  <img src="shared/img/os/{{item.logo}}">
  <div class="title"><a href="http://en.wikipedia.org/wiki/{{item.wiki}}">macOS {{item.version}} ({{item.label}})</a></div><div class="note"> {{item.note}}</div>
</div>
{% endfor %}
