import { FileIcon } from "lucide-react";

import type { files_table } from "~/server/db/schema";

const FileRow = (
    props: { file: typeof files_table.$inferSelect }
) => {
    const { file } = props;

    return (
        <li key={file.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 flex items-center">
                    <a 
                        href={file.url} 
                        className="flex items-center text-gray-100 hover:text-blue-400"
                        target="_blank"
                    >
                        <FileIcon className="mr-3" size={20} />
                        {file.name}
                    </a>
                </div>
                <div className="col-span-3 text-gray-400">File</div>
                <div className="col-span-3 text-gray-400">{file.size}</div>
            </div>
        </li>
    );
};

export default FileRow;
