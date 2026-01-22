import { NextResponse } from 'next/server';

// Function to get Thailand time (UTC+7)
function getThailandTime() {
  const now = new Date();
  
  // Format as: YYYY-MM-DD HH:mm:ss (Thailand time)
  // Using Intl.DateTimeFormat to get Thailand timezone
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  const parts = formatter.formatToParts(now);
  const year = parts.find(p => p.type === 'year').value;
  const month = parts.find(p => p.type === 'month').value;
  const day = parts.find(p => p.type === 'day').value;
  const hour = parts.find(p => p.type === 'hour').value;
  const minute = parts.find(p => p.type === 'minute').value;
  const second = parts.find(p => p.type === 'second').value;
  
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['firstName', 'contact'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Get Google Apps Script URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: getThailandTime(),
      firstName: body.firstName || '',
      contact: body.contact || '',
      projectGoal: body.projectGoal || '',
      budget: body.budget || '',
      timeline: body.timeline || '',
      requirementClarity: body.requirementClarity || '',
      decisionMaker: body.decisionMaker || '',
      threeMonthGoal: body.threeMonthGoal || '',
    };

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Script Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to submit data to Google Sheets' },
        { status: 500 }
      );
    }

    const result = await response.json();
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Data submitted successfully',
        data: result 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

