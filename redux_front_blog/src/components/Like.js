import React from "react";
import { useDispatch } from "react-redux";
import { addPostLike } from "../actions/post.action";
import { useSelector } from "react-redux";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      likes: post.likes + 1,
      id: post.id,
      content: post.content,
    };

    const userData = {
      pseudo: user.pseudo,
      age: user.age,
      likes: user.likes + 1,
      id: user.id,
    };
    dispatch(addPostLike(postData));
    dispatch(addUserLike(userData));
  };
  return (
    <div>
      <img
        onClick={() => handleLike()}
        src="./icons/clap.png"
        className="clap"
        alt="clap"
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
