import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query userProfileAndRanking($username: String!) {
            userContestRanking(username: $username) {
              rating
            }
          }
        `,
        variables: { username }
      }),
      // Add timeout and cache control
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`LeetCode API returned ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    });
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return NextResponse.json({ error: 'Failed to fetch LeetCode data' }, { status: 500 });
  }
}
