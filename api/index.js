module.exports = (req, res) => {
  try {
    // 1. 获取钉钉回调数据
    const data = req.body;
    
    // 2. 提取群聊ID（根据钉钉回调格式调整）
    const conversationId = data.conversationId || 
                         (data.chatbotCorpId + '$' + data.conversationId) || 
                         "未获取到ID";
    
    // 3. 返回机器人响应
    res.status(200).json({
      msgtype: "text",
      text: {
        content: `本群的openConversationId是: ${conversationId}`
      }
    });
  } catch (error) {
    res.status(500).json({ error: "服务器错误" });
  }
};
