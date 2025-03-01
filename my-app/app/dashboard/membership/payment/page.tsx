"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, CheckCircle, ArrowLeft, Lock, Users } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [selectedPlan, setSelectedPlan] = useState("pro")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvc, setCvc] = useState("")
  const [nameOnCard, setNameOnCard] = useState("")
  const [billingAddress, setBillingAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [country, setCountry] = useState("US")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("success")
    }, 2000)
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length > 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }
    return value
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value)
    setCardNumber(formattedValue)
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiryDate(e.target.value)
    setExpiryDate(formattedValue)
  }

  const plans = {
    basic: { name: "Basic Plan", price: 12, employees: 42, total: 504 },
    pro: { name: "Pro Plan", price: 24, employees: 42, total: 1008 },
    enterprise: { name: "Enterprise Plan", price: 36, employees: 42, total: 1512 },
  }

  const selectedPlanDetails = plans[selectedPlan as keyof typeof plans]

  if (paymentStatus === "success") {
    return (
      <div className="flex min-h-screen flex-col">
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
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 md:p-6">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Payment Successful!</CardTitle>
              <CardDescription>Your payment has been processed successfully</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Plan</span>
                    <span className="font-medium">{selectedPlanDetails.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Amount</span>
                    <span className="font-medium">${selectedPlanDetails.total}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Payment Method</span>
                    <span className="font-medium">Visa ending in {cardNumber.slice(-4)}</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                A receipt has been sent to your email address.
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Link href="/dashboard/membership" className="w-full">
                <Button className="w-full">Return to Membership Dashboard</Button>
              </Link>
              <Link href="/dashboard" className="w-full">
                <Button variant="outline" className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <Link
              href="/dashboard/membership"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Membership Dashboard
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Secure Payment
                  </CardTitle>
                  <CardDescription>Enter your payment details to complete your subscription</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="plan">Select Plan</Label>
                        <RadioGroup
                          defaultValue="pro"
                          value={selectedPlan}
                          onValueChange={setSelectedPlan}
                          className="grid gap-4 md:grid-cols-3"
                        >
                          <div
                            className={`flex flex-col items-center rounded-lg border p-4 ${selectedPlan === "basic" ? "border-primary bg-primary/5" : ""}`}
                          >
                            <RadioGroupItem value="basic" id="basic" className="sr-only" />
                            <Label htmlFor="basic" className="font-bold">
                              Basic
                            </Label>
                            <span className="text-2xl font-bold">$12</span>
                            <span className="text-sm text-muted-foreground">per employee/month</span>
                          </div>
                          <div
                            className={`flex flex-col items-center rounded-lg border p-4 ${selectedPlan === "pro" ? "border-primary bg-primary/5" : ""}`}
                          >
                            <RadioGroupItem value="pro" id="pro" className="sr-only" />
                            <Label htmlFor="pro" className="font-bold">
                              Pro
                            </Label>
                            <span className="text-2xl font-bold">$24</span>
                            <span className="text-sm text-muted-foreground">per employee/month</span>
                          </div>
                          <div
                            className={`flex flex-col items-center rounded-lg border p-4 ${selectedPlan === "enterprise" ? "border-primary bg-primary/5" : ""}`}
                          >
                            <RadioGroupItem value="enterprise" id="enterprise" className="sr-only" />
                            <Label htmlFor="enterprise" className="font-bold">
                              Enterprise
                            </Label>
                            <span className="text-2xl font-bold">$36</span>
                            <span className="text-sm text-muted-foreground">per employee/month</span>
                          </div>
                        </RadioGroup>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <div className="relative">
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength={19}
                            required
                          />
                          <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                            maxLength={5}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input
                            id="cvc"
                            placeholder="123"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            maxLength={3}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Name on Card</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={nameOnCard}
                          onChange={(e) => setNameOnCard(e.target.value)}
                          required
                        />
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label htmlFor="address">Billing Address</Label>
                        <Input
                          id="address"
                          placeholder="123 Main St"
                          value={billingAddress}
                          onChange={(e) => setBillingAddress(e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            placeholder="New York"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP / Postal Code</Label>
                          <Input
                            id="zip"
                            placeholder="10001"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select value={country} onValueChange={setCountry}>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="US">United States</SelectItem>
                            <SelectItem value="CA">Canada</SelectItem>
                            <SelectItem value="UK">United Kingdom</SelectItem>
                            <SelectItem value="AU">Australia</SelectItem>
                            <SelectItem value="DE">Germany</SelectItem>
                            <SelectItem value="FR">France</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Alert className="bg-primary/5 border-primary/20">
                      <Lock className="h-4 w-4" />
                      <AlertTitle>Secure Payment</AlertTitle>
                      <AlertDescription>
                        Your payment information is encrypted and secure. We never store your full card details.
                      </AlertDescription>
                    </Alert>

                    <Button type="submit" className="w-full" disabled={paymentStatus === "processing"}>
                      {paymentStatus === "processing" ? "Processing..." : `Pay $${selectedPlanDetails.total}.00`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{selectedPlanDetails.name}</span>
                      <span>${selectedPlanDetails.price}/employee</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>Employees</span>
                      </span>
                      <span>{selectedPlanDetails.employees}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${selectedPlanDetails.total}.00</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Billed monthly. You can cancel or change your plan at any time.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about billing or your subscription, our support team is here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

