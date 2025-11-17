import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL('https://medium.com/feed/@alex.zgz');

        const items = feed.items.map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            releaseDate: item.isoDate || item.pubDate,
            content: item['content:encoded'],
            categories: item.categories,
            author: item.creator,
        }));

        return NextResponse.json({
            title: feed.title,
            description: feed.description,
            url: feed.link,
            items,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to fetch Medium posts' },
            { status: 500 }
        );
    }
}
