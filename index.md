---
layout: product
title: TotalFinder is a better Finder
subtitle: for Mac users who demand more from their Finder
download: https://downloads.binaryage.com/TotalFinder-1.14.3.dmg
download_title: Download v1.14.3
product: totalfinder
product_title: TotalFinder
product_subtitle: for Mac users who demand more from their Finder
product_icon: /shared/img/icons/totalfinder-256.png
meta_title: TotalFinder brings tabs to your native Finder and more!
meta_keywords: totalfinder,mac,finder,osx,software,plugin,apple,extension,utility,macosx,apps,tools,tabs,productivity,app,hacks,application,utilities,simbl,visor,totalcommander,binaryage
meta_description: TotalFinder is a plugin for Finder.app which adds tabs like those in Google Chrome, dual panels similar to TotalCommander, and other improvements.
meta_image: /shared/img/icons/totalfinder-128.png
pray: finder tabs mac, total commander mac, better finder plugin
ogmeta: {
  site_name: "BinaryAge website",
  description: "TotalFinder adds tabs to your native Finder and more!",
  email: "support@binaryage.com",
  type: "product",
  title: "TotalFinder",
  url: "https://totalfinder.binaryage.com",
  image: "https://totalfinder.binaryage.com/shared/img/icons/totalfinder-256.png"
}
shots: [{
  title: "Colored labels",
  thumb: "/images/showcase/full-clabels.png",
  full: "/images/showcase/full-clabels.png",
  klass: "tf-shadow"
}, {
  title: "Chrome-style tabs",
  thumb: "/images/showcase/full-tabs.png",
  full: "/images/showcase/full-tabs.png",
  klass: "tf-shadow"
}, {
  title: "Dual mode",
  thumb: "/images/showcase/full-dual.png",
  full: "/images/showcase/full-dual.png",
  klass: "tf-shadow"
}, {
  title: "Visor Window",
  thumb: "/images/showcase/full-visor.png",
  full: "/images/showcase/full-visor.png",
  klass: "tf-shadow"
}, {
  title: "Cut & Paste",
  thumb: "/images/showcase/full-cut.png",
  full: "/images/showcase/full-cut.png",
  klass: "tf-shadow"
}, {
   title: "Folders on top",
   thumb: "/images/showcase/full-fot.png",
   full: "/images/showcase/full-fot.png",
   klass: "tf-shadow"
}]
highlights: [{
  title: "Colored labels",
  description: "Brings full colors back into El Capitan.",
  style: "background: transparent url('/images/showcase/full-clabels.png') no-repeat -274px -100px / 650px 430px",
  screenshot: 1
}, {
  title: "Chrome tabs",
  description: "Apple finally introduced tabs in Mavericks. TotalFinder added Chrome tabs in Snow Leopard.",
  style: "background: transparent url('/images/showcase/full-tabs.png') no-repeat -350px -96px / 650px 430px",
  screenshot: 2
}, {
  title: "Dual mode",
  description: "Display two Finder windows side-by-side on hot-key.",
  style: "background: transparent url('/images/showcase/full-dual.png') no-repeat -244px -0px / 1000px 621px",
  screenshot: 3
}, {
  title: "Visor window",
  description: "The Finder is always one key-press away!",
  style: "background: transparent url('/images/showcase/full-visor.png') no-repeat -0px -0px / 650px 430px",
  screenshot: 4
}, {
  title: "Cut &amp; Paste",
  description: "Use keyboard shortcuts to move files around. Faster than drag &amp; drop.",
  style: "background: transparent url('/images/showcase/full-cut.png') no-repeat -320px -240px / 650px 430px",
  screenshot: 5
}]
---

{% contentfor product-buttons %}
<div class="product-buttons">
  <div class="button-container">
    <a href="{{page.download}}" id="o-download-button" class="button product-button-download">
      <span><i class="fa fa-download fa-lg"></i>{{page.download_title}}</span>
    </a>
    <div class="button-note">
      <a href="/compatibility"><i class="fa fa-laptop"></i> Compatible with macOS 12 (Monterey)</a><br>
      <span class="sip-warning"><i class="fa fa-exclamation-triangle"></i> <a href="/sip" target="_blank">but requires a system tweak</a></span><br>
      <span class="sip-warning"><i class="fa fa-exclamation-triangle"></i> <a href="/apple-silicon" target="_blank">Apple Silicon compatibility must be manually enabled</a></span><br>
    </div>
  </div>
</div>
{% endcontentfor %}

<div class="row">
  <div class="col-md-4 col-md-offset-1">
    <div class="manual-button-box">
      <a href="/about" class="button product-button-doc">
        <div><i class="fa fa-book"></i> Read more in manual pages</div>
      </a>
    </div>
  </div>
</div>

<script>
  defer$(function() {
    $(function() {
      $("#o-download-button").bind('click', function(e) {
        ga('send', 'pageview', '/overlays/o-download');
      });
      $('.screenshot').fancybox();
      $('.screenshot-box').navigen({
        target: $(".navi")
      });
      $('.highlight').showcase();
    });
  });
</script>
