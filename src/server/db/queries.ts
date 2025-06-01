import "server-only";

import { eq } from "drizzle-orm";

import { db } from ".";
import { files_table, folders_table } from "./schema";

export const QUERIES = {
    getAllParents: async (folderId: number) => {
        const parents = [];
        let currentId: number | null = folderId;

        while(currentId !== null) {
            const folder = await db
                .selectDistinct()
                .from(folders_table)
                .where(eq(folders_table.id, currentId));

            if(!folder[0]) {
                throw new Error('Parent folder not found!');
            }

            parents.unshift(folder[0]);
            currentId = folder[0].parent;
        }

        return parents;
    },
    getFiles: async (parsedFolderId: number) => {
        return db
            .select()
            .from(files_table)
            .where(eq(files_table.parent, parsedFolderId));
    },
    getFolders: (parsedFolderId: number) => {
        return db
            .select()
            .from(folders_table)
            .where(eq(folders_table.parent, parsedFolderId));
    }
};