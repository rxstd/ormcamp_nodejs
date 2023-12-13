var express = require("express");
var router = express.Router();
var dotenv = require("dotenv");

var userMiddleware = require("../middleware/user.middleware");
var chatStore = require("../store/chat.store");

dotenv.config();

const webTitle = process.env.PROJECT_TITLE;

// -routes\channelAPI.js - 채널/채팅 정보 관리 RESTful API 라우팅 기능 제공
// http://localhost:3001/api/channel
// ㄴrouter.get('/all') : 전체 채널 목록 데이터 조회
// ㄴrouter.post('/create') : 신규 채널정보 데이터 등록처리
// ㄴrouter.post('/modify): 기존 채널정보 데이터 수정처리
// ㄴrouter.post('/delete'),기존 채널정보 데이터 삭제처리
// ㄴrouter.get('/:cid') : 단일 채널정보 데이터 조회

// 전체 채널 목록 데이터 조회
router.get("/all", userMiddleware, function (req, res, next) {
  const channelList = chatStore.getChannels();
  try {
    res.json({ message: "채널 목록 조회에 성공했습니다.", data: channelList });
  } catch (error) {
    res.json({ message: "채널 목록 조회에 실패했습니다.", data: {} });
  }
});

// 신규 채널정보 데이터 등록처리
// 아래는 채널 스키마
// channel_id
// community_id
// channel_code
// channel_name
// channel_img_path
// channel_desc
// channel_state_code
// reg_date
// reg_member_id
// edit_date
// edit_member_id

router.post("/create", userMiddleware, function (req, res, next) {
  const community_id = req.body.community_id;
  const channel_code = req.body.channel_code;
  const channel_name = req.body.channel_name;
  const channel_img_path = req.body.channel_img_path;
  const channel_desc = req.body.channel_desc;
  const channel_state_code = req.body.channel_state_code;
  const reg_member_id = req.body.reg_member_id;
  const edit_member_id = req.body.edit_member_id;

  const channel = chatStore.createChannel(
    community_id,
    channel_code,
    channel_name,
    channel_img_path,
    channel_desc,
    channel_state_code,
    reg_member_id,
    edit_member_id
  );

  if (channel) {
    res.json({ message: "채널정보 등록에 성공했습니다.", data: channel });
  } else {
    res.json({ message: "채널정보 등록에 실패했습니다.", data: {} });
  }
});

// 기존 채널정보 데이터 수정처리
router.post("/modify", userMiddleware, function (req, res, next) {
  const channel_id = req.body.channel_id;
  const community_id = req.body.community_id;
  const channel_code = req.body.channel_code;
  const channel_name = req.body.channel_name;
  const channel_img_path = req.body.channel_img_path;
  const channel_desc = req.body.channel_desc;
  const channel_state_code = req.body.channel_state_code;
  const edit_member_id = req.body.edit_member_id;

  const channel = chatStore.updateChannel(
    channel_id,
    community_id,
    channel_code,
    channel_name,
    channel_img_path,
    channel_desc,
    channel_state_code,
    edit_member_id
  );

  if (channel) {
    res.json({ message: "채널정보 수정에 성공했습니다.", data: channel });
  } else {
    res.json({ message: "채널정보 수정에 실패했습니다.", data: {} });
  }
});

// 기존 채널정보 데이터 삭제처리
router.post("/delete", userMiddleware, function (req, res, next) {
  const channel_id = req.body.channel_id;

  const channel = chatStore.deleteChannel(channel_id);

  if (channel) {
    res.json({ message: "채널정보 삭제에 성공했습니다.", data: channel });
  } else {
    res.json({ message: "채널정보 삭제에 실패했습니다.", data: {} });
  }
});

router.get("/:cid", userMiddleware, function (req, res, next) {
  const channel_id = req.params.cid;

  const channel = chatStore.getChannelById(channel_id);

  if (channel) {
    res.json({ message: "채널 조회에 성공했습니다.", data: channel });
  } else {
    res.json({
      message: "채널 조회에 실패했습니다. 올바른 채널인지 확인하십시오.",
      data: {},
    });
  }
});

module.exports = router;
