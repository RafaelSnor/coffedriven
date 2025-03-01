import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download, CheckCircle, Users, Calendar } from "lucide-react"

export default function MembershipDashboardPage() {
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Users className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
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

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40">
          <div className="flex flex-col gap-2 p-4">
            <Link href="/dashboard" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Users className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/membership"
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
            >
              <CreditCard className="h-5 w-5" />
              <span>Membership</span>
            </Link>
            {/* Other sidebar links */}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Membership Dashboard</h1>
              <p className="text-muted-foreground">Manage your subscription and billing information</p>
            </div>

            {/* Current Plan Card */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Current Plan</CardTitle>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <CardDescription>Your subscription details and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Pro Plan</h3>
                    <p className="text-sm text-muted-foreground">For growing businesses</p>
                    <p className="text-2xl font-bold">
                      $24<span className="text-sm font-normal text-muted-foreground">/month per employee</span>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Renewal Date</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <p className="font-medium">May 15, 2024</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Auto-renewal enabled</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Current Billing</p>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <p className="font-medium">42 employees</p>
                    </div>
                    <p className="text-xs text-muted-foreground">$1,008.00 per month</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Actions</p>
                    <div className="flex flex-col gap-2">
                      <Link href="/dashboard/membership/upgrade">
                        <Button className="w-full">Upgrade Plan</Button>
                      </Link>
                      <Link href="/dashboard/membership/downgrade">
                        <Button variant="outline" className="w-full">
                          Downgrade
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Plan Features */}
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan Features</CardTitle>
                <CardDescription>Your current plan includes the following features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Employee Management",
                    "Time & Attendance",
                    "Basic Reporting",
                    "Email Support",
                    "Payroll & Benefits",
                    "Recruitment Tools",
                    "Advanced Reporting",
                    "Priority Support",
                    "API Access",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View and download your past invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>Invoice</div>
                    <div>Date</div>
                    <div>Amount</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {[
                    { id: "INV-2024-0004", date: "Apr 15, 2024", amount: "$1,008.00", status: "Paid" },
                    { id: "INV-2024-0003", date: "Mar 15, 2024", amount: "$1,008.00", status: "Paid" },
                    { id: "INV-2024-0002", date: "Feb 15, 2024", amount: "$960.00", status: "Paid" },
                    { id: "INV-2024-0001", date: "Jan 15, 2024", amount: "$960.00", status: "Paid" },
                    { id: "INV-2023-0012", date: "Dec 15, 2023", amount: "$960.00", status: "Paid" },
                  ].map((invoice, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0">
                      <div className="font-medium">{invoice.id}</div>
                      <div>{invoice.date}</div>
                      <div>{invoice.amount}</div>
                      <div>
                        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                          {invoice.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>PDF</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="rounded-md bg-muted p-2">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>

                  <div className="flex justify-between">
                    <Link href="/dashboard/membership/payment">
                      <Button variant="outline">Add Payment Method</Button>
                    </Link>
                    <Link href="/dashboard/membership/billing">
                      <Button variant="outline">Update Billing Address</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compare Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Compare Plans</CardTitle>
                <CardDescription>See what features are available in each plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 w-1/4">Feature</th>
                        <th className="text-center p-2 w-1/4">
                          <div className="font-bold">Basic</div>
                          <div className="text-sm text-muted-foreground">$12/month per employee</div>
                        </th>
                        <th className="text-center p-2 w-1/4 bg-primary/5">
                          <div className="font-bold">Pro</div>
                          <div className="text-sm text-muted-foreground">$24/month per employee</div>
                        </th>
                        <th className="text-center p-2 w-1/4">
                          <div className="font-bold">Enterprise</div>
                          <div className="text-sm text-muted-foreground">$36/month per employee</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Employee Management", basic: true, pro: true, enterprise: true },
                        { feature: "Time & Attendance", basic: true, pro: true, enterprise: true },
                        { feature: "Basic Reporting", basic: true, pro: true, enterprise: true },
                        { feature: "Email Support", basic: true, pro: true, enterprise: true },
                        { feature: "Payroll & Benefits", basic: false, pro: true, enterprise: true },
                        { feature: "Recruitment Tools", basic: false, pro: true, enterprise: true },
                        { feature: "Advanced Reporting", basic: false, pro: true, enterprise: true },
                        { feature: "Priority Support", basic: false, pro: true, enterprise: true },
                        { feature: "Custom Integrations", basic: false, pro: false, enterprise: true },
                        { feature: "Dedicated Account Manager", basic: false, pro: false, enterprise: true },
                        { feature: "Custom Reporting", basic: false, pro: false, enterprise: true },
                        { feature: "24/7 Phone Support", basic: false, pro: false, enterprise: true },
                      ].map((row, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="p-2 font-medium">{row.feature}</td>
                          <td className="p-2 text-center">
                            {row.basic ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </td>
                          <td className="p-2 text-center bg-primary/5">
                            {row.pro ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </td>
                          <td className="p-2 text-center">
                            {row.enterprise ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-center">
                  <Link href="/dashboard/membership/upgrade">
                    <Button>Upgrade Your Plan</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

