import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, CreditCard, FileSearch, Clock, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="StreamLine HR Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">StreamLine HR</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary hidden md:block">
              Log in
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your HR Processes with Ease
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    An all-in-one HR solution designed to simplify employee management, payroll, recruitment, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="HR Dashboard Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Manage Your Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive suite of tools helps you streamline HR processes, save time, and focus on what
                  matters most - your people.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Employee Management</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Centralized employee profiles, organizational charts, and performance tracking.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Payroll & Benefits</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Automated payroll calculations, tax compliance, and benefits management.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileSearch className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Recruitment Tools</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Job posting, candidate tracking, and interview scheduling.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Time & Attendance</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Real-time attendance tracking, leave management, and overtime calculations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by HR Teams Everywhere
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about how StreamLine HR has transformed their HR processes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    StreamLine HR has transformed how we manage our team. Its intuitive, powerful, and saves us hours
                    every week!
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Jane Doe"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Jane Doe</p>
                    <p className="text-xs text-muted-foreground">HR Manager, XYZ Corp</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    The payroll automation alone has saved us countless hours. Our team loves how easy it is to request
                    time off and track their benefits.
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="John Smith"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">John Smith</p>
                    <p className="text-xs text-muted-foreground">COO, ABC Startups</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm md:col-span-2 lg:col-span-1">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                  As we scaled from 10 to 100 employees, StreamLine HR made the process seamless. The recruitment
                    tools helped us find the right talent quickly.
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Sarah Johnson"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">People Ops, Tech Innovators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan thats right for your business. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-muted-foreground">For small teams getting started</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$12</span>
                  <span className="ml-1 text-muted-foreground">/month per employee</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Employee Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Time & Attendance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/register?plan=basic">
                    <Button className="w-full">Choose Plan</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">For growing businesses</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$24</span>
                  <span className="ml-1 text-muted-foreground">/month per employee</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Payroll & Benefits</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Recruitment Tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/register?plan=pro">
                    <Button className="w-full">Choose Plan</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For large organizations</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$36</span>
                  <span className="ml-1 text-muted-foreground">/month per employee</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom Integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>24/7 Phone Support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/register?plan=enterprise">
                    <Button className="w-full">Choose Plan</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your HR Management?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses already using StreamLine HR.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="StreamLine HR Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">StreamLine HR</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Simplifying HR management for small and medium-sized businesses.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/gdpr" className="text-sm hover:text-primary">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://twitter.com" className="text-sm hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" className="text-sm hover:text-primary">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com" className="text-sm hover:text-primary">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com" className="text-sm hover:text-primary">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} StreamLine HR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

