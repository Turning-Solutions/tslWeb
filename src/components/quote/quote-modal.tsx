"use client";
import { useState, useEffect, useRef, ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X, Bot, Globe, Smartphone, Brain, ShoppingCart, BarChart2, Layers,
    CheckCircle2, Sparkles, HelpCircle, Zap, CalendarDays, Calendar, Clock,
    ArrowRight, Send, Check,
} from "lucide-react";
import { useQuote } from "./quote-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type ChoiceOption = { label: string; icon: ElementType; value: string };

type Step =
    | { id: string; question: string; type: "choices"; choices: ChoiceOption[] }
    | { id: string; question: string; type: "text"; placeholder: string }
    | { id: string; question: string; type: "contact" };

type ChatMsg = { id: string; from: "bot" | "user"; text: string };

// ─── Steps config ─────────────────────────────────────────────────────────────

const STEPS: Step[] = [
    {
        id: "solution_type",
        question: "What type of solution are you looking for?",
        type: "choices",
        choices: [
            { label: "Web App", icon: Globe, value: "Web Application" },
            { label: "Mobile App", icon: Smartphone, value: "Mobile Application" },
            { label: "AI & Automation", icon: Brain, value: "AI & Automation" },
            { label: "E-commerce", icon: ShoppingCart, value: "E-commerce Platform" },
            { label: "Dashboard", icon: BarChart2, value: "Analytics Dashboard" },
            { label: "Other", icon: Layers, value: "Other" },
        ],
    },
    {
        id: "problem",
        question: "Tell me a bit about what you want to build or the problem you're trying to solve.",
        type: "text",
        placeholder: "e.g. I want to build an online platform that helps restaurants manage their orders and customers...",
    },
    {
        id: "existing_systems",
        question: "Do you have any existing systems this needs to connect with or replace?",
        type: "choices",
        choices: [
            { label: "Yes, I have existing systems", icon: CheckCircle2, value: "Yes" },
            { label: "No, starting from scratch", icon: Sparkles, value: "No" },
            { label: "I'm not sure yet", icon: HelpCircle, value: "Not sure" },
        ],
    },
    {
        id: "timeline",
        question: "What's your ideal timeline for this project?",
        type: "choices",
        choices: [
            { label: "As soon as possible", icon: Zap, value: "ASAP" },
            { label: "1–3 months", icon: CalendarDays, value: "1–3 months" },
            { label: "3–6 months", icon: Calendar, value: "3–6 months" },
            { label: "No rush", icon: Clock, value: "No rush" },
        ],
    },
    {
        id: "contact",
        question: "Almost done! Just need a few details so we can reach you with a personalized quote.",
        type: "contact",
    },
];

