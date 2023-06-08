const utils = require('./utils')

const issue = async ({ claimset, key }) => {
  return { jwt: await utils.sign(claimset, key) }
}

const verify = async ({ jwt }) => {
  return utils.verify(jwt)
}

const credential = {
  issue,
  verify,
  uri: utils.dataUri,
}

module.exports = credential
