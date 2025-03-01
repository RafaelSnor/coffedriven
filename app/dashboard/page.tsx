import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  CreditCard,
  FileSearch,
  Clock,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  Home,
  Calendar,
  FileText,
  PieChart,
  User,
} from "lucide-react"

export default function DashboardPage() {
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
              <Bell className="h-5 w-5" />
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
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/dashboard/employees" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Users className="h-5 w-5" />
              <span>Employees</span>
            </Link>
            <Link href="/dashboard/payroll" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <CreditCard className="h-5 w-5" />
              <span>Payroll</span>
            </Link>
            <Link href="/dashboard/recruitment" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <FileSearch className="h-5 w-5" />
              <span>Recruitment</span>
            </Link>
            <Link href="/dashboard/time" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Clock className="h-5 w-5" />
              <span>Time & Attendance</span>
            </Link>
            <Link href="/dashboard/calendar" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Calendar className="h-5 w-5" />
              <span>Calendar</span>
            </Link>
            <Link href="/dashboard/documents" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <FileText className="h-5 w-5" />
              <span>Documents</span>
            </Link>
            <Link href="/dashboard/reports" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <BarChart3 className="h-5 w-5" />
              <span>Reports</span>
            </Link>
          </div>
          <div className="mt-auto p-4 border-t">
            <Link href="/dashboard/settings" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <Link
              href="/logout"
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted text-destructive"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John</h1>
              <p className="text-muted-foreground">Heres whats happening with your team today.</p>
            </div>

            {/* Membership Card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Membership</CardTitle>
                <CardDescription>Youre currently on the Pro plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <p className="text-lg font-bold text-green-500">Active</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Next Billing Date</p>
                    <p className="text-lg font-bold">May 15, 2024</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Amount</p>
                    <p className="text-lg font-bold">$24/employee</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Actions</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Invoices
                      </Button>
                      <Button size="sm">Upgrade</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="employees">Employees</TabsTrigger>
                <TabsTrigger value="attendance">Attendance</TabsTrigger>
                <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">42</div>
                      <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">96%</div>
                      <p className="text-xs text-muted-foreground">+2% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
                      <FileSearch className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5</div>
                      <p className="text-xs text-muted-foreground">3 new this week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">7</div>
                      <p className="text-xs text-muted-foreground">Time off requests</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">
                                {i === 1
                                  ? "Sarah Johnson joined the team"
                                  : i === 2
                                    ? "Time off request from Mike Smith"
                                    : i === 3
                                      ? "Performance review scheduled"
                                      : i === 4
                                        ? "New job posting created"
                                        : "Payroll processed for April"}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {i === 1
                                  ? "2 hours ago"
                                  : i === 2
                                    ? "5 hours ago"
                                    : i === 3
                                      ? "Yesterday at 2:30 PM"
                                      : i === 4
                                        ? "Yesterday at 11:15 AM"
                                        : "2 days ago"}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>Department Distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="h-60 w-60 relative">
                        <PieChart className="h-full w-full text-muted-foreground" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-sm font-medium">42 Employees</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="employees">
                <Card>
                  <CardHeader>
                    <CardTitle>Employee Directory</CardTitle>
                    <CardDescription>Manage your team members and their information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <Button>Add Employee</Button>
                      <Button variant="outline">Export Data</Button>
                    </div>
                    <div className="border rounded-lg">
                      <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                        <div>Name</div>
                        <div>Department</div>
                        <div>Position</div>
                        <div>Status</div>
                        <div>Actions</div>
                      </div>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt="Employee Avatar"
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <span>
                              {i === 1
                                ? "John Doe"
                                : i === 2
                                  ? "Jane Smith"
                                  : i === 3
                                    ? "Robert Johnson"
                                    : i === 4
                                      ? "Emily Davis"
                                      : "Michael Wilson"}
                            </span>
                          </div>
                          <div>
                            {i === 1
                              ? "Engineering"
                              : i === 2
                                ? "Marketing"
                                : i === 3
                                  ? "Sales"
                                  : i === 4
                                    ? "Design"
                                    : "HR"}
                          </div>
                          <div>
                            {i === 1
                              ? "Senior Developer"
                              : i === 2
                                ? "Marketing Manager"
                                : i === 3
                                  ? "Sales Representative"
                                  : i === 4
                                    ? "UI/UX Designer"
                                    : "HR Specialist"}
                          </div>
                          <div>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          </div>
                          <div>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="attendance">
                <Card>
                  <CardHeader>
                    <CardTitle>Time & Attendance</CardTitle>
                    <CardDescription>Track employee attendance and time off requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium">Todays Attendance</h3>
                          <p className="text-sm text-muted-foreground">May 1, 2024</p>
                        </div>
                        <Button>Clock In/Out</Button>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold">38</div>
                            <p className="text-sm text-muted-foreground">Present</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold">2</div>
                            <p className="text-sm text-muted-foreground">Absent</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-sm text-muted-foreground">Late</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-sm text-muted-foreground">On Leave</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Pending Time Off Requests</h3>
                        <div className="border rounded-lg">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b last:border-0">
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/placeholder.svg?height=32&width=32"
                                  alt="Employee Avatar"
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                                <div>
                                  <p className="font-medium">
                                    {i === 1 ? "Mike Smith" : i === 2 ? "Sarah Johnson" : "Emily Davis"}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {i === 1
                                      ? "Vacation: May 10-15"
                                      : i === 2
                                        ? "Sick Leave: May 5"
                                        : "Personal Day: May 8"}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  Deny
                                </Button>
                                <Button size="sm">Approve</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="recruitment">
                <Card>
                  <CardHeader>
                    <CardTitle>Recruitment</CardTitle>
                    <CardDescription>Manage job postings and track candidates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">Active Job Postings</h3>
                        <Button>Create New Job</Button>
                      </div>
                      <div className="border rounded-lg">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="p-4 border-b last:border-0">
                            <div className="flex justify-between mb-2">
                              <h4 className="font-medium">
                                {i === 1
                                  ? "Senior Frontend Developer"
                                  : i === 2
                                    ? "Marketing Specialist"
                                    : i === 3
                                      ? "Sales Representative"
                                      : i === 4
                                        ? "UI/UX Designer"
                                        : "HR Coordinator"}
                              </h4>
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                                {i === 1
                                  ? "12 applicants"
                                  : i === 2
                                    ? "8 applicants"
                                    : i === 3
                                      ? "15 applicants"
                                      : i === 4
                                        ? "6 applicants"
                                        : "4 applicants"}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {i === 1
                                ? "Engineering • Full-time • Remote"
                                : i === 2
                                  ? "Marketing • Full-time • On-site"
                                  : i === 3
                                    ? "Sales • Full-time • Hybrid"
                                    : i === 4
                                      ? "Design • Contract • Remote"
                                      : "HR • Part-time • On-site"}
                            </p>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                View Applicants
                              </Button>
                              <Button size="sm" variant="outline">
                                Edit
                              </Button>
                              <Button size="sm" variant="outline">
                                Close
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

