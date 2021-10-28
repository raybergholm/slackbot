const superagent = require("superagent")

class SlackWebhooks {
  constructor(endpoints) {
    // this.SLACK_API_KEY = slackApiKey
    this.ENDPOINTS = endpoints // expects an object for key:value pairing in the format endpointName:slackWebhookUrl
  }

  getWebhookUrl(endpointName) {
    if (endpointName in this.ENDPOINTS) {
      return this.ENDPOINTS[endpointName]
    } else {
      throw new Error (`${endpointName} not in endpoints mapping: ${this.ENDPOINTS}`)
    }
  }

  async send(endpoint, payload) {
    const webhookUrl = this.getWebhookUrl(endpoint)
    return superagent
      .post(webhookUrl)
      .send(payload)
      .set({
        "Content-Type": "application/json"
      })
  }

  sendSlackMessage = async (slackPayload) => {
    const webhook = process.env.SLACK_WEBHOOK
    return superagent
      .post(webhook)
      .send(slackPayload)
      .set({
        "Content-Type": "application/json"
      })
  }
}

module.exports = SlackWebhooks

