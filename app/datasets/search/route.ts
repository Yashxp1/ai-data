import { NextRequest, NextResponse } from 'next/server';
import { searchDatasets, getAllDatasets } from '@/data';

export async function POST(request: NextRequest) {
  try {
    let query = '';

    try {
      const body = await request.json();
      query = body?.query || body?.q || '';
    } catch {
      query = request.nextUrl.searchParams.get('q') || request.nextUrl.searchParams.get('query') || '';
    }

    const trimmedQuery = typeof query === 'string' ? query.trim() : '';
    const results = trimmedQuery ? searchDatasets(trimmedQuery) : getAllDatasets();

    return NextResponse.json({
      query: trimmedQuery,
      count: results.length,
      results
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to search datasets', details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get('q') || request.nextUrl.searchParams.get('query') || '';
    const trimmedQuery = query.trim();
    const results = trimmedQuery ? searchDatasets(trimmedQuery) : getAllDatasets();

    return NextResponse.json({
      query: trimmedQuery,
      count: results.length,
      results
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to search datasets', details: String(error) },
      { status: 500 }
    );
  }
}
