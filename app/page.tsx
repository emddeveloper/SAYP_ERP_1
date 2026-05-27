import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { SignupForm } from "@/components/landing/signup-form"
import { ValueProps } from "@/components/landing/value-props"

const HERO_BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcCE2AjG_j7prXJZaUguy3Bpa9Ltrn5qLxJHR9w7ua3HFRdWFapSqYNQLW4Tdx-vPHumZmZJQsk6Am4JO8W272CWaVcpPRVQrXCEt6WyeHsd1TCD9BVzUkac_y60lRumMFLsTV7ddpcEfusEjw6uWYeqDBbupl-KjEujepin4mc3E6n_jngNj0pUAOaRR3yPPXIs00kh4BNdXLRQyFDY4Wogc5qgg_lEjRmp-m-kA1OFc7MQU9lA5eAOVSh1RhpIXyZjpr_mktfE0"

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcQXN1p4kOpPBVPJfyEyl6k46r9pWLbsF1jBj55JISwm7SUPrnMGhsrOHLYg1E8LUpxKjf9uQPzatwprPsLBMk7W6M23Xtv90oex1tSg37xVJx1MZXbdPAPr87LK-U-LeDz2Y3OJkOlnWI6WGgP__kzs0jMfAKra2bpPSqWXszHjn75Ev5DloDI41yUem5jv6ODr6iBXG5r1h7upO0LxjoTjrovUaWlKP5lrotaRzEmLGmfULVaJVcZE8pR83PjcjlfMJsVM1gg9I"

export default function LandingPage() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-surface">
      <Navbar />
      <main
        className="relative min-h-0 flex-1 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 20, 36, 0.9) 0%, rgba(5, 20, 36, 0.2) 100%), url('${HERO_BG_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/2 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center px-3 py-3 sm:px-4 md:flex-row md:px-12 md:py-6">
          <div className="w-full max-w-md md:w-5/12 md:max-w-none lg:w-4/12">
            <div className="animate-landing-card space-y-4 rounded-xl border border-outline-variant/20 bg-surface/70 p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-5 md:space-y-8 md:p-10">
              <div className="space-y-2 md:space-y-4">
                <Image
                  alt="SOLAR CRM Logo"
                  src={LOGO_URL}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h1 className="text-xl font-semibold text-on-surface sm:text-2xl md:text-3xl">
                    Join Solar CRM
                  </h1>
                  <p className="mt-1 text-sm text-on-surface-variant md:mt-2 md:text-base">
                    Empower your energy sales pipeline with radiating
                    intelligence.
                  </p>
                </div>
              </div>

              <SignupForm />

              <div className="space-y-3 md:space-y-6">
                <p className="text-center text-sm text-on-surface-variant md:text-base">
                  Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-bold text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all"
                    >
                    Log In
                  </a>
                </p>
                <p className="hidden px-2 text-center text-[11px] leading-relaxed text-outline-variant sm:block md:px-4 md:text-xs">
                  By signing up, you agree to our{" "}
                  <a
                    href="#"
                    className="underline hover:text-on-surface transition-colors"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="underline hover:text-on-surface transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <ValueProps />
        </div>
      </main>
      <Footer />
    </div>
  )
}
