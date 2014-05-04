function parsePlaintextChangelog(text) {
  var lines = text.split("\n");
  var changelog = [];
  var release;
  for (var i=0; i<lines.length; i++) {
    var line = $.trim(lines[i]);
    // strip comments
    var m = line.match(/^(.*?)(\s\/\/.*)$/);
    if (m) {
      line = $.trim(m[1]);
    }
    // skip empty lines
    if (line.length<1 || line.match(/^\/\//)) {
      continue;
    }
    // parse first-char
    switch (line[0]) {
      case '<':
        release.changes.push({
          kind: 'raw',
          text: line
        })
        break;
      case '*':
        release.changes.push({
          kind: 'improved',
          text: $.trim(line.substring(1))
        })
        break;
      case '+':
        release.changes.push({
          kind: 'new',
          text: $.trim(line.substring(1))
        })
        break;
      case '!':
        release.changes.push({
          kind: 'fixed',
          text: $.trim(line.substring(1))
        })
        break;
      case '-':
        release.changes.push({
          kind: 'removed',
          text: $.trim(line.substring(1))
        })
        break;
      default:
        var parts = line.split("-");
        release = {
          version: $.trim(parts[0]),
          date: $.trim(parts[1]),
          note: $.trim(parts[2]),
          changes: []
        }
        changelog.push(release);
    }
  }
  return changelog;
}

function generateChangelogHTML(el, changelog, getDownloadLinkForVersion, getReleaseDateText) {
  var $root = $(el);
  for (var i=changelog.length-1; i>=0; i--) {
    var release = changelog[i];
    var $release = $('<div class="release"/>');
    var $titlebox = $('<div class="titlebox"/>');
    var $version = $('<h4/>');
    var $a = $('<a>'+release.version+'</a>').attr('href', getDownloadLinkForVersion(release.version));
    var $date = $('<h5/>').html(getReleaseDateText(release.date));
    $version.append($a);
    $titlebox.append($version, $date);
    $release.append($titlebox);
    
    var $infobox = $('<div class="infobox"/>');
    var $changes = $('<ul class="changes"/>');
    for (var j=0; j<release.changes.length; j++) {
      var change = release.changes[j];
      if (change.kind=="raw") {
        $changes.append(change.text);
        continue;
      }
      var $li = $('<li/>');
      
      change.text = change.text.replace(/\(.*?\)/, function(m) {
        return "<i>"+m+"</i>";
      });
      change.text = change.text.replace(/\[(.*?)\]/, function(m, $1) {
        return "<em>"+$1+"</em>";
      });
      
      var $info = $('<span class="info"/>').html(change.text);
      var $b = $('<b/>').text(change.kind);
      var $sticker = $('<span class="sticker"/>').addClass(change.kind);
      $sticker.append($b);
      $li.append($sticker, $info);
      $changes.append($li);
    }
    $infobox.append($changes);
    $release.append($infobox);
    
    $root.prepend($release);
  }
}