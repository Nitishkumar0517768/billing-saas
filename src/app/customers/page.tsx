"use client"

import CustomerForm from "@/components/customers/CustomerForm";
import CustomerTable from "@/components/customers/CustomerTable";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";
import EditCustomerDialog from "@/components/customers/EditCustomerDialog";

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: "Active" | "Inactive";
};

export default function CustomersPage() {

    const [customers, setCustomers] = useState<Customer[]>([]);
    
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    function handleAddCustomer(data: Omit<Customer, "id" | "status">){
        const newCustomer: Customer = {
            ...data,
            id: crypto.randomUUID(),
            status: "Active"
        }

        setCustomers((prev) => [...prev, newCustomer])
    }

    function handleDeleteCustomer(id: string){
        setCustomers((prev) => prev.filter(e => e.id !== id))
    }

    function handleUpdateCustomer(updatedCustomer: Customer){
        setCustomers(e => e.map((customer) => customer.id === updatedCustomer.id
                    ? updatedCustomer : customer        
        ))
    }

    return(
        <DashboardLayout title="Customers">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Customers</h2>
                    <p className="mt-1 text-sm text-gray-500">Manage your customer information</p>
                </div>

                <CustomerForm onAdd={handleAddCustomer} />
                    
            </div>

            <CustomerTable customers={customers} onDelete={handleDeleteCustomer} onEdit={setSelectedCustomer} />

            <EditCustomerDialog customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} onUpdate={handleUpdateCustomer} />
        </DashboardLayout>
    )
}