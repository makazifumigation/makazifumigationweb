import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const payload = await request.json();

    if (!payload?.name || !payload?.email || !payload?.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a production environment, send this payload to your CRM, email service,
    // or ticketing tool. For now, we simply log it for visibility.
    console.info(
      'Makazi contact enquiry received:',
      JSON.stringify(payload, null, 2)
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to process contact form submission', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

