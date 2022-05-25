module.exports = {
  types: [
    { value: 'feat', name: '功能:    增加新功能' },
    { value: 'fix', name: '修复:   修复问题/BUG' },
    { value: 'update', name: '更新:   更新一个功能' },
    { value: 'perf', name: '优化:   优化/性能提升' },
    { value: 'style', name: '样式:   变更的只有样式' },
    { value: 'docs', name: '文档:   变更的只有文档' },
    { value: 'test', name: '测试:    添加一个测试' },
    { value: 'refactor', name: '重构:  代码重构，注意和特性、修复区分开' },
    { value: 'build', name: '构建:   构建版本' },
    { value: 'ci', name: '更新:   更新一个功能' },
    { value: 'chore', name: '依赖:   依赖更新/脚手架配置修改等' },
    { value: 'revert', name: '回滚:    代码回退' },
    { value: 'wip', name: '开发:   开发中' },
    { value: 'workflow', name: '工作流:   工作流改进' },
    { value: 'types', name: '类型:   类型定义文件更改' },
    { value: 'release', name: '封板:   打标签封版本' },
  ],
  scopes: [{ name: '系统框架' }, { name: '公共组件' }],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },

  allowCustomScopes: true,
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 72,
};
