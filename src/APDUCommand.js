'use strict'
const COMMAND = {
  MOI: [0x00, 0xA4, 0x04, 0x00, 0x08, 0xA0, 0x00, 0x00, 0x00, 0x54, 0x48, 0x00, 0x01],
  GET: {
    RESPONSE: [0x00, 0xC0, 0x00, 0x00],
    CID: [0x80, 0xb0, 0x00, 0x04, 0x02, 0x00, 0x0d],
    TH_FULLNAME: [0x80, 0xB0, 0x00, 0x11, 0x02, 0x00, 0x64],
    EN_FULLNAME: [0x80, 0xB0, 0x00, 0x75, 0x02, 0x00, 0x64],
    BOD: [0x80, 0xB0, 0x00, 0xD9, 0x02, 0x00, 0x08],
    GENDER: [0x80, 0xB0, 0x00, 0xE1, 0x02, 0x00, 0x01],
    ISSUER: [0x80, 0xB0, 0x00, 0xF6, 0x02, 0x00, 0x64],
    ADDRESS: [0x80, 0xB0, 0x15, 0x79, 0x02, 0x00, 0x64],
    ISSUE_DATE: [0x80, 0xB0, 0x01, 0x67, 0x02, 0x00, 0x08],
    EXPIRE_DATE: [0x80, 0xB0, 0x01, 0x6F, 0x02, 0x00, 0x08],
  },
}

module.exports = COMMAND