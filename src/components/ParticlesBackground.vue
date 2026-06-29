<template>
  <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script>
export default {
  name: "ParticleBackground",

  data() {
    return {
      particles: [],
      mouse: {
        x: null,
        y: null,
      },
      animationFrame: null,
      ctx: null,
      canvas: null,
    };
  },

  mounted() {

  console.log("test mounted")
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");

    this.resize();

    window.addEventListener("resize", this.resize);

    window.addEventListener("mousemove", this.onMouseMove);

    this.createParticles();

    this.animate();
  },

  beforeDestroy() {
    cancelAnimationFrame(this.animationFrame);

    window.removeEventListener("resize", this.resize);

    window.removeEventListener("mousemove", this.onMouseMove);
  },

  methods: {

    drawMouseLinks() {
      if (this.mouse.x == null) return;
      this.particles.forEach((p) => {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 160) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.mouse.x, this.mouse.y);
          this.ctx.lineTo(p.x, p.y);
          this.ctx.strokeStyle = "#00e5c8";
          this.ctx.globalAlpha = 0.35 * (1 - dist / 160);
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
          this.ctx.globalAlpha = 1;
        }
      });
    },

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    onMouseMove(e) {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    },

    randomColor() {
      const colors = [
        "#00e5c8",
        "#00bfa5",
        "#f5a623"
      ];

      return colors[Math.floor(Math.random() * colors.length)];
    },

    createParticles() {
      this.particles = [];

      const count = Math.floor(window.innerWidth / 18);

      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,

          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,

          radius: Math.random() * 2 + 1,

          color: this.randomColor(),
        });
      }
    },

    drawParticle(p) {
      this.ctx.beginPath();

      this.ctx.arc(
        p.x,
        p.y,
        p.radius,
        0,
        Math.PI * 2
      );

      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = 2;
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;

      const dist = Math.sqrt(dx * dx + dy * dy);

      const radius =
        dist < 120
          ? p.radius + (120 - dist) / 30
          : p.radius;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    },

    connectParticles() {
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {

          const a = this.particles[i];
          const b = this.particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {

            this.ctx.beginPath();

            this.ctx.moveTo(a.x, a.y);
            this.ctx.lineTo(b.x, b.y);

            this.ctx.strokeStyle = "#00e5c8";
            this.ctx.globalAlpha = 0.15 * (1 - dist / 140);

            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            this.ctx.globalAlpha = 1;
          }
        }
      }
    },

    mouseInteraction() {

      if (this.mouse.x == null) return;

      this.particles.forEach((p) => {

        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

         if (dist < 140) {
            const force = (140 - dist) / 140;

            p.x += dx * force * 0.01;
            p.y += dy * force * 0.01;
          }
      });

    },

    animate() {
      this.connectParticles();
      this.drawMouseLinks();

      this.ctx.clearRect(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      this.mouseInteraction();

      this.particles.forEach((p) => {

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > this.canvas.width)
          p.vx *= -1;

        if (p.y < 0 || p.y > this.canvas.height)
          p.vy *= -1;

        this.drawParticle(p);

      });

      this.connectParticles();

      this.animationFrame = requestAnimationFrame(() => this.animate());

    },
  },
};
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100vh;

  pointer-events: none;

  z-index: 0;
}
</style>