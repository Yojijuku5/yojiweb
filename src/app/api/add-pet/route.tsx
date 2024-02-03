import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    const postTitle = searchParams.get('postTitle');
    const postContent = searchParams.get('postContent');
    const postAuthor = searchParams.get('postAuthor');
    const publishDate = searchParams.get('publishDate');

    try {
        if (!postTitle || !postContent || !postAuthor) throw new Error ('Title and Author required');
        await sql`INSERT INTO Pets (Pet, Owner) VALUES (${postTitle}, ${postContent}, ${postAuthor});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500});
    }

    const pets = await sql`SELECT * FROM Pets;`;
    return NextResponse.json({ pets }, { status:200 })
}