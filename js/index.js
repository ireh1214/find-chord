window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("chordForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const chord = document.getElementById("chordInput").value;
    let sharpCount = "0";
    let flatCount = "0";

    switch (chord) {
      case "C":
        sharpCount = 0;
        flatCount = 0;
        break;

      case "D":
        sharpCount = 2;
        flatCount = 0;
        break;

      case "E":
        sharpCount = 4;
        flatCount = 0;
        break;

      case "F":
        sharpCount = 0;
        flatCount = 1;
        break;

      case "G":
        sharpCount = 1;
        flatCount = 0;
        break;

      case "A":
        sharpCount = 3;
        flatCount = 0;
        break;

      case "B":
        sharpCount = 5;
        flatCount = 0;
        break;

      case "Db":
        sharpCount = 0;
        flatCount = 5;
        break;

      case "Eb":
        sharpCount = 0;
        flatCount = 3;
        break;

      case "F#":
        sharpCount = 6;
        flatCount = 0;
        break;

      case "Gb":
        sharpCount = 0;
        flatCount = 6;
        break;

      case "Ab":
        sharpCount = 0;
        flatCount = 4;
        break;

      case "Bb":
        sharpCount = 0;
        flatCount = 2;
        break;

      // C#의 경우는 매우 드물게 사용되지만 추가하고 싶다면 다음과 같이 할 수 있습니다.
      case "C#":
        sharpCount = 7;
        flatCount = 0;
        break;

      default:
        sharpCount = "?";
        flatCount = "?";
        break;
    }

    // 결과 업데이트
    document.getElementById("chord").innerText = chord;
    document.getElementById("sharp").innerText = sharpCount;
    document.getElementById("flat").innerText = flatCount;
  });
});
