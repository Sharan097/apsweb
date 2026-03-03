
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Eye, EyeOff, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { signupSchema, type SignupFormValues } from "@/schemas/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AppleIcon, GoogleIcon, MetaIcon } from "@/components/icons/social-icons";

export function SignupPage({ onSuccess }: { onSuccess: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    setLoginError("");

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (
      data.firstName.toLowerCase() === "test" &&
      data.lastName.toLowerCase() === "example" &&
      data.email.toLowerCase() === "test@example.com" &&
      data.password === "password123"
    ) {
      onSuccess();
    } else {
      setLoginError("Invalid credentials. Please use the test credentials provided.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-gray-100 flex flex-col font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#004f4b] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#9a3412] rounded-full blur-[160px] translate-x-1/3 translate-y-1/3 opacity-50 pointer-events-none" />

      {/* Header */}
      <header className="p-8 pb-0 relative z-10 flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#00b2a9] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="font-semibold text-xl tracking-tight">aps</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 xl:p-24 gap-12 lg:gap-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-xl w-full"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10 tracking-tight text-white">
            Expert level Cybersecurity <br />
            in <span className="text-[#00b2a9]">hours</span> not weeks.
          </h1>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6 text-white">What's included</h3>
            <ul className="space-y-6">
              {[
                "Effortlessly spider and map targets to uncover hidden security flaws",
                "Deliver high-quality, validated findings in hours, not weeks.",
                "Generate professional, enterprise-grade security reports automatically.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-gray-600 bg-gray-800">
                    <Check className="w-3 h-3 text-[#00b2a9]" strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 leading-relaxed text-[15px]">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#00E676] fill-[#00E676]" />
              <span className="text-white font-semibold tracking-wide">Trustpilot</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-300">
                <span className="font-semibold text-white">Rated 4.5/5.0</span> (100k+ reviews)
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-md lg:max-w-[480px]"
        >
          <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign up</h2>
              <p className="text-gray-600 text-sm">
                Already have an account? <a href="#" className="text-[#00b2a9] font-medium hover:underline">Log in</a>
              </p>
            </div>

            {loginError && (
              <div className="mb-6 p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
                {loginError}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First name*</Label>
                  <Input 
                    id="firstName" 
                    placeholder="e.g. test" 
                    {...register("firstName")}
                    className={errors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last name*</Label>
                  <Input 
                    id="lastName" 
                    placeholder="e.g. example" 
                    {...register("lastName")} 
                    className={errors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email address*</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="e.g. test@example.com" 
                  {...register("email")}
                  className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-1.5 relative">
                <Label htmlFor="password">Password (8+ characters)*</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    {...register("password")}
                    className={cn("pr-10", errors.password ? "border-red-500 focus-visible:ring-red-500" : "")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
              </div>

              <div className="flex flex-row items-start space-x-3 space-y-0 pt-2 pb-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#00b2a9] focus:ring-[#00b2a9] accent-[#00b2a9] cursor-pointer"
                  {...register("terms")}
                />
                <div className="space-y-1 leading-tight">
                  <Label htmlFor="terms" className="text-xs text-gray-600 font-normal leading-relaxed cursor-pointer">
                    I agree to Aps's <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </Label>
                  {errors.terms && <p className="text-xs text-red-500 pt-1">{errors.terms.message}</p>}
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full text-base py-6 rounded-xl">
                {isSubmitting ? "Creating account..." : "Create account"}
              </Button>

              <div className="grid grid-cols-3 gap-3 pt-4">
                <Button type="button" variant="social" className="bg-black hover:bg-gray-900 text-white">
                  <AppleIcon />
                </Button>
                <Button type="button" variant="social" className="bg-white border border-gray-200 hover:bg-gray-50 shadow-sm">
                  <GoogleIcon />
                </Button>
                <Button type="button" variant="social" className="bg-[#1877F2] hover:bg-[#166fe5] text-white">
                  <MetaIcon />
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}