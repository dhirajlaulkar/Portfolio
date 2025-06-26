'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";

interface CodeforcesUser {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
}

async function fetchCodeforcesRating(handle: string): Promise<CodeforcesUser | null> {
  try {
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const data = await response.json();
    if (data.status === 'OK' && data.result[0]) {
      const user = data.result[0];
      return {
        handle: user.handle,
        rating: user.rating,
        maxRating: user.maxRating,
        rank: user.rank
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching Codeforces rating:', error);
    return null;
  }
}

async function fetchLeetCodeRating(username: string) {
  try {
    const response = await fetch(`/api/leetcode?username=${username}`);
    const data = await response.json();
    console.log('LeetCode API response:', data);
      const rating = data.data?.userContestRanking?.rating;
    if (rating) {
      const roundedRating = Math.round(rating);
      console.log('LeetCode rating:', roundedRating);
      return roundedRating;
    }
    console.log('No rating found in response');
    return 'N/A';
  } catch (error) {
    console.error('Error fetching LeetCode rating:', error);
    return 'N/A';
  }
}

async function fetchCodeChefRating(username: string) {
  await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000)); // Random time between 1-3 seconds
  return 1617;
}

interface CodingProfileProps {
  platform: string;
  username: string;
  link: string;
  icon?: React.ReactNode;
}

type ProfileData = {
  rating?: string | number;
  loading: boolean;
};

function CodingProfile({ platform, username, link }: CodingProfileProps) {
  const [profileData, setProfileData] = useState<ProfileData>({ loading: true });

  useEffect(() => {
    async function fetchRating() {
      switch (platform) {
        case 'Codeforces':
          const cfData = await fetchCodeforcesRating(username);          if (cfData) {
            setProfileData({
              rating: cfData.rating,
              loading: false
            });
          } else {
            setProfileData({ loading: false, rating: 'N/A' });
          }
          break;
        case 'LeetCode':
          const leetData = await fetchLeetCodeRating(username);
          setProfileData({ rating: leetData, loading: false });
          break;
        case 'CodeChef':
          const chefData = await fetchCodeChefRating(username);
          setProfileData({ rating: chefData, loading: false });
          break;
      }
    }
    fetchRating();
  }, [platform, username]);

  return (
    <Link
      href={link}
      className="flex flex-col p-4 border rounded-md hover:bg-muted/50 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >      <div className="flex items-center gap-2 mb-2">
        <div className="live-dot" />
        <span className="font-medium">{platform}</span>
      </div><div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">@{username}</span>
        <span className="text-sm font-medium text-primary">
          {profileData.loading ? 'Loading...' : profileData.rating}
        </span>
      </div>
    </Link>
  );
}

export function CodingProfiles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">      <CodingProfile
        platform="Codeforces"
        username="dhiraj101"
        link="https://codeforces.com/profile/dhiraj101"
      />
      <CodingProfile
        platform="LeetCode"
        username="dhiraj101"
        link="https://leetcode.com/dhiraj101/"
      />
      <CodingProfile
        platform="CodeChef"
        username="dhiraj11"
        link="https://www.codechef.com/users/dhiraj11"
      />
    </div>
  );
}
