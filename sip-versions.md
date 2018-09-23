---
layout: tf-doc
title: TotalFinderSIP versions
subtitle: TotalFinderSIP versions
---

<p class="info-box compatibility">
This page describes macOS 10.11 (El Capitan) - 10.13 (High Sierra) specific information.<br>
The system component is no longer used under macOS 10.14 (Mojave) and later.<br>
You might want to read <a href="https://blog.binaryage.com/sip-and-mojave">this blog post</a> with further explanation.
</p>

TotalFinder needs to install a system component into protected disk area at 
`/System/Library/ScriptingAdditions/TotalFinderSIP.osax` to circumvent the System Integrity Protection (SIP). 
You can [read some technical details here][sip-explained]. 

Rarely we might need to upgrade this component. Unfortunately that requires turning SIP off and on again. 
We maintain this page as a resource with explanation of each upgrade.

---

### v1

> **Released in [TotalFinder 1.9.0][tf-190] on March 20, 2017**

> Initial version of the component installed with [TotalFinder 1.9.0][tf-190]. This [blog post][blog-post] introduced the 
solution.

### v2 

> **Released in [TotalFinder 1.10.0][tf-1100] on August 21, 2017**

> For security reasons `TotalFinderSIP.osax` checks code signature of the code located at `/Applications/TotalFinder.app` which 
it is going to inject into `Finder.app`. It must make sure that the code was produced by us (BinaryAge) and properly signed 
with a valid developer certificate issued by Apple.

> The problem is that in `v1` implementation we were checking specific naming scheme of the developer certificate and Apple 
decided to change it. As our old certificate expired we were unable to sign new TotalFinder updates in a way which
would be recognised by the `v1` component as a genuine code coming from us. That is why we had to [relax the check][v2-commit] 
in `v2`.

[sip-explained]: https://totalfinder.binaryage.com/sip#mark-technical-details
[blog-post]: https://blog.binaryage.com/sip-and-installing-total-apps
[v2-commit]: https://github.com/binaryage/totalfinder-osax/commit/422dc57e2132e92ae30d099a7ca32bd93a2040a2
[tf-190]: https://totalfinder.binaryage.com/beta-changes#1.9.0
[tf-1100]: https://totalfinder.binaryage.com/beta-changes#1.10.0
