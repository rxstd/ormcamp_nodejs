const db = require("../models/index");

async function updateLatestChat() {
  // 모든 channelDB를 순회하면서
  // channel_id에 해당하는 channelMsgDB를 가져와서
  // channelMsgDB의 마지막 메시지를 가져와서
  // channelDB의 latest_chat에 저장한다.

  const channelList = await db.Channel.findAll({});

  const channelMsgList = await db.ChannelMsg.findAll({});

  channelList.forEach(async (channel) => {
    let latestMessage = getLatestChat(channel.channel_id);

    await db.Channel.update(
      { latest_chat: latestMessage.message },
      { where: { channel_id: channel.channel_id } }
    );
  });
}

async function getLatestChat(channel_id) {
  let latestMsg = await db.ChannelMsg.findAll({
    offset: 0,
    limit: 1,
    where: {
      channel_id: channel_id,
    },
    order: [["channel_msg_id", "DESC"]],
  });

  return latestMsg;
}

updateLatestChat();

async function getChannels() {
  let channelList = await db.Channel.findAll({});

  return channelList;
}

async function getChannelById(id) {
  id = Number(id);

  let channel = await db.Channel.findOne({
    where: {
      channel_id: id,
    },
  });

  return channel;
}

async function updateChannel(channel) {
  await db.Channel.update(channel, {
    where: {
      channel_id: channel.channel_id,
    },
  });
}

async function addChannel(channel) {
  let newChannel = {};

  newChannel.community_id = channel.community_id;
  newChannel.channel_code = channel.channel_code;
  newChannel.channel_name = channel.channel_name;
  newChannel.channel_img_path = channel.channel_img_path;
  newChannel.channel_desc = channel.channel_desc;
  newChannel.channel_state_code = channel.channel_state_code;
  newChannel.reg_date = channel.reg_date;
  newChannel.reg_member_id = channel.reg_member_id;
  newChannel.edit_date = channel.edit_date;
  newChannel.edit_member_id = channel.edit_member_id;

  await db.Channel.create(newChannel);

  return newChannel;
}

async function deleteChannel(id) {
  id = Number(id);
  //삭제하기

  let result = await db.Channel.destroy({
    where: {
      channel_id: id,
    },
  });

  return result;
}

async function getChatMembersbyChannelId(id) {
  await db.ChannelMember.findAll({
    where: {
      channel_id: id,
    },
  });

  return channelMemberList;
}

async function getMessagesbyChannelId(id) {
  let chats = await db.ChannelMsg.findAll({
    where: {
      channel_id: id,
    },
  });

  return chats;
}

async function sendChat(channel_id, member_id, nick_name, message) {
  let newChat = {};

  newChat.channel_id = channel_id;
  newChat.member_id = member_id;
  newChat.nick_name = nick_name;
  newChat.msg_type_code = 3;
  newChat.connection_id = "connection1";
  newChat.message = message;
  newChat.ip_address = "1.1.1.1";
  newChat.top_channel_msg_id = 1;
  newChat.msg_state_code = 1;
  newChat.msg_date = new Date().toLocaleString();
  newChat.edit_date = newChat.msg_date;
  newChat.del_date = newChat.msg_date;

  let newChatRow = await db.ChannelMsg.create(newChat);

  updateLatestChat();

  const channelInfo = getChannelById(channel_id);
  const channelMsgs = getMessagesbyChannelId(channel_id);

  const retData = {
    message: "채널 메시지 조회에 성공했습니다.",
    data: {
      channel: channelInfo,
      chats: channelMsgs,
    },
  };

  return retData;
}

module.exports = {
  getChannels,
  getChannelById,
  updateChannel,
  addChannel,
  deleteChannel,
  getChatMembersbyChannelId,
  getMessagesbyChannelId,
  sendChat,
};
