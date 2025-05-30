import { Folder as FolderIcon } from "lucide-react";
import Link from "next/link";

import type { folders_table } from "~/server/db/schema";

const FolderRow = (
    props: { 
        folder: typeof folders_table.$inferSelect;
    }
) => {
    const { folder } = props;
    
    return (
        <li key={folder.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 flex items-center">
                    <Link
                        href={`/f/${folder.id}`}
                        className="flex items-center text-gray-100 hover:text-blue-400"
                        >
                        <FolderIcon className="mr-3" size={20} />
                        {folder.name}
                    </Link>
                </div>
                <div className="col-span-3 text-gray-400">Folder</div>
                <div className="col-span-3 text-gray-400">--</div>
            </div>
        </li>
    );
};

export default FolderRow;
