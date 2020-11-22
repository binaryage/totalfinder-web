---
layout: tf-doc
title: TotalFinder Injection Troubles
subtitle: TotalFinder Injection Troubles
---

<p class="info-box compatibility">
This page describes macOS 11.0 (Big Sur) specific information.<br>
This feature is implemented since TotalFinder 1.13.7.
</p>

During startup, TotalFinder can sometimes detect that it does not have correct permissions to control Finder: 

<img src="images/totalfinder-automation-permissions.png" class="no-background" style="width:300px" alt="totalfinder automation permissions">

Normally when you go to `System Preferences > Security & Privacy > Privacy > Automation` you should see
something like this:

<img src="images/totalfinder-automation-prefs.png" class="no-background" style="width:800px" alt="totalfinder automation permissions">

Either you or someone else unchecked it. Or TotalFinder lost the permission for some other reason. 
Or TotalFinder was never given this permission in the first place. 
Anyway, please consider enabling it and then hit `Continue` on the "Automation Permissions" prompt.

### Don't see it?

Ah, too bad. You might be experiencing a bug which causes this permission to be silently not offered in UI. 

Please [continue with this article](/injection-troubles).