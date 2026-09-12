import { NextRequest, NextResponse } from 'next/server';
import { getDatasetById } from '@/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const dataset = getDatasetById(id);

    if (!dataset) {
      return NextResponse.json(
        {
          error: 'Dataset not found',
          id,
          message: `No dataset exists with ID '${id}'`
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      dataset
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve dataset', details: String(error) },
      { status: 500 }
    );
  }
}
