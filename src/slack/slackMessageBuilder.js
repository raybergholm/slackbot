const Section = (...children) => Object.assign({}, { "type": "section", ...children})
const Divider = () => ({ "type": "divider" })


module.exports = {
  Section,
  Divider
}