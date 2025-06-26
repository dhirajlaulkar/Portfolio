import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({        query: `
          query userProfileAndRanking($username: String!) {
            userContestRanking(username: $username) {
              rating
            }
          }
        `,
        variables: { username }
      })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return NextResponse.json({ error: 'Failed to fetch LeetCode data' }, { status: 500 });
  }
}
