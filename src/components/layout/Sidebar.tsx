import { CreditCard, FileText, LayoutDashboard, Package, Users, Wallet } from "lucide-react";
import Link from "next/link";


const navItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard 
    },
    {
        name: "customers" ,
        href: "/custormers",
        icon: Users
    },
    {
        name: "Products",
        href: "/products",
        icon: Package
    },
    {
        name: "Subscriptions",
        href: "/subscriptions",
        icon: CreditCard
    },
    {
        name: "Invoices",
        href: "/invoices",
        icon: FileText
    },
    {
        name: "Payments",
        href: "/payments",
        icon: Wallet
    }
];



export default function Sidebar(){


    return(
        <aside className="flex h-screen w-64 flex-col border-r bg-white p-5">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-blue-600"> BillFlow </h1>
                <p className="text-sm text-gray-500"> Bill Management </p>
            </div>

            <nav>
                {navItems.map((item) => {
                    const Icon = item.icon
                    
                    return(
                        <Link key={item.name} href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600">
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}