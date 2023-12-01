const navButton = document.querySelector("button[aria-expanded]");
function toggleNav({ target: f }) {
    let t = "true" === f.getAttribute("aria-expanded");
    navButton.setAttribute("aria-expanded", !t)
}

function toggleImageGrid(e) {
    var t = document.getElementById(e + "-images"), n = document.querySelector("[data-hobby-id='" + e + "']");
    "none" === t.style.display ? (t.style.display = "flex", t.style.flexFlow = "wrap", t.style.gap
        = "20px", n.textContent = "Hide") : (t.style.display = "none", n.textContent = "Show Items")
}

navButton.addEventListener("click", toggleNav), document.addEventListener("DOMContentLoaded",
    function () {
        var e = document.getElementById("myAudio"), t =
            document.getElementById("audioSource"), n = document.getElementById("hoverElement"),
            a = document.getElementById("songTitle"), r = [{
                name: "Heart and Soul", src:
                    "./music/Heart and Soul.mp3"
            }, {
                name: "Random Freestyle Mar 9th, 2023", src:
                    "./music/Random Freestyle loop Mar9.mp3"
            }, {
                name: "Random Freestyle Mar 10th, 2023",
                src: "./music/Freestyle loop mar10.mp3"
            }, {
                name: "Random Freestyle Mar 11th, 2023", src:
                    "./music/freestyle loop mar 11.mp3"
            }, {
                name: "Random Freestyle Mar 11th, 2023", src:
                    "./music/Freestyle loop mar11 part 2.mp3"
            }, {
                name: "Random Freestyle Mar 12th, 2023",
                src: "./music/freestyle loop mar 12.mp3"
            }, {
                name: "Random Freestyle Apr 5th, 2023",
                src: "./music/freestyle april 5th.mp3"
            }, {
                name: "Poor Wayfaring Man of Grief", src:
                    "./music/Poor Wayfaring Man of Grief.mp3"
            }], o = r.slice();
        n.addEventListener("mouseenter", function n() {
            if (o.length > 0) {
                var l = Math.floor(Math.random() * o.length), s = o[l]; t.src = s.src, e.load(),
                    e.play(), a.innerHTML = s.name, console.log("Now playing: " + s.name), o.splice(l, 1)
            }
            else o = r.slice()
        }), n.addEventListener("mouseleave", function () {
            e.pause(),
                e.currentTime = 0
        })
    }), document.addEventListener("DOMContentLoaded", function () {
        var e = document.getElementById("audioPlayer"), t = document.getElementById("playButton");
        t.addEventListener("click", function () {
            e.paused ? (e.play(), t.textContent = "Pause") :
                (e.pause(), t.textContent = "Play MP3")
        })
    });

document.addEventListener("DOMContentLoaded", () => { let t = document.getElementById("board"), e = document.getElementById("result"), n = document.getElementById("resetBtn"), d = "X", l = ["", "", "", "", "", "", "", "", ""], r = !0; function i() { for (let t of [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]) { let [e, n, d] = t; if (l[e] && l[e] === l[n] && l[e] === l[d]) return l[e] } return null } function o() { return !l.includes("") } function c(t) { if (l[t] || !r) return; l[t] = d, a(); let n = i(); n ? (e.textContent = `${n} wins!`, r = !1) : o() ? (e.textContent = "It's a draw!", r = !1) : d = "X" === d ? "O" : "X" } function a() { t.innerHTML = "", l.forEach((e, n) => { let d = document.createElement("div"); d.classList.add("cell"), d.textContent = e, d.addEventListener("click", () => c(n)), t.appendChild(d) }) } function u() { d = "X", l = ["", "", "", "", "", "", "", "", ""], r = !0, e.textContent = "", a() } n.addEventListener("click", u), a() });