const makeInitialMessages = (): ChatMsg[] => [
    {
        id: "greeting",
        from: "bot",
        text: "Hi there! 👋 I'm here to help you get a quote from Turing Solutions. This will only take a minute.",
    },
    { id: "step-0", from: "bot", text: STEPS[0].question },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BotAvatar() {
    return (
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-primary" />
        </div>
    );
}

function TypingDots() {
    return (
        <div className="flex items-end gap-2">
            <BotAvatar />
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="block w-1.5 h-1.5 rounded-full bg-muted-foreground"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Bubble({ msg }: { msg: ChatMsg }) {
    const isBot = msg.from === "bot";
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className={cn("flex items-end gap-2", !isBot && "flex-row-reverse")}
        >
            {isBot && <BotAvatar />}
            <div
                className={cn(
                    "max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                    isBot
                        ? "bg-white/5 border border-white/10 rounded-bl-sm text-foreground"
                        : "bg-primary rounded-br-sm text-white font-medium"
                )}
            >
                {msg.text}
            </div>
        </motion.div>
    );
}

function ChoiceGrid({ choices, onSelect }: { choices: ChoiceOption[]; onSelect: (value: string, label: string) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("grid gap-2", choices.length > 4 ? "grid-cols-2" : "grid-cols-1")}
        >
            {choices.map((c) => (
                <button
                    key={c.value}
                    onClick={() => onSelect(c.value, c.label)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/40 transition-all text-left group"
                >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <c.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{c.label}</span>
                </button>
            ))}
        </motion.div>
    );
}

function TextArea({ placeholder, onContinue }: { placeholder: string; onContinue: (val: string) => void }) {
    const [val, setVal] = useState("");
    return (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <textarea
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder={placeholder}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
            />
            <Button
                onClick={() => val.trim() && onContinue(val.trim())}
                disabled={!val.trim()}
                className="w-full gap-2"
            >
                Continue <ArrowRight className="w-4 h-4" />
            </Button>
        </motion.div>
    );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s\-().]{7,15}$/;

function FieldError({ msg }: { msg: string }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-400 pl-1 -mt-1"
        >
            {msg}
        </motion.p>
    );
}

function ContactForm({
    onSubmit,
    submitting,
}: {
    onSubmit: (data: { name: string; email: string; phone: string }) => void;
    submitting: boolean;
}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [touched, setTouched] = useState({ name: false, email: false, phone: false });

    const errors = {
        name: touched.name && name.trim().length === 0 ? "Name is required" : "",
        email: touched.email && !EMAIL_RE.test(email.trim()) ? "Enter a valid email address" : "",
        phone: touched.phone && phone.trim().length > 0 && !PHONE_RE.test(phone.trim())
            ? "Enter a valid phone number"
            : "",
    };

    const valid =
        name.trim().length > 0 &&
        EMAIL_RE.test(email.trim()) &&
        (phone.trim().length === 0 || PHONE_RE.test(phone.trim()));

    const blur = (field: keyof typeof touched) =>
        setTouched((prev) => ({ ...prev, [field]: true }));

    const baseCls =
        "w-full bg-white/5 border rounded-xl h-11 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 outline-none transition-all";
    const fieldCls = (err: string) =>
        cn(baseCls, err ? "border-red-500/60 focus:ring-red-500/30" : "border-white/10 focus:ring-primary/50");

    const handleSubmit = () => {
        setTouched({ name: true, email: true, phone: true });
        if (valid) onSubmit({ name: name.trim(), email: email.trim(), phone: phone.trim() });
    };

    return (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="space-y-1">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => blur("name")}
                    placeholder="Your name *"
                    className={fieldCls(errors.name)}
                />
                {errors.name && <FieldError msg={errors.name} />}
            </div>

            <div className="space-y-1">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => blur("email")}
                    placeholder="Email address *"
                    className={fieldCls(errors.email)}
                />
                {errors.email && <FieldError msg={errors.email} />}
            </div>

            <div className="space-y-1">
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => blur("phone")}
                    placeholder="Phone number (optional)"
                    className={fieldCls(errors.phone)}
                />
                {errors.phone && <FieldError msg={errors.phone} />}
            </div>

            <Button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full gap-2"
            >
                {submitting ? (
                    "Sending your request…"
                ) : (
                    <>
                        <Send className="w-4 h-4" /> Send My Request
                    </>
                )}
            </Button>
            <p className="text-xs text-muted-foreground text-center">We&apos;ll get back to you within 24 hours.</p>
        </motion.div>
    );
}

