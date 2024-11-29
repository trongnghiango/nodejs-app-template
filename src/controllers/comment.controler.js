class CommentController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */
  // eslint-disable-next-line class-methods-use-this
  async create(req, res, next) {
    return res.json({ metadata: {} })
  }
}

module.exports = new CommentController()
