"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  FileSearch,
  Users,
  Plus,
  Search,
  Filter,
  Mail,
  Calendar,
  Clock,
  CheckCircle,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  FileText,
  Briefcase,
  Building,
  MapPin,
  DollarSign,
} from "lucide-react"

export default function RecruitmentPage() {
  const [activeTab, setActiveTab] = useState("jobs")
  const [showNewJobDialog, setShowNewJobDialog] = useState(false)
  const [showCandidateDialog, setShowCandidateDialog] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<null | {
    id: number
    name: string
    position: string
    status: string
    applied: string
    email: string
    phone: string
    resume: string
  }>(null)

  const handleNewJobSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowNewJobDialog(false)
    // In a real app, you would save the job posting data here
  }

  const handleViewCandidate = (candidate: any) => {
    setSelectedCandidate(candidate)
    setShowCandidateDialog(true)
  }

  const candidates = [
    {
      id: 1,
      name: "Michael Johnson",
      position: "Senior Frontend Developer",
      status: "Applied",
      applied: "2 days ago",
      email: "michael@example.com",
      phone: "(555) 123-4567",
      resume: "resume_michael.pdf",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Senior Frontend Developer",
      status: "Screening",
      applied: "3 days ago",
      email: "sarah@example.com",
      phone: "(555) 234-5678",
      resume: "resume_sarah.pdf",
    },
    {
      id: 3,
      name: "David Brown",
      position: "Senior Frontend Developer",
      status: "Interview",
      applied: "1 week ago",
      email: "david@example.com",
      phone: "(555) 345-6789",
      resume: "resume_david.pdf",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Senior Frontend Developer",
      status: "Technical Test",
      applied: "5 days ago",
      email: "emily@example.com",
      phone: "(555) 456-7890",
      resume: "resume_emily.pdf",
    },
    {
      id: 5,
      name: "James Wilson",
      position: "Senior Frontend Developer",
      status: "Offer",
      applied: "2 weeks ago",
      email: "james@example.com",
      phone: "(555) 567-8901",
      resume: "resume_james.pdf",
    },
    {
      id: 6,
      name: "Jennifer Garcia",
      position: "Marketing Specialist",
      status: "Applied",
      applied: "1 day ago",
      email: "jennifer@example.com",
      phone: "(555) 678-9012",
      resume: "resume_jennifer.pdf",
    },
    {
      id: 7,
      name: "Robert Martinez",
      position: "Marketing Specialist",
      status: "Screening",
      applied: "4 days ago",
      email: "robert@example.com",
      phone: "(555) 789-0123",
      resume: "resume_robert.pdf",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      position: "Sales Representative",
      status: "Interview",
      applied: "3 days ago",
      email: "lisa@example.com",
      phone: "(555) 890-1234",
      resume: "resume_lisa.pdf",
    },
    {
      id: 9,
      name: "Thomas Taylor",
      position: "UI/UX Designer",
      status: "Applied",
      applied: "6 days ago",
      email: "thomas@example.com",
      phone: "(555) 901-2345",
      resume: "resume_thomas.pdf",
    },
    {
      id: 10,
      name: "Jessica White",
      position: "HR Coordinator",
      status: "Rejected",
      applied: "1 week ago",
      email: "jessica@example.com",
      phone: "(555) 012-3456",
      resume: "resume_jessica.pdf",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-800"
      case "Screening":
        return "bg-purple-100 text-purple-800"
      case "Interview":
        return "bg-amber-100 text-amber-800"
      case "Technical Test":
        return "bg-indigo-100 text-indigo-800"
      case "Offer":
        return "bg-green-100 text-green-800"
      case "Hired":
        return "bg-emerald-100 text-emerald-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
              href="/dashboard/recruitment"
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
            >
              <FileSearch className="h-5 w-5" />
              <span>Recruitment</span>
            </Link>
            {/* Other sidebar links */}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">Recruitment</h1>
                <p className="text-muted-foreground">Manage job postings and track candidates</p>
              </div>
              <Button onClick={() => setShowNewJobDialog(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Create Job Posting
              </Button>
            </div>

            <Tabs defaultValue="jobs" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="jobs">Job Postings</TabsTrigger>
                <TabsTrigger value="candidates">Candidates</TabsTrigger>
              </TabsList>

              {/* Job Postings Tab */}
              <TabsContent value="jobs" className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search job postings..." className="pl-8" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Senior Frontend Developer",
                      department: "Engineering",
                      type: "Full-time",
                      location: "Remote",
                      applicants: 12,
                      status: "Active",
                      posted: "2 weeks ago",
                    },
                    {
                      id: 2,
                      title: "Marketing Specialist",
                      department: "Marketing",
                      type: "Full-time",
                      location: "On-site",
                      applicants: 8,
                      status: "Active",
                      posted: "1 week ago",
                    },
                    {
                      id: 3,
                      title: "Sales Representative",
                      department: "Sales",
                      type: "Full-time",
                      location: "Hybrid",
                      applicants: 15,
                      status: "Active",
                      posted: "3 weeks ago",
                    },
                    {
                      id: 4,
                      title: "UI/UX Designer",
                      department: "Design",
                      type: "Contract",
                      location: "Remote",
                      applicants: 6,
                      status: "Active",
                      posted: "5 days ago",
                    },
                    {
                      id: 5,
                      title: "HR Coordinator",
                      department: "HR",
                      type: "Part-time",
                      location: "On-site",
                      applicants: 4,
                      status: "Active",
                      posted: "2 days ago",
                    },
                    {
                      id: 6,
                      title: "Backend Developer",
                      department: "Engineering",
                      type: "Full-time",
                      location: "Remote",
                      applicants: 9,
                      status: "Closed",
                      posted: "1 month ago",
                    },
                  ].map((job) => (
                    <Card key={job.id} className={job.status === "Closed" ? "opacity-70" : ""}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <Badge
                            variant="outline"
                            className={
                              job.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                            }
                          >
                            {job.status}
                          </Badge>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-2">
                          <span className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Posted {job.posted}</span>
                          <Badge variant="secondary">{job.applicants} applicants</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => setActiveTab("candidates")}
                        >
                          View Applicants
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Candidates Tab */}
              <TabsContent value="candidates" className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search candidates..." className="pl-8" />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="applied">Applied</SelectItem>
                        <SelectItem value="screening">Screening</SelectItem>
                        <SelectItem value="interview">Interview</SelectItem>
                        <SelectItem value="test">Technical Test</SelectItem>
                        <SelectItem value="offer">Offer</SelectItem>
                        <SelectItem value="hired">Hired</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      More Filters
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b bg-muted/50">
                        <div className="col-span-2">Candidate</div>
                        <div>Position</div>
                        <div>Status</div>
                        <div>Applied</div>
                        <div>Resume</div>
                        <div>Actions</div>
                      </div>
                      {candidates.map((candidate) => (
                        <div
                          key={candidate.id}
                          className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 hover:bg-muted/20"
                        >
                          <div className="col-span-2 flex items-center gap-2">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt={candidate.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <div>
                              <p className="font-medium">{candidate.name}</p>
                              <p className="text-xs text-muted-foreground">{candidate.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center">{candidate.position}</div>
                          <div className="flex items-center">
                            <Badge variant="outline" className={getStatusColor(candidate.status)}>
                              {candidate.status}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">{candidate.applied}</div>
                          <div className="flex items-center">
                            <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              <span>View</span>
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleViewCandidate(candidate)}>
                              View
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="text-sm text-muted-foreground">Showing 1-10 of 42 candidates</div>
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
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Recruitment Analytics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Candidates</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Time to Hire</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18 days</div>
                  <p className="text-xs text-muted-foreground">-3 days from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hiring Rate</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.5%</div>
                  <p className="text-xs text-muted-foreground">+1.2% from last month</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* New Job Posting Dialog */}
      <Dialog open={showNewJobDialog} onOpenChange={setShowNewJobDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Job Posting</DialogTitle>
            <DialogDescription>
              Fill in the details for the new job position. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleNewJobSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="job-title" className="text-right">
                  Job Title
                </Label>
                <Input id="job-title" placeholder="e.g. Senior Frontend Developer" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Select defaultValue="engineering">
                  <SelectTrigger id="department" className="col-span-3">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="job-type" className="text-right">
                  Job Type
                </Label>
                <Select defaultValue="full-time">
                  <SelectTrigger id="job-type" className="col-span-3">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Select defaultValue="remote">
                  <SelectTrigger id="location" className="col-span-3">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="on-site">On-site</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="salary" className="text-right">
                  Salary Range
                </Label>
                <div className="col-span-3 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <Input id="salary-min" placeholder="Min" className="flex-1" />
                  <span>-</span>
                  <Input id="salary-max" placeholder="Max" className="flex-1" />
                </div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea id="description" placeholder="Job description..." className="col-span-3" rows={5} required />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="requirements" className="text-right pt-2">
                  Requirements
                </Label>
                <Textarea
                  id="requirements"
                  placeholder="Job requirements..."
                  className="col-span-3"
                  rows={5}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setShowNewJobDialog(false)}>
                Cancel
              </Button>
              <Button type="submit">Create Job Posting</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Candidate Details Dialog */}
      <Dialog open={showCandidateDialog} onOpenChange={setShowCandidateDialog}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedCandidate && (
            <>
              <DialogHeader>
                <DialogTitle>Candidate Details</DialogTitle>
                <DialogDescription>Review candidate information and update their status</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt={selectedCandidate.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{selectedCandidate.name}</h3>
                    <p className="text-muted-foreground">{selectedCandidate.position}</p>
                    <Badge variant="outline" className={getStatusColor(selectedCandidate.status)}>
                      {selectedCandidate.status}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-muted-foreground">Email</Label>
                    <p>{selectedCandidate.email}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Phone</Label>
                    <p>{selectedCandidate.phone}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Applied</Label>
                    <p>{selectedCandidate.applied}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Resume</Label>
                    <Button variant="link" className="p-0 h-auto">
                      View Resume
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Update Status</Label>
                  <Select defaultValue={selectedCandidate.status.toLowerCase()}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="screening">Screening</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="technical test">Technical Test</SelectItem>
                      <SelectItem value="offer">Offer</SelectItem>
                      <SelectItem value="hired">Hired</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Add notes about this candidate..." rows={3} />
                </div>

                <div className="space-y-2">
                  <Label>Schedule</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Schedule Interview
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowCandidateDialog(false)}>
                  Close
                </Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

