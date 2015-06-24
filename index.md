---
layout: product-home
download: http://downloads.binaryage.com/TotalFinder-1.6.27.dmg
downloadtitle: Download v1.6.27
title: TotalFinder is a better Finder
subtitle: for Mac users who demand more from their Finder
product: totalfinder
product_title: TotalFinder
product_subtitle: for Mac users who demand more from their Finder
product_icon: /shared/img/icons/totalfinder-256.png
fbsdk: 1
plusone: 1
product-fblike: 1
product-plusone: 1
product-tweet: 1
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
  url: "http://totalfinder.binaryage.com",
  image: "http://totalfinder.binaryage.com/shared/img/icons/totalfinder-256.png"
}
shots: [{
  title: "Colored labels",
  thumb: "/images/showcase/full-clabels.png",
  full: "/images/showcase/full-clabels.png",
  klass: "tf-shadow"
},{
  title: "Folders on top",
  thumb: "/images/showcase/full-fot.png",
  full: "/images/showcase/full-fot.png",
  klass: "tf-shadow"
},  {
  title: "Chrome-style tabs",
  thumb: "/images/showcase/full-tabs.png",
  full: "/images/showcase/full-tabs.png",
  klass: "tf-shadow"
},  {
  title: "Dual mode",
  thumb: "/images/showcase/full-dual.png",
  full: "/images/showcase/full-dual.png",
  klass: "tf-shadow"
},{
  title: "Visor Window",
  thumb: "/images/showcase/full-visor.png",
  full: "/images/showcase/full-visor.png",
  klass: "tf-shadow"
},  {
  title: "Cut & Paste",
  thumb: "/images/showcase/full-cut.png",
  full: "/images/showcase/full-cut.png",
  klass: "tf-shadow"
}]
highlights: [{
  title: "Colored labels",
  description: "Brings full colors back into Yosemite.",
  style: "background: transparent url('/images/showcase/full-clabels.png') no-repeat -274px -100px / 650px 430px",
  screenshot: 1
},{
  title: "Folders on top",
  description: "Folders should always go first in list view. You can also easily toggle display of hidden files.",
  style: "background: transparent url('/images/showcase/full-fot.png') no-repeat -162px -162px / 650px 430px",
  screenshot: 2
},{
  title: "Chrome tabs",
  description: "Apple finally introduced tabs in Mavericks. TotalFinder added Chrome tabs in Snow Leopard.",
  style: "background: transparent url('/images/showcase/full-tabs.png') no-repeat -350px -96px / 650px 430px",
  screenshot: 3
},{
  title: "Dual mode",
  description: "Display two Finder windows side-by-side on hot-key.",
  style: "background: transparent url('/images/showcase/full-dual.png') no-repeat -244px -0px / 1000px 621px",
  screenshot: 4
},{
  title: "Visor window",
  description: "The Finder is always one key-press away!",
  style: "background: transparent url('/images/showcase/full-visor.png') no-repeat -0px -0px / 650px 430px",
  screenshot: 5
},{
  title: "Cut &amp; Paste",
  description: "Use keyboard shortcuts to move files around. Faster than drag &amp; drop.",
  style: "background: transparent url('/images/showcase/full-cut.png') no-repeat -320px -240px / 650px 430px",
  screenshot: 6
}]
---

{% contentfor product-buttons %}
<div class="product-buttons">
  <div class="button-container">
    <a href="{{page.download}}" id="o-download-button" class="button product-button-download">
      <span><i class="fa fa-download fa-lg"></i>{{page.downloadtitle}}</span><span class="trial-note">14-day trial</span>
    </a>
    <div class="button-note">
      <i class="fa fa-laptop"></i> Compatible with OS X 10.8, 10.9 and 10.10<br>
      <a href="/compatibility">Looking for a different version?</a><br>
      <a href="/changes">What's new?</a><br>
    </div>
  </div>
  <div class="button-container">
    <a id="o-buy" class="button product-button-buy">
      <span><i class="fa fa-heart fa-lg"></i>Buy TotalFinder</span>
    </a>
    <div class="button-note">
      <a href="/free-licenses"><i class="fa fa-gift"></i> Apply for a free license</a><br>
    </div>
  </div>
</div>
{% endcontentfor %}

{% contentfor overlays %}
<div id="totalfinder-buy" class="overlay" style="display:none">
  <a href="https://sites.fastspring.com/binaryage/instant/totalfinder">
    <div class="buy-single explanation-box">
      <div class="title">Single License</div>
      <div class="image"><img src="/shared/img2/single-license-icon.png" width="170" height="90"></div>
      <div class="deal">Happy to pay the standard price?<br/>This is the way to go.</div>
      <div class="button">
        <span>Buy single</span><span class="price-tag">$18</span>
      </div>
    </div>
  </a>
  <a href="https://sites.fastspring.com/binaryage/instant/totalfinder-friends">
    <div class="buy-pack explanation-box">
      <div class="title">License Pack</div>
      <div class="image"><img src="/shared/img2/tripple-license-icon.png"  width="170" height="90"></div>
      <div class="deal">Keep one license for yourself, and give two coupons to your friends or family members.</div>
      <div class="button">
        <span>Buy 3-pack</span><span class="price-tag">$36</span>
      </div>
    </div>
  </a>
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
  $(function() {
    $("#o-buy").fancybox({
      href: "#totalfinder-buy"
    });
    $("#o-download-button").bind('click', function(e) {
      ga('send', 'pageview', '/overlays/o-download');
    });
    $('.screenshot').fancybox();
    $('.screenshot-box').navigen({
      target: $(".navi")
    });
    $('.highlight').showcase();
  });
</script>