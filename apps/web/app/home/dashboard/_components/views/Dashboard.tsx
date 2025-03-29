import React from 'react';
// import { Button } from '@core/button';
import { BarChart, Users, FileText, Settings, ChevronRight } from 'lucide-react';
import { Button } from "@kit/ui/button";

interface DashboardProps {
    onOpenFileUpload: () => void;
}

export function Dashboard() {
    // const onOpenFileUpload = () => {console.log('open file upload')};
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        Export
                    </Button>
                    <Button size="sm">Create New Plan</Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <DashboardCard
                    title="Business Plans"
                    value="3"
                    description="Active plans"
                    icon={<FileText className="h-5 w-5 text-primary" />}
                />
                <DashboardCard
                    title="Financial Models"
                    value="2"
                    description="Updated 2 days ago"
                    icon={<BarChart className="h-5 w-5 text-primary" />}
                />
                <DashboardCard
                    title="Team Members"
                    value="5"
                    description="2 pending invitations"
                    icon={<Users className="h-5 w-5 text-primary" />}
                />
                <DashboardCard
                    title="Settings"
                    value="4"
                    description="Notifications enabled"
                    icon={<Settings className="h-5 w-5 text-primary" />}
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card shadow-sm">
                    <div className="flex items-center justify-between border-b p-4">
                        <h2 className="text-lg font-medium">Recent Business Plans</h2>
                        <Button variant="ghost" size="sm">
                            View All
                        </Button>
                    </div>
                    <div className="p-4">
                        {recentPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className="flex items-center justify-between rounded-md p-2 hover:bg-accent/50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                                        <FileText className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{plan.name}</h3>
                                        <p className="text-sm text-muted-foreground">Updated {plan.lastUpdated}</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg border bg-card shadow-sm">
                    <div className="flex items-center justify-between border-b p-4">
                        <h2 className="text-lg font-medium">Financial Overview</h2>
                        <Button variant="ghost" size="sm">
                            View Details
                        </Button>
                    </div>
                    <div className="p-4">
                        <div className="mb-4 h-[200px] rounded-md bg-accent/20 flex items-center justify-center">
                            <p className="text-muted-foreground">Chart placeholder</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-md bg-accent/10 p-3">
                                <p className="text-sm font-medium">Revenue</p>
                                <p className="text-xl font-bold">$24,500</p>
                                <p className="text-xs text-muted-foreground">+12% from last month</p>
                            </div>
                            <div className="rounded-md bg-accent/10 p-3">
                                <p className="text-sm font-medium">Expenses</p>
                                <p className="text-xl font-bold">$12,800</p>
                                <p className="text-xs text-muted-foreground">-5% from last month</p>
                            </div>
                            <div className="rounded-md bg-accent/10 p-3">
                                <p className="text-sm font-medium">Profit</p>
                                <p className="text-xl font-bold">$11,700</p>
                                <p className="text-xs text-muted-foreground">+15% from last month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface DashboardCardProps {
    title: string;
    value: string;
    description: string;
    icon: React.ReactNode;
}

function DashboardCard({ title, value, description, icon }: DashboardCardProps) {
    return (
        <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="font-medium">{title}</h3>
                {icon}
            </div>
            <p className="mt-2 text-2xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

const recentPlans = [
    {
        id: '1',
        name: 'Tech Startup Plan',
        lastUpdated: '2 days ago',
    },
    {
        id: '2',
        name: 'Retail Expansion',
        lastUpdated: '1 week ago',
    },
    {
        id: '3',
        name: 'Service Business',
        lastUpdated: '2 weeks ago',
    },
];
