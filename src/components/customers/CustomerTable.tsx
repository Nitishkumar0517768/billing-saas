import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import { Trash2, Pencil } from 'lucide-react'
import {Button} from '@/components/ui/button'
import EditCustomerDialog from './EditCustomerDialog'

type Customer = {
    id: string,
    name: string,
    email: string,
    phone: string,
    status: "Active" | "Inactive"
}

// const customers = [
//   {
//     id: "CUS-001",
//     name: "Acme Inc.",
//     email: "contact@acme.com",
//     phone: "+91 234 567 890",
//     status: "Active",
//   },
//   {
//     id: "CUS-002",
//     name: "Tech Solutions",
//     email: "hello@techsolutions.com",
//     phone: "+91 345 678 901",
//     status: "Active",
//   },
//   {
//     id: "CUS-003",
//     name: "Cloud Systems",
//     email: "info@cloudsystems.com",
//     phone: "+91 456 789 012",
//     status: "Inactive",
//   },
// ];


export default function CustomerTable({customers, onDelete, onEdit}: {
    customers: Customer[];
    onDelete: (id: string) => void;
    onEdit: (customer: Customer) => void;
}) {
    return(
        <div className='rounded-xl border bg-white'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {customers.map((customer) => (
                        <TableRow key={customer.id}>
                            <TableCell>{customer.id}</TableCell>
                            <TableCell className="font-medium">
                                {customer.name}
                            </TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.phone}</TableCell>
                            <TableCell>
                                <span
                                    className={`rounded-full px-2 py-1 text-xs ${
                                        customer.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                                >
                                    {customer.status}
                                </span>
                            </TableCell>

                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" onClick={() => onEdit(customer)}>
                                        <Pencil size={16} />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => onDelete(customer.id)} >
                                        <Trash2 size={16} className='text-red-500' />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        
        </div>
    )
}