function SuccessScreen({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center px-8 py-12 gap-6"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
                className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center"
            >
                <Check className="w-10 h-10 text-green-400" />
            </motion.div>
            <div className="space-y-2">
                <h3 className="text-2xl font-bold">We got your request!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    Our team will review your project details and reach out with a personalized quote within 24 hours.
                </p>
            </div>
            <Button onClick={onClose} variant="outline" className="mt-2">
                Close
            </Button>
        </motion.div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function QuoteModal() {
    const { isOpen, closeQuote } = useQuote();

    const [messages, setMessages] = useState<ChatMsg[]>(makeInitialMessages);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [typing, setTyping] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setMessages(makeInitialMessages());
            setStep(0);
            setAnswers({});
            setTyping(false);
            setAnswered(false);
            setSubmitting(false);
            setSubmitted(false);
        }
    }, [isOpen]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    const addMsg = (from: "bot" | "user", text: string) => {
        setMessages((prev) => [
            ...prev,
            { id: `${Date.now()}-${Math.random()}`, from, text },
        ]);
    };

    const handleAnswer = (answer: string, display?: string) => {
        if (answered || typing) return;
        const currentStep = STEPS[step];
        setAnswers((prev) => ({ ...prev, [currentStep.id]: answer }));
        setAnswered(true);
        addMsg("user", display ?? answer);

        const next = step + 1;
        if (next < STEPS.length) {
            setTyping(true);
            setTimeout(() => {
                setTyping(false);
                addMsg("bot", STEPS[next].question);
                setStep(next);
                setAnswered(false);
            }, 950);
        }
    };

    const handleContactSubmit = async (data: { name: string; email: string; phone: string }) => {
        setSubmitting(true);
        addMsg("user", `${data.name} · ${data.email}${data.phone ? ` · ${data.phone}` : ""}`);

        try {
            const svcId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const tplId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const pubKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (svcId && tplId && pubKey) {
                const emailjs = (await import("@emailjs/browser")).default;

                const params = {
                    solution_type: answers.solution_type ?? "—",
                    problem: answers.problem ?? "—",
                    existing_systems: answers.existing_systems ?? "—",
                    timeline: answers.timeline ?? "—",
                    from_name: data.name,
                    from_email: data.email,
                    email: data.email,
                    phone: data.phone || "Not provided",
                };

                await emailjs.send(svcId, tplId, params, { publicKey: pubKey });
            }
        } catch (err: unknown) {
            const detail = err && typeof err === "object"
                ? JSON.stringify(err)
                : String(err);
            console.error("[QuoteModal] EmailJS error:", detail);
        }

        setSubmitting(false);
        setSubmitted(true);
    };

    const currentStepData = STEPS[step];
    const progress = submitted ? 100 : ((step + 0.5) / STEPS.length) * 100;
    const showInput = !typing && !answered && !submitted;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        onClick={closeQuote}
                    />

                    {/* Panel */}
                    <motion.div
                        key="panel"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 220 }}
                        className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] z-[70] flex flex-col"
                    >
                        <div className="flex flex-col h-full bg-[#0d0d14] border-l border-white/10 shadow-2xl">
                            {/* Header */}
                            <div className="flex-shrink-0 px-6 pt-5 pb-4 border-b border-white/10 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-base font-bold tracking-tight">Get a Quote</h2>
                                        {!submitted && (
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                Step {step + 1} of {STEPS.length}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={closeQuote}
                                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                {!submitted && (
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-primary rounded-full"
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Body */}
                            {submitted ? (
                                <SuccessScreen onClose={closeQuote} />
                            ) : (
                                <>
                                    {/* Chat log */}
                                    <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 min-h-0">
                                        {messages.map((m) => (
                                            <Bubble key={m.id} msg={m} />
                                        ))}
                                        {typing && <TypingDots />}
                                        <div ref={endRef} />
                                    </div>

                                    {/* Input area */}
                                    {showInput && (
                                        <div className="flex-shrink-0 px-6 pb-6 pt-4 border-t border-white/10">
                                            {currentStepData.type === "choices" && (
                                                <ChoiceGrid
                                                    choices={currentStepData.choices}
                                                    onSelect={(val, label) => handleAnswer(val, label)}
                                                />
                                            )}
                                            {currentStepData.type === "text" && (
                                                <TextArea
                                                    placeholder={currentStepData.placeholder}
                                                    onContinue={(val) => handleAnswer(val)}
                                                />
                                            )}
                                            {currentStepData.type === "contact" && (
                                                <ContactForm
                                                    onSubmit={handleContactSubmit}
                                                    submitting={submitting}
                                                />
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
