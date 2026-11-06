
import {Table, TableBody,TableHeader, TableRow, TableHead, TableCell } from '@/components/ui/table'

type InvoiceType = {
    id: string,
    customer: string,
    amount: string,
    dueDate: string,
    status: string
}

const invoices : InvoiceType[] = [
  {
    id: "INV-1001",
    customer: "Acme Inc.",
    amount: "$1,200",
    dueDate: "Nov 10, 2026",
    status: "Paid",
  },
  {
    id: "INV-1002",
    customer: "Tech Solutions",
    amount: "$850",
    dueDate: "Nov 12, 2026",
    status: "Pending",
  },
  {
    id: "INV-1003",
    customer: "Cloud Systems",
    amount: "$2,400",
    dueDate: "Nov 14, 2026",
    status: "Overdue",
  },
  {
    id: "INV-1004",
    customer: "Digital Works",
    amount: "$650",
    dueDate: "Nov 15, 2026",
    status: "Paid",
  },
];


export default function RecentInvoices() {
    return(
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-5">
                <h2 className="text-lg font-semibold">Recent Invoices</h2>
                <p className="text-sm text-gray-500">Latest billing activity</p>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        invoices.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className='font-medium'>{item.id}</TableCell>
                                <TableCell>{item.customer}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>{item.dueDate}</TableCell>

                                <TableCell>
                                    <span className={`rounded-full px-2 py-1 text-xs font-medium 
                                     ${item.status === "paid" 
                                        ? "bg-green-100 text-green-700" 
                                        : item.status === "Pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-red-100 text-red-700"
                                      }`}>
                                            {item.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}