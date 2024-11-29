/**
 * Hàm xử lý lỗi cho các hàm async với kiểm tra kiểu lỗi.
 * @param {Promise<T>} promise - Promise mà bạn muốn xử lý.
 * @param {Array<new (...args: any[]) => Error>} errorTypes - Mảng các lớp lỗi cần kiểm tra.
 * @returns {Promise<[Error|null, T|null]>} - Mảng chứa lỗi (nếu có) và kết quả (nếu có).
 */
async function tryCatch(promise, errorTypes = []) {
  try {
    const result = await promise
    return [null, result] // Trả về null cho lỗi và kết quả
  } catch (error) {
    // Kiểm tra kiểu lỗi
    const isExpectedError = errorTypes.some((ErrorType) => error instanceof ErrorType)

    if (isExpectedError) {
      console.warn(`Caught expected error: ${error?.name}`)
    } else {
      console.error('Caught unexpected error:', error)
    }
    return [error] // Trả về lỗi và null cho kết quả
  }
}

module.exports = tryCatch
