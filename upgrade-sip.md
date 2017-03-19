---
layout: tf-doc
title: Upgrade System Integrity Protection settings
subtitle: Option to enable System Integrity Protection
---

This article is for users who use TotalFinder with System Integrity Protection (SIP) partially disabled. This was the case for all TotalFiner installations prior 1.9.0.

With TotalFinder 1.9.0 we offer a new option to run TotalFinder with SIP fully enabled. To read more about new SIP support please refer to our [main article](/sip).

## Keeping SIP partially disabled

If you have an installation of TotalFinder using the partially disabled SIP setting that we earlier recommended (`csrutil enable --without-debug`), then you can still upgrade to versions 1.9.0 and above without changing your SIP settings. Everything will continue to work.

## Re-enabling SIP fully (recommended)

If you wish to run with SIP enabled, first disable SIP completely as described in [the main article](/sip), reboot and then install and run TotalFinder 1.9.0 or above. TotalFinder will prompt you to finish the installation. After then you should be able to fully re-enable SIP.

Don't worry. TotalFinder will guide you through the process.