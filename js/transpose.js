var parentId;
var chords = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var chords2 = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
var intval = 2;

function findIdx(val) {
  for (i = 0; i < chords.length; i++)
    if (val == chords[i] || val == chords2[i]) return i;
  return -1;
}

function cal(val) {
  var idx = findIdx(val);
  if (idx == -1) return "-";
  var nidx = idx + intval;
  var ret = chords[nidx % chords.length];

  return ret;
}

function updateIntval(_old, _new) {
  var oldk = document.getElementById(_old).value;
  var newk = document.getElementById(_new).value;
  //alert(oldk + " " + newK);

  intval = findIdx(newk) - findIdx(oldk);
  if (intval < 0) intval += chords.length;
  transpose();
}

function toUpperCase(inputElement) {
  inputElement.value = inputElement.value.toUpperCase();
}

function transpose() {
  var parent = document.getElementById(parentId);

  var divs = parent.getElementsByTagName("div");

  for (ii = 0; ii < divs.length; ii++) {
    var div = divs[ii];
    var inputs = div.getElementsByTagName("input");

    var val = inputs[0].value;

    if (val == "") continue;
    var pos = 1;

    if (val.length > 1 && (val.charAt(1) == "#" || val.charAt(1) == "b"))
      pos = 2;

    inputs[1].value = cal(val.substring(0, pos)) + val.substring(pos);
  }
  //	alert(inputs[0].value);
  //	alert(inputs[1].value);
}

function createField() {
  var parent = document.getElementById(parentId);
  var field = document.createElement("div");

  field.innerHTML = "<input type='text' />⇒<input type='text' />";
  parent.appendChild(field);
}

function createFieldFirst() {
  var parent = document.getElementById(parentId);
  var field = document.createElement("div");

  parent.appendChild(field);
}
