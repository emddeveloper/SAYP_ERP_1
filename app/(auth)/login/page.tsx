import Image from "next/image"
import Link from "next/link"
import { LoginForm } from "@/components/landing/login-form"
import { ParticlesBackground } from "@/components/landing/particles-background"
import { ShieldIcon, GlobeIcon } from "@/components/landing/icons"

const BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcCE2AjG_j7prXJZaUguy3Bpa9Ltrn5qLxJHR9w7ua3HFRdWFapSqYNQLW4Tdx-vPHumZmZJQsk6Am4JO8W272CWaVcpPRVQrXCEt6WyeHsd1TCD9BVzUkac_y60lRumMFLsTV7ddpcEfusEjw6uWYeqDBbupl-KjEujepin4mc3E6n_jngNj0pUAOaRR3yPPXIs00kh4BNdXLRQyFDY4Wogc5qgg_lEjRmp-m-kA1OFc7MQU9lA5eAOVSh1RhpIXyZjpr_mktfE0"

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcQXN1p4kOpPBVPJfyEyl6k46r9pWLbsF1jBj55JISwm7SUPrnMGhsrOHLYg1E8LUpxKjf9uQPzatwprPsLBMk7W6M23Xtv90oex1tSg37xVJx1MZXbdPAPr87LK-U-LeDz2Y3OJkOlnWI6WGgP__kzs0jMfAKra2bpPSqWXszHjn75Ev5DloDI41yUem5jv6ODr6iBXG5r1h7upO0LxjoTjrovUaWlKP5lrotaRzEmLGmfULVaJVcZE8pR83PjcjlfMJsVM1gg9I"

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center relative bg-surface overflow-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-surface">
        <div
          className="absolute inset-0 opacity-60 transition-transform duration-[20s] hover:scale-110"
          style={{
            backgroundImage: `url('${BG_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-surface/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(5,20,36,0.4)_60%,_#051424_100%)]" />
      </div>

      <ParticlesBackground />

      {/* Login Card */}
      <main className="relative z-10 w-full max-w-[480px] px-4 md:px-0">
        <div className="animate-login-card rounded-xl border border-outline-variant/20 bg-surface/70 p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl flex flex-col items-center">
          <div className="mb-12">
            <Image
              alt="SOLAR CRM Logo"
              src={LOGO_URL}
              width={120}
              height={64}
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-on-surface mb-2">
              Welcome Back
            </h1>
            <p className="text-base text-on-surface-variant">
              Access your solar enterprise intelligence
            </p>
          </div>

          <LoginForm />

          <div className="mt-12 text-center">
            <p className="text-base text-on-surface-variant">
              Don&apos;t have an account?{" "}
              <Link
                href="/"
                className="text-primary font-bold hover:underline transition-all"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-outline-variant/10 w-full flex justify-center items-center gap-6 text-on-surface-variant/40">
            <div className="flex items-center gap-2">
              <ShieldIcon />
              <span className="text-xs font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <GlobeIcon />
              <span className="text-xs font-medium">Global CDN</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
