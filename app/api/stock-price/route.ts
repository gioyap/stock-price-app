import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');

  if (!symbol) {
    return NextResponse.json({ error: 'Stock symbol is required' }, { status: 400 });
  }

  try {
    const apiKey = process.env.FINHUB_KEY;
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`);
    const data = await response.json();

    if (data.c) {
      return NextResponse.json({ price: data.c });
    } else {
      return NextResponse.json({ error: 'Stock symbol not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stock price' }, { status: 500 });
  }
}
