var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height,
    radius = 2.5,
    minDistance = 80,
    maxDistance = 100,
    minDistance2 = minDistance * minDistance,
    maxDistance2 = maxDistance * maxDistance;

var tau = 2 * Math.PI,
    n = 170,
    particles = new Array(n);

for (var i = 0; i < n; ++i) {
  particles[i] = {
    x: width * Math.random(),
    y0: height * Math.random(),
    v: 0.2 * (Math.random() - 0.1)
  };
}

d3.timer(function(elapsed) {
  context.clearRect(0, 0, width, height);

  for (var i = 0; i < n; ++i) {
    for (var j = i + 1; j < n; ++j) {
      var pi = particles[i],
          pj = particles[j],
          dx = pi.x - pj.x,
          dy = pi.y - pj.y,
          d2 = dx * dx + dy * dy;
      if (d2 < maxDistance2) {
        context.globalAlpha = d2 > minDistance2 ? (maxDistance2 - d2) / (maxDistance2 - minDistance2) : 1;
        context.beginPath();
        context.moveTo(pi.x, pi.y);
        context.lineTo(pj.x, pj.y);
        context.stroke();
      }
    }
  }

  context.globalAlpha = 1;

  for (var i = 0; i < n; ++i) {
    var p = particles[i];
    p.y = p.y0 + elapsed * p.v;
    if (p.y > height + maxDistance) p.x = width * Math.random(), p.y0 -= height + 2 * maxDistance;
    else if (p.y < -maxDistance) p.x = width * Math.random(), p.y0 += height + 2 * maxDistance;
    context.beginPath();
    context.arc(p.x, p.y, radius, 0, tau);
    context.fill();
  }
});
