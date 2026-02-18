"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
    email: string;
}

export function WaitlistForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        // Simulate API call
        console.log("Submitting email:", data.email);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <div className="w-full max-w-sm">
            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center space-y-2 rounded-2xl border border-mint/20 bg-mint/10 p-6 text-center text-mint backdrop-blur-sm"
                    >
                        <CheckCircle2 className="h-8 w-8" />
                        <p className="font-semibold">You&apos;re on the list!</p>
                        <p className="text-sm text-mint/80">
                            We&apos;ll be in touch soon with your invite.
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="relative flex flex-col gap-2"
                    >
                        <div className="relative">
                            <Input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                placeholder="Enter your email"
                                className="h-12 border-white/10 bg-white/5 pl-4 pr-32 backdrop-blur-md focus:border-electric/50 focus:ring-electric/50"
                            />
                            <Button
                                type="submit"
                                disabled={isLoading}
                                isLoading={isLoading}
                                className="absolute right-1 top-1 h-10 rounded-full px-4"
                            >
                                Join Waitlist
                                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                            </Button>
                        </div>
                        {errors.email && (
                            <p className="ml-4 text-xs text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
