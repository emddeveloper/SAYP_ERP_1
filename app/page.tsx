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
    <>
      <Navbar />
      <main
        className="flex flex-1 items-center pt-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 20, 36, 0.9) 0%, rgba(5, 20, 36, 0.2) 100%), url('${HERO_BG_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/2 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 md:flex-row md:px-12">
          <div className="w-full md:w-5/12 lg:w-4/12">
            <div className="animate-landing-card space-y-8 rounded-xl border border-outline-variant/20 bg-surface/70 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-2xl md:p-10">
              <div className="space-y-4">
                <Image
                  alt="SOLAR CRM Logo"
                  src={LOGO_URL}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h1 className="text-3xl font-semibold text-on-surface">
                    Join Solar CRM
                  </h1>
                  <p className="mt-2 text-base text-on-surface-variant">
                    Empower your energy sales pipeline with radiating
                    intelligence.
                  </p>
                </div>
              </div>

              <SignupForm />

              <div className="space-y-6">
                <p className="text-center text-base text-on-surface-variant">
                  Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-bold text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all"
                    >
                    Log In
                  </a>
                </p>
                <p className="px-4 text-center text-xs leading-relaxed text-outline-variant">
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
    </>
  )
}
