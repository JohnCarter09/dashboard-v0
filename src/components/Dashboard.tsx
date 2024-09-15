'use client';

import React from 'react'
import dynamic from 'next/dynamic'
import { Search, Download, Rocket, Settings, MoreHorizontal, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const DynamicLineChart = dynamic(() => import('@/components/DynamicLineChart'), { ssr: false })
const DynamicBarChart = dynamic(() => import('@/components/DynamicBarChart'), { ssr: false })
const DynamicPieChart = dynamic(() => import('@/components/DynamicPieChart'), { ssr: false })

const revenueData = [
  { name: 'Mar 2023', Total: 32000, Target: 30000 },
  { name: 'Jun 2023', Total: 29000, Target: 31000 },
  { name: 'Sep 2023', Total: 30500, Target: 32000 },
  { name: 'Dec 2023', Total: 33000, Target: 33000 },
  { name: 'Mar 2024', Total: 31500, Target: 34000 },
  { name: 'Jun 2024', Total: 32500, Target: 35000 },
  { name: 'Sep 2024', Total: 34000, Target: 36000 },
]

const sessionData = [
  { country: 'Australia', sessions: 634, percentage: 8, flag: '🇦🇺' },
  { country: 'Indonesia', sessions: 589, percentage: 7.2, flag: '🇮🇩' },
  { country: 'Thailand', sessions: 562, percentage: 6.2, flag: '🇹🇭' },
  { country: 'Germany', sessions: 453, percentage: 5.4, flag: '🇩🇪' },
]

const salesByRegion = [
  { name: 'Europe', value: 2728 },
  { name: 'Americas', value: 2409 },
  { name: 'Asia', value: 2843 },
  { name: 'Africa', value: 3028 },
  { name: 'Pacific', value: 1838 },
]

const salesByPlatform = [
  { name: 'Amazon', value: 45 },
  { name: 'Tokopedia', value: 25 },
  { name: 'Alibaba', value: 35 },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-md"></div>
          <span className="text-xl font-semibold">Consist</span>
        </div>
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Menu className="mr-2 h-4 w-4" />
            MAIN MENU
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Performance
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
            Campaigns
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            Orders
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            Products
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            Message
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            Sales Platform
          </Button>
        </nav>
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            Demo Mode
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            Feedback
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Help and docs
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* App header */}
        <header className="bg-white border-b border-gray-200 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-1 min-w-0">
              <Input type="search" placeholder="Search anything here..." className="max-w-lg" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">
                <Download className="h-5 w-5" />
              </Button>
              <Button variant="ghost">
                <Rocket className="h-5 w-5" />
              </Button>
              <Button variant="ghost">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <div className="flex space-x-2">
              <Button variant="outline">Customize Widget</Button>
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Share</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Income</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$32,499.93</div>
                <p className="text-xs text-green-500">
                  +12.95% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$10,499.93</div>
                <p className="text-xs text-green-500">
                  +0.33% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,211,832</div>
                <p className="text-xs text-green-500">
                  +0.32% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.83%</div>
                <p className="text-xs text-green-500">
                  +8.05% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Revenue Over Time</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="ghost"><Download className="h-4 w-4" /></Button>
                  <Button variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
                </div>
              </CardHeader>
              <CardContent>
                <DynamicLineChart data={revenueData} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Session by Country</CardTitle>
                <Button variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sessionData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 mr-4 text-2xl">{item.flag}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span>{item.country}</span>
                          <span className="font-semibold">{item.sessions} • {item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Sales by Region</CardTitle>
                <Button variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
              </CardHeader>
              <CardContent>
                <DynamicBarChart data={salesByRegion} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Sales by e-commerce platform</CardTitle>
                <Button variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
              </CardHeader>
              <CardContent>
                <DynamicPieChart data={salesByPlatform} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Registered users</CardTitle>
                <Button variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-[300px]">
                <div className="text-4xl font-bold">2,324</div>
                <div className="text-sm text-muted-foreground">Total Users</div>
                <div className="mt-4 flex justify-between w-full">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">1,809</div>
                    <div className="text-xs text-muted-foreground">Premium Plan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold">515</div>
                    <div className="text-xs text-muted-foreground">Basic Plan</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}