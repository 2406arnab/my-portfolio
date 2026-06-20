import React, { useState } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import emailjs from "@emailjs/browser";
import { easeInOut, motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";

import {
    Mail,
    Sparkles,
    Send,
    ArrowRight,
    Briefcase,
    MessageSquare
} from "lucide-react";

import contact from "../assets/contact.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLTE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

// Strict email regex: requires valid local part, @, domain, dot, and 2-6 char TLD
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,6}$/;

const fieldStyles = (error) => ({
    "& .MuiOutlinedInput-root": {
        minHeight: "56px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        "& fieldset": {
            borderColor: error ? "#ff4d6d" : "rgba(255,255,255,0.1)",
            transition: "all 0.3s ease",
        },
        "&:hover fieldset": {
            borderColor: "#1cd8d2",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#1cd8d2",
            boxShadow: "0 0 14px rgba(255, 77, 157, 0.35)",
        },
    },
    "& .MuiInputLabel-root": {
        color: "#1cd8d2",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#1cd8d2",
    },
    "& input, & textarea": {
        color: "white",
    },
    "& .MuiFormHelperText-root": {
        marginLeft: "4px"
    }
});

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: ""
    })

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "budget" && value && !/^\d+$/.test(value)) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const validateForm = () => {
        const newErrors = {};

        // Name
        if (!formData.name.trim())
            newErrors.name = "Please fill the details in this field";

        // Email — strict validation
        if (!formData.email.trim()) {
            newErrors.email = "Please fill the details in this field";
        } else if (!EMAIL_REGEX.test(formData.email.trim())) {
            newErrors.email = "Enter a valid email address (e.g. name@example.com)";
        }

        // Service
        if (!formData.service.trim())
            newErrors.service = "Please fill the details in this field";

        // Budget (only when service is not Others)
        if (formData.service && formData.service !== "Others" && !formData.budget.trim())
            newErrors.budget = "Please fill the details in this field";

        // Idea
        if (!formData.idea.trim())
            newErrors.idea = "Please fill the details in this field";

        setErrors(newErrors);
        return !Object.keys(newErrors).length;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setStatus("sending");
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLTE_ID,
                { ...formData, from_name: formData.name, reply_to: formData.email },
                PUBLIC_KEY
            );
            setStatus("success");
            setFormData({ name: "", email: "", service: "", budget: "", idea: "" });
            setTimeout(() => setStatus(""), 5000);
        } catch (error) {
            console.error("Emailjs error", error);
            setStatus("error");
            setTimeout(() => setStatus(""), 5000);
        }
    }

    const fields = [
        { name: "name", label: "Name *", type: "text" },
        { name: "email", label: "Email *", type: "email" },
        {
            name: "service", label: "Service Needed *", type: "select",
            options: [
                { value: "", label: "Something in mind?", disabled: true },
                { value: "Web Development", label: "Web Development" },
                { value: "Mobile Application", label: "Mobile Application" },
                { value: "Others", label: "Others" },
            ],
        },
        {
            name: "budget", label: "Budget (in $) *", type: "text",
            condition: (formData) => formData.service && formData.service !== "Others",
        },
        { name: "idea", label: "Project Idea *", type: "textarea", rows: 5 },
    ];

    const renderField = (field) => {
        if (field.condition && !field.condition(formData)) return null;

        if (field.type === "text" || field.type === "email" || field.type === "textarea") {
            return (
                <TextField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type === "textarea" ? "text" : field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    fullWidth
                    multiline={field.type === "textarea"}
                    rows={field.rows || 1}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]}
                    sx={{
                        ...fieldStyles(errors[field.name]),
                        ...(field.type === "textarea" && {
                            "& .MuiOutlinedInput-root": {
                                ...fieldStyles(errors[field.name])["& .MuiOutlinedInput-root"],
                                minHeight: "130px",
                                alignItems: "flex-start",
                            },
                        }),
                    }}
                />
            );
        }

        if (field.type === "select") {
            return (
                <FormControl key={field.name} fullWidth error={!!errors[field.name]} sx={fieldStyles(errors[field.name])}>
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        sx={{ color: "white", ".MuiSelect-icon": { color: "white" } }}
                    >
                        {field.options.map((opt) => (
                            <MenuItem key={opt.value} value={opt.value} disabled={opt.disabled}>
                                {opt.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        }

        return null;
    };

    return (
        <section
            id="contacts"
            className='relative w-full min-h-screen bg-black overflow-hidden text-white py-16 px-5 md:px-16 flex items-center justify-center'
        >
            <ParticlesBackground />

            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-20 left-0 w-[300px] h-[300px] bg-[#ff4d9d]/10 blur-[140px] rounded-full'></div>
                <div className='absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#1cd8d2]/10 blur-[140px] rounded-full'></div>
            </div>

            <div className='relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className='relative flex flex-col items-center md:items-start text-center md:text-left'
                >
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1cd8d2]/20 bg-[#1cd8d2]/10 text-[#1cd8d2] text-sm font-medium mb-5'>
                        <Sparkles size={16} />
                        Let's Build Something Amazing
                    </div>

                    <h2 className='text-4xl sm:text-5xl font-extrabold leading-tight'>
                        Have a Project
                        <span className='block bg-gradient-to-r from-[#1cd8d2] via-[#fff] to-[#1cd8d2] bg-clip-text text-transparent'>
                            In Mind?
                        </span>
                    </h2>

                    <p className='mt-5 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl'>
                        I help brands, startups and businesses create modern digital experiences with
                        scalable architecture, smooth performance and beautiful user interfaces.
                    </p>

                    <div className='mt-8 flex flex-col gap-4 w-full max-w-md'>
                        <div className='flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl'>
                            <div className='w-12 h-12 rounded-xl bg-[#1cd8d2]/10 flex items-center justify-center text-[#1cd8d2]'>
                                <Briefcase size={22} />
                            </div>
                            <div>
                                <h4 className='font-semibold'>Professional Solutions</h4>
                                <p className='text-sm text-gray-400'>Modern scalable applications</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl'>
                            <div className='w-12 h-12 rounded-xl bg-[#1cd8d2]/10 flex items-center justify-center text-[#1cd8d2]'>
                                <MessageSquare size={22} />
                            </div>
                            <div>
                                <h4 className='font-semibold'>Fast Communication</h4>
                                <p className='text-sm text-gray-400'>Quick response and smooth workflow</p>
                            </div>
                        </div>
                    </div>

                    <motion.img
                        src={contact}
                        alt='Contact'
                        className='mt-10 w-[280px] sm:w-[380px] md:w-[450px] drop-shadow-[0_0_40px_rgba(255,77,157,0.2)]'
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
                    />
                </motion.div>

                {/* RIGHT SIDE FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className='relative'
                >
                    <div className='absolute inset-0 bg-gradient-to-br from-[#ff4d9d]/10 to-[#1cd8d2]/10 blur-3xl rounded-[40px]'></div>

                    <div className='relative backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.3)]'>

                        <div className='mb-8'>
                            <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1cd8d2] to-[#1cd8d2] flex items-center justify-center mb-4'>
                                <Mail size={26} />
                            </div>
                            <h3 className='text-3xl font-bold'>Contact Me</h3>
                            <p className='text-[#1cd8d2] mt-2'>Fill the form and let's discuss your next project.</p>
                        </div>

                        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

                            {fields.map((field) => renderField(field))}

                            {/* STATUS FLIP CARD */}
                            <div style={{ perspective: '800px', height: status ? '72px' : '0px', overflow: 'hidden', transition: 'height 0.4s cubic-bezier(0.22,1,0.36,1)', marginBottom: status ? '0' : '-20px' }}>
                                <motion.div
                                    animate={{ rotateY: status ? 180 : 0 }}
                                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                    style={{ width: '100%', height: '72px', position: 'relative', transformStyle: 'preserve-3d' }}
                                >
                                    {/* FRONT: idle placeholder */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        backfaceVisibility: 'hidden',
                                        borderRadius: '14px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        display: 'flex', alignItems: 'center', gap: '12px',
                                        padding: '0 16px',
                                    }}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Send size={13} color="rgba(255,255,255,0.3)" />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>Send message</div>
                                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', marginTop: '2px' }}>Fill the form and submit</div>
                                        </div>
                                    </div>

                                    {/* BACK: sending / success / error */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                        borderRadius: '14px',
                                        overflow: 'hidden',
                                        background: status === 'success'
                                            ? 'rgba(74,222,128,0.08)'
                                            : status === 'error'
                                                ? 'rgba(248,113,113,0.08)'
                                                : 'rgba(250,204,21,0.07)',
                                        border: `1px solid ${status === 'success'
                                            ? 'rgba(74,222,128,0.25)'
                                            : status === 'error'
                                                ? 'rgba(248,113,113,0.25)'
                                                : 'rgba(250,204,21,0.25)'}`,
                                        display: 'flex', alignItems: 'center', gap: '12px',
                                        padding: '0 16px',
                                        transition: 'background 0.3s, border 0.3s',
                                    }}>
                                        {/* Icon box */}
                                        <motion.div
                                            key={status}
                                            initial={{ scale: 0.6, rotate: -20 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.35, type: 'spring', stiffness: 280, damping: 18 }}
                                            style={{
                                                width: '34px', height: '34px', borderRadius: '10px', flexShrink: 0,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                background: status === 'success'
                                                    ? 'rgba(74,222,128,0.15)'
                                                    : status === 'error'
                                                        ? 'rgba(248,113,113,0.15)'
                                                        : 'rgba(250,204,21,0.12)',
                                            }}
                                        >
                                            {status === 'success' && (
                                                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
                                                    <motion.polyline points="20 6 9 17 4 12" />
                                                </motion.svg>
                                            )}
                                            {status === 'error' && (
                                                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round"
                                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.45, type: 'spring', stiffness: 300 }}>
                                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                                </motion.svg>
                                            )}
                                            {status === 'sending' && (
                                                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round"
                                                    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}>
                                                    <path d="M12 2a10 10 0 0 1 10 10" />
                                                </motion.svg>
                                            )}
                                        </motion.div>

                                        {/* Text + progress bar */}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <motion.div
                                                key={status + '-title'}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4, duration: 0.3 }}
                                                style={{
                                                    fontSize: '13px', fontWeight: 700, lineHeight: 1.3,
                                                    color: status === 'success' ? '#4ade80' : status === 'error' ? '#f87171' : '#facc15',
                                                }}
                                            >
                                                {status === 'sending' ? 'Sending your message…' : status === 'success' ? 'Email sent!' : 'Something went wrong'}
                                            </motion.div>
                                            <motion.div
                                                key={status + '-sub'}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5, duration: 0.3 }}
                                                style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}
                                            >
                                                {status === 'sending' ? 'Please wait a moment' : status === 'success' ? "I'll get back to you soon" : 'Please try again later'}
                                            </motion.div>

                                            {/* Progress bar for sending */}
                                            {status === 'sending' && (
                                                <div style={{ height: '2px', borderRadius: '2px', background: 'rgba(255,255,255,0.08)', marginTop: '6px', overflow: 'hidden' }}>
                                                    <motion.div
                                                        style={{ height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, #facc15, #1cd8d2)' }}
                                                        initial={{ width: '0%' }}
                                                        animate={{ width: '90%' }}
                                                        transition={{ delay: 0.6, duration: 2.5, ease: 'easeInOut' }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* BUTTON */}
                            <motion.button
                                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                                whileTap={{ scale: status === 'sending' ? 1 : 0.97 }}
                                disabled={status === 'sending'}
                                type="submit"
                                style={{
                                    marginTop: '8px', width: '100%',
                                    padding: '15px 24px', borderRadius: '14px',
                                    fontWeight: 700, fontSize: '15px',
                                    color: status === 'sending' ? 'rgba(255,255,255,0.5)' : '#000',
                                    background: status === 'sending'
                                        ? 'rgba(255,255,255,0.08)'
                                        : 'linear-gradient(135deg, #1cd8d2 0%, #00bf8f 100%)',
                                    border: status === 'sending' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                    boxShadow: status === 'sending' ? 'none' : '0 4px 20px rgba(28,216,210,0.35)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                    transition: 'background 0.3s, box-shadow 0.3s, color 0.3s',
                                    position: 'relative', overflow: 'hidden',
                                }}
                            >
                                {status !== 'sending' && (
                                    <div style={{ position: 'absolute', top: 0, left: '-60%', width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)', transform: 'skewX(-20deg)', pointerEvents: 'none' }} />
                                )}

                                <AnimatePresence mode="wait">
                                    {status === 'sending' ? (
                                        <motion.span key="sending" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                                            <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}>
                                                <path d="M12 2a10 10 0 0 1 10 10" />
                                            </motion.svg>
                                            Sending…
                                        </motion.span>
                                    ) : (
                                        <motion.span key="idle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                                            Send Message
                                            <ArrowRight size={16} />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact