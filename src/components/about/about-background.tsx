"use client";

import { useEffect, useRef } from "react";

export function AboutBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const gridSize = 30;
        const paths: Path[] = [];
        const pathCount = 20;

        class Path {
            x: number;
            y: number;
            prevX: number;
            prevY: number;
            color: string;
            speed: number;
            direction: number; // 0: right, 1: down, 2: left, 3: up
            history: { x: number, y: number }[];
            maxLength: number;

            constructor() {
                this.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
                this.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
                this.prevX = this.x;
                this.prevY = this.y;
                this.color = Math.random() > 0.5 ? '#6366f1' : '#ffffff';
                this.speed = gridSize; // Move one cell per frame/update
                this.direction = Math.floor(Math.random() * 4);
                this.history = [];
                this.maxLength = Math.random() * 50 + 20;
            }

            update() {
                this.prevX = this.x;
                this.prevY = this.y;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > this.maxLength) {
                    this.history.shift();
                }

                // Randomly change direction
                if (Math.random() < 0.2) {
                    this.direction = Math.floor(Math.random() * 4);
                }

                switch (this.direction) {
                    case 0: this.x += this.speed; break;
                    case 1: this.y += this.speed; break;
                    case 2: this.x -= this.speed; break;
                    case 3: this.y -= this.speed; break;
                }

                // Wrap around
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                if (!ctx) return;

                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.lineCap = "round";
                // ctx.shadowBlur = 10;
                // ctx.shadowColor = this.color;

                if (this.history.length > 0) {
                    ctx.moveTo(this.history[0].x, this.history[0].y);
                    for (let i = 1; i < this.history.length; i++) {
                        ctx.lineTo(this.history[i].x, this.history[i].y);
                    }
                    ctx.lineTo(this.x, this.y);
                } else {
                    ctx.moveTo(this.prevX, this.prevY);
                    ctx.lineTo(this.x, this.y);
                }

                ctx.stroke();

                // Draw head
                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            paths.length = 0;
            for (let i = 0; i < pathCount; i++) {
                paths.push(new Path());
            }
        };

        // Slow down animation loop
        let frame = 0;
        const animate = () => {
            if (!ctx) return;
            frame++;

            if (frame % 5 === 0) { // Update every 5 frames for grid movement feel
                // Fade out background slightly for trails
                ctx.fillStyle = "rgba(10, 10, 15, 0.1)"; // Dark bg with transparency for trail fade
                ctx.fillRect(0, 0, width, height);

                paths.forEach(p => {
                    p.update();
                    p.draw();
                });
            }

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener("resize", handleResize);

        init();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] bg-[#0a0a0f] opacity-50"
        />
    );
}
