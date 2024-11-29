module.exports = {
  root: true,
  env: {
    es2023: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'], // Đường dẫn đến thư mục gốc
        ],
        extensions: ['.js', '.json'], // Các phần mở rộng file
      },
    },
  },
  plugins: [
    'import', // Thêm plugin import vào danh sách
  ],
  rules: {
    'import/no-unresolved': 'error', // Kiểm tra import
    'no-underscore-dangle': 0,
    // 'no-param-reassign': 0,
    // 'no-return-assign': 0,
    // camelcase: 0,
    'no-return-await': 'off', // Tắt quy tắc return cau lenh await
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Cảnh báo cho các biến không sử dụng, nhưng cho phép biến với dấu gạch dưới
  },
}
