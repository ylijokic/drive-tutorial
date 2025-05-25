import { eq } from "drizzle-orm";

import { db } from "~/server/db";
import { files_table, folders_table } from "~/server/db/schema";
import DriveContents from "../../DriveContents.tsx";

export default async function GoogleDriveClone(props: {
    params: Promise<{ folderId: string}>
}) {
    const params = await props.params;

    const parsedFolderId = parseInt(params.folderId);
    if(isNaN(parsedFolderId)) {
        return <div>Invalid Folder Id</div>
    }

    const files = await db
        .select()
        .from(files_table)
        .where(eq(files_table.parent, parsedFolderId));

    const folders = await db
        .select()
        .from(folders_table)
        .where(eq(folders_table.parent, parsedFolderId));

    return (
        <DriveContents files={files} folders={folders} />
    );
}
