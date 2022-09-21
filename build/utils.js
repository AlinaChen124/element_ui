// byte转gb
exports.b2gb = b => b / ( 1024 * 1024 * 1024 );
// 百分比
exports.n2pn = (a,b) => (a * 100) / b;