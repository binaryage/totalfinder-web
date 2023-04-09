---
layout: tf-doc
title: TotalFinder Compatibility
subtitle: Compatibility
oses: [{
  macos-branding: "macOS",
  version: "13.0",
  label: "Ventura",
  logo: "logo-ventura.png",
  wiki: "MacOS_Ventura",
  note: "<a href=\"/beta-changes#latest\">Latest version</a> (※ SIP must <a href=\"/sip\" class=\"red\">remain weakened</a>, <a href=\"/apple-silicon\" class=\"red\">works with Apple Silicon</a>)",
},{
  macos-branding: "macOS",
  version: "12.0",
  label: "Monterey",
  logo: "logo-monterey.png",
  wiki: "MacOS_Monterey",
  note: "<a href=\"/beta-changes#latest\">Latest version</a> (※ SIP must <a href=\"/sip\" class=\"red\">remain weakened</a>, <a href=\"/apple-silicon\" class=\"red\">works with Apple Silicon</a>)",
},{
  macos-branding: "macOS",
  version: "11.0",
  label: "Big Sur",
  logo: "logo-big-sur.png",
  wiki: "MacOS_Big_Sur",
  note: "<a href=\"/beta-changes#latest\">Latest version</a> (※ SIP must <a href=\"/sip\" class=\"red\">remain weakened</a>, <a href=\"/apple-silicon\" class=\"red\">works with Apple Silicon</a>)",
},{
  macos-branding: "macOS",
  version: "10.15",
  label: "Catalina",
  logo: "logo-catalina.png",
  wiki: "MacOS_Catalina",
  note: "<a href=\"/beta-changes#latest\">Latest version</a> (※ SIP must <a href=\"/sip\" class=\"red\">remain weakened</a>)",
},{
  macos-branding: "macOS",
  version: "10.14",
  label: "Mojave",
  logo: "logo-mojave.png",
  wiki: "MacOS_Mojave",
  note: "<a href=\"/changes#1.12.3\">TotalFinder 1.12.3</a> (※ SIP must <a href=\"/sip\" class=\"red\">remain weakened</a>)",
},{
  macos-branding: "macOS",
  version: "10.13",
  label: "High Sierra",
  logo: "logo-sierra.png",
  wiki: "MacOS_High_Sierra",
  note: "<a href=\"/changes#1.12.3\">TotalFinder 1.12.3</a> (※ SIP must <a href=\"/sip-sierra\" class=\"red\">be temporarily disabled</a>)",
},{
  macos-branding: "macOS",
  version: "10.12",
  label: "Sierra",
  logo: "logo-sierra.png",
  wiki: "MacOS_Sierra",
  note: "<a href=\"/changes#1.12.3\">TotalFinder 1.12.3</a> (※ SIP must <a href=\"/sip-sierra\" class=\"red\">be temporarily disabled</a>)",
},{
  macos-branding: "OS X",
  version: "10.11",
  label: "El Capitan",
  logo: "logo-el-capitan.png",
  wiki: "OS_X_El_Capitan",
  note: "<a href=\"/changes#1.12.3\">TotalFinder 1.12.3</a> (※ SIP must <a href=\"/sip-sierra\" class=\"red\">be temporarily disabled</a>)",
},{
  macos-branding: "OS X",
  version: "10.10",
  label: "Yosemite",
  logo: "logo-yosemite.png",
  wiki: "OS_X_Yosemite",
  note: "<a href=\"/changes#1.9.3\">TotalFinder 1.9.3</a>",
},{
  macos-branding: "OS X",
  version: "10.9",
  label: "Mavericks",
  logo: "logo-mavericks.png",
  wiki: "OS_X_Mavericks",
  note: "<a href=\"/changes#1.9.3\">TotalFinder 1.9.3</a>",
},{
  macos-branding: "OS X",
  version: "10.8",
  label: "Mountain Lion",
  logo: "logo-mountain-lion.png",
  wiki: "OS_X_Mountain_Lion",
  note: "<a href=\"/changes#1.6.27\">TotalFinder 1.6.27</a>",
},{
  macos-branding: "OS X",
  version: "10.7",
  label: "Lion",
  logo: "logo-lion.png",
  wiki: "OS_X_Lion",
  note: "<a href=\"/changes#1.5.38\">TotalFinder 1.5.38</a>"
},{
  macos-branding: "OS X",
  version: "10.6",
  label: "Snow Leopard",
  logo: "logo-snow-leopard.png",
  wiki: "OS_X_Snow_Leopard",
  note: "<a href=\"/changes#1.3.4\">TotalFinder 1.3.4</a>"
}]
---

<p class="info-box compatibility">
  <b>Are you using an Apple Silicon (M1, M2, etc.) machine?</b><br>

  While TotalFinder <i>is</i> compatible with <a href="https://en.wikipedia.org/wiki/Apple_silicon">Apple Silicon</a>, this is <a href="https://blog.binaryage.com/totalfinder-totalspaces-future/"><i>not</i> officially supported by BinaryAge</a>.<br>

  As a result, Apple Silicon support in TotalFinder must be manually enabled. You can find more info on how to do so <a href="/apple-silicon">on this page</a>.
</p>

Here you can find the latest versions of TotalFinder that are compatible with each version of macOS or OS X.

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
  <div class="title"><a href="http://en.wikipedia.org/wiki/{{item.wiki}}">{{item.macos-branding}} {{item.version}} {{item.label}}</a></div><div class="note"> {{item.note}}</div>
</div>
{% endfor %}
