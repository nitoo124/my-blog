"use client";
import { useState, useEffect } from "react";

interface Comment {
  id: number;
  name: string;
  text: string;
}

function Comment({ params }: any) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [newName, setNewName] = useState<string>("");

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Handle new comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && newName.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(), // Unique ID
        name: newName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setNewName("");
    }
  };

  // Handle comment deletion
  const handleDelete = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  // Handle comment editing
  const handleEdit = (id: number, newText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
  };

  return (
    <main className="mb-10 max-w-screen-xl mx-auto">
      {/* ...existing blog content */}

      {/* Comment Section */}
      <div className="px-3 max-w-screen-lg mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-5">Comments</h2>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-5">
          <input
            type="text"
            className="w-full p-3 mb-3 border rounded-md"
            placeholder="Your Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <textarea
            className="w-full p-3 border rounded-md"
            placeholder="Add your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white px-4 py-2 mt-3 rounded-md hover:bg-gray-400"
          >
            Submit
          </button>
        </form>

        {/* Comments List */}
        {comments.length > 0 ? (
          <div className="mt-5 space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 border rounded-md bg-gray-100 flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold">{comment.name}</p>
                  <p>{comment.text}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const newText = prompt(
                        "Edit your comment:",
                        comment.text
                      );
                      if (newText) handleEdit(comment.id, newText);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </main>
  );
}

export default Comment;
