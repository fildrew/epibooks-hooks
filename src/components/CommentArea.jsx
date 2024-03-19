import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZmVkNDcxYWZhZjAwMTkxNTY2YmQiLCJpYXQiOjE3MTA3NzA0MzQsImV4cCI6MTcxMTk4MDAzNH0.LcqS5fglt4Q-c91rnt-HfKnqlbQsHlEeU3fcrZZgXjo",
            },
          }
        );
        if (response.ok) {
          const comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;