import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_PROJECT_ID);

export const databases = new Databases(client);

export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;