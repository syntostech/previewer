// TwitterPreview.js
import { ArrowLeft, Users, Link, Calendar } from 'lucide-react';
import VerifiedBadge from './VerifiedBadge';

const TwitterPreview = ({ profileData, profileImage, bannerImage }) => (
  <div className="twitter-profile">
    <div className="twitter-header">
      <div className="flex items-center space-x-4">
        <ArrowLeft className="text-gray-400" />
        <div>
          <div className="font-bold flex items-center">
            {profileData.displayName}
            {profileData.isVerified && <VerifiedBadge />}
          </div>
          <div className="text-gray-500">{profileData.posts} posts</div>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="twitter-banner">
        {bannerImage && (
          <img 
            src={bannerImage} 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="twitter-avatar">
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Users size={40} className="text-gray-400" />
          </div>
        )}
      </div>
      <div className="h-20" />
    </div>

    <div className="p-4 space-y-4">
      <div>
        <div className="font-bold flex items-center">
          {profileData.displayName}
          {profileData.isVerified && <VerifiedBadge />}
        </div>
        <div className="text-gray-500">@{profileData.username}</div>
      </div>

      <div className="bio-section">{profileData.bio}</div>

      <div className="flex items-center space-x-4 text-gray-500">
        {profileData.website && (
          <div className="flex items-center space-x-1">
            <Link size={16} />
            <span>{profileData.website}</span>
          </div>
        )}
        <div className="flex items-center space-x-1">
          <Calendar size={16} />
          <span>Joined {profileData.joinedDate}</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <div>
          <span className="font-bold">{profileData.following}</span>
          <span className="text-gray-500"> Following</span>
        </div>
        <div>
          <span className="font-bold">{profileData.followers}</span>
          <span className="text-gray-500"> Followers</span>
        </div>
      </div>
    </div>
  </div>
);

export default TwitterPreview;
