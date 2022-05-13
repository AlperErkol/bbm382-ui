import React, { useState, useEffect } from "react";
import { Badge } from "antd";

import getElapsedTime from "../utils/Time";
import FlowItemDropdownMenu from "../components/FlowItemDropdownMenu";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import { Dropdown, Space } from "antd";
import { Form, Button, Input } from "antd";

import CommentService from "../services/CommentService";

import Spinner from "./Spinner";
import getLoggedInUserId from "../utils/Authentication";

import ApplyModal from "../components/modals/ApplyModal";

import trimAndFixPostType from "../utils/Ribbon";

import UserService from "../services/UserService";

const { TextArea } = Input;
const { Panel } = Collapse;

const FlowItem = ({ callback, postData }) => {
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState();
  const [userByComment, setUserByComment] = useState();
  const [isApplyModalVisible, setIsApplyModalVisible] = useState(false);
  const [owner, setOwner] = useState();
  const [commentArea, setCommentArea] = useState(false);

  useEffect(() => {
    getUser();
    getComments();
  }, []);

  const getUser = () => {
    UserService.findByUserId(postData.owner)
      .then((response) => {
        setOwner(response.data);
      })
      .catch((error) => console.error(error));
  };

  const getUserByComment = (userId) => {
    UserService.findByUserId(userId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getComments = () => {
    setLoading(true);
    CommentService.findCommentByPostId(postData.postId)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const onFinish = (values) => {
    setSubmitting(true);
    values.belongsTo = postData.postId;
    values.owner = getLoggedInUserId();
    console.log(values);
    CommentService.saveComment(values)
      .then((response) => {
        if (response.status === 200) {
          setSubmitting(false);
          getComments();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openApplyModal = (_) => {
    setIsApplyModalVisible(true);
  };

  const hideApplyModal = (_) => {
    setIsApplyModalVisible(false);
  };

  const openCommentArea = () => {
    setCommentArea(!commentArea);
  };

  return (
    <Badge.Ribbon text={trimAndFixPostType(postData.postType)} placement="end">
      <div key={postData.postId} className="flow-item">
        <div className="flow-item-header flex items-center justify-between pb-2 mb-4">
          <div className="flex">
            <div className="profile-photo mr-2"></div>
            <div className="information flex flex-col justify-center h-12">
              <span className="text-xs font-bold">
                {owner && owner.firstName + " " + owner.lastName}
              </span>
              {postData.position && (
                <span className="text-xs font-bold">{postData.position}</span>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {getLoggedInUserId() == postData.owner && (
              <Dropdown
                className="cursor-pointer"
                trigger={["click"]}
                overlay={
                  <FlowItemDropdownMenu
                    callback={callback}
                    postData={postData}
                  />
                }
              >
                <Space>
                  <BiDotsHorizontalRounded size={24} />
                </Space>
              </Dropdown>
            )}
            {postData.canApply && (
              <button onClick={openApplyModal} className="apply-button">
                apply now!
              </button>
            )}
          </div>
        </div>
        <div className="flow-item-body">
          <div className="flex items-center mb-2">
            {postData.postTitle && <span>{postData.postTitle}</span>}
          </div>

          <p className="max-w-xl text-sm font-semibold">
            {postData.postContent}
          </p>
          <div className="numbers flex items-center justify-between mb-1">
            <span
              onClick={openCommentArea}
              className="text-xs font-bold cursor-pointer"
            >
              Reply
            </span>
            <span className="text-xs text-muted font-bold">
              {getElapsedTime(postData.creationDate)}
            </span>
          </div>
        </div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="Show All Comments"
            key="1"
            className="site-collapse-custom-panel"
          >
            <ul className="comments mt-4">
              {loading && <Spinner />}
              {comments &&
                comments.map((comment) => (
                  <li className="comments-item flex">
                    <div className="profile-photo-comment mr-2"></div>
                    <div className="flex flex-col bg-primary w-full p-1">
                      <div className="flex justify-between">
                        <span className="font-bold">Alper Erkol</span>
                        <span className="text-muted text-xs">
                          {getElapsedTime(comment.creationDate)}
                        </span>
                      </div>
                      <p className="font-semibold comment-content">
                        {comment.commentContent}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </Panel>
        </Collapse>
        <div
          className={
            commentArea
              ? "flow-item-footer my-3 active flex"
              : "flow-item-footer flex"
          }
        >
          <div className="profile-photo-comment mr-2"></div>
          <Form className="w-full" layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="commentContent"
              rules={[
                { min: 3, message: "Comment must be minimum 3 characters." },
                { required: true, message: "Please enter a valid comment!" },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button
                className="comment-btn"
                htmlType="submit"
                loading={submitting}
                type="primary"
              >
                Add Comment
              </Button>
            </Form.Item>
          </Form>
        </div>
        <ApplyModal isVisible={isApplyModalVisible} isHide={hideApplyModal} />
      </div>
    </Badge.Ribbon>
  );
};

export default FlowItem;
