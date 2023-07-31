import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type ListItemProps = {
    post: BlogPost
}

export default function ListItem({ post: { id, title, date } }: ListItemProps) {
    const formattedDate = getFormattedDate(date)
    return (
        <li className='mt-4 text-2xl dark:text-white/90' >
            <Link 
                className='text-white hover:text-slate-300'
                href={`posts/${id}`}
            >
                {title}
            </Link>
            <br />
            <p className='text-sm mt-1'>{formattedDate}</p>
        </li>
    )
}