"use client";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = {
    labels: ["Frontend", "Backend", "AI / ML", "Cloud / DevOps", "Mobile", "UI / UX"],
    datasets: [
        {
            label: "Expertise Level",
            data: [95, 90, 85, 80, 85, 90],
            backgroundColor: "rgba(37, 99, 235, 0.15)",
            borderColor: "rgba(37, 99, 235, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(37, 99, 235, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(37, 99, 235, 1)",
        },
    ],
};

const options = {
    scales: {
        r: {
            angleLines: {
                color: "rgba(255, 255, 255, 0.1)",
            },
            grid: {
                color: "rgba(255, 255, 255, 0.1)",
            },
            pointLabels: {
                color: "#9ca3af",
                font: {
                    size: 13,
                },
            },
            ticks: {
                display: false,
                backdropColor: "transparent",
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: "rgba(20, 20, 27, 0.95)",
            titleColor: "#e8e9ed",
            bodyColor: "#9ca3af",
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
        },
    },
    maintainAspectRatio: true,
};

export function Skills() {
    return (
        <SectionWrapper id="skills" className="section-divider">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Tech DNA</h2>
                        <p className="text-muted-foreground text-lg">
                            We don't just write code; we engineer solutions. Our expertise spans across the entire digital spectrum, ensuring your project is built on solid ground.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-primary mb-2">Modern Web</h3>
                            <p className="text-sm text-muted-foreground">Next.js, React, Tailwind, Framer Motion</p>
                        </GlassCard>
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-secondary mb-2">Artificial Intelligence</h3>
                            <p className="text-sm text-muted-foreground">OpenAI, LangChain, TensorFlow, Python</p>
                        </GlassCard>
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-accent mb-2">Cloud Infrastructure</h3>
                            <p className="text-sm text-muted-foreground">AWS, Vercel, Docker, Supabase</p>
                        </GlassCard>
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-secondary mb-2">Mobile Cross-Platform</h3>
                            <p className="text-sm text-muted-foreground">React Native, Expo, Flutter</p>
                        </GlassCard>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[400px] w-full flex items-center justify-center p-4"
                >
                    <div className="relative w-full max-w-md h-full">
                        <Radar data={data} options={options} />
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
