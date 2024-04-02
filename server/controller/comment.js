const User = require("../models/user.model");
const Place = require("../models/place.model");
const Comment = require("../models/comment.model");

const asyncHandler = require("express-async-handler");

const createComment = asyncHandler(async (req, res) => {
  const { placeId, body, authorId } = req.body;
  // Tìm bài viết với postId tương ứng
  const place = await Place.findById(placeId);
  const user = await User.findById(authorId);
  if (!place) {
    return res
      .status(404)
      .json({ success: false, message: "Không tìm thấy bài viết" });
  }
  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "Không tìm thấy user" });
  }
  // Tạo comment
  const response = await Comment.create(req.body);
  if (response) {
    const placeId = response.placeId;
    const commentId = response._id;
    const updatePlace = await Place.findByIdAndUpdate(
      placeId,
      {
        $push: { comments: commentId },
      },
      { new: true }
    );
    return res.status(200).json({
      success: response ? true : false,
      comment: response ? response : "Cannot create new comment",
    });
  }

  // Tạo một đối tượng comment mới
  //   const comment = {

  //   };
  //   // Thêm comment vào mảng comments của post
  //   post.comments.push(comment);

  //   // Lưu lại bài viết đã được cập nhật với comment mới
  //   await post.save();

  //   return res.status(201).json({ success: true, comment });
});

module.exports = {
  createComment,
};
