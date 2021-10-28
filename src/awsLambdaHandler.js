
const generateHttpResponse = (statusCode, payload) => ({
  isBase64Encoded: false,
  statusCode,
  body: typeof payload === "string" ? payload : JSON.stringify(payload)
})

const handler = async (event) => {

  // Always return an empty 200 response back to the sender to signify an OK. Slack payloads are handled in relevant methods!
  return generateHttpResponse(200)
}

exports.handler = handler
