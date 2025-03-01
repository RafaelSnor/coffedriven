import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Filter, Download, Plus, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export default function EmployeesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Reused from dashboard */}
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
        {/* Sidebar - Reused from dashboard */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40">
          {/* Same sidebar content as dashboard */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Employee Management</h1>
                <p className="text-muted-foreground">Manage your team members and their information</p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Employee
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Employee Directory</CardTitle>
                <CardDescription>View and manage all employees in your organization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search employees..." className="pl-8" />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                  </div>

                  <Tabs defaultValue="all">
                    <TabsList>
                      <TabsTrigger value="all">All Employees</TabsTrigger>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
                      <TabsTrigger value="offboarding">Offboarding</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-4">
                      <div className="border rounded-lg">
                        <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b bg-muted/50">
                          <div>Name</div>
                          <div>Department</div>
                          <div>Position</div>
                          <div>Location</div>
                          <div>Status</div>
                          <div>Actions</div>
                        </div>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                          <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b last:border-0 hover:bg-muted/20">
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
                                        : i === 5
                                          ? "Michael Wilson"
                                          : i === 6
                                            ? "Sarah Thompson"
                                            : i === 7
                                              ? "David Martinez"
                                              : i === 8
                                                ? "Jennifer Garcia"
                                                : i === 9
                                                  ? "Christopher Lee"
                                                  : "Amanda White"}
                              </span>
                            </div>
                            <div>
                              {i === 1 || i === 7
                                ? "Engineering"
                                : i === 2 || i === 8
                                  ? "Marketing"
                                  : i === 3 || i === 9
                                    ? "Sales"
                                    : i === 4 || i === 10
                                      ? "Design"
                                      : i === 5 || i === 6
                                        ? "HR"
                                        : ""}
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
                                      : i === 5
                                        ? "HR Specialist"
                                        : i === 6
                                          ? "HR Coordinator"
                                          : i === 7
                                            ? "Frontend Developer"
                                            : i === 8
                                              ? "Content Specialist"
                                              : i === 9
                                                ? "Account Executive"
                                                : "Graphic Designer"}
                            </div>
                            <div>{i % 3 === 0 ? "Remote" : i % 3 === 1 ? "On-site" : "Hybrid"}</div>
                            <div>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  i === 9
                                    ? "bg-yellow-100 text-yellow-800"
                                    : i === 10
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                                }`}
                              >
                                {i === 9 ? "On Leave" : i === 10 ? "Onboarding" : "Active"}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-muted-foreground">Showing 1-10 of 42 employees</div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" disabled>
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 min-w-8 px-3">
                            1
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
                            2
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
                            3
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
                            4
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
                            5
                          </Button>
                          <Button variant="outline" size="icon">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="active" className="mt-4">
                      <div className="flex items-center justify-center p-8 text-muted-foreground">
                        <p>Showing active employees only</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="onboarding" className="mt-4">
                      <div className="flex items-center justify-center p-8 text-muted-foreground">
                        <p>Showing employees in onboarding process</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="offboarding" className="mt-4">
                      <div className="flex items-center justify-center p-8 text-muted-foreground">
                        <p>Showing employees in offboarding process</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Department Overview</CardTitle>
                  <CardDescription>Employee distribution by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Engineering", count: 12, percentage: 28 },
                      { name: "Marketing", count: 8, percentage: 19 },
                      { name: "Sales", count: 10, percentage: 24 },
                      { name: "Design", count: 6, percentage: 14 },
                      { name: "HR", count: 4, percentage: 10 },
                      { name: "Finance", count: 2, percentage: 5 },
                    ].map((dept, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{dept.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {dept.count} employees ({dept.percentage}%)
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: `${dept.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                  <CardDescription>Latest employee changes and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "New hire", name: "Amanda White", department: "Design", date: "Today" },
                      { action: "Promotion", name: "Robert Johnson", department: "Sales", date: "Yesterday" },
                      {
                        action: "Department change",
                        name: "Emily Davis",
                        department: "From Marketing to Design",
                        date: "3 days ago",
                      },
                      { action: "Salary adjustment", name: "Michael Wilson", department: "HR", date: "1 week ago" },
                      { action: "Role change", name: "Jane Smith", department: "Marketing", date: "2 weeks ago" },
                    ].map((update, i) => (
                      <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">
                            {update.action}: {update.name}
                          </p>
                          <p className="text-sm text-muted-foreground">{update.department}</p>
                          <p className="text-xs text-muted-foreground">{update.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

