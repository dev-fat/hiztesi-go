if (process.browser) {
  window.confettiKit = function(t) {
      var e = this;
      e.version = "1.1.0", e.config = {
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
          el: "body",
          elements: {
              confetti: {
                  direction: "down",
                  rotation: !0
              },
              star: {
                  count: 15,
                  direction: "up",
                  rotation: !0
              },
              ribbon: {
                  count: 10,
                  direction: "down",
                  rotation: !0
              }
          },
          confettiCount: 75,
          x: 0,
          y: 0,
          angle: 90,
          decay: .9,
          spread: 45,
          startVelocity: 45,
          position: null
      };
      for (var n in t) e.config[n] = t[n];
      var o = e.config;
      e.renderStar = function(t, e) {
          return '<div style="width:' + t + "px;fill:" + e + '"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 75 75" ><title>star</title><polygon points="37.5 18.411 56.342 8.505 52.743 29.486 67.987 44.345 46.921 47.406 37.5 66.495 28.079 47.406 7.013 44.345 22.257 29.486 18.658 8.505 37.5 18.411" /></svg></div>'
      }, e.renderRibbon = function(t, e) {
          return '<div style="width:' + t + "px;stroke:" + e + '"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 75 75" ><path d="m24.453125,3.774663c0.193689,-0.193689 0.743394,-0.671232 1.743199,-0.968444c0.94668,-0.28142 2.333125,-0.396423 4.648531,-0.193689c3.330842,0.291645 6.861105,1.826145 7.941241,2.711643c1.270993,1.041963 2.540047,2.890054 3.873776,4.84222c1.575816,2.306511 2.817321,4.217926 3.486399,6.004353c0.924008,2.467092 1.294523,4.846337 1.162133,6.972797c-0.097034,1.558552 -0.857702,3.568397 -1.743199,4.648531c-1.041962,1.270991 -2.406342,2.560381 -4.261154,3.29271c-2.228395,0.87983 -4.466154,0.810093 -6.779108,0.581066c-1.965634,-0.194637 -3.568395,-0.857702 -4.648531,-1.743199c-0.211833,-0.17366 -0.533673,-0.606635 -0.968444,-1.355822c-0.350522,-0.604015 -0.818174,-1.325931 -0.774755,-1.936888c0.030701,-0.432012 0.413426,-1.271858 0.968444,-1.936888c0.620528,-0.743524 1.284527,-0.912889 1.936888,-1.162133c1.279386,-0.488809 3.691399,-0.422715 6.004353,-0.193689c1.965634,0.194637 3.31667,0.736573 4.261154,1.355822c1.393387,0.91357 2.991613,1.63628 4.454843,2.905332c1.03466,0.897355 2.019835,2.599953 2.905332,3.680087c0.694641,0.847327 1.193205,1.542398 1.355822,2.324266c0.239907,1.153479 0.535004,2.743879 0,6.58542c-0.356447,2.55943 -1.282205,4.880811 -2.324266,6.779108c-1.086946,1.980061 -2.178706,3.113269 -3.486399,3.873776c-1.43055,0.831959 -3.243129,1.2571 -5.810664,1.54951c-2.886673,0.328756 -6.579154,-0.410019 -7.941241,-0.774755c-0.771421,-0.20657 -1.049573,-0.27482 -1.355822,-0.581066c-0.612498,-0.612498 -0.774755,-1.54951 -0.774755,-2.517955c0,-0.774755 -0.059414,-1.775875 0.387378,-2.517955c0.859423,-1.427419 2.413861,-2.195096 4.067465,-2.711643c1.307291,-0.408368 2.573952,-0.18426 3.486399,0.193689c1.29039,0.534498 3.294961,1.907296 4.648531,3.29271c1.164388,1.191782 1.717201,2.44142 2.711643,4.84222c0.703176,1.697624 1.065142,3.478355 1.162133,5.229598c0.10711,1.933923 0.089293,3.896049 -0.387378,5.616976c-0.326992,1.180547 -0.698642,2.16461 -1.162133,3.099021c-0.50186,1.011759 -1.936888,2.905332 -3.29271,4.261154c-1.162133,1.162133 -2.324266,1.54951 -3.29271,1.936888l-0.581066,0.193689" id="svg_6" stroke-width="4" fill="none"/></svg></div>'
      }, e.customRender = function(t, e, n, o, i) {
          return "text" == e ? '<p style="color:' + n + ";font-size:" + i + 'px">' + t + "</p>" : "svg" == e ? '<div style="width:' + o + "px;fill:" + n + '">' + t + "</div>" : "image" == e ? '<img style="width:' + o + 'px;" src="' + t + '"/>' : void 0
      }, e.createElements = function(t, n) {
          var i = o.elements.star ? o.elements.star.count : 0,
              s = o.elements.ribbon ? o.elements.ribbon.count : 0,
              c = [];
          if (o.elements.custom && o.elements.custom.length > -1) {
              console.log(o.elements.custom.length);
              for (var r = 0; r <= o.elements.custom.length; r++) o.elements.custom[r] && c.push({
                  count: o.elements.custom[r].count
              })
          }
          for (var l = 0, a = [], d = 0; d <= n; d++) {
              var m = document.createElement("div");
              m.classList = ["fetti"];
              var u = o.colors[d % o.colors.length],
                  h = Math.floor(10 * Math.random() + 1) + "px",
                  f = Math.floor(10 * Math.random() + 1) + "px";
              if (m.style.width = h, m.style.height = f, m.style.position = "fixed", m.style.zIndex = "999999", o.elements.star && i > 0) {
                  var y = i - 1;
                  y <= o.elements.star.count && y >= 0 && (m.style["background-color"] = "", m.innerHTML = e.renderStar(25, u), m.direction = o.elements.star.direction, m.rotation = o.elements.star.rotation, i = y)
              } else if (o.elements.ribbon && s > 0) {
                  var p = s - 1;
                  p <= o.elements.ribbon.count && p >= 0 && (m.style["background-color"] = "", m.innerHTML = e.renderRibbon(30, u), m.direction = o.elements.ribbon.direction, m.rotation = o.elements.ribbon.rotation, s = p)
              } else if (o.elements.custom && o.elements.custom.length > -1 && c[l]) {
                  if (c[l]) {
                      var g = c[l].count - 1;
                      if (g <= c[l].count && g <= c[l].count && g >= 0) {
                          m.style["background-color"] = "";
                          var v = o.elements.custom[l].contentType,
                              w = o.elements.custom[l].content,
                              b = o.elements.custom[l].width,
                              x = o.elements.custom[l].textSize;
                          m.innerHTML = e.customRender(w, v, u, b, x), m.direction = o.elements.custom[l].direction, m.rotation = o.elements.custom[l].rotation, c[l].count = g, 0 == c[l].count && l++
                      }
                  }
              } else h == f ? (m.style["background-color"] = u, m.style.borderRadius = "50%") : m.style["background-color"] = u, m.direction = o.elements.confetti && o.elements.confetti.direction ? o.elements.confetti.direction : "down", m.rotation = !o.elements.confetti || !o.elements.confetti.rotation || o.elements.confetti.rotation;
              t.insertBefore(m, t.firstChild), a.push(m)
          }
          return a
      }, e.randomPhysics = function(t, e, n, o, i) {
          var s = n * (Math.PI / 180),
              c = o * (Math.PI / 180);
          return {
              x: t,
              y: e,
              wobble: 10 * Math.random(),
              velocity: .2 * i + Math.random() * i,
              angle2D: -s + (.3 * c - Math.random() * c),
              angle3D: -Math.PI / 4 + Math.random() * (Math.PI / 2),
              tiltAngle: Math.random() * Math.PI
          }
      }, e.updateFetti = function(t, e, n) {
          t.physics.x += Math.cos(t.physics.angle2D) * t.physics.velocity, t.physics.y += Math.sin(t.physics.angle2D) * t.physics.velocity, t.physics.z += Math.sin(t.physics.angle3D) * t.physics.velocity, t.physics.wobble, t.physics.velocity *= n, "up" == t.element.direction ? t.physics.y : t.physics.y, t.physics.tiltAngle += .1;
          var o, i = t.physics.x,
              s = t.physics.y,
              c = t.physics.tiltAngle,
              r = t.physics.wobble,
              l = i + 10 * Math.cos(r),
              a = s + 10 * Math.sin(r);
          o = t.element.rotation ? "translate3d(" + l + "px, " + a + "px, 0) rotate3d(1, 1, 1, " + c + "rad)" : "translate3d(" + l + "px, " + a + "px, 0)", t.element.style.transform = o, t.element.style.opacity = 1 - e
      }, e.animate = function(t, n, o) {
          var i = 55,
              s = 0;
          requestAnimationFrame(function c() {
              n.forEach(function(t) {
                  e.updateFetti(t, s / i, o)
              }), (s += 1) < i ? requestAnimationFrame(c) : n.forEach(function(e) {
                  t.removeChild(e.element)
              })
          })
      }, e.confetti = function(t, n, i) {
          angle = o.angle, decay = o.decay, spread = o.spread, startVelocity = o.startVelocity, elementCount = o.confettiCount;
          var s = [];
          e.createElements(t, elementCount).map(function(t) {
              var o = {
                  element: t,
                  physics: e.randomPhysics(n, i, angle, spread, startVelocity)
              };
              s.push(o)
          }), e.animate(t, s, decay)
      };
      var i = document.querySelector(o.el);
      if (null != o.position) {
          if ("bottomLeftRight" == o.position) o.angle = 45, e.confetti(i, 0, window.innerHeight - 200), (s = t).position = null, s.angle = 135, s.x = window.innerWidth, s.y = window.innerHeight - 200, new confettiKit(s);
          else if ("topLeftRight" == o.position) {
              var s;
              o.angle = 340, e.confetti(i, 0, 0), (s = t).position = null, s.angle = 190, s.x = window.innerWidth, s.y = 0, new confettiKit(s)
          }
      } else e.confetti(i, o.x, o.y)
  };
}