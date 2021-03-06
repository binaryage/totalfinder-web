---
layout: tf-doc
title: Visor in TotalFinder
subtitle: Visor
---

<img src="/images/showcase/full-visor.png" class="doc-image add-shadow" style="width:600px">

## What is Visor?

Visor is a system-wide TotalFinder window displayed at the bottom of the screen. The idea is to have one dedicated TotalFinder instance always ready just one key press away. This functionality is inspired by [Terminal.app's Visor](https://visor.binaryage.com).

This feature is disabled by default. It is meant to be enabled by advanced users who want to adopt a Visor-based workflow. It works best when you have the auto-hiding Dock panel enabled.

## What can I do with Visor?

1. You can show and hide it
2. You can hide it by pressing Escape (optional)
3. You can pin visor window
4. You can tweak its appearance and behavior

## Activation and deactivation

To activate the Visor press the keyboard shortcut. Alternatively, you can double tap the option key. To deactivate, press the keyboard shortcut again or hit escape. Visor also deactivates when another application gets input focus.

## Pinning Visor

Sometimes you may want Visor to temporarily stay open even if you switch to another application. In this situation you can pin the Visor using the blue button in the top-left corner of the Visor window. There is a keyboard shortcut `⇧⌘P` for doing it quickly without a mouse.

While pinned, Visor does not hide when losing focus. Hiding using the activation shortcut still works.

## Resizing Visor

Visor was designed to occupy the whole width of the screen, positioned at the bottom. You can adjust Visor's height by dragging the window frame (drag the area behind tabs).

Some users have wide monitors and want to control the width and horizontal position of the Visor window. In this case you can enable a `FreeForm Window` switch which enables arbitrary size and horizontal position for the Visor window. Use the classic resizing gripper in the bottom right window corner.

## Sliding effect

The Visor window slides on screen similar way to how the game console did in the original Quake game. You may customize this effect by specifying duration and whether you want it to fade and slide.

## Screens and Spaces

* **Screen** - on multi-monitor systems forces Visor window to appear on particular screen
* **Show on all Spaces** - Visor window will appear on all spaces (recommended)
* **Show above the Dock level** - displays Visor above the Dock

## Keyboard Shortcuts

<div id="visor-keyboard-shortcuts" class="keyboard-shortcuts anchorable">
  <table border="0" cellspacing="0" cellpadding="0">
    <tr><th>Action</th><th>Shortcut</th></tr>
    <tr><td>Show or hide Visor</td><td>⌥` (alternatively double tap ⌥+⌥)</td></tr>
    <tr><td>Hide Visor while opened</td><td>⎋ (optional, disabled by default)</td></tr>
    <tr><td>Pin Visor</td><td>⇧⌘P</td></tr>
  </table>
</div>

## Preferences

<img src="/images/pref-visor.png" class="doc-image add-shadow" style="width:600px">
