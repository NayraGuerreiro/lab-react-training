import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h3> Button</h3>
      <button onClick={handleLikes} className="button">
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
