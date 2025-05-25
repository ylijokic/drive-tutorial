import { mockFiles, mockFolders } from "~/lib/mock-data";
import { db } from "~/server/db";
import { files_table, folders_table } from "~/server/db/schema";

export default function SandBoxPage() {
    return (
        <div className="flex flex-col gap-4">
            Seed Function
            <form
                action={async () => {
                    "use server";

                    try {
                        const folderInsert = await db.insert(folders_table).values(
                            mockFolders.map((folder, idx) => ({
                                id: idx + 1,
                                name: folder.name,
                                parent: idx !== 0 ? 1 : null
                            }))
                        );

                        const fileInsert = await db.insert(files_table).values(
                            mockFiles.map((file, idx) => ({
                                id: idx + 1,
                                name: file.name,
                                size: 50000,
                                url: file.url,
                                parent: (idx % 3) + 1
                            }))
                        );

                        console.log(folderInsert);
                        console.log(fileInsert);
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                <button type="submit">Seed</button>
            </form>
        </div>
    );
};
