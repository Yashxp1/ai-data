import { NextRequest, NextResponse } from 'next/server';
import { getAllDatasets, searchDatasets } from '@/data';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q') || searchParams.get('query');

    if (query && query.trim()) {
      const results = searchDatasets(query);
      return NextResponse.json({
        query: query.trim(),
        count: results.length,
        datasets: results,
      });
    }

    const datasets = getAllDatasets();
    return NextResponse.json({
      count: datasets.length,
      datasets,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve datasets', details: String(error) },
      { status: 500 }
    );
  }
}
