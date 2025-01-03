// InstagramPreview.js
import { Users, Link } from 'lucide-react';

const InstagramPreview = ({ profileData, profileImage }) => (
  <div className="instagram-profile">
    <div className="instagram-header">
      <div className="instagram-avatar">
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Users size={24} className="text-gray-400" />
          </div>
        )}
      </div>
      <div>
        <div className="font-bold">{profileData.username}</div>
        <div>{profileData.displayName}</div>
      </div>
    </div>

    <div className="stats-section">
      <div className="text-center">
        <div className="font-bold">{profileData.posts}</div>
        <div className="text-sm">posts</div>
      </div>
      <div className="text-center">
        <div className="font-bold">{profileData.followers}</div>
        <div className="text-sm">followers</div>
      </div>
      <div className="text-center">
        <div className="font-bold">{profileData.following}</div>
        <div className="text-sm">following</div>
      </div>
    </div>

    <div className="space-y-2">
      <div className="bio-section">{profileData.bio}</div>
      <div className="link-section">
        <Link size={16} />
        <span>{profileData.website}</span>
      </div>
    </div>
  </div>
);

export default InstagramPreview;
