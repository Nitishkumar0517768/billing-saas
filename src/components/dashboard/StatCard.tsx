

type StatCardProps = {
    title: string,
    value: string,
    description: string
}


export default function StatCard({title, value, description}: StatCardProps){
    return(
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{title}</p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">{value}</h2>

            <p className="mt-2 text-xs text-gray-500">{description}</p>
        </div>
    )
}