import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    console.error("Auth Error: No code received from Shopify");
    return NextResponse.json({ error: 'No code found' }, { status: 400 });
  }

  const shopDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_SHOPIFY_CLIENT_ID;

  try {
    const discovery = await fetch(`https://${shopDomain}/.well-known/openid-configuration`, {
      headers: { 'Bypass-Tunnel-Reminder': 'true' }
    });
    const config = await discovery.json();

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId!,
      redirect_uri: 'https://animal-cytoplasm-showing.ngrok-free.dev/api/auth/callback',
      code: code,
    });

    const response = await fetch(config.token_endpoint, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Bypass-Tunnel-Reminder': 'true'
      },
      body,
      signal: AbortSignal.timeout(30000),
    });

    const tokenData = await response.json();

    if (!response.ok) {
      console.log("--- Shopify Token Exchange Failed ---");
      console.log("Status:", response.status);
      console.log("Error Response:", tokenData);
      return NextResponse.json(tokenData, { status: response.status });
    }

    console.log("Token received successfully");

    // Yahan redirect link ko /personal-area se badal kar /login kar diya gaya hai
    const redirectUrl = `https://animal-cytoplasm-showing.ngrok-free.dev/login?token=${tokenData.access_token}`;
    const res = NextResponse.redirect(redirectUrl);
    
    res.cookies.set('customer_token', tokenData.access_token, { 
      httpOnly: false,
      secure: true, 
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 
    });
    
    return res;

  } catch (error: any) {
    if (error.name === 'TimeoutError') {
      return NextResponse.json({ error: 'Request Timeout' }, { status: 408 });
    }
    console.error("Network or Parsing Